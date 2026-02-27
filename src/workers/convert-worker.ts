// Polyfill: heic2any requires DOM APIs (window, document, Canvas) that don't exist
// in Web Workers. We shim them with Worker equivalents.
const workerSelf = self as unknown as Record<string, unknown>;

if (typeof window === 'undefined') {
  workerSelf.window = self;
}

if (typeof document === 'undefined') {
  workerSelf.document = {
    createElement(tag: string) {
      if (tag === 'canvas') {
        // Return an OffscreenCanvas that behaves like a regular canvas.
        // heic2any sets .width/.height and calls .getContext('2d'), then .toBlob().
        const canvas = new OffscreenCanvas(1, 1);
        // heic2any calls canvas.toBlob(callback, type, quality) — DOM Canvas API.
        // OffscreenCanvas only has convertToBlob(). Shim toBlob to bridge the gap.
        (canvas as unknown as Record<string, unknown>).toBlob = function (
          callback: (blob: Blob) => void,
          type?: string,
          quality?: number,
        ) {
          (canvas as OffscreenCanvas)
            .convertToBlob({ type: type as ImageEncodeType | undefined, quality })
            .then(callback);
        };
        return canvas;
      }
      return {};
    },
  };
}

// ---- Worker-local type declarations (not imported) ----

// OffscreenCanvas.convertToBlob expects ImageEncodeType but it's not
// available in the worker type scope. It's just a string at runtime.
type ImageEncodeType = string;

interface WorkerRequest {
  id: string;
  file: File;
  outputFormat: string; // 'image/jpeg' | 'image/png' | 'image/webp' | 'image/avif'
  quality: number; // 1-100
  keepSmaller?: boolean;
}

interface WorkerResponse {
  id: string;
  status: 'progress' | 'done' | 'error';
  progress?: number;
  blob?: Blob;
  thumbnail?: Blob;
  originalPreview?: Blob;
  keptOriginal?: boolean;
  error?: string;
}

// ---- Helpers ----

function isHeic(file: File): boolean {
  if (file.type === 'image/heic' || file.type === 'image/heif') return true;
  const name = file.name.toLowerCase();
  return name.endsWith('.heic') || name.endsWith('.heif');
}

function getInputMime(file: File): string {
  if (file.type) return file.type;
  const ext = file.name.toLowerCase().split('.').pop() || '';
  const map: Record<string, string> = {
    jpg: 'image/jpeg', jpeg: 'image/jpeg',
    png: 'image/png',
    webp: 'image/webp',
    avif: 'image/avif',
  };
  return map[ext] || '';
}

function postProgress(id: string, progress: number): void {
  const msg: WorkerResponse = { id, status: 'progress', progress };
  self.postMessage(msg);
}

// ---- WASM encoder helpers (return Blob on success, null → fallback to native) ----

let jpegInit: Promise<void> | null = null;

async function wasmEncodeJpeg(
  imageData: ImageData,
  quality: number,
): Promise<Blob | null> {
  try {
    const { init, default: encode } = await import('@jsquash/jpeg/encode');
    if (!jpegInit) {
      jpegInit = (async () => {
        const buf = await fetch('/wasm/mozjpeg_enc.wasm').then((r) =>
          r.arrayBuffer(),
        );
        const mod = await WebAssembly.compile(buf);
        await init(mod);
      })();
    }
    await jpegInit;
    const buffer = await encode(imageData, { quality });
    return new Blob([buffer], { type: 'image/jpeg' });
  } catch {
    return null;
  }
}

let imagequantInit: Promise<{ memory: WebAssembly.Memory }> | null = null;

