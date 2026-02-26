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
  keptOriginal?: boolean;
  error?: string;
}

// ---- Helpers ----

function isHeic(file: File): boolean {
  if (file.type === 'image/heic' || file.type === 'image/heif') return true;
  const name = file.name.toLowerCase();
  return name.endsWith('.heic') || name.endsWith('.heif');
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

// ---- Main handler ----

self.onmessage = async (e: MessageEvent<WorkerRequest>) => {
  const { id, file, outputFormat, quality, keepSmaller } = e.data;

  try {
    // Step 1 - Decode HEIC if needed, otherwise use file directly
    let sourceBlob: Blob;

    if (isHeic(file)) {
      const heic2any = (await import('heic2any')).default;
      const converted = await heic2any({ blob: file, toType: 'image/png' });
      sourceBlob = Array.isArray(converted) ? converted[0] : converted;
      postProgress(id, 10);
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
    const imageData = ctx.getImageData(0, 0, width, height);
    let outputBlob: Blob;

    if (outputFormat === 'image/jpeg') {
      outputBlob =
        (await wasmEncodeJpeg(imageData, quality)) ??
        (await canvas.convertToBlob({ type: outputFormat, quality: quality / 100 }));
    } else if (outputFormat === 'image/png') {
      const nativePng = await canvas.convertToBlob({ type: 'image/png' });
      outputBlob = (await wasmOptimizePng(nativePng)) ?? nativePng;
    } else if (outputFormat === 'image/webp') {
      outputBlob =
        (await wasmEncodeWebp(imageData, quality)) ??
        (await canvas.convertToBlob({ type: outputFormat, quality: quality / 100 }));
    } else {
      // AVIF and other formats — native only
      outputBlob = await canvas.convertToBlob({
        type: outputFormat,
        quality: quality / 100,
      });
    }

    // Step 3.5 - For compressor mode: if output is larger than input, keep original
    let finalBlob: Blob = outputBlob;
    let keptOriginal = false;
    if (keepSmaller && outputBlob.size >= file.size && !isHeic(file)) {
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
