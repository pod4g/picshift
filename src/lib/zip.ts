import { Zip, ZipPassThrough } from 'fflate';
import { triggerDownload } from './download';

/**
 * Streaming ZIP builder using fflate.
 * Uses ZipPassThrough (STORE, no compression) since images are already compressed.
 * Collects output chunks in an array and merges them into a single Blob on download.
 */
export class StreamingZip {
  private chunks: Uint8Array[] = [];
  private zip: Zip;
  private totalSize = 0;
  private finalized = false;

  constructor() {
    this.zip = new Zip((err, chunk, final) => {
      if (err) {
        throw err;
      }
      this.chunks.push(chunk);
      this.totalSize += chunk.length;
    });
  }

  /** Current accumulated size of the ZIP in bytes. */
  get size(): number {
    return this.totalSize;
  }

  /** Add a file to the ZIP archive. */
  async addFile(filename: string, blob: Blob): Promise<void> {
    if (this.finalized) {
      throw new Error('Cannot add files after finalization.');
    }

    const buffer = new Uint8Array(await blob.arrayBuffer());
    const entry = new ZipPassThrough(filename);
    this.zip.add(entry);
    entry.push(buffer, true);
  }

  /** Finalize the ZIP archive. No more files can be added after this. */
  finalize(): void {
    if (this.finalized) return;
    this.finalized = true;
    this.zip.end();
  }

  /** Finalize (if needed) and trigger a browser download of the ZIP. */
  download(filename: string): void {
    if (!this.finalized) {
      this.finalize();
    }

    const blob = new Blob(this.chunks as BlobPart[], { type: 'application/zip' });
    triggerDownload(blob, filename);

    // Free chunk memory — the Blob holds its own copy of the data.
    this.chunks = [];
    this.totalSize = 0;
  }
}
