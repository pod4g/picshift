# How We Built a Browser-Based Image Converter with WebAssembly Encoders

> PicShift converts images entirely in the browser — no uploads, no servers. Under the hood, it uses professional-grade C/C++/Rust encoders compiled to WebAssembly, a dynamic Worker Pool, and careful memory management to deliver near-native performance. This article walks through every optimization, with code from the actual source.

**Live demo:** [picshift.app](https://picshift.app)

---

## The Core Idea: Replace Canvas Encoding with WASM

Browsers ship a built-in image encoder via `OffscreenCanvas.convertToBlob()`. It works, but it's a black box — you can't control the compression algorithm, and the output quality-to-size ratio is mediocre.

PicShift's strategy: **use professional-grade WASM encoders as the primary path, and fall back to native Canvas encoding only when WASM fails.**

Every WASM encoder follows a **lazy-load singleton** pattern: the first call triggers a dynamic `import()` for the JS glue code, then `fetch()` + `WebAssembly.compile()` for the `.wasm` binary. Subsequent calls reuse the already-initialized instance.

```typescript
// JPEG encoder example (convert-worker.ts)
let jpegInit: Promise<void> | null = null;

async function wasmEncodeJpeg(
  imageData: ImageData,
  quality: number,
): Promise<Blob | null> {
  const { init, default: encode } = await import('@jsquash/jpeg/encode');
  if (!jpegInit) {
    jpegInit = (async () => {
      const buf = await fetch('/wasm/mozjpeg_enc.wasm')
        .then(r => r.arrayBuffer());
      const mod = await WebAssembly.compile(buf);
      await init(mod);
    })();
  }
  await jpegInit;
  const buffer = await encode(imageData, { quality });
  return new Blob([buffer], { type: 'image/jpeg' });
}
```

All WASM encoders run inside Web Workers. If encoding fails, we silently fall back to the browser's native encoder:

```typescript
outputBlob =
  (await wasmEncodeJpeg(imageData, quality)) ??
  (await canvas.convertToBlob({ type: 'image/jpeg', quality: quality / 100 }));
```

---

## Format-by-Format Deep Dive

### JPEG — MozJPEG

| Detail | Value |
|--------|-------|
| Encoder | MozJPEG (Mozilla's JPEG encoder) |
| WASM binary | `mozjpeg_enc.wasm` (246 KB) |
| JS glue | `@jsquash/jpeg` (from the Squoosh project) |
| Benefit | Trellis quantization produces files 10–15% smaller than the standard JPEG encoder at equivalent visual quality |
| Input | `ImageData` (RGBA pixels) |

### PNG — Three-Stage Pipeline (imagequant + OxiPNG)

PNG optimization is the most complex pipeline. It branches based on the quality slider:

**Path A: High quality (quality ≥ 95) — lossless optimization**
```
ImageData → Canvas.convertToBlob('image/png') → OxiPNG lossless optimization
```

**Path B: Lower quality (quality < 95) — lossy quantization + lossless optimization**
```
ImageData → imagequant palette quantization → secondary color reduction → OxiPNG optimization
```

#### imagequant (lossy compression)

| Detail | Value |
|--------|-------|
| Engine | libimagequant (the core library behind pngquant) |
| WASM binary | `imagequant_bg.wasm` (165 KB) |
| JS glue | `@panda-ai/imagequant` |
| What it does | Reduces 32-bit true color (16M colors) to a 2–256 color indexed palette PNG |

The quality-to-palette-size mapping uses an **exponential curve** so the slider feels linear:

```typescript
const maxColors = quality >= 85
  ? 256  // 85–94: full palette, highest quality quantization
  : Math.max(2, Math.round(Math.pow(2, (quality / 84) * 8)));
  // 1–84: exponential mapping to 2–256 colors
```

Since the imagequant WASM binding always quantizes to 256 colors (ignoring `max_colors`), PicShift implements its own **secondary color reduction** algorithm:

1. Count pixel frequency for each palette index
2. Sort by frequency descending, keep top-N colors
3. Remap eliminated colors to their nearest retained color (RGBA Euclidean distance)
4. Rewrite all pixel indices

```typescript
if (maxColors < 256) {
  const freq = new Uint32Array(256);
  for (let i = 0; i < indices.length; i++) freq[indices[i]]++;
  const ranked = Array.from({ length: 256 }, (_, i) => i);
  ranked.sort((a, b) => freq[b] - freq[a]);
  const kept = new Set(ranked.slice(0, maxColors));
  // For each eliminated color, find the nearest retained color
  // (RGBA Euclidean distance), then remap all pixel indices
}
```

#### OxiPNG (lossless optimization)

| Detail | Value |
|--------|-------|
| Engine | OxiPNG (a PNG optimizer written in Rust) |
| WASM binary | `squoosh_oxipng_bg.wasm` (160 KB) |
| JS glue | `@jsquash/oxipng` |
| What it does | Tries different PNG filter + compression parameter combinations to find the smallest output |

OxiPNG runs on the quantized PNG as a second pass. We only use the optimized result if it's actually smaller:

```typescript
const optimizedBlob = new Blob([optimizedBuffer], { type: 'image/png' });
return optimizedBlob.size < nativePngBlob.size ? optimizedBlob : null;
```

### WebP — libwebp with Runtime SIMD Detection

| Detail | Value |
|--------|-------|
| Encoder | libwebp (Google's official WebP encoder) |
| WASM binary | `webp_enc_simd.wasm` (337 KB) / `webp_enc.wasm` (275 KB) |
| JS glue | `@jsquash/webp` |

The WebP encoder's distinctive feature is **runtime SIMD detection** — it automatically picks the SIMD-accelerated build or the standard one:

```typescript
const hasSIMD = WebAssembly.validate(
  new Uint8Array([
    0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,
    3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11
  ]),
);
const wasmPath = hasSIMD
  ? '/wasm/webp_enc_simd.wasm'
  : '/wasm/webp_enc.wasm';
```

This SIMD detection code is a minimal WASM module containing a `v128` type and an `i32x4.splat` instruction. `WebAssembly.validate()` returns `true` if the browser supports WASM SIMD — much lighter than importing `wasm-feature-detect`.

### AVIF — AV1 Encoder with Quality Mapping

| Detail | Value |
|--------|-------|
| Encoder | AV1-based AVIF encoder |
| WASM binary | `avif_enc.wasm` (3.3 MB — the largest encoder) |
| JS glue | `@jsquash/avif` |
| Encoding param | `speed: 6` (speed vs. quality tradeoff) |

AVIF's quality scale differs from JPEG's (AVIF 50 ≈ JPEG 85 in visual quality). PicShift applies a **quality mapping** so the UI slider feels consistent across formats:

```typescript
const avifQuality = Math.max(1, Math.round(quality * 0.6));
```

---

## HEIC Decoding: Two-Tier Fallback

HEIC is the default photo format on Apple devices, but browser support is limited. PicShift implements a **two-tier fallback strategy**:

### Tier 1: Native Browser Decoding (Safari 17.6+)

```typescript
const bitmap = await createImageBitmap(file);
```

Safari 17.6+ natively supports `createImageBitmap()` for HEIC files. In our benchmarks, this is **17–39x faster** than any JS/WASM approach. We detect capability via a simple try/catch — zero-cost probing.

### Tier 2: libheif-js WASM Decoding (Chrome, Firefox, etc.)

| Detail | Value |
|--------|-------|
| Decoder | libheif (H.265/HEVC decoder) compiled to WASM |
| Package | `libheif-js@1.19.8` (`libheif-wasm/libheif-bundle.mjs`) |
| Bundle size | 1.4 MB (WASM binary embedded in the JS bundle) |

```typescript
async function decodeHeicWasm(file: File): Promise<ImageData> {
  const libheif = await initLibheif();
  const buffer = await file.arrayBuffer();
  const decoder = new libheif.HeifDecoder();
  const images = decoder.decode(new Uint8Array(buffer));
  const image = images[0];
  const width = image.get_width();
  const height = image.get_height();

  const canvas = new OffscreenCanvas(width, height);
  const ctx = canvas.getContext('2d')!;
  const imageData = ctx.createImageData(width, height);

  await new Promise<void>((resolve, reject) => {
    image.display(imageData, (displayData) => {
      if (!displayData) reject(new Error('HEIC display failed'));
      else resolve();
    });
  });
  return imageData;
}
```

**Key optimization: direct RGBA pixel output.** The libheif-js WASM decoder outputs straight to `ImageData`, skipping the redundant pipeline used by the old approach (heic2any): `HEIC → JS decode → JPEG/PNG intermediate Blob → createImageBitmap second decode`.

| | heic2any (old) | libheif-js WASM (new) |
|--|----------------|----------------------|
| Decoder | libheif compiled to pure JS (asm.js) | libheif compiled to WASM |
| Pipeline | HEIC → JS decode → JPEG encode → JPEG re-decode (3 steps) | HEIC → WASM decode (1 step) |
| Speed (Chrome) | Baseline | **2–3x faster** |
| Quality loss | Yes (JPEG 0.95 intermediate) | None (raw RGBA pixels) |
| Peak memory | Higher (intermediate Blob + second decode) | Lower (RGBA pixel data only) |

The WASM module uses the same lazy-load singleton pattern, handling both sync and async Emscripten factory functions:

```typescript
let libheifModule: any = null;

async function initLibheif() {
  if (libheifModule) return libheifModule;
  const mod = await import('libheif-js/libheif-wasm/libheif-bundle.mjs');
  const factory = mod.default;
  if (typeof factory === 'function') {
    const result = factory();
    libheifModule = result && typeof result.then === 'function'
      ? await result
      : result;
  } else {
    libheifModule = factory;
  }
  return libheifModule;
}
```

---

## Worker Pool: Multi-Core Parallel Conversion

### Dynamic Scaling

PicShift doesn't use a fixed number of Workers. Instead, it creates them on demand and recycles them — a **dynamic Worker Pool**:

```typescript
const MAX_WORKERS = Math.min(navigator.hardwareConcurrency || 2, 4);
```

- Upper bound: the smaller of `navigator.hardwareConcurrency` (logical CPU cores) and 4
- Idle Workers are stored in `idleWorkersRef` for reuse, avoiding repeated creation/destruction overhead
- After a batch completes, **all Workers are terminated** to release WASM heap memory

```typescript
if (activeCountRef.current === 0) {
  idleWorkersRef.current.forEach(w => w.terminate());
  idleWorkersRef.current = [];
  workerPoolRef.current = [];
}
```

### Task Queue Scheduling

Files are managed via a `queueRef` queue. `processQueue()` checks for idle Workers and dispatches tasks:

```typescript
const processQueue = useCallback(() => {
  while (
    activeCountRef.current < MAX_WORKERS &&
    queueRef.current.length > 0
  ) {
    const file = queueRef.current.shift()!;
    activeCountRef.current++;
    const worker = getWorker(); // take from idle pool or create new
    // ... send task to worker
  }
}, [...]);
```

When a Worker finishes a task, it's returned to the pool and the next queued file is processed immediately — **pipeline-style parallelism**:

```typescript
worker.onmessage = async (e) => {
  // ... handle result
  releaseWorker(worker);        // return to idle pool
  activeCountRef.current--;
  if (queueRef.current.length > 0) {
    processQueue();              // process next file
  }
};
```

### Worker Error Recovery

If a Worker crashes (`onerror`), it's terminated and removed from the pool. Other Workers continue unaffected:

```typescript
worker.onerror = (err) => {
  worker.terminate();
  workerPoolRef.current = workerPoolRef.current.filter(w => w !== worker);
  activeCountRef.current--;
  if (queueRef.current.length > 0) processQueue();
};
```

---

## Streaming ZIP Packaging

### Write as You Convert

PicShift uses `fflate` for streaming ZIP construction. Each file is **written to the ZIP stream immediately after conversion**, rather than waiting for all files to finish:

```typescript
await zipRef.current.addFile(baseName, outputBlob);
```

### STORE Mode (Zero Compression)

Since images are already compressed formats (JPEG/PNG/WebP/AVIF), the ZIP uses `ZipPassThrough` (STORE mode — no additional compression), avoiding pointless double-compression:

```typescript
const entry = new ZipPassThrough(filename); // STORE mode
this.zip.add(entry);
entry.push(buffer, true);
```

### Memory Release After Download

After the ZIP is downloaded, the intermediate chunk array is dereferenced for GC:

```typescript
download(filename: string): void {
  this.finalize();
  const blob = new Blob(this.chunks as BlobPart[], {
    type: 'application/zip',
  });
  triggerDownload(blob, filename);
  this.chunks = [];    // release chunk memory
  this.totalSize = 0;
}
```

---

## Memory Management

Processing images in the browser means you're working within a constrained memory environment. Here's how PicShift keeps things under control:

### File Limits

```typescript
export const MAX_FILE_COUNT = 200;
export const MAX_FILE_SIZE = 50 * 1024 * 1024;     // 50 MB per file
export const MAX_TOTAL_SIZE = 1024 * 1024 * 1024;   // 1 GB total batch
```

### Aggressive ImageData Release

After encoding, `imageData` is immediately set to `null` to release the `width × height × 4` bytes of pixel data (a 12 MP photo is ~48 MB):

```typescript
imageData = null;
```

### ImageBitmap Lifecycle

Every `createImageBitmap()` result is `.close()`d immediately after use, freeing GPU/memory resources:

```typescript
const bitmap = await createImageBitmap(file);
ctx.drawImage(bitmap, 0, 0);
bitmap.close();
```

### URL.revokeObjectURL Management

All `URL.createObjectURL()` URLs are explicitly revoked when no longer needed:
- Old thumbnail URLs revoked on update
- File URLs revoked on removal
- Batch revocation on `clearAll`

```typescript
if (
  patch.thumbnailUrl &&
  f.thumbnailUrl &&
  patch.thumbnailUrl !== f.thumbnailUrl
) {
  URL.revokeObjectURL(f.thumbnailUrl);
}
```

### Compare View LRU Cache

Original/converted preview URLs use an **LRU cache** (max 10 entries), preventing repeated creation of large preview Blobs while bounding memory growth:

```typescript
const MAX_COMPARE_CACHE = 10;

while (order.length > MAX_COMPARE_CACHE) {
  const evictId = order.shift()!;
  const evicted = compareCacheRef.current.get(evictId);
  if (evicted) {
    URL.revokeObjectURL(evicted.originalUrl);
    URL.revokeObjectURL(evicted.convertedUrl);
    compareCacheRef.current.delete(evictId);
  }
}
```

### WASM Heap Reclamation

After a batch completes, all Workers are terminated — along with the WASM module heap memory initialized inside each Worker. The next conversion batch creates fresh Workers and re-initializes the WASM modules.

---

## Smart "Keep Smaller" Logic

During compression or same-format conversion, if the WASM-encoded output is *larger* than the original file, PicShift **keeps the original**:

```typescript
const sameFormat = !isHeic(file) && getInputMime(file) === outputFormat;
if ((keepSmaller || sameFormat) && outputBlob.size >= file.size) {
  finalBlob = file;
  keptOriginal = true;
}
```

This prevents the frustrating case where "compressing" an already-optimized image makes it bigger.

---

## Smooth Progress Bar Animation

Workers only report progress at 4 discrete checkpoints (10%, 50%, 80%, 100%), but the UI progress bar is **smooth and continuous**.

### requestAnimationFrame-Driven

The animation loop directly mutates a DOM ref, bypassing React re-renders:

```typescript
const barRef = useRef<HTMLDivElement>(null);
const tick = () => {
  // ... update currentRef.current
  if (barRef.current) {
    barRef.current.style.width = `${currentRef.current}%`;
  }
  rafRef.current = requestAnimationFrame(tick);
};
```

### Two-Phase Interpolation + Optimistic Creep

```typescript
if (current < target - 0.3) {
  // Phase 1: fast approach toward the real checkpoint
  const step = Math.max(0.2, (target - current) * 0.05);
  currentRef.current = Math.min(current + step, target);
} else if (current < 95) {
  // Phase 2: optimistic creep (slow advance past checkpoint,
  // rate decays exponentially)
  const overshoot = Math.max(0, current - target);
  const creepRate = Math.max(
    0.005,
    0.06 * creepFactor / (1 + overshoot * 0.12),
  );
  currentRef.current = Math.min(current + creepRate, 95);
}
```

### Per-File Variation

A creep factor derived from file size prevents multiple files' progress bars from stalling at identical positions:

```typescript
const creepFactorRef = useRef(
  0.6 + (file.size % 100) / 100 * 0.8, // range: 0.6–1.4
);
```

---

## HEIC Early Thumbnail

HEIC decoding can take several seconds on Chrome. After the WASM decode completes but *before* the WASM encode begins, PicShift sends a **low-quality thumbnail** to the main thread so the user sees a preview as early as possible:

```typescript
// Right after WASM decode, generate a preview
originalPreviewBlob = await canvas.convertToBlob({
  type: 'image/jpeg',
  quality: 0.9,
});

// Generate a 200px-wide thumbnail
const earlyBitmap = await createImageBitmap(originalPreviewBlob, {
  resizeWidth: 200,
  resizeQuality: 'medium',
});
// ... render and send
const earlyMsg: WorkerResponse = {
  id,
  status: 'progress',
  progress: 10,
  thumbnail: earlyThumb,
};
self.postMessage(earlyMsg);
```

---

## Build Optimizations

### Code Splitting

Rollup `manualChunks` splits large dependencies into separate chunks, keeping the main bundle lean:

```javascript
// astro.config.mjs
manualChunks: {
  heic: ['libheif-js'],   // 1.4 MB — only loaded when HEIC files are processed
  zip: ['fflate'],
}
```

All WASM encoders also use `dynamic import()` for code splitting — a format's JS glue + WASM binary is only loaded when that specific format is actually needed.

### Static WASM Hosting

Six WASM files (totaling ~4.5 MB) are placed in `public/wasm/` as static assets, loaded on demand via `fetch()`. Browsers cache these with standard HTTP caching (typically `Cache-Control: immutable`), so repeat visits load from cache.

| WASM file | Size | Encoder |
|-----------|------|---------|
| `mozjpeg_enc.wasm` | 246 KB | MozJPEG (JPEG) |
| `imagequant_bg.wasm` | 165 KB | libimagequant (PNG quantization) |
| `squoosh_oxipng_bg.wasm` | 160 KB | OxiPNG (PNG optimization) |
| `webp_enc.wasm` | 275 KB | libwebp (WebP) |
| `webp_enc_simd.wasm` | 337 KB | libwebp SIMD (WebP accelerated) |
| `avif_enc.wasm` | 3.3 MB | AV1 (AVIF) |

---

## Summary

PicShift's core technical bet is bringing **professional C/C++/Rust encoders into the browser via WebAssembly**, combined with Worker Pool parallelism and fine-grained memory management to achieve near-native image processing performance — all while maintaining a pure frontend, zero-upload architecture for complete privacy.

| Dimension | Technique |
|-----------|-----------|
| JPEG compression | MozJPEG WASM (10–15% smaller than standard encoders) |
| PNG lossy compression | imagequant WASM palette quantization + secondary color reduction + OxiPNG lossless optimization |
| WebP encoding speed | libwebp WASM + runtime SIMD auto-detection |
| AVIF compression | AV1 WASM encoder + quality mapping |
| HEIC decode speed | Native `createImageBitmap` on Safari (17–39x faster) + libheif-js WASM on Chrome (2–3x faster) |
| Parallel processing | Dynamic Worker Pool (up to 4 threads), task queue + auto-scaling |
| ZIP packaging | fflate streaming STORE mode (skip double-compression), write-as-you-convert |
| Memory control | ImageData nulling, ImageBitmap.close(), URL.revokeObjectURL, Worker termination for WASM heap release, Compare LRU cache |
| Code loading | WASM lazy-load singletons, manualChunks code splitting, dynamic import on-demand loading |

---

*PicShift is free and open source. Try it at [picshift.app](https://picshift.app).*