async function wasmQuantizePng(
  imageData: ImageData,
  quality: number,
  canvas: OffscreenCanvas,
  ctx: OffscreenCanvasRenderingContext2D,
): Promise<Blob | null> {
  try {
    const mod = await import('@panda-ai/imagequant');
    const init = mod.default;
    const { quantize_image } = mod;

    if (!imagequantInit) {
      imagequantInit = (async () => {
        const buf = await fetch('/wasm/imagequant_bg.wasm').then((r) =>
          r.arrayBuffer(),
        );
        const wasmMod = await WebAssembly.compile(buf);
        return await init(wasmMod);
      })();
    }
    const initOutput = await imagequantInit;

    const { width, height, data } = imageData;
    const pixels = new Uint8Array(data.buffer);
    // 85-94: max palette (256 colors) for best quality quantization
    // 1-84: exponential curve mapped to 2-256, seamless at quality 84
    const maxColors = quality >= 85
      ? 256
      : Math.max(2, Math.round(Math.pow(2, (quality / 84) * 8)));

    // imagequant always quantizes to 256 colors (ignores max_colors param),
    // so we always pass 256 and reduce further ourselves when needed.
    const result = quantize_image(pixels, width, height, 256);

    // Extract palette + indices from result
    let palette: Uint8Array;
    let indices: Uint8Array;

    if (typeof result.palette_ptr === 'function') {
      const mem = new Uint8Array(initOutput.memory.buffer);
      palette = mem.slice(
        result.palette_ptr(),
        result.palette_ptr() + result.palette_len(),
      );
      indices = mem.slice(
        result.indices_ptr(),
        result.indices_ptr() + result.indices_len(),
      );
      result.free();
    } else if (result.palette && result.indices) {
      // Always copy — result arrays may be views into WASM memory, and
      // we mutate indices during secondary color reduction.
      palette = new Uint8Array(result.palette);
      indices = new Uint8Array(result.indices);
    } else {
      console.error('[imagequant] unexpected result shape:', typeof result, Object.keys(result));
      return null;
    }

    // --- Secondary color reduction when maxColors < 256 ---
    if (maxColors < 256) {
      // Count frequency of each palette index
      const freq = new Uint32Array(256);
      for (let i = 0; i < indices.length; i++) freq[indices[i]]++;

      // Rank indices by frequency (descending)
      const ranked = Array.from({ length: 256 }, (_, i) => i);
      ranked.sort((a, b) => freq[b] - freq[a]);

      // Keep top maxColors indices, map the rest to nearest kept color
      const kept = new Set(ranked.slice(0, maxColors));
      const remap = new Uint8Array(256);

      for (let i = 0; i < 256; i++) {
        if (kept.has(i)) {
          remap[i] = i;
        } else {
          // Find nearest kept color (Euclidean distance in RGBA)
          let bestDist = Infinity;
          let bestIdx = ranked[0];
          const r1 = palette[i * 4], g1 = palette[i * 4 + 1],
                b1 = palette[i * 4 + 2], a1 = palette[i * 4 + 3];
          for (const k of kept) {
            const dr = r1 - palette[k * 4];
            const dg = g1 - palette[k * 4 + 1];
            const db = b1 - palette[k * 4 + 2];
            const da = a1 - palette[k * 4 + 3];
            const dist = dr * dr + dg * dg + db * db + da * da;
            if (dist < bestDist) {
              bestDist = dist;
              bestIdx = k;
            }
          }
          remap[i] = bestIdx;
        }
      }

      // Apply remapping
      for (let i = 0; i < indices.length; i++) {
        indices[i] = remap[indices[i]];
      }
    }

    // Reconstruct RGBA pixels from quantized palette + indices
    const newPixels = new Uint8ClampedArray(width * height * 4);
    for (let i = 0; i < indices.length; i++) {
      const pi = indices[i] * 4;
      const oi = i * 4;
      newPixels[oi] = palette[pi];
      newPixels[oi + 1] = palette[pi + 1];
      newPixels[oi + 2] = palette[pi + 2];
      newPixels[oi + 3] = palette[pi + 3];
    }

    // Re-render quantized pixels to canvas and export as PNG
    ctx.putImageData(new ImageData(newPixels, width, height), 0, 0);
    const pngBlob = await canvas.convertToBlob({ type: 'image/png' });

    // Further optimize with oxipng (may convert to indexed PNG automatically)
    return (await wasmOptimizePng(pngBlob)) ?? pngBlob;
  } catch (err) {
    console.error('[imagequant] quantization failed:', err);
    return null;
  }
}

let pngInit: Promise<void> | null = null;

