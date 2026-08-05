import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

import {
  applyFileLimits,
  MAX_FILE_COUNT,
  MAX_FILE_SIZE,
} from '../../src/lib/format-utils.ts';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');

test('metadata uploads enforce the shared per-file, count, and total limits', () => {
  const oversized = { size: MAX_FILE_SIZE + 1 };
  const exactLimit = { size: MAX_FILE_SIZE };
  const sizeResult = applyFileLimits([], [oversized, exactLimit]);
  assert.deepEqual(sizeResult.accepted, [exactLimit]);
  assert.deepEqual(sizeResult.rejected.fileSize, [oversized]);

  const existingAtCountLimit = Array.from(
    { length: MAX_FILE_COUNT },
    () => ({ size: 1 }),
  );
  const countCandidate = { size: 1 };
  const countResult = applyFileLimits(existingAtCountLimit, [countCandidate]);
  assert.deepEqual(countResult.accepted, []);
  assert.deepEqual(countResult.rejected.fileCount, [countCandidate]);

  const existingNearTotalLimit = Array.from(
    { length: 20 },
    () => ({ size: MAX_FILE_SIZE }),
  );
  const totalCandidate = { size: 25 * 1024 * 1024 };
  const totalResult = applyFileLimits(
    existingNearTotalLimit,
    [totalCandidate],
  );
  assert.deepEqual(totalResult.accepted, []);
  assert.deepEqual(totalResult.rejected.totalSize, [totalCandidate]);
});

test('metadata cleaning has no original-file success shortcut and reports scan failures', () => {
  const component = readFileSync(
    resolve(root, 'src/components/metadata/MetadataRemoverTool.tsx'),
    'utf8',
  );
  const cleanStart = component.indexOf('const handleCleanAll');
  const cleanEnd = component.indexOf('const handleDownloadAll');
  const cleanFlow = component.slice(cleanStart, cleanEnd);

  assert.ok(cleanStart > 0 && cleanEnd > cleanStart);
  assert.match(cleanFlow, /const blob = await cleanImage\(updatedFiles\[i\]\.file\)/);
  assert.doesNotMatch(cleanFlow, /totalCount\s*===\s*0/);
  assert.doesNotMatch(cleanFlow, /cleanedBlob:\s*updatedFiles\[i\]\.file/);
  assert.match(cleanFlow, /status: 'error'/);
  assert.match(component, /metadataScanStatus: 'failed'/);
  assert.match(component, /Metadata parser reported errors/);
  assert.match(component, /applyFileLimits\(/);
  assert.doesNotMatch(component, /Removing them keeps only pixel data/i);
  assert.doesNotMatch(component, /Remove all metadata & download/i);
});
