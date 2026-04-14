import { useState, useCallback, useRef, useMemo } from 'react';
import type {
  ConvertFile,
  InputFormat,
  OutputFormatKey,
  WorkerResponse,
  ResizeOption,
} from '../types';
import { OUTPUT_MIME, OUTPUT_EXT } from '../types';
import { triggerDownload } from '../lib/download';
import { StreamingZip } from '../lib/zip';
import { isAcceptedFile, MAX_FILE_SIZE, MAX_FILE_COUNT, MAX_TOTAL_SIZE } from '../lib/format-utils';
import { createClientId } from '../lib/clientId';
import { trackConvertFile, trackConvertError, trackDownloadZip, trackDownloadSingle, trackCompareOpen, trackClearAll } from '../lib/analytics';

/** Derive InputFormat from file extension (fallback for sync addFiles). */
function extToInputFormat(filename: string): InputFormat {
  const ext = filename.split('.').pop()?.toLowerCase() ?? '';
  const map: Record<string, InputFormat> = {
    heic: 'heic', heif: 'heif', avif: 'avif',
    webp: 'webp', png: 'png', jpg: 'jpg', jpeg: 'jpeg', bmp: 'bmp',
  };
  return map[ext] ?? 'jpg';
}

/** For compress mode: derive the output format key from the input file extension.
 *  HEIC/HEIF/BMP have no matching output format, so fall back to 'jpg'. */