async function wasmOptimizePng(
  nativePngBlob: Blob,
): Promise<Blob | null> {
  try {
    const { init, default: optimise } = await import(
      '@jsquash/oxipng/optimise'
    );
    if (!pngInit) {
      pngInit = init('/wasm/squoosh_oxipng_bg.wasm').then(() => {});
    }
    await pngInit;
    const pngBuffer = await nativePngBlob.arrayBuffer();
    const optimizedBuffer = await optimise(pngBuffer);
    const optimizedBlob = new Blob([optimizedBuffer], { type: 'image/png' });
    return optimizedBlob.size < nativePngBlob.size ? optimizedBlob : null;
  } catch {
    return null;
  }
}

let webpInit: Promise<void> | null = null;

async function wasmEncodeWebp(
  imageData: ImageData,
  quality: number,
): Promise<Blob | null> {
  try {
    const { init, default: encode } = await import('@jsquash/webp/encode');
    if (!webpInit) {
      webpInit = (async () => {
        // Inline SIMD detection (same check as wasm-feature-detect)
        const hasSIMD = WebAssembly.validate(
          new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]),
        );
        const wasmPath = hasSIMD
          ? '/wasm/webp_enc_simd.wasm'
          : '/wasm/webp_enc.wasm';
        const buf = await fetch(wasmPath).then((r) => r.arrayBuffer());
        const mod = await WebAssembly.compile(buf);
        await init(mod);
      })();
    }
    await webpInit;
    const buffer = await encode(imageData, { quality });
    return new Blob([buffer], { type: 'image/webp' });
  } catch {
    return null;
  }
}

let avifInit: Promise<void> | null = null;

async function wasmEncodeAvif(
  imageData: ImageData,
  quality: number,
): Promise<Blob | null> {
  try {
    const { init, default: encode } = await import('@jsquash/avif/encode');
    if (!avifInit) {
      avifInit = (async () => {
        const buf = await fetch('/wasm/avif_enc.wasm').then((r) =>
          r.arrayBuffer(),
        );
        const mod = await WebAssembly.compile(buf);
        await init(mod);
      })();
    }
    await avifInit;
    const buffer = await encode(imageData, { quality, speed: 6 });
    return new Blob([buffer], { type: 'image/avif' });
  } catch (err) {
    console.error('[avif] WASM encode failed:', err);
    return null;
  }
}

// ---- Main handler ----

