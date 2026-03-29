import { execSync } from 'node:child_process';
import { writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const outPath = resolve(root, 'src/.file-dates.json');

try {
  const isShallow = execSync('git rev-parse --is-shallow-repository', {
    encoding: 'utf-8', cwd: root,
  }).trim() === 'true';

  if (isShallow) {
    if (existsSync(outPath)) {
      console.log('[gen-lastmod] Shallow clone detected, using committed .file-dates.json');
      process.exit(0);
    }
    console.warn('[gen-lastmod] WARNING: shallow clone and no committed .file-dates.json — lastmod will fallback to build time');
    writeFileSync(outPath, '{}');
    process.exit(0);
  }

  const raw = execSync(
    'git log --format="COMMIT %aI" --name-only --diff-filter=ACRM',
    { encoding: 'utf-8', maxBuffer: 20 * 1024 * 1024, cwd: root },
  );

  const fileDates = {};
  let currentDate = null;

  for (const line of raw.split('\n')) {
    if (line.startsWith('COMMIT ')) {
      currentDate = line.slice(7).trim();
    } else if (line.trim() && currentDate) {
      const file = line.trim();
      if (!fileDates[file]) {
        fileDates[file] = currentDate;
      }
    }
  }

  const commitCount = raw.split('\n').filter((l) => l.startsWith('COMMIT ')).length;
  writeFileSync(outPath, JSON.stringify(fileDates));
  console.log(`[gen-lastmod] Indexed ${Object.keys(fileDates).length} files from ${commitCount} commits`);
} catch (err) {
  if (existsSync(outPath)) {
    console.log('[gen-lastmod] Git unavailable, using committed .file-dates.json');
  } else {
    writeFileSync(outPath, '{}');
    console.warn('[gen-lastmod] Git unavailable and no committed .file-dates.json:', err.message);
  }
}
