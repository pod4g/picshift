import type { InputFormat } from '../types';

/**
 * Detect image format by inspecting magic bytes in the file header.
 * Returns the detected InputFormat, or null if the format is unrecognized.
 */
export async function detectFormat(file: File): Promise<InputFormat | null> {
  const buffer = await file.slice(0, 12).arrayBuffer();
  const bytes = new Uint8Array(buffer);

  if (bytes.length < 4) return null;

  // JPEG: FF D8 FF
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) {
    return 'jpeg';
  }

  // PNG: 89 50 4E 47 0D 0A 1A 0A
  if (
    bytes[0] === 0x89 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x4e &&
    bytes[3] === 0x47 &&
    bytes[4] === 0x0d &&
    bytes[5] === 0x0a &&
    bytes[6] === 0x1a &&
    bytes[7] === 0x0a
  ) {
    return 'png';
  }

  // WebP: RIFF .... WEBP
  if (
    bytes[0] === 0x52 && // R
    bytes[1] === 0x49 && // I
    bytes[2] === 0x46 && // F
    bytes[3] === 0x46 && // F
    bytes[8] === 0x57 && // W
    bytes[9] === 0x45 && // E
    bytes[10] === 0x42 && // B
    bytes[11] === 0x50 // P
  ) {
    return 'webp';
  }

  // BMP: 42 4D
  if (bytes[0] === 0x42 && bytes[1] === 0x4d) {
    return 'bmp';
  }

  // HEIC / HEIF / AVIF share the ISO Base Media File Format (ISOBMFF).
  // The ftyp box starts at offset 4 with ASCII "ftyp", followed by the brand.
  if (
    bytes[4] === 0x66 && // f
    bytes[5] === 0x74 && // t
    bytes[6] === 0x79 && // y
    bytes[7] === 0x70 // p
  ) {
    // Read a larger chunk so we can inspect the major brand (bytes 8..11).
    const brand = String.fromCharCode(bytes[8], bytes[9], bytes[10], bytes[11]);

    // AVIF brands
    if (brand === 'avif' || brand === 'avis') {
      return 'avif';
    }

    // HEIC brands (hvc1-based)
    if (brand === 'heic' || brand === 'heix' || brand === 'heim' || brand === 'heis') {
      return 'heic';
    }

    // HEIF brands (generic / MPEG-H)
    if (brand === 'mif1' || brand === 'msf1' || brand === 'heif' || brand === 'hevs') {
      return 'heif';
    }
  }

  return null;
}