self.onmessage = async (e: MessageEvent<WorkerRequest>) => {
  const { id, file, outputFormat, quality, keepSmaller } = e.data;

  try {
    // Step 1 - Decode HEIC if needed, otherwise use file directly
    let sourceBlob: Blob;
    const heicInput = isHeic(file);

    if (heicInput) {
      const heic2any = (await import('heic2any')).default;
      const converted = await heic2any({ blob: file, toType: 'image/png' });
      sourceBlob = Array.isArray(converted) ? converted[0] : converted;

      // Send early thumbnail so user sees a preview while encoding continues
      try {
        const earlyBitmap = await createImageBitmap(sourceBlob, {
          resizeWidth: 200,
          resizeQuality: 'medium',
        });
        const earlyCanvas = new OffscreenCanvas(earlyBitmap.width, earlyBitmap.height);
        const earlyCtx = earlyCanvas.getContext('2d');
        if (earlyCtx) {
          earlyCtx.drawImage(earlyBitmap, 0, 0);
          const earlyThumb = await earlyCanvas.convertToBlob({ type: 'image/jpeg', quality: 0.6 });
          const earlyMsg: WorkerResponse = { id, status: 'progress', progress: 10, thumbnail: earlyThumb };
          self.postMessage(earlyMsg);
        }
        earlyBitmap.close();
      } catch {
        postProgress(id, 10);
      }
    } else {
      sourceBlob = file;
    }

    postProgress(id, 50);

    // Step 2 - Create ImageBitmap and draw to OffscreenCanvas
    const bitmap = await createImageBitmap(sourceBlob);
    const { width, height } = bitmap;

    const canvas = new OffscreenCanvas(width, height);
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Failed to get 2d context');

    ctx.drawImage(bitmap, 0, 0);
    bitmap.close();

    // Step 3 - Export to target format (WASM first, native fallback)
    let imageData: ImageData | null = ctx.getImageData(0, 0, width, height);
    let outputBlob: Blob;

    if (outputFormat === 'image/jpeg') {
      outputBlob =
        (await wasmEncodeJpeg(imageData!, quality)) ??
        (await canvas.convertToBlob({ type: outputFormat, quality: quality / 100 }));
    } else if (outputFormat === 'image/png') {
      if (quality >= 95) {
        // Lossless: native PNG + oxipng optimization only
        const nativePng = await canvas.convertToBlob({ type: 'image/png' });
        outputBlob = (await wasmOptimizePng(nativePng)) ?? nativePng;
      } else {
        // Lossy quantization (pngquant-style) + oxipng optimization
        // 85-94: max palette (256 colors) — best quality quantization
        // 1-84: exponential mapping — fewer colors for smaller files
        const quantized = await wasmQuantizePng(imageData!, quality, canvas, ctx);
        if (quantized) {
          outputBlob = quantized;
        } else {
          const nativePng = await canvas.convertToBlob({ type: 'image/png' });
          outputBlob = (await wasmOptimizePng(nativePng)) ?? nativePng;
        }
      }
    } else if (outputFormat === 'image/webp') {
      outputBlob =
        (await wasmEncodeWebp(imageData!, quality)) ??
        (await canvas.convertToBlob({ type: outputFormat, quality: quality / 100 }));
    } else if (outputFormat === 'image/avif') {
      // AVIF quality scale differs from JPEG: AVIF 50 ≈ JPEG 85 visual quality.
      // Map UI quality (1-100) to AVIF range so slider feels consistent across formats.
      const avifQuality = Math.max(1, Math.round(quality * 0.6));
      outputBlob =
        (await wasmEncodeAvif(imageData!, avifQuality)) ??
        (await canvas.convertToBlob({ type: outputFormat, quality: avifQuality / 100 }));
    } else {
      outputBlob = await canvas.convertToBlob({
        type: outputFormat,
        quality: quality / 100,
      });
    }

    // Release raw pixel data (~W*H*4 bytes) before thumbnail generation
    imageData = null;

    // Step 3.5 - Keep original if re-encoded result is larger
    // Applies in compressor mode (keepSmaller) or when input/output formats match
    let finalBlob: Blob = outputBlob;
    let keptOriginal = false;
    const sameFormat = !isHeic(file) && getInputMime(file) === outputFormat;
    if ((keepSmaller || sameFormat) && outputBlob.size >= file.size) {
      finalBlob = file;
      keptOriginal = true;
    }

    postProgress(id, 80);

    // Step 4 - Generate thumbnail (200px wide)
    const thumbBitmap = await createImageBitmap(finalBlob, {
      resizeWidth: 200,
      resizeQuality: 'medium',
    });

    const thumbCanvas = new OffscreenCanvas(
      thumbBitmap.width,
      thumbBitmap.height,
    );
    const thumbCtx = thumbCanvas.getContext('2d');
    if (!thumbCtx) throw new Error('Failed to get thumbnail 2d context');

    thumbCtx.drawImage(thumbBitmap, 0, 0);
    thumbBitmap.close();

    const thumbnail = await thumbCanvas.convertToBlob({
      type: 'image/jpeg',
      quality: 0.6,
    });

    postProgress(id, 100);

    // Step 5 - Send result
    const doneMsg: WorkerResponse = {
      id,
      status: 'done',
      blob: finalBlob,
      thumbnail,
      originalPreview: heicInput ? sourceBlob : undefined,
      keptOriginal,
    };
    self.postMessage(doneMsg);
  } catch (err: unknown) {
    let message = 'Unknown error';
    if (err instanceof Error) {
      message = err.message;
    } else if (typeof err === 'string') {
      message = err;
    } else if (err && typeof err === 'object') {
      message = (err as Record<string, unknown>).message as string
        ?? (err as Record<string, unknown>).error as string
        ?? JSON.stringify(err);
    }
    const errorMsg: WorkerResponse = {
      id,
      status: 'error',
      error: message,
    };
    self.postMessage(errorMsg);
  }
};