function inputToOutputKey(filename: string): OutputFormatKey {
  const ext = filename.split('.').pop()?.toLowerCase() ?? '';
  const map: Record<string, OutputFormatKey> = {
    jpg: 'jpg', jpeg: 'jpg', png: 'png', webp: 'webp', avif: 'avif',
    bmp: 'png', heic: 'jpg', heif: 'jpg',
  };
  return map[ext] ?? 'jpg';
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const MAX_WORKERS = Math.min(navigator.hardwareConcurrency || 2, 4);
const MAX_COMPARE_CACHE = 10;

function resolveResize(
  option: ResizeOption,
): { maxWidth?: number; maxHeight?: number; scale?: number; exact?: boolean } | undefined {
  switch (option.preset) {
    case 'original': return undefined;
    case 'max-2560': return { maxWidth: 2560, maxHeight: 2560 };
    case 'max-1920': return { maxWidth: 1920, maxHeight: 1920 };
    case 'max-1080': return { maxWidth: 1080, maxHeight: 1080 };
    case 'max-800': return { maxWidth: 800, maxHeight: 800 };
    case 'three-quarter': return { scale: 0.75 };
    case 'half':
      return { scale: 0.5 };
    case 'custom':
      if (option.customMode === 'percentage') {
        return { scale: (option.percentage ?? 100) / 100 };
      }
      // pixels mode — exact user-provided dimensions
      return { maxWidth: option.width, maxHeight: option.height, exact: true };
  }
}

// ---------------------------------------------------------------------------
// Compare state type
// ---------------------------------------------------------------------------

interface CompareState {
  fileId: string;
  originalUrl: string;
  convertedUrl: string;
  originalSize: number;
  convertedSize: number;
}

interface CompareCacheEntry extends CompareState {
  format: OutputFormatKey;
  quality: number;
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useConverter(options?: {
  keepSmaller?: boolean;
  compressMode?: boolean;
  initialFormat?: OutputFormatKey;
  initialQuality?: number;
  initialResize?: ResizeOption;
}) {
  const keepSmaller = options?.keepSmaller ?? false;
  const compressMode = options?.compressMode ?? false;
  const [files, setFiles] = useState<ConvertFile[]>([]);
  const [outputFormat, setOutputFormat] = useState<OutputFormatKey>(options?.initialFormat ?? 'jpg');
  const [quality, setQuality] = useState<number>(options?.initialQuality ?? 85);
  const [resizeOption, setResizeOption] = useState<ResizeOption>(options?.initialResize ?? { preset: 'original' });
  const [compareState, setCompareState] = useState<CompareState | null>(null);
  const [compareLoading, setCompareLoading] = useState(false);
  const [droppedCount, setDroppedCount] = useState(0);

  // Refs that survive re-renders
  const workerPoolRef = useRef<Worker[]>([]);
  const idleWorkersRef = useRef<Worker[]>([]);
  const queueRef = useRef<ConvertFile[]>([]);
  const activeCountRef = useRef(0);
  const zipRef = useRef<StreamingZip | null>(null);
  const compareWorkersRef = useRef<Worker[]>([]);
  const compareCacheRef = useRef<Map<string, CompareCacheEntry>>(new Map());
  const compareCacheOrderRef = useRef<string[]>([]);

  // ---------------------------------------------------------------------------
  // Derived counts
  // ---------------------------------------------------------------------------

  const completedCount = useMemo(
    () => files.filter((f) => f.status === 'done').length,
    [files],
  );
  const totalCount = files.length;
  const isConverting = useMemo(
    () => files.some((f) => f.status === 'converting'),
    [files],
  );

  // ---------------------------------------------------------------------------
  // Worker helpers
  // ---------------------------------------------------------------------------

  /** Get an idle worker from the pool, or create a new one. */
  const getWorker = useCallback((): Worker => {
    if (idleWorkersRef.current.length > 0) {
      return idleWorkersRef.current.pop()!;
    }
    const w = new Worker(
      new URL('../workers/convert-worker.ts', import.meta.url),
      { type: 'module' },
    );
    workerPoolRef.current.push(w);
    return w;
  }, []);

  /** Return a worker to the idle pool for reuse. */
  const releaseWorker = useCallback((worker: Worker) => {
    worker.onmessage = null;
    worker.onerror = null;
    idleWorkersRef.current.push(worker);
  }, []);

  /** Update a single file entry by id. */
  const updateFile = useCallback(
    (id: string, patch: Partial<ConvertFile>) => {
      setFiles((prev) =>
        prev.map((f) => {
          if (f.id !== id) return f;
          // Revoke old thumbnail URL when replaced (e.g. early preview → final)
          if (patch.thumbnailUrl && f.thumbnailUrl && patch.thumbnailUrl !== f.thumbnailUrl) {
            URL.revokeObjectURL(f.thumbnailUrl);
          }
          return { ...f, ...patch };
        }),
      );
    },
    [],
  );

  // ---------------------------------------------------------------------------
  // Process queue
  // ---------------------------------------------------------------------------

  const processQueue = useCallback(() => {
    while (activeCountRef.current < MAX_WORKERS && queueRef.current.length > 0) {
      const file = queueRef.current.shift()!;
      activeCountRef.current++;

      // Ensure ZIP instance exists
      if (!zipRef.current) {
        zipRef.current = new StreamingZip();
      }

      const worker = getWorker();

      updateFile(file.id, { status: 'converting', progress: 0 });
      const fileStartTime = Date.now();

      // Determine the effective output format for this file
      const fileOutputKey = compressMode ? inputToOutputKey(file.originalFile.name) : outputFormat;
      const fileOutputMime = OUTPUT_MIME[fileOutputKey];

      // Resolve resize params from preset (before onmessage to avoid TDZ reference)
      const resizeParams = resolveResize(resizeOption);

      worker.onmessage = async (e: MessageEvent<WorkerResponse>) => {
        const msg = e.data;

        if (msg.status === 'progress') {
          const patch: Partial<ConvertFile> = { progress: msg.progress };
          if (msg.thumbnail) {
            patch.thumbnailUrl = URL.createObjectURL(msg.thumbnail);
          }
          updateFile(msg.id, patch);
          return;
        }

        if (msg.status === 'done') {
          const outputBlob = msg.blob!;
          const thumbnailBlob = msg.thumbnail!;
          const thumbUrl = URL.createObjectURL(thumbnailBlob);

          // If worker kept the original file (output was larger), use original extension
          const ext = msg.keptOriginal
            ? ('.' + (file.originalFile.name.split('.').pop()?.toLowerCase() ?? 'bin'))
            : (OUTPUT_EXT[fileOutputKey] ?? '.bin');
          // Append dimensions to filename when resize was applied
          const dimSuffix = (resizeParams && msg.outputWidth && msg.outputHeight)
            ? `_${msg.outputWidth}x${msg.outputHeight}` : '';
          const baseName =
            file.originalFile.name.replace(/\.[^.]+$/, '') + dimSuffix + ext;
          await zipRef.current!.addFile(baseName, outputBlob);

          updateFile(msg.id, {
            status: 'done',
            progress: 100,
            thumbnailUrl: thumbUrl,
            outputBlob, // keep for instant single-file download
            outputSize: outputBlob.size,
            outputExt: ext,
            flushedToZip: true,
            decodedOriginalBlob: msg.originalPreview ?? null,
            originalWidth: msg.sourceWidth,
            originalHeight: msg.sourceHeight,
            outputWidth: msg.outputWidth,
            outputHeight: msg.outputHeight,
          });

          trackConvertFile(
            file.inputFormat,
            fileOutputKey,
            file.size / 1024,
            outputBlob.size / 1024,
            Date.now() - fileStartTime,
          );
        }

        if (msg.status === 'error') {
          updateFile(msg.id, {
            status: 'error',
            error: msg.error,
          });
          trackConvertError(file.inputFormat, msg.error ?? 'unknown');
        }

        // Return worker to pool for reuse
        releaseWorker(worker);
        activeCountRef.current--;

        // Continue with next queued file, or release workers if batch done
        if (queueRef.current.length > 0) {
          processQueue();
        } else if (activeCountRef.current === 0) {
          // All conversions complete — terminate idle workers to free WASM heaps
          idleWorkersRef.current.forEach((w) => w.terminate());
          idleWorkersRef.current = [];
          workerPoolRef.current = [];
        }
      };

      worker.onerror = (err) => {
        updateFile(file.id, {
          status: 'error',
          error: err.message || 'Worker error',
        });
        // Terminate broken worker and remove from pool
        worker.terminate();
        workerPoolRef.current = workerPoolRef.current.filter((w) => w !== worker);
        activeCountRef.current--;
        if (queueRef.current.length > 0) {
          processQueue();
        } else if (activeCountRef.current === 0) {
          idleWorkersRef.current.forEach((w) => w.terminate());
          idleWorkersRef.current = [];
          workerPoolRef.current = [];
        }
      };

      // Send work to the worker
      const req = {
        id: file.id,
        file: file.originalFile,
        outputFormat: fileOutputMime,
        quality,
        keepSmaller,
        resize: resizeParams,
      };
      worker.postMessage(req);
    }
  }, [getWorker, releaseWorker, updateFile, outputFormat, quality, keepSmaller, compressMode, resizeOption]);

  // ---------------------------------------------------------------------------
  // Public API
  // ---------------------------------------------------------------------------

  const addFiles = useCallback(
    (incoming: File[]) => {
      // Filter out unsupported file types and oversized files
      const valid = incoming.filter(
        (f) => isAcceptedFile(f) && f.size <= MAX_FILE_SIZE,
      );
      if (valid.length === 0) return;

      const newEntries: ConvertFile[] = valid.map((f) => ({
        id: createClientId(),
        originalFile: f,
        name: f.name,
        inputFormat: extToInputFormat(f.name),
        size: f.size,
        status: 'queued' as const,
        progress: 0,
        thumbnailUrl: null,
        outputBlob: null,
        outputSize: 0,
        outputExt: null,
        error: null,
        flushedToZip: false,
        decodedOriginalBlob: null,
      }));

      // Eager dimension detection: read width/height for each file asynchronously
      for (const entry of newEntries) {
        createImageBitmap(entry.originalFile).then((bitmap) => {
          updateFile(entry.id, { originalWidth: bitmap.width, originalHeight: bitmap.height });
          bitmap.close();
        }).catch(() => { /* HEIC or unsupported — dimensions detected on worker side */ });
      }

      // Enforce max file count and total size inside the updater
      setFiles((prev) => {
        const remaining = Math.max(0, MAX_FILE_COUNT - prev.length);
        if (remaining === 0) {
          setDroppedCount(newEntries.length);
          return prev;
        }

        const currentTotal = prev.reduce((sum, f) => sum + f.size, 0);
        let budget = MAX_TOTAL_SIZE - currentTotal;
        const toAdd: ConvertFile[] = [];
        for (const entry of newEntries) {
          if (toAdd.length >= remaining) break;
          if (entry.size > budget) continue;
          budget -= entry.size;
          toAdd.push(entry);
        }
        if (toAdd.length === 0) {
          setDroppedCount(newEntries.length);
          return prev;
        }

        const dropped = newEntries.length - toAdd.length;
        if (dropped > 0) setDroppedCount(dropped);

        queueRef.current.push(...toAdd);
        queueMicrotask(() => processQueue());
        return [...prev, ...toAdd];
      });
    },
    [processQueue],
  );

  const removeFile = useCallback((id: string) => {
    setFiles((prev) => {
      const file = prev.find((f) => f.id === id);
      if (file?.thumbnailUrl) URL.revokeObjectURL(file.thumbnailUrl);
      return prev.filter((f) => f.id !== id);
    });
    queueRef.current = queueRef.current.filter((f) => f.id !== id);
    const cached = compareCacheRef.current.get(id);
    if (cached) {
      URL.revokeObjectURL(cached.originalUrl);
      URL.revokeObjectURL(cached.convertedUrl);
      compareCacheRef.current.delete(id);
      compareCacheOrderRef.current = compareCacheOrderRef.current.filter((i) => i !== id);
    }
  }, []);

  const clearAll = useCallback(() => {
    // Revoke all thumbnail URLs
    setFiles((prev) => {
      trackClearAll(prev.length);
      prev.forEach((f) => {
        if (f.thumbnailUrl) URL.revokeObjectURL(f.thumbnailUrl);
      });
      return [];
    });
    queueRef.current = [];
    // Terminate all workers in the pool
    workerPoolRef.current.forEach((w) => w.terminate());
    workerPoolRef.current = [];
    idleWorkersRef.current = [];
    activeCountRef.current = 0;
    zipRef.current = null;
    // Revoke all cached compare URLs
    compareCacheRef.current.forEach((cached) => {
      URL.revokeObjectURL(cached.originalUrl);
      URL.revokeObjectURL(cached.convertedUrl);
    });
    compareCacheRef.current.clear();
    compareCacheOrderRef.current = [];
  }, []);

  // ---------------------------------------------------------------------------
  // Download all -- finalize ZIP
  // ---------------------------------------------------------------------------

  const downloadAll = useCallback(() => {
    if (!zipRef.current) return;
    const now = new Date();
    const pad = (n: number) => String(n).padStart(2, '0');
    const ts = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
    zipRef.current.download(`picshift-converted-${ts}.zip`);
    trackDownloadZip(files.filter((f) => f.status === 'done').length);
  }, [files]);

  // ---------------------------------------------------------------------------
  // Download single -- re-convert on demand
  // ---------------------------------------------------------------------------

  const downloadSingle = useCallback(
    (id: string) => {
      const file = files.find((f) => f.id === id);
      if (!file || !file.outputBlob) return;

      const fileOutputKey = compressMode ? inputToOutputKey(file.originalFile.name) : outputFormat;
      const ext = file.outputExt ?? (OUTPUT_EXT[fileOutputKey] ?? '.bin');
      const resized = file.outputWidth && file.outputHeight
        && file.originalWidth && file.originalHeight
        && (file.outputWidth !== file.originalWidth || file.outputHeight !== file.originalHeight);
      const dimSuffix = resized ? `_${file.outputWidth}x${file.outputHeight}` : '';
      const fileName = file.originalFile.name.replace(/\.[^.]+$/, '') + dimSuffix + ext;
      triggerDownload(file.outputBlob, fileName);
      trackDownloadSingle(fileOutputKey);
    },
    [files, outputFormat, compressMode],
  );

  // ---------------------------------------------------------------------------
  // Compare view -- re-convert to get full-size URLs
  // ---------------------------------------------------------------------------

  /** Store a compare result in the LRU cache and update state. */
  const cacheAndSetCompare = useCallback(
    (id: string, originalUrl: string, convertedUrl: string, originalSize: number, convertedSize: number, format: OutputFormatKey, q: number) => {
      const entry: CompareCacheEntry = {
        fileId: id, originalUrl, convertedUrl, originalSize, convertedSize, format, quality: q,
      };
      const order = compareCacheOrderRef.current;
      const idx = order.indexOf(id);
      if (idx !== -1) order.splice(idx, 1);
      order.push(id);
      while (order.length > MAX_COMPARE_CACHE) {
        const evictId = order.shift()!;
        const evicted = compareCacheRef.current.get(evictId);
        if (evicted) {
          URL.revokeObjectURL(evicted.originalUrl);
          URL.revokeObjectURL(evicted.convertedUrl);
          compareCacheRef.current.delete(evictId);
        }
      }
      compareCacheRef.current.set(id, entry);
      setCompareState({ fileId: id, originalUrl, convertedUrl, originalSize, convertedSize });
    },
    [],
  );

  /** Decode HEIC/HEIF originals to displayable blob.
   *  Priority: cached blob → native browser decode → worker (libheif-js WASM) fallback. */
  const decodeOriginal = useCallback(
    async (file: ConvertFile): Promise<Blob> => {
      const needsDecode = ['heic', 'heif'].includes(file.inputFormat);
      if (!needsDecode) return file.originalFile;

      // 1. Use cached preview from conversion
      if (file.decodedOriginalBlob) return file.decodedOriginalBlob;

      // 2. Try native browser HEIC decode (fast on macOS Safari/Chrome)
      try {
        const bitmap = await createImageBitmap(file.originalFile);
        const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
        const ctx = canvas.getContext('2d')!;
        ctx.drawImage(bitmap, 0, 0);
        bitmap.close();
        const blob = await canvas.convertToBlob({ type: 'image/png' });
        // Cache for future compare opens
        updateFile(file.id, { decodedOriginalBlob: blob });
        return blob;
      } catch {
        // No native HEIC support — fall through to worker decode
      }

      // 3. Worker decode fallback (libheif-js WASM)
      const decodeWorker = new Worker(
        new URL('../workers/convert-worker.ts', import.meta.url),
        { type: 'module' },
      );
      compareWorkersRef.current.push(decodeWorker);
      const blob = await new Promise<Blob>((resolve, reject) => {
        decodeWorker.onmessage = (e: MessageEvent<WorkerResponse>) => {
          if (e.data.status === 'done') resolve(e.data.blob!);
          if (e.data.status === 'error') reject(new Error(e.data.error));
        };
        decodeWorker.onerror = (err) => reject(err);
        decodeWorker.postMessage({
          id: file.id,
          file: file.originalFile,
          outputFormat: 'image/png',
          quality: 100,
        });
      });
      decodeWorker.terminate();
      // Cache for future compare opens
      updateFile(file.id, { decodedOriginalBlob: blob });
      return blob;
    },
    [],
  );

  const openCompare = useCallback(
    async (id: string) => {
      const file = files.find((f) => f.id === id);
      if (!file) return;
      trackCompareOpen();

      const cmpOutputKey = compressMode ? inputToOutputKey(file.originalFile.name) : outputFormat;

      // Check cache — hit if same file, format, and quality
      const cached = compareCacheRef.current.get(id);
      if (cached && cached.format === cmpOutputKey && cached.quality === quality) {
        setCompareState({
          fileId: id,
          originalUrl: cached.originalUrl,
          convertedUrl: cached.convertedUrl,
          originalSize: cached.originalSize,
          convertedSize: cached.convertedSize,
        });
        return;
      }

      // Fast path: use existing outputBlob if available (skip re-conversion)
      if (file.outputBlob && file.status === 'done') {
        setCompareLoading(true);
        try {
          const originalBlob = await decodeOriginal(file);
          const originalUrl = URL.createObjectURL(originalBlob);
          const convertedUrl = URL.createObjectURL(file.outputBlob);
          cacheAndSetCompare(id, originalUrl, convertedUrl, file.originalFile.size, file.outputBlob.size, cmpOutputKey, quality);
        } catch {
          // Decode failed — fall through to full worker path below
        } finally {
          compareWorkersRef.current = [];
          setCompareLoading(false);
        }
        return;
      }

      // Slow path: spawn worker to convert
      setCompareLoading(true);
      compareWorkersRef.current = [];

      try {
        const worker = new Worker(
          new URL('../workers/convert-worker.ts', import.meta.url),
          { type: 'module' },
        );
        compareWorkersRef.current.push(worker);

        const convertedBlob = await new Promise<Blob>((resolve, reject) => {
          worker.onmessage = (e: MessageEvent<WorkerResponse>) => {
            if (e.data.status === 'done') resolve(e.data.blob!);
            if (e.data.status === 'error') reject(new Error(e.data.error));
          };
          worker.onerror = (err) => reject(err);
          worker.postMessage({
            id: file.id,
            file: file.originalFile,
            outputFormat: OUTPUT_MIME[cmpOutputKey],
            quality,
          });
        });

        worker.terminate();

        const originalBlob = await decodeOriginal(file);
        const originalUrl = URL.createObjectURL(originalBlob);
        const convertedUrl = URL.createObjectURL(convertedBlob);
        cacheAndSetCompare(id, originalUrl, convertedUrl, file.originalFile.size, convertedBlob.size, cmpOutputKey, quality);
      } catch {
        // Cancelled or failed — ignore
      } finally {
        compareWorkersRef.current = [];
        setCompareLoading(false);
      }
    },
    [files, outputFormat, quality, compressMode, cacheAndSetCompare, decodeOriginal],
  );

  const cancelCompare = useCallback(() => {
    compareWorkersRef.current.forEach((w) => w.terminate());
    compareWorkersRef.current = [];
    setCompareLoading(false);
  }, []);

  const closeCompare = useCallback(() => {
    // Don't revoke URLs — they're cached for reuse
    setCompareState(null);
  }, []);

  // ---------------------------------------------------------------------------
  // Return value
  // ---------------------------------------------------------------------------

  const dismissDroppedWarning = useCallback(() => setDroppedCount(0), []);

  return {
    files,
    outputFormat,
    quality,
    resizeOption,
    setOutputFormat,
    setQuality,
    setResizeOption,
    addFiles,
    removeFile,
    clearAll,
    downloadAll,
    downloadSingle,
    openCompare,
    cancelCompare,
    closeCompare,
    compareState,
    compareLoading,
    completedCount,
    totalCount,
    isConverting,
    droppedCount,
    dismissDroppedWarning,
  };
}
