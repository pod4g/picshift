import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const read = (relative) => readFileSync(resolve(root, relative), 'utf8');

function sourceFiles(directory) {
  const files = [];
  for (const entry of readdirSync(resolve(root, directory))) {
    const relative = join(directory, entry);
    const stat = statSync(resolve(root, relative));
    if (stat.isDirectory()) files.push(...sourceFiles(relative));
    else if (/\.(?:astro|md|ts|tsx)$/.test(entry)) files.push(relative);
  }
  return files;
}

function localizedToolBlock(source, route) {
  const marker = new RegExp(`^    ['"]${route}['"]\\s*:\\s*\\{`, 'm');
  const match = marker.exec(source);
  assert.ok(match, `localized route block must exist: ${route}`);
  const start = match.index;
  const rest = source.slice(start + match[0].length);
  const next = rest.search(/^    ['"][^'"]+['"]\s*:\s*\{/m);
  return source.slice(start, next === -1 ? source.length : start + match[0].length + next);
}

test('published input, output, and batch facts match runtime limits', () => {
  const types = read('src/types/index.ts');
  const limits = read('src/lib/format-utils.ts');
  const schema = read('src/lib/softwareApplicationSchema.ts');
  const converter = read('src/components/converter/Converter.tsx');
  const worker = read('src/workers/convert-worker.ts');
  const summaries = `${read('public/llms.txt')}\n${read('public/llms-full.txt')}`;

  assert.match(types, /InputFormat = 'heic' \| 'heif' \| 'webp' \| 'png' \| 'jpg' \| 'jpeg' \| 'avif' \| 'bmp'/);
  assert.match(types, /OutputFormatKey = 'jpg' \| 'png' \| 'webp' \| 'avif'/);
  assert.match(limits, /MAX_FILE_SIZE = 50 \* 1024 \* 1024/);
  assert.match(limits, /MAX_FILE_COUNT = 200/);
  assert.match(limits, /MAX_TOTAL_SIZE = 1024 \* 1024 \* 1024/);

  assert.match(schema, /HEIC, HEIF, JPG, PNG, WebP, AVIF, and BMP inputs to JPG, PNG, WebP, or AVIF outputs/);
  assert.match(schema, /Batch process up to 200 images per batch/);
  assert.match(schema, /PNG uses lossy palette quantization below quality 95 and lossless OxiPNG optimization at quality 95-100/);
  assert.match(schema, /Browser createImageBitmap decoding/);
  assert.match(schema, /libheif HEIC\/HEIF decoding/);
  assert.match(schema, /MozJPEG output encoding/);
  assert.match(schema, /JSquash WebP output encoding/);
  assert.match(schema, /JSquash AVIF output encoding/);
  assert.doesNotMatch(schema, /(?:MozJPEG|JSquash[^'\n]*)[^'\n]*decod/i);
  assert.doesNotMatch(schema, /any direction|per session/i);
  assert.match(converter, /defaultQuality = defaultOutputFormat === 'png' \? 100 : 85/);
  assert.match(converter, /setQuality\(defaultQuality\)/);
  assert.match(worker, /if \(quality >= 95\)[\s\S]*Lossless: native PNG \+ oxipng optimization only/);
  assert.match(worker, /Lossy quantization \(pngquant-style\) \+ oxipng optimization/);

  assert.match(summaries, /50 MB per file/);
  assert.match(summaries, /200 files/);
  assert.match(summaries, /1 GB total per batch/);
  assert.match(summaries, /HEIC\/HEIF, JPG\/JPEG, PNG, WebP, AVIF, and BMP inputs/);
  assert.match(summaries, /JPG, PNG, WebP, or AVIF/);
  assert.match(summaries, /browser(?:'s)? createImageBitmap|Browser createImageBitmap/);
  assert.match(summaries, /libheif fallback for HEIC\/HEIF decoding/);
  assert.match(summaries, /MozJPEG[^\n]*output encoding only/);
  assert.match(summaries, /@jsquash\/webp[^\n]*output encoding only/);
  assert.match(summaries, /@jsquash\/avif[^\n]*output encoding only/);
  assert.doesNotMatch(
    summaries,
    /(?:MozJPEG\s*\/\s*@jsquash\/jpeg|@jsquash\/(?:webp|avif))[^\n]*encoding\/decoding/i,
  );
});

test('all locale home summaries disclose the real limits', () => {
  const ui = read('src/i18n/ui.ts');
  const descriptions = [...ui.matchAll(
    /freeDesc:\s*(?:\r?\n\s*)?('(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*")/g,
  )].map((match) => match[1]);

  assert.equal(descriptions.length, 12);
  for (const description of descriptions) {
    assert.match(description, /50\s*MB|50MB|50\s*Mo|50\s*МБ|50\s*م\.ب/);
    assert.match(description, /200/);
    assert.match(description, /1\s*GB|1GB|1\s*Go|1\s*ГБ|1\s*غ\.ب/);
  }
  assert.doesNotMatch(ui, /no file limits|unlimited files|zero data retention|100% private/i);
});

test('public content avoids stale offline and unsupported benchmark promises', () => {
  const files = [
    ...sourceFiles('src/content/blog'),
    ...sourceFiles('src/data'),
    ...sourceFiles('src/i18n'),
    ...sourceFiles('src/pages'),
    'public/llms.txt',
    'public/llms-full.txt',
  ];
  const source = files.map((file) => read(file)).join('\n');

  assert.doesNotMatch(source, /after (?:the )?first page load[^\n]*(?:offline|continues? to convert)/i);
  assert.doesNotMatch(source, /despu[eé]s de cargar la p[aá]gina[^\n]*(?:sigue funcionando|sin conexi[oó]n)/i);
  assert.doesNotMatch(source, /no file limits|there(?:'|’)s no hard limit|zero data retention|100% private/i);
  assert.doesNotMatch(
    source,
    /(?:100\s*%|100％|100٪)[^\n]{0,60}(?:private|privad|privé|privat|riservat|隐私|隱私|プライベート|개인|خاص)/i,
  );
  assert.doesNotMatch(
    source,
    /\b(?:unlimited|illimité(?:e|es|s)?|unbegrenzt|illimitat[oaie]?|ilimitad[oa]s?|sem limites|без ограничений|无限|無限|無制限|무제한|غير محدود)\b/i,
  );
  assert.doesNotMatch(
    source,
    /(?:15\s*[-–~〜]\s*25|20\s*[-–~〜]\s*30|25\s*[-–~〜]\s*35|30\s*[-–~〜]\s*50|40\s*[-–~〜]\s*60|50\s*[-–~〜]\s*70)%|3\s*[-–~〜]\s*5(?:x|×| times)|no perceptible loss|visually indistinguishable/i,
  );
  assert.doesNotMatch(source, /\b\d+(?:\.\d+)?\s*MB[^\n]{0,50}\b\d+(?:\.\d+)?\s*KB\b/i);
  assert.doesNotMatch(
    source,
    /preserves every pixel|exact pixel data|lossless PNG export|pixel-perfect PNG|conserva todos los píxeles/i,
  );

  const metadataClaims = [
    'src/data/tools.ts',
    ...sourceFiles('src/i18n/translations'),
    'src/lib/softwareApplicationSchema.ts',
    'public/llms.txt',
    'public/llms-full.txt',
  ].map((file) => read(file)).join('\n');
  assert.doesNotMatch(
    metadataClaims,
    /removes all (?:metadata|EXIF)|all EXIF data (?:is|are) removed|resulting image contains no embedded metadata|彻底删除这些信息|所有 EXIF 数据都会被删除|すべてのEXIFデータが削除|모든 EXIF 데이터가 삭제|se eliminan todos los datos EXIF|toutes les données EXIF sont supprimées|alle EXIF-Daten werden entfernt|todos os dados EXIF são removidos|удаляются все данные EXIF|تُحذف جميع بيانات EXIF|vengono rimossi tutti i dati EXIF/i,
  );
  assert.match(metadataClaims, /browser-added encoder or color-profile data may remain/i);

  const formatDocs = `${read('src/pages/docs/format-compatibility.astro')}\n${read('src/pages/[lang]/docs/format-compatibility.astro')}`;
  assert.doesNotMatch(formatDocs, /WebP\s*(?:to|→|->|para|vers|zu|in|转|轉|إلى)\s*HEIF/i);
  assert.match(formatDocs, /WebP to JPG/);
  assert.match(formatDocs, /HEIC, HEIF, JPG, JPEG, PNG, WebP, AVIF, (?:and )?BMP/);
  assert.match(formatDocs, /HEIC, HEIF, and BMP are input-only/);
  assert.doesNotMatch(formatDocs, /JPG\/PNG to HEIC Converter/i);

  const privacyDocs = read('src/pages/docs/privacy-local-processing.astro');
  assert.doesNotMatch(privacyDocs, /WebP to HEIF Converter/i);

  const unsupportedFormatPages = `${read('src/pages/webp-to-heif.astro')}\n${read('src/pages/[lang]/webp-to-heif.astro')}`;
  assert.doesNotMatch(unsupportedFormatPages, /WebP to HEIF Converter/i);
});

test('Spanish WebP-to-PNG FAQ states the conditional PNG quality boundary', () => {
  const overrides = read('src/i18n/toolFaqOverrides.ts');
  const start = overrides.indexOf("    'webp-to-png': [");
  const end = overrides.indexOf('\n  fr:', start);
  assert.ok(start >= 0 && end > start, 'Spanish webp-to-png override block must exist');
  const faqBlock = overrides.slice(start, end);

  assert.doesNotMatch(faqBlock, /conserva todos los píxeles/i);
  assert.match(faqBlock, /calidad 95-100/i);
  assert.match(faqBlock, /por debajo de 95/i);
  assert.match(faqBlock, /cuantización de paleta/i);
  assert.match(faqBlock, /OxiPNG sin pérdida/i);
});

test('every localized PNG route explains the quality boundary', () => {
  const locales = ['en', 'zh', 'zh-Hant', 'es', 'fr', 'de', 'ja', 'ko', 'pt', 'ru', 'ar', 'it'];
  const pngRoutes = ['heic-to-png', 'webp-to-png', 'jpg-to-png', 'avif-to-png'];

  for (const locale of locales) {
    const translation = read(`src/i18n/translations/${locale}.ts`);
    for (const route of pngRoutes) {
      const block = localizedToolBlock(translation, route);
      assert.match(block, /95/, `${locale}/${route} must state the quality boundary`);
      assert.match(block, /OxiPNG/i, `${locale}/${route} must identify lossless optimization`);
    }
  }

  const docsFaqs = read('src/i18n/docsFaqs.ts');
  assert.ok((docsFaqs.match(/95/g) ?? []).length >= locales.length);
});

test('localized HEIC-to-JPG copy does not promise source metadata retention', () => {
  const locales = ['en', 'zh', 'zh-Hant', 'es', 'fr', 'de', 'ja', 'ko', 'pt', 'ru', 'ar', 'it'];
  const blocks = Object.fromEntries(locales.map((locale) => {
    const source = read(`src/i18n/translations/${locale}.ts`);
    return [locale, localizedToolBlock(source, 'heic-to-jpg')];
  }));
  const allBlocks = Object.values(blocks).join('\n');

  assert.doesNotMatch(allBlocks, /conserva la orientación correcta y respeta los metadatos básicos/i);
  assert.doesNotMatch(allBlocks, /behält die korrekte Drehung bei und respektiert die wichtigsten Metadaten/i);
  assert.doesNotMatch(allBlocks, /يحتفظ التحويل بالبيانات الأساسية مثل تاريخ الالتقاط وإعدادات الكاميرا/i);
  assert.match(blocks.es, /no copia intencionadamente[^\n]*(?:fecha|GPS)[^\n]*EXIF/i);
  assert.match(blocks.de, /kopiert[^\n]*(?:Aufnahmedatum|GPS)[^\n]*EXIF[^\n]*nicht absichtlich/i);
  assert.match(blocks.ar, /لا ينسخ عمدًا[^\n]*(?:تاريخ الالتقاط|GPS)[^\n]*EXIF/i);
});

test('privacy copy does not invent a fixed analytics deletion period', () => {
  const privacyCopy = [
    read('src/pages/docs/privacy-local-processing.astro'),
    read('src/pages/[lang]/docs/privacy-local-processing.astro'),
    ...sourceFiles('src/i18n/translations').map((file) => read(file)),
  ].join('\n');

  assert.doesNotMatch(
    privacyCopy,
    /six months|6 months|seis meses|six mois|sechs Monate|6 か月|6개월|шести месяцев|ستة أشهر|sei mesi|6 个月|6 個月/i,
  );
  assert.match(privacyCopy, /does not (?:publish|promise) a fixed deletion period/i);
});

test('editorial format claims stay within implemented product behavior', () => {
  const webp = read('src/content/blog/webp-explained.md');
  const compression = read('src/content/blog/compress-without-losing-quality.md');

  assert.doesNotMatch(webp, /PicShift itself[^\n]*this very page/i);
  assert.doesNotMatch(webp, /PNG can't do animation/i);
  assert.match(webp, /PNG can animate through APNG/i);
  assert.doesNotMatch(webp, /compare lossless and lossy output as appropriate/i);
  assert.match(webp, /current quality slider uses lossy WebP encoding/i);

  assert.doesNotMatch(compression, /re-encode would only make a file \*bigger\*[^\n]*stops/i);
  assert.match(
    compression,
    /image-compressor mode, and same-format conversions, keep the original[^\n]*ordinary format-conversion routes still return the requested format/i,
  );
});

test('the privacy guide links to a directly relevant supported tool', () => {
  const privacyGuide = read('src/pages/docs/privacy-local-processing.astro');

  assert.match(privacyGuide, /href="\/metadata-remover"[^>]*>Metadata Remover<\/a>/);
  assert.doesNotMatch(privacyGuide, /href="\/webp-to-heif"/);
});

test('the HEIC to WebP title experiment changes only the title promise', () => {
  const englishTranslations = read('src/i18n/translations/en.ts');
  const block = englishTranslations.match(/'heic-to-webp': \{([\s\S]*?)\n    \},/)?.[1] ?? '';

  assert.match(block, /title: 'HEIC to WebP Converter — Free, No Upload \| PicShift'/);
  assert.match(block, /description:\s*\n\s*'Convert HEIC photos to WebP and compare the actual size and visual result\./);
  assert.match(block, /h1: 'Convert HEIC to WebP'/);
});

test('schema entity references resolve to emitted stable ids and a visible author', () => {
  const entities = read('src/lib/schemaEntities.ts');
  const layout = read('src/layouts/Layout.astro');
  const blog = read('src/pages/blog/[slug].astro');

  assert.match(entities, /PICSHIFT_WEBSITE_ID = 'https:\/\/picshift\.app\/#website'/);
  assert.match(entities, /PICSHIFT_WEB_APPLICATION_ID = 'https:\/\/picshift\.app\/#web-application'/);
  assert.match(layout, /'@id': PICSHIFT_WEBSITE_ID/);
  assert.match(layout, /publisher: PICSHIFT_ORGANIZATION/);
  assert.match(blog, /rel="author"[^>]*>PicShift<\/a>/);
});
