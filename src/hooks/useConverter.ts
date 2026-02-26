import { useState, useCallback, useRef, useMemo } from 'react';
import type {
  ConvertFile,
  InputFormat,
  OutputFormatKey,
  WorkerResponse,
} from '../types';
import { OUTPUT_MIME, OUTPUT_EXT } from '../types';
import { triggerDownload } from '../lib/download';
import { StreamingZip } from '../lib/zip';
import { isAcceptedFile, MAX_FILE_SIZE, MAX_FILE_COUNT, MAX_TOTAL_SIZE } from '../lib/format-utils';

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

const MAX_WORKERS = 2;
const MAX_COMPARE_CACHE = 10;

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
}) {
  const keepSmaller = options?.keepSmaller ?? false;
  const compressMode = options?.compressMode ?? false;
  const [files, setFiles] = useState<ConvertFile[]>([]);
  const [outputFormat, setOutputFormat] = useState<OutputFormatKey>(options?.initialFormat ?? 'jpg');
  const [quality, setQuality] = useState<number>(options?.initialQuality ?? 85);
  const [compareState, setCompareState] = useState<CompareState | null>(null);
  const [compareLoading, setCompareLoading] = useState(false);

  // Refs that survive re-renders
  const workersRef = useRef<Worker[]>([]);
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

  /** Create (or reuse) a worker and return it. */
  const getWorker = useCallback((): Worker => {
    const w = new Worker(
      new URL('../workers/convert-worker.ts', import.meta.url),
      { type: 'module' },
    );
    workersRef.current.push(w);
    return w;
  }, []);

  /** Update a single file entry by id. */
  const updateFile = useCallback(
    (id: string, patch: Partial<ConvertFile>) => {
      setFiles((prev) =>
        prev.map((f) => (f.id === id ? { ...f, ...patch } : f)),
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

      // Determine the effective output format for this file
      const fileOutputKey = compressMode ? inputToOutputKey(file.originalFile.name) : outputFormat;
      const fileOutputMime = OUTPUT_MIME[fileOutputKey];

      worker.onmessage = async (e: MessageEvent<WorkerResponse>) => {
        const msg = e.data;

        if (msg.status === 'progress') {
          updateFile(msg.id, { progress: msg.progress });
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
          const baseName =
            file.originalFile.name.replace(/\.[^.]+$/, '') + ext;
          await zipRef.current!.addFile(baseName, outputBlob);

          updateFile(msg.id, {
            status: 'done',
            progress: 100,
            thumbnailUrl: thumbUrl,
            outputBlob, // keep for instant single-file download
            outputSize: outputBlob.size,
            outputExt: ext,
            flushedToZip: true,
          });
        }

        if (msg.status === 'error') {
          updateFile(msg.id, {
            status: 'error',
            error: msg.error,
          });
        }

        // Cleanup worker
        worker.terminate();
        workersRef.current = workersRef.current.filter((w) => w !== worker);
        activeCountRef.current--;

        // Continue with next queued file
        processQueue();
      };

      worker.onerror = (err) => {
        updateFile(file.id, {
          status: 'error',
          error: err.message || 'Worker error',
        });
        worker.terminate();
        workersRef.current = workersRef.current.filter((w) => w !== worker);
        activeCountRef.current--;
        processQueue();
      };

      // Send work to the worker
      const req = {
        id: file.id,
        file: file.originalFile,
        outputFormat: fileOutputMime,
        quality,
        keepSmaller,
      };
      worker.postMessage(req);
    }
  }, [getWorker, updateFile, outputFormat, quality, keepSmaller, compressMode]);

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
        id: crypto.randomUUID(),
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
      }));

      // Enforce max file count and total size inside the updater
      setFiles((prev) => {
        const remaining = Math.max(0, MAX_FILE_COUNT - prev.length);
        if (remaining === 0) return prev;

        const currentTotal = prev.reduce((sum, f) => sum + f.size, 0);
        let budget = MAX_TOTAL_SIZE - currentTotal;
        const toAdd: ConvertFile[] = [];
        for (const entry of newEntries) {
          if (toAdd.length >= remaining) break;
          if (entry.size > budget) continue;
          budget -= entry.size;
          toAdd.push(entry);
        }
        if (toAdd.length === 0) return prev;

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
      prev.forEach((f) => {
        if (f.thumbnailUrl) URL.revokeObjectURL(f.thumbnailUrl);
      });
      return [];
    });
    queueRef.current = [];
    // Terminate all workers
    workersRef.current.forEach((w) => w.terminate());
    workersRef.current = [];
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
    zipRef.current.download('picshift-converted.zip');
  }, []);

  // ---------------------------------------------------------------------------
  // Download single -- re-convert on demand
  // ---------------------------------------------------------------------------

  const downloadSingle = useCallback(
    (id: string) => {
      const file = files.find((f) => f.id === id);
      if (!file || !file.outputBlob) return;

      const ext = file.outputExt ?? (OUTPUT_EXT[compressMode ? inputToOutputKey(file.originalFile.name) : outputFormat] ?? '.bin');
      const fileName = file.originalFile.name.replace(/\.[^.]+$/, '') + ext;
      triggerDownload(file.outputBlob, fileName);
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

  /** Decode HEIC/HEIF originals to displayable PNG via worker. */
  const decodeOriginal = useCallback(
    async (file: ConvertFile): Promise<Blob> => {
      const needsDecode = ['heic', 'heif'].includes(file.inputFormat);
      if (!needsDecode) return file.originalFile;

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
      return blob;
    },
    [],
  );

  const openCompare = useCallback(
    async (id: string) => {
      const file = files.find((f) => f.id === id);
      if (!file) return;

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

  return {
    files,
    outputFormat,
    quality,
    setOutputFormat,
    setQuality,
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
  };
}
