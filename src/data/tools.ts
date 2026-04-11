import type { ToolPageConfig } from '../types'

export const TOOL_PAGES: ToolPageConfig[] = [
  {
    slug: 'image-resizer',
    title: 'Image Resizer - Resize Image Dimensions Online | PicShift',
    description:
      'Resize image dimensions in your browser with presets or exact width and height. Private, no upload, and useful for web, docs, and social layouts.',
    defaultInputFormat: null,
    h1: 'Resize Images',
    introText:
      'Resize images to exact dimensions for websites, docs, product listings, or social posts. Use presets or custom width and height, then convert format and download in one step without uploads.',
    howToSteps: [
      'Upload your images by dragging them into the box above, or click to browse.',
      'Pick a size preset or enter custom dimensions.',
      'Choose output format and quality, then download.',
    ],
    faqs: [
      {
        q: 'How do I resize an image to exact dimensions online?',
        a: 'Use the Custom mode to enter exact width and height in pixels. If you want a common target size instead, PicShift also provides presets such as Max 1920px, Max 1080px, 50%, and 75%.',
      },
      {
        q: 'Can I resize images for websites, docs, or social posts?',
        a: 'Yes. PicShift is useful when you need images to fit a layout, content editor, listing page, or social platform. You can resize first, then convert format and adjust quality in the same workflow.',
      },
      {
        q: 'How do I resize an image without uploading it?',
        a: 'PicShift resizes images locally in your browser. You can change the dimensions, switch format, and download the result without sending the source file to a server.',
      },
      {
        q: 'Does resizing an image reduce quality?',
        a: 'Downscaling uses high-quality resampling, so reducing dimensions alone is usually safe. Visible quality loss is more often caused by strong lossy compression, which you can control separately with the quality slider.',
      },
      {
        q: 'Can I resize and convert format at the same time?',
        a: 'Yes. You can change both the output format (JPG, PNG, WebP, AVIF) and the dimensions in a single step.',
      },
    ],
    searchIntentSections: [
      {
        title: 'When image resizing is the right fix',
        body: 'Use resizing when the image dimensions are larger than the target layout needs. This is the most direct fix for oversized product images, blog illustrations, screenshots, and social assets.',
      },
      {
        title: 'Best use cases for exact dimensions',
        body: 'Exact width and height are useful when a CMS, marketplace, or content editor expects a specific slot size. Presets help with quick downsizing, while custom dimensions help when your layout has strict requirements.',
      },
      {
        title: 'When resizing alone is not enough',
        body: 'If the image is still too large after resizing, combine resizing with format conversion or compression. The biggest gains often come from reducing both dimensions and transfer format overhead together.',
      },
    ],
  },
  {
    slug: 'image-compressor',
    title: 'Image Compressor - Reduce Image Size Without Upload | PicShift',
    description:
      'Compress images locally in your browser and reduce JPG, PNG, WebP, HEIC, or AVIF file size without upload. Compare quality and keep the smaller result when needed.',
    defaultInputFormat: null,
    h1: 'Compress Images',
    introText:
      'Reduce image file size for faster uploads, lighter pages, and easier sharing without sending files to a server. Adjust quality, compare results, and keep the smaller output when compression does not help.',
    howToSteps: [
      'Drag and drop your images into the box above, or click to browse.',
      'Adjust the quality slider to control compression level.',
      'Click Download to save the compressed images.',
    ],
    faqs: [
      {
        q: 'How much can I compress my images?',
        a: 'Compression result is source-dependent. A quality setting of 80% reduces JPG file sizes by 40-60% in benchmark comparisons with minimal visible difference. Use the comparison view to verify before downloading.',
      },
      {
        q: 'What formats can I compress?',
        a: 'You can compress JPG, PNG, WebP, HEIC, and AVIF images. The output format can be JPG, PNG, WebP, or AVIF.',
      },
      {
        q: 'How do I reduce image size without losing too much quality?',
        a: 'Start around quality 80, compare the result, then lower quality in small steps until artifacts become visible in important details. PicShift lets you preview and keep the smaller result when that is the better outcome.',
      },
      {
        q: 'Why is my image still large after compression?',
        a: 'Some images are already deeply compressed, use a lossless format, or contain detail that does not shrink much at the current quality setting. In those cases, resizing or switching format can help more than lowering quality alone.',
      },
      {
        q: 'Can I reduce image size without uploading files?',
        a: 'Yes. PicShift compresses images locally in your browser, so you can reduce file size without sending private images to a server.',
      },
      {
        q: 'How do I compress a photo online for free?',
        a: 'Upload the photo, lower quality in small steps, compare the output, and download the result once the size looks right. PicShift is free for core compression workflows and runs in the browser.',
      },
    ],
    searchIntentSections: [
      {
        title: 'Why image compression matters',
        body: 'Compression helps when uploads are blocked by size limits, pages feel heavy, or shared files are larger than necessary. It is often the fastest way to reduce file size without changing dimensions.',
      },
      {
        title: 'Why the output does not always get smaller',
        body: 'Some images are already deeply compressed, use a lossless structure, or contain detail that does not shrink much at the current quality setting. In those cases, a lower quality setting, a different format, or resizing can work better.',
      },
      {
        title: 'When resizing helps more than compression',
        body: 'If the source image is far larger than the display size, reducing dimensions often saves more than quality changes alone. Compression is best when the size problem comes from encoding rather than from excessive resolution.',
      },
    ],
  },
  {
    slug: 'metadata-remover',
    title: 'Remove Image Metadata Online — EXIF, GPS, Camera Data | PicShift',
    description:
      'Remove EXIF, GPS, and camera metadata from JPG, PNG, WebP, HEIC, and AVIF in your browser. Free tool — your files never upload.',
    defaultInputFormat: null,
    h1: 'Remove Image Metadata',
    introText:
      'Strip hidden EXIF metadata from your photos before sharing. GPS coordinates, camera model, timestamps, and software tags are embedded in most images by default. This online metadata cleaner removes all of it locally in your browser — the image never leaves your device.',
    howToSteps: [
      'Drop your images into the box above, or click to browse.',
      'See what EXIF metadata is embedded — GPS, camera, dates, and more.',
      'Download the cleaned images with all metadata removed.',
    ],
    faqs: [
      {
        q: 'What is EXIF metadata and why should I remove it?',
        a: 'EXIF metadata is hidden data embedded in photos by cameras and phones. It includes GPS coordinates, device model, lens info, timestamps, and software tags. Removing EXIF data before sharing protects your location privacy and device fingerprint.',
      },
      {
        q: 'Does removing metadata reduce image quality?',
        a: 'The image is re-encoded during metadata removal. For PNG and lossless WebP the output is visually identical. For JPG, use quality 95 or above to keep loss imperceptible. The pixel content stays the same — only the hidden metadata is gone.',
      },
      {
        q: 'How do I remove metadata from photos on iPhone?',
        a: 'Drop your iPhone photos (HEIC or JPG) into PicShift. The tool reads the EXIF metadata, shows you what is embedded, and strips it all in one click. No app install needed — it works in Safari and Chrome on any device.',
      },
      {
        q: 'Does this online metadata remover upload my images?',
        a: 'No. The entire process runs locally in your browser using WebAssembly. Your images are never sent to any server. You can verify this by turning off your internet connection — the tool still works.',
      },
      {
        q: 'Why is the cleaned JPG larger than the original HEIC or HEIF file?',
        a: 'HEIC and HEIF are built for strong compression, so originals are often much smaller on disk than a typical JPG. In the browser PicShift exports cleaned HEIC/HEIF as JPG because same-format HEIC/HEIF downloads are not widely supported yet. A larger JPG is normal and does not mean metadata removal failed. JPG, PNG, WebP, and AVIF still download in the same format as the input. If the smallest file matters more than widest compatibility, keep your HEIC/HEIF originals when you can, or use another modern format your workflow supports (for example AVIF) where applicable.',
      },
      {
        q: 'Can I remove metadata from multiple images at once?',
        a: 'Yes. Drop up to 200 images and process them all in a single batch. Each image will have its EXIF data, GPS location, and camera info stripped individually.',
      },
      {
        q: 'Does Instagram / WhatsApp / Discord remove EXIF data automatically?',
        a: 'Most social platforms strip some metadata on upload, but not all of them remove everything, and policies change. The safest approach is to remove EXIF data yourself before sharing, so you are not relying on a platform to protect your privacy.',
      },
      {
        q: 'What is the difference between a metadata cleaner and an EXIF remover?',
        a: 'They do the same thing. "EXIF remover" focuses on camera data, while "metadata cleaner" is broader and includes IPTC, XMP, and other embedded profiles. PicShift removes all of them.',
      },
    ],
    detailSections: [
      {
        title: 'Scope and boundaries',
        body: 'This tool removes metadata embedded in the file itself. It does not edit the visible pixels in the image, so it helps with privacy leaks in hidden data, not with content that is already visible on screen.',
        items: [
          'It removes hidden fields such as GPS coordinates, device details, timestamps, and software tags, but it does not erase faces, license plates, watermarks, or text that already appears in the image.',
          'JPG, PNG, WebP, and AVIF are downloaded in the same format. Cleaned HEIC and HEIF files are downloaded as JPG because the browser still cannot write them back as HEIC or HEIF.',
          'Some apps and social platforms strip part of the metadata after upload, but that behavior is inconsistent and can change. The safer move is to clean the file yourself before sharing it.',
        ],
      },
      {
        title: 'How to remove image metadata',
        body: 'The practical workflow is simple: inspect first, then clean, then share the cleaned copy instead of the original.',
        items: [
          'Drop the image into the tool and check what the file actually contains before you send it anywhere.',
          'If the file only shows width, height, or color space, you will see 0 sensitive fields. If it contains GPS, device details, or timestamps, those will be flagged as sensitive.',
          'Download the cleaned file and use that version for email, chat, uploads, or social posting.',
        ],
      },
    ],
    searchIntentSections: [
      {
        title: 'What is EXIF metadata and what does it reveal',
        body: 'Every photo taken on a phone or camera contains invisible EXIF metadata: GPS coordinates pinpointing where you stood, the exact device model and serial number, the date and time down to the second, and sometimes even the software used to edit it. This data travels with the image file when you share it, email it, or upload it — unless you strip it first.',
      },
      {
        title: 'When you should remove metadata from photos',
        body: 'Before posting photos online, sending images to clients or strangers, uploading product photos to marketplaces, or sharing screenshots that might contain editing software traces. If the image leaves your device and reaches someone you do not fully trust, removing metadata is the safe default.',
      },
      {
        title: 'Why an online metadata cleaner that runs locally is safer',
        body: 'Most online EXIF removers ask you to upload the image to their server first — which means they see your photo and its metadata before you can remove it. PicShift processes everything in your browser. The file never leaves your device, so your private data stays private during the removal process itself.',
      },
    ],
  },
  {
    slug: 'heic-to-jpg',
    title: 'HEIC to JPG for Windows, Uploads, and Sharing | PicShift',
    description:
      'Convert iPhone HEIC photos to JPG for Windows, websites, uploads, and everyday sharing. Runs locally in your browser with no file upload.',
    defaultInputFormat: 'heic',
    defaultOutputFormat: 'jpg',
    h1: 'Convert HEIC to JPG',
    introText:
      'Convert HEIC to JPG when Windows, upload forms, or older apps do not accept HEIC files. Everything happens locally in your browser, so private iPhone photos stay on your device.',
    howToSteps: [
      'Drag and drop your HEIC files into the box above, or click to browse.',
      'Your photos are converted instantly in your browser — nothing is uploaded.',
      'Click Download to save each file, or Download All to get a ZIP.',
    ],
    faqs: [
      {
        q: 'What is HEIC format?',
        a: "HEIC (High Efficiency Image Container) is the default photo format on iPhones since iOS 11. It produces smaller files than JPG while maintaining the same quality. However, many Windows apps and websites don't support HEIC.",
      },
      {
        q: 'How do I open HEIC photos on Windows?',
        a: 'A simple fix is to convert HEIC to JPG. Many Windows setups and older desktop apps do not handle HEIC well by default, while JPG opens almost everywhere.',
      },
      {
        q: 'How do I convert HEIC to JPG online?',
        a: 'Drop your HEIC files into the converter, keep JPG selected, then download each file or a ZIP. The conversion runs locally in your browser instead of uploading photos to a server.',
      },
      {
        q: 'How many files can I convert at once?',
        a: "There's no hard limit. We recommend up to 100 files at a time for best performance. If you have more, just do multiple batches.",
      },
      {
        q: 'Is it safe to convert private HEIC photos here?',
        a: 'Yes. PicShift processes everything in your browser using WebAssembly. Your photos never leave your device — no files are uploaded to any server. You can verify this by disconnecting from the internet and trying the converter.',
      },
      {
        q: 'Does HEIC to JPG reduce quality?',
        a: 'There is some re-encoding because JPG is a lossy format, but the default quality setting is chosen to keep the result visually close to the original in normal viewing. You can raise quality if you prefer a larger but safer output.',
      },
    ],
    searchIntentSections: [
      {
        title: 'Why HEIC to JPG is a common compatibility fix',
        body: 'HEIC is efficient on iPhone, but it is still less reliable in Windows apps, office tools, upload forms, and older software. JPG is the safest fallback when you want a file that opens almost anywhere.',
      },
      {
        title: 'When JPG is the better target format',
        body: 'Choose JPG when the goal is broad compatibility for email, uploads, sharing, or legacy editors. It is usually the right answer when the recipient or destination system is outside the Apple ecosystem.',
      },
      {
        title: 'When not to convert HEIC to JPG',
        body: 'JPG is not the best choice when you need transparency, lossless editing, or the strongest modern compression. In those cases, PNG, WebP, or AVIF can be more suitable depending on the workflow.',
      },
    ],
  },
  {
    slug: 'heic-to-png',
    title: 'HEIC to PNG Converter for Editing and Design Handoff | PicShift',
    description:
      'Convert HEIC to PNG when you need a stable file for editing, markup, design review, or repeated exports that should avoid another lossy step.',
    defaultInputFormat: 'heic',
    defaultOutputFormat: 'png',
    h1: 'Convert HEIC to PNG',
    introText:
      'Convert HEIC to PNG when you need a file that is easier to mark up, review, or pass into design tools. PNG is usually much larger than HEIC, but it is a safer choice when editing stability matters more than smaller file size.',
    howToSteps: [
      'Drag and drop your HEIC files into the box above, or click to browse.',
      'Files are converted to lossless PNG instantly in your browser.',
      'Click Download to save each file, or Download All to get a ZIP.',
    ],
    faqs: [
      {
        q: 'Does HEIC to PNG keep full quality?',
        a: 'PNG is lossless, so the PNG export does not add another lossy compression step. It is usually the better choice than JPG when the file needs to stay stable for editing, markup, or design review.',
      },
      {
        q: 'How do I convert HEIC to PNG online?',
        a: 'Add your HEIC photos, keep PNG selected, and download the converted files. PicShift runs this conversion locally in your browser, so it works well for private images and quick one-off edits.',
      },
      {
        q: 'Why is HEIC to PNG much larger than HEIC or JPG?',
        a: 'HEIC is highly compressed for photos, while PNG stores a lot more image data per pixel. That is why HEIC to PNG often creates a much larger file even when the picture looks similar on screen.',
      },
      {
        q: 'Why convert HEIC to PNG instead of JPG?',
        a: 'Choose PNG when you want a cleaner file for editing, annotations, product review, or repeated export steps. Choose JPG when your real goal is smaller files, faster uploads, or the broadest compatibility.',
      },
    ],
    searchIntentSections: [
      {
        title: 'Why people convert HEIC to PNG',
        body: 'Most people convert HEIC to PNG when they need a file that behaves better in editing, annotation, design review, or handoff workflows. PNG is not the smallest option, but it is often easier to reuse without worrying about another lossy photo export.',
      },
      {
        title: 'Why the PNG export gets much larger',
        body: 'HEIC is efficient because it is designed to keep photo size low. PNG is different: it keeps much more raw image information, so the file often grows a lot after conversion. That trade-off is normal when the goal is editability rather than compression.',
      },
      {
        title: 'When HEIC to JPG or WebP is the better move',
        body: 'If your real goal is easier uploading, smaller files, or faster web delivery, PNG is usually not the best target. HEIC to JPG is better for compatibility, and HEIC to WebP is often better for modern website workflows.',
      },
    ],
  },
  {
    slug: 'heic-to-webp',
    title: 'HEIC to WebP Converter for Smaller Web Images | PicShift',
    description:
      'Convert HEIC photos to WebP for smaller web image payloads, faster delivery, and better support than HEIC on websites and CMS uploads.',
    defaultInputFormat: 'heic',
    defaultOutputFormat: 'webp',
    h1: 'Convert HEIC to WebP',
    introText:
      'Convert HEIC to WebP when you want a web-friendly format with smaller transfer size than JPG. This is especially useful when HEIC is unsupported by your CMS, site builder, or browser-based workflow.',
    howToSteps: [
      'Drag and drop your HEIC files into the box above, or click to browse.',
      'Files are converted to WebP instantly in your browser.',
      'Click Download to save each file, or Download All to get a ZIP.',
    ],
    faqs: [
      {
        q: 'Why convert HEIC to WebP for websites?',
        a: 'HEIC is not a practical web format for most websites, CMS tools, or browser workflows. WebP is much easier to deploy on the web and usually delivers smaller payloads than JPG.',
      },
      {
        q: 'How do I convert HEIC to WebP?',
        a: 'Add your HEIC files, switch the output to WebP if needed, then download the result. This is a practical way to turn iPhone photos into a format that works better in websites and CMS uploads.',
      },
      {
        q: 'Is WebP better than JPG for web images?',
        a: 'WebP is often better for web delivery because it usually achieves smaller file sizes at similar visual quality. JPG is still the safer choice when you need broader compatibility outside the browser.',
      },
      {
        q: 'Why convert HEIC to WebP instead of HEIC to JPG?',
        a: 'Choose WebP when your goal is web delivery and smaller transfer size. Choose JPG when the target is an older app, email workflow, or a platform that still expects JPG.',
      },
      {
        q: 'Can I upload HEIC directly to a website or CMS?',
        a: 'Sometimes, but support is inconsistent. Converting HEIC to WebP or JPG first is more reliable for site builders, CMS editors, and browser-based upload forms.',
      },
    ],
    searchIntentSections: [
      {
        title: 'Why HEIC to WebP fits modern websites',
        body: 'HEIC is not a standard website delivery format, while WebP is broadly supported in browsers and common CMS workflows. Converting HEIC to WebP makes iPhone photos easier to publish online.',
      },
      {
        title: 'When WebP is better than JPG',
        body: 'WebP is often the better target when your priority is smaller transfer size for websites, landing pages, and content-heavy pages. It is especially practical when browser support matters more than old desktop software support.',
      },
      {
        title: 'When not to use WebP',
        body: 'WebP is not always the safest choice for email attachments, office workflows, or older upload systems. If maximum compatibility matters, HEIC to JPG is still the safer fallback.',
      },
    ],
  },
  {
    slug: 'heic-to-avif',
    title: 'HEIC to AVIF Converter for Modern Compression | PicShift',
    description:
      'Convert HEIC photos to AVIF for advanced compression in modern delivery pipelines.',
    defaultInputFormat: 'heic',
    defaultOutputFormat: 'avif',
    h1: 'Convert HEIC to AVIF',
    introText:
      'Convert iPhone HEIC photos to AVIF for modern delivery pipelines that prioritize smaller transfer size.',
    howToSteps: [
      'Drag and drop your HEIC files into the box above, or click to browse.',
      'Files are converted to AVIF instantly in your browser.',
      'Download individual files or use Download All for batch output.',
    ],
    faqs: [
      {
        q: 'Why convert HEIC to AVIF?',
        a: 'AVIF uses AV1-based compression and delivers smaller transfer sizes in modern web workflows.',
      },
      {
        q: 'Should I use JPG instead?',
        a: 'Use JPG when you need maximum compatibility with legacy apps and services.',
      },
    ],
  },
  {
    slug: 'heif-to-jpg',
    title: 'HEIF to JPG Converter for Legacy Compatibility | PicShift',
    description:
      'Convert HEIF to JPG for Windows apps, uploads, email, and older software that still expects JPG files.',
    defaultInputFormat: 'heif',
    defaultOutputFormat: 'jpg',
    h1: 'Convert HEIF to JPG',
    introText:
      'Convert HEIF to JPG when you need a version that opens more reliably in older apps, upload forms, and everyday sharing tools. JPG is still the safest fallback when HEIF support is inconsistent.',
    howToSteps: [
      'Drag and drop your HEIF files into the box above, or click to browse.',
      'Files are converted to JPG instantly in your browser.',
      'Click Download to save each file, or Download All to get a ZIP.',
    ],
    faqs: [
      {
        q: 'What is HEIF, and is it the same as HEIC?',
        a: 'HEIF is the image container family, and HEIC is the best-known HEIF-based photo format used by Apple devices. In practice, people often run into the same compatibility issues with both and convert them to JPG for easier use.',
      },
      {
        q: 'Why convert HEIF to JPG for Windows or uploads?',
        a: 'Many Windows apps, office tools, email workflows, and upload forms still handle JPG more reliably than HEIF. Converting to JPG is the simplest way to get a file that opens and uploads with fewer surprises.',
      },
      {
        q: 'Will HEIF to JPG reduce image quality?',
        a: 'JPG uses lossy compression, so it is not the right target when you need a fully lossless editing file. It is the right target when compatibility matters more than preserving every bit of source data.',
      },
      {
        q: 'When should I keep HEIF instead of converting to JPG?',
        a: 'Keep HEIF if your workflow already supports it and your priority is efficient storage on modern devices. Convert to JPG when the image needs to leave that environment and work in older tools, websites, or sharing platforms.',
      },
    ],
    searchIntentSections: [
      {
        title: 'Why HEIF to JPG is still needed',
        body: 'HEIF is efficient, but the format still causes friction in real-world workflows. People usually convert HEIF to JPG when a file needs to open in Windows software, pass through an upload form, or be sent to someone who expects a standard image format.',
      },
      {
        title: 'When JPG is the safest fallback',
        body: 'JPG is still the lowest-friction choice for email, office tools, generic image viewers, and many older upload systems. If the destination is unknown or outside a modern Apple-friendly workflow, JPG is usually the safer target.',
      },
      {
        title: 'When not to convert HEIF to JPG',
        body: 'If your devices and apps already support HEIF well, converting is not always necessary. HEIF can stay smaller than JPG, so it often makes sense to keep it until compatibility becomes a real problem.',
      },
    ],
  },
  {
    slug: 'heif-to-png',
    title: 'HEIF to PNG Converter - Preserve HEIF Detail | PicShift',
    description:
      'Convert HEIF images to PNG to preserve image detail for archive, design handoff, and production output.',
    defaultInputFormat: 'heif',
    defaultOutputFormat: 'png',
    h1: 'Convert HEIF to PNG',
    introText:
      'Convert HEIF images to PNG when you need lossless output for editing, design handoff, or archiving workflows.',
    howToSteps: [
      'Drag and drop your HEIF files into the box above, or click to browse.',
      'Files are converted to PNG instantly in your browser.',
      'Download each file or use Download All for batch output.',
    ],
    faqs: [
      {
        q: 'Why convert HEIF to PNG?',
        a: 'PNG is lossless and preserves exact pixel data for editing and repeated export workflows.',
      },
      {
        q: 'Will PNG files be larger?',
        a: 'Yes. PNG files are larger than lossy formats in standard photo workflows because PNG is lossless.',
      },
    ],
  },
  {
    slug: 'heif-to-webp',
    title: 'HEIF to WebP Converter for Web Delivery | PicShift',
    description:
      'Convert HEIF images to WebP for smaller payloads in modern websites and apps.',
    defaultInputFormat: 'heif',
    defaultOutputFormat: 'webp',
    h1: 'Convert HEIF to WebP',
    introText:
      'Convert HEIF images to WebP for modern web delivery workflows that require smaller transfer sizes.',
    howToSteps: [
      'Drag and drop your HEIF files into the box above, or click to browse.',
      'Files are converted to WebP instantly in your browser.',
      'Adjust quality if needed, then download individual files or a ZIP.',
    ],
    faqs: [
      {
        q: 'Why convert HEIF to WebP?',
        a: 'WebP is broadly supported on the web and reduces transfer size compared with legacy photo formats in standard workflows.',
      },
      {
        q: 'Does WebP keep transparency?',
        a: 'Yes. WebP supports alpha transparency and preserves transparent regions when source content includes them.',
      },
    ],
  },
  {
    slug: 'heif-to-avif',
    title: 'HEIF to AVIF Converter - HEIF Compression Upgrade | PicShift',
    description:
      'Convert HEIF images to AVIF for AV1-based compression gains in modern delivery pipelines.',
    defaultInputFormat: 'heif',
    defaultOutputFormat: 'avif',
    h1: 'Convert HEIF to AVIF',
    introText:
      'Convert HEIF images to AVIF when your target platform supports AVIF and maximum size reduction is a priority.',
    howToSteps: [
      'Drag and drop your HEIF files into the box above, or click to browse.',
      'Files are converted to AVIF instantly in your browser.',
      'Download each file or use Download All for batch output.',
    ],
    faqs: [
      {
        q: 'Why convert HEIF to AVIF?',
        a: 'AVIF uses AV1-based compression and provides stronger size reduction in modern benchmark comparisons.',
      },
      {
        q: 'When should I choose WebP or JPG instead?',
        a: 'Choose WebP or JPG when compatibility requirements include older browsers, legacy apps, or upload endpoints without AVIF support.',
      },
    ],
  },
  {
    slug: 'webp-to-jpg',
    title: 'WebP to JPG Converter for Better Compatibility | PicShift',
    description:
      'Convert WebP to JPG when a site, app, email tool, or upload form will not reliably accept WebP files.',
    defaultInputFormat: 'webp',
    defaultOutputFormat: 'jpg',
    h1: 'Convert WebP to JPG',
    introText:
      'Convert WebP to JPG when WebP will not open, upload, or preview properly in the place you actually need to use it. JPG is still the easiest fallback for email, office tools, social uploads, and older desktop software.',
    howToSteps: [
      'Drag and drop your WebP files into the box above, or click to browse.',
      'Files are converted to JPG instantly in your browser.',
      'Click Download to save each file, or Download All to get a ZIP.',
    ],
    faqs: [
      {
        q: 'Why convert WebP to JPG?',
        a: 'WebP works well in browsers, but support is still uneven in older desktop apps, email workflows, office tools, and some upload forms. JPG is still the easiest format to open and share almost anywhere.',
      },
      {
        q: 'How do I convert WebP to JPG online?',
        a: 'Add the WebP file, keep JPG selected, and download the converted image. It is a quick fix when you need a version that behaves better in uploads, messaging apps, or older software.',
      },
      {
        q: 'Will WebP to JPG make the file larger?',
        a: 'It can. WebP is often more efficient than JPG, so converting for compatibility may increase file size depending on the source image and selected quality.',
      },
      {
        q: 'Why do some apps or upload forms reject WebP?',
        a: 'Many older tools were built around JPG and PNG long before WebP became common. When a service validates uploads against an older format list, converting WebP to JPG usually solves the problem.',
      },
    ],
    searchIntentSections: [
      {
        title: 'Why WebP to JPG is still needed',
        body: 'WebP is great for browser delivery, but many real-world workflows still expect JPG. Converting to JPG helps when a file needs to open in older apps, pass through upload forms, or be shared in channels that are less flexible about image formats.',
      },
      {
        title: 'Common cases where WebP fails',
        body: 'You will usually see WebP problems in office environments, older desktop tools, some social upload flows, and websites with strict file validators. In those situations, JPG is still the easiest format to move through the workflow.',
      },
      {
        title: 'When PNG is a better fallback than JPG',
        body: 'JPG is the default fallback when compatibility matters, but it is not always the best target. If the image needs transparency or more editing headroom, WebP to PNG can be the better option even though the file will usually be larger.',
      },
    ],
  },
  {
    slug: 'webp-to-png',
    title: 'WebP to PNG Converter for Lossless Transparency | PicShift',
    description:
      'Convert WebP to PNG when you need transparency, a lossless export, or a file that is easier to edit and reuse.',
    defaultInputFormat: 'webp',
    defaultOutputFormat: 'png',
    h1: 'Convert WebP to PNG',
    introText:
      'Convert WebP to PNG when the image needs to keep transparency, survive more editing, or fit into a workflow that expects a lossless file. PNG is usually larger, but it is often the safer format for review, design, and repeated export steps.',
    howToSteps: [
      'Drag and drop your WebP files into the box above, or click to browse.',
      'Files are converted to lossless PNG instantly in your browser.',
      'Click Download to save each file, or Download All to get a ZIP.',
    ],
    faqs: [
      {
        q: 'Does WebP to PNG conversion lose quality?',
        a: 'No. PNG is a lossless format, so the conversion preserves every pixel from the WebP source. The resulting PNG file will be larger but identical in quality.',
      },
      {
        q: 'When should I convert WebP to PNG instead of JPG?',
        a: 'Choose PNG when the image needs transparency, more editing headroom, or a stable lossless export. Choose JPG when the goal is wider compatibility with smaller file size and transparency does not matter.',
      },
      {
        q: 'Why is the PNG file larger than the original WebP?',
        a: 'WebP is built for efficient compression, while PNG keeps much more raw image data. That is why WebP to PNG often produces a noticeably larger file even when the picture looks the same.',
      },
      {
        q: 'Why convert WebP to PNG for editing?',
        a: 'People often switch from WebP to PNG when the file needs to go through design review, markup, or repeated export steps. PNG is easier to reuse in those workflows because it is lossless and widely understood by image tools.',
      },
    ],
    searchIntentSections: [
      {
        title: 'Why people convert WebP to PNG',
        body: 'Most people convert WebP to PNG when they need transparency, a lossless copy, or a file that behaves more predictably in design and editing tools. This conversion is usually about workflow stability, not about getting a smaller file.',
      },
      {
        title: 'When PNG is the right target',
        body: 'PNG is the better target when the image needs transparency, quality-sensitive review, or more editing headroom. It is especially useful when the file will be annotated, reused in graphics work, or exported again later.',
      },
      {
        title: 'Trade-off: cleaner workflow, larger files',
        body: 'PNG is easier to edit and widely accepted, but it is usually larger than WebP. If your real goal is just sharing or uploading with the smallest possible file, WebP to JPG may be a better fallback.',
      },
    ],
  },
  {
    slug: 'png-to-jpg',
    title: 'PNG to JPG Converter to Reduce PNG File Size | PicShift',
    description:
      'Convert PNG to JPG to reduce PNG file size for faster uploads, lighter web pages, and easier sharing when transparency is not needed.',
    defaultInputFormat: 'png',
    defaultOutputFormat: 'jpg',
    h1: 'Convert PNG to JPG',
    introText:
      "Convert PNG to JPG when a PNG photo is much larger than it needs to be and transparency does not matter. This is a practical fix for screenshots, exports, and photos saved as PNG by default.",
    howToSteps: [
      'Drag and drop your PNG files into the box above, or click to browse.',
      'Files are converted to JPG instantly in your browser.',
      'Adjust the quality slider to balance size vs. quality.',
    ],
    faqs: [
      {
        q: 'Will PNG to JPG remove transparency?',
        a: 'Yes. JPG does not support transparency, so transparent areas in the PNG will become solid. If transparency matters, keep the image as PNG or convert it to WebP instead.',
      },
      {
        q: 'How do I convert PNG to JPG online?',
        a: 'Add the PNG file, keep JPG selected, adjust quality if needed, then download the result. This is often the fastest way to make oversized PNG photos smaller and easier to upload.',
      },
      {
        q: 'Why is my PNG file so large compared to JPG?',
        a: 'PNG is lossless, so photographic images stored as PNG are often much larger than necessary. Converting to JPG usually cuts size significantly when the image does not need transparency.',
      },
      {
        q: 'When should I convert PNG to JPG?',
        a: 'Convert PNG to JPG when the image is photographic, does not need transparency, and you want a smaller file for uploads, email, or general web use.',
      },
    ],
    searchIntentSections: [
      {
        title: 'Why PNG to JPG often saves a lot of size',
        body: 'PNG is lossless and is often unnecessarily large for photographic images. JPG is usually a better fit when the image does not need transparency and the goal is lighter uploads or faster sharing.',
      },
      {
        title: 'The main caveat: transparency is lost',
        body: 'PNG to JPG is not a safe choice for logos, icons, or assets that rely on transparent backgrounds. If transparency matters, keep PNG or switch to WebP instead of JPG.',
      },
      {
        title: 'When PNG should stay PNG',
        body: 'Keep PNG when pixel stability matters, when the image will go through repeated editing, or when transparent regions are part of the design. JPG is best for photo-like content where smaller size matters more.',
      },
    ],
  },
  {
    slug: 'png-to-webp',
    title: 'PNG to WebP Converter for Transparent Web Images | PicShift',
    description:
      'Convert PNG images to WebP for transparent web assets with smaller transfer size and faster page delivery.',
    defaultInputFormat: 'png',
    defaultOutputFormat: 'webp',
    h1: 'Convert PNG to WebP',
    introText:
      'Convert PNG to WebP when you want smaller transparent web images without giving up alpha support. This is one of the easiest ways to speed up image-heavy pages and UI assets.',
    howToSteps: [
      'Drag and drop your PNG files into the box above, or click to browse.',
      'Files are converted to WebP instantly in your browser.',
      'Adjust the quality slider to balance size vs. quality, then download.',
    ],
    faqs: [
      {
        q: 'Why convert PNG to WebP?',
        a: 'WebP keeps transparency and produces smaller files than PNG in standard web delivery workflows.',
      },
      {
        q: 'How do I convert PNG to WebP online?',
        a: 'Upload the PNG, keep WebP selected, then download the result. This is a common workflow when you want smaller transparent assets for websites, UI images, or landing pages.',
      },
      {
        q: 'Will transparent backgrounds stay transparent?',
        a: 'Yes. WebP supports alpha transparency, so transparent regions are preserved.',
      },
      {
        q: 'Why convert PNG to WebP for websites?',
        a: 'PNG is often much larger than WebP for the same transparent asset. Converting to WebP keeps transparency while reducing transfer size, which helps page speed.',
      },
      {
        q: 'Should I use PNG or WebP for transparent images?',
        a: 'Use WebP when the image is going on a modern website and you want a smaller file. Keep PNG when a workflow specifically requires PNG or when maximum compatibility with older tooling matters more than transfer size.',
      },
    ],
    searchIntentSections: [
      {
        title: 'Why PNG to WebP is a strong web optimization',
        body: 'WebP keeps transparency while usually reducing transfer size compared with PNG. That makes it one of the most practical upgrades for UI assets, logos, overlays, and transparent illustrations on websites.',
      },
      {
        title: 'When WebP beats PNG clearly',
        body: 'WebP is usually the better target when the file is going to a browser, design system docs, or a modern CMS. You get transparency support with a much better chance of smaller payloads.',
      },
      {
        title: 'When PNG still makes sense',
        body: 'PNG is still useful when a workflow explicitly requires PNG files or when a downstream tool does not handle WebP reliably. In those cases, compatibility may outweigh the performance gain.',
      },
    ],
  },
  {
    slug: 'jpg-to-png',
    title: 'JPG to PNG Converter - Editing and Re-export | PicShift',
    description:
      'Convert JPG images to PNG when you need stable editing and repeated re-export without additional lossy encoding.',
    defaultInputFormat: 'jpg',
    defaultOutputFormat: 'png',
    h1: 'Convert JPG to PNG',
    introText:
      'Convert JPG images to lossless PNG format. Useful when you need a lossless version for editing.',
    howToSteps: [
      'Drag and drop your JPG files into the box above, or click to browse.',
      'Files are converted to PNG instantly in your browser.',
      'Click Download to save each file, or Download All to get a ZIP.',
    ],
    faqs: [
      {
        q: 'Does converting JPG to PNG improve quality?',
        a: 'No. Converting from JPG to PNG does not restore quality lost during JPG compression. However, converting to PNG prevents any further quality loss if you need to edit and re-save the image.',
      },
    ],
  },
  {
    slug: 'jpg-to-webp',
    title: 'JPG to WebP Converter for Smaller Website Images | PicShift',
    description:
      'Convert JPG to WebP for smaller website images, faster page loads, and lower transfer size on modern browsers.',
    defaultInputFormat: 'jpg',
    defaultOutputFormat: 'webp',
    h1: 'Convert JPG to WebP',
    introText:
      'Convert JPG to WebP when you want lighter website images without a big drop in visual quality. This is the common next step when a JPG looks fine but still feels too heavy for web delivery.',
    howToSteps: [
      'Drag and drop your JPG files into the box above, or click to browse.',
      'Files are converted to WebP instantly in your browser.',
      'Adjust the quality slider to balance size vs. quality.',
    ],
    faqs: [
      {
        q: 'How much smaller is WebP compared to JPG?',
        a: 'WebP is often around 25-34% smaller than JPG at similar visual quality in common benchmark comparisons. The exact gain depends on the image, but it is usually enough to matter on websites with many photos.',
      },
      {
        q: 'Should I convert JPG to WebP for my website?',
        a: 'Yes, if your audience mainly uses modern browsers and your goal is faster loading with smaller image payloads. JPG to WebP is one of the easiest ways to reduce transfer size without redesigning the page.',
      },
      {
        q: 'When is JPG still better than WebP?',
        a: 'Keep JPG when the image needs to move through older software, email workflows, or systems that still expect traditional file formats. JPG is also simpler when broad compatibility matters more than squeezing out extra size savings.',
      },
      {
        q: 'Will JPG to WebP reduce visible quality?',
        a: 'Not necessarily. With a sensible quality setting, WebP often looks very close to the original JPG while producing a smaller file. The right balance depends on the image content and how aggressively you compress it.',
      },
    ],
    searchIntentSections: [
      {
        title: 'Why JPG to WebP helps websites load faster',
        body: 'People usually convert JPG to WebP because the image can stay visually similar while weighing less. That means less data to transfer on product grids, blog posts, landing pages, and any page that depends on many photos.',
      },
      {
        title: 'When WebP is better than JPG',
        body: 'WebP is usually the better target when the image is meant for browser delivery and you care about smaller payloads. It is especially useful for modern sites where page speed and bandwidth matter more than desktop app compatibility.',
      },
      {
        title: 'When not to convert JPG to WebP',
        body: 'WebP is not always the safest choice for email attachments, office workflows, or older tooling. If the image needs to be opened everywhere with minimal friction, staying with JPG can still be the better call.',
      },
    ],
  },
  {
    slug: 'jpg-to-avif',
    title: 'JPG to AVIF Converter for Smaller Modern Web Images | PicShift',
    description:
      'Convert JPG to AVIF for stronger compression in AVIF-ready browsers, apps, and modern delivery workflows. Runs locally in your browser.',
    defaultInputFormat: 'jpg',
    defaultOutputFormat: 'avif',
    h1: 'Convert JPG to AVIF',
    introText:
      'Convert JPG to AVIF when your target platform supports AVIF and you want a smaller modern image format. This is especially useful for performance-focused web delivery where every KB matters.',
    howToSteps: [
      'Drag and drop your JPG files into the box above, or click to browse.',
      'Files are converted to AVIF instantly in your browser.',
      'Adjust the quality slider for your preferred balance, then download.',
    ],
    faqs: [
      {
        q: 'Why convert JPG to AVIF?',
        a: 'AVIF uses AV1-based compression and produces smaller files than JPG in standard benchmark comparisons at similar visual quality.',
      },
      {
        q: 'How do I convert JPG to AVIF?',
        a: 'Upload the JPG file, switch the output to AVIF, then download the result. This is useful when your target browser or app supports AVIF and you want a smaller modern image format.',
      },
      {
        q: 'Is AVIF better than WebP or JPG for compression?',
        a: 'AVIF is often better when maximum compression is the goal and the target platform supports it. JPG is easier to open everywhere, and WebP is a practical middle ground when you want modern compression with broader compatibility.',
      },
      {
        q: 'When should I use JPG to AVIF instead of JPG to WebP?',
        a: 'Choose AVIF when the target environment supports it and you want stronger compression. Choose WebP when you need wider practical support across older tools and CMS plugins.',
      },
      {
        q: 'Can I use AVIF on every website or app?',
        a: 'No. AVIF support is broad in modern browsers and newer apps, but some older tools, plugins, and upload pipelines still work better with WebP or JPG.',
      },
    ],
    searchIntentSections: [
      {
        title: 'Why JPG to AVIF is attractive for performance',
        body: 'AVIF can often deliver smaller files than JPG and WebP at comparable visual quality. That makes it attractive when you are optimizing modern web delivery for bandwidth and page speed.',
      },
      {
        title: 'When AVIF is worth the switch',
        body: 'Choose AVIF when the destination environment is modern enough to support it and you care about stronger compression. It is especially useful for performance-focused sites and asset pipelines.',
      },
      {
        title: 'When WebP or JPG is still safer',
        body: 'If you expect older tooling, plugins, or apps in the workflow, WebP and JPG remain safer targets. AVIF is best when compression matters most and compatibility risk is acceptable.',
      },
    ],
  },
  {
    slug: 'png-to-avif',
    title: 'PNG to AVIF — Smaller Files, Keeps Transparency | PicShift',
    description:
      'Convert PNG to AVIF and cut file size by 50-70% while keeping transparency. Runs locally in your browser — your images stay on your device.',
    defaultInputFormat: 'png',
    defaultOutputFormat: 'avif',
    h1: 'Convert PNG to AVIF',
    introText:
      'PNG files are lossless and large. AVIF compresses them down to a fraction of the size — often 50-70% smaller — while keeping transparency intact. If the image is going on a website, this is one of the biggest performance wins available.',
    howToSteps: [
      'Drag and drop your PNG files into the box above, or click to browse.',
      'Adjust quality — 80 gives a good balance between size and sharpness.',
      'Download the AVIF files individually or as a ZIP.',
    ],
    faqs: [
      {
        q: 'Does AVIF support transparency like PNG?',
        a: 'Yes. AVIF supports full alpha transparency. Transparent backgrounds, logos, and icons convert without losing their transparent regions.',
      },
      {
        q: 'How much smaller is AVIF compared to PNG?',
        a: 'It depends on the image, but photos typically shrink 50-70%. Graphics with flat colors and sharp edges see 30-50% reduction. The savings are significant either way.',
      },
      {
        q: 'Which browsers support AVIF?',
        a: 'Chrome, Firefox, and Safari (since version 16.4) all support AVIF. Global browser coverage is above 90% in 2026. For older browsers, serve a JPG or WebP fallback.',
      },
      {
        q: 'When should I keep PNG instead of converting to AVIF?',
        a: 'Keep PNG when you need to edit the image further (AVIF re-encoding adds loss), when the target app does not support AVIF, or when pixel-perfect accuracy matters more than file size.',
      },
      {
        q: 'Is AVIF better than WebP for transparent images?',
        a: 'AVIF compresses more aggressively than WebP at the same visual quality. If your platform supports AVIF, it is the better choice for transparent web images. WebP is the safer fallback when broader compatibility matters.',
      },
    ],
    searchIntentSections: [
      {
        title: 'Why PNG to AVIF is the biggest size win for web images',
        body: 'PNG stores every pixel losslessly, which is great for editing but expensive for delivery. A 2 MB PNG icon can become 200 KB in AVIF with no visible difference. For sites that serve lots of transparent assets — logos, UI elements, product shots on white backgrounds — converting PNG to AVIF can cut total page weight dramatically.',
      },
      {
        title: 'When AVIF is not the right target',
        body: 'AVIF is a delivery format, not a working format. If you plan to edit, annotate, or re-export the image, keep the PNG original and only convert to AVIF for the final published version. Also avoid AVIF when your CMS, email client, or design tool does not support it yet.',
      },
      {
        title: 'How to serve AVIF with a fallback',
        body: 'The standard approach is the HTML picture element: serve AVIF to browsers that support it, and fall back to WebP or PNG for the rest. This way you get the smallest possible file for most visitors without breaking anything for the minority on older browsers.',
      },
    ],
  },
  {
    slug: 'webp-to-avif',
    title: 'WebP to AVIF Converter for Higher Compression | PicShift',
    description:
      'Convert WebP images to AVIF for higher compression efficiency in AVIF-ready environments.',
    defaultInputFormat: 'webp',
    defaultOutputFormat: 'avif',
    h1: 'Convert WebP to AVIF',
    introText:
      'Convert WebP images to AVIF when your target platform supports AVIF and size reduction is a priority.',
    howToSteps: [
      'Drag and drop your WebP files into the box above, or click to browse.',
      'Files are converted to AVIF instantly in your browser.',
      'Download individual files or use Download All for batch output.',
    ],
    faqs: [
      {
        q: 'Why convert WebP to AVIF?',
        a: 'AVIF provides stronger compression than WebP in standard benchmark comparisons, which helps reduce transfer size.',
      },
      {
        q: 'Should I keep WebP instead?',
        a: 'Use WebP when compatibility requirements include environments that do not support AVIF.',
      },
    ],
  },
  {
    slug: 'avif-to-jpg',
    title: 'AVIF to JPG Converter for Older Apps and Uploads | PicShift',
    description:
      'Convert AVIF to JPG when a site, app, editor, or upload form still does not accept AVIF files reliably.',
    defaultInputFormat: 'avif',
    defaultOutputFormat: 'jpg',
    h1: 'Convert AVIF to JPG',
    introText:
      'Convert AVIF to JPG when you need a version that opens, uploads, or shares with fewer problems. JPG is still the safest fallback for older editors, office tools, messaging workflows, and websites that have not fully caught up with AVIF yet.',
    howToSteps: [
      'Drag and drop your AVIF files into the box above, or click to browse.',
      'Files are converted to JPG instantly in your browser.',
      'Click Download to save each file, or Download All to get a ZIP.',
    ],
    faqs: [
      {
        q: 'Why convert AVIF to JPG?',
        a: 'Convert AVIF to JPG when a site, app, or upload flow does not accept AVIF. JPG is still the safest fallback for broad compatibility across devices and older software.',
      },
      {
        q: 'How do I convert AVIF to JPG online?',
        a: 'Add the AVIF image, keep JPG selected, then download the converted file. It is a quick fix when AVIF is blocked by an editor, website, upload form, or everyday sharing app.',
      },
      {
        q: 'Why is AVIF not supported in some apps?',
        a: 'AVIF adoption is still uneven outside modern browsers and newer software. Many older editors, messaging tools, and upload systems still expect JPG or PNG, so converting to JPG is the simplest fallback.',
      },
      {
        q: 'Will AVIF to JPG increase file size?',
        a: 'It can. AVIF is often more efficient than JPG, so converting for compatibility may produce a larger file depending on the image content and selected quality.',
      },
      {
        q: 'When should I use PNG instead of JPG?',
        a: 'Use PNG instead of JPG when you need a lossless file for editing, review, or repeated exports. Use JPG when the priority is broad compatibility and easy uploads, even if the result is not the most edit-friendly format.',
      },
    ],
    searchIntentSections: [
      {
        title: 'Why AVIF to JPG is a compatibility fallback',
        body: 'AVIF is efficient, but plenty of real-world workflows still reject it. Converting to JPG is the practical fallback when you need something that opens, previews, and uploads with fewer surprises.',
      },
      {
        title: 'Where AVIF compatibility still breaks down',
        body: 'The most common problems appear in older editors, office tools, messaging workflows, and websites that validate uploads against older format lists. JPG remains much easier to move through these environments.',
      },
      {
        title: 'Trade-off: broader support, sometimes larger files',
        body: 'Converting AVIF to JPG solves compatibility issues, but the output can be larger because AVIF is often more efficient. This is mainly a usability conversion, not an optimization for smaller file size.',
      },
    ],
  },
  {
    slug: 'avif-to-webp',
    title: 'AVIF to WebP Converter for Broader Support | PicShift',
    description:
      'Convert AVIF images to WebP when you need wider compatibility with modern compression.',
    defaultInputFormat: 'avif',
    defaultOutputFormat: 'webp',
    h1: 'Convert AVIF to WebP',
    introText:
      'Convert AVIF images to WebP when your target platform requires wider compatibility while keeping modern compression.',
    howToSteps: [
      'Drag and drop your AVIF files into the box above, or click to browse.',
      'Files are converted to WebP instantly in your browser.',
      'Download each file or use Download All for batch output.',
    ],
    faqs: [
      {
        q: 'Why convert AVIF to WebP?',
        a: 'WebP has wider support than AVIF in existing CMS plugins, legacy browsers, and older app pipelines.',
      },
      {
        q: 'Will file size increase?',
        a: 'AVIF compression is stronger than WebP in standard benchmarks. Output size is determined by source content and selected quality.',
      },
    ],
  },
  {
    slug: 'avif-to-png',
    title: 'AVIF to PNG Converter for Lossless Workflow | PicShift',
    description:
      'Convert AVIF to PNG when you need a file that is easier to edit, review, reuse, or hand off in graphics workflows.',
    defaultInputFormat: 'avif',
    defaultOutputFormat: 'png',
    h1: 'Convert AVIF to PNG',
    introText:
      'Convert AVIF to PNG when the image needs to behave more predictably in editing, review, or production workflows. PNG is usually much larger, but it is often the safer target when compatibility and reusability matter more than compression.',
    howToSteps: [
      'Drag and drop your AVIF files into the box above, or click to browse.',
      'Files are converted to lossless PNG instantly in your browser.',
      'Click Download to save each file, or Download All to get a ZIP.',
    ],
    faqs: [
      {
        q: 'Why convert AVIF to PNG?',
        a: 'People usually convert AVIF to PNG when they need a file that works better in design tools, review flows, and editing-heavy workflows. PNG is easier to reuse and does not add another lossy conversion step.',
      },
      {
        q: 'How do I convert AVIF to PNG?',
        a: 'Add the AVIF image, keep PNG selected, and download the converted file. PicShift runs the conversion locally in your browser, which is useful when the images are private or you just need a quick workflow fix.',
      },
      {
        q: 'Why is the PNG output much larger than AVIF?',
        a: 'AVIF is designed for strong compression, while PNG keeps far more image data. That is why AVIF to PNG can create a much larger file even when the visual result looks nearly the same.',
      },
      {
        q: 'Should I use JPG or WebP instead of PNG?',
        a: 'Use PNG when you care about editability and a stable lossless output. Use JPG for broader compatibility and smaller files, or WebP for modern web delivery when keeping the file lighter matters more than editing headroom.',
      },
    ],
    searchIntentSections: [
      {
        title: 'Why AVIF to PNG helps in editing workflows',
        body: 'AVIF is efficient for delivery, but PNG is often easier to reuse in design review, editing, annotation, and export-heavy workflows. Most people make this conversion because they want a file that behaves more predictably once the image leaves the browser.',
      },
      {
        title: 'When PNG is the better target than JPG or WebP',
        body: 'Choose PNG when you want a lossless output for further editing, quality-sensitive review, or a pipeline that expects a stable format. PNG is usually the right answer when preserving pixel integrity matters more than keeping the file small.',
      },
      {
        title: 'Why AVIF to PNG often increases file size',
        body: 'PNG is broadly compatible and lossless, but it will often be much larger than the AVIF source. This conversion is worth it when editing, compatibility, or handoff stability matters more than compression efficiency.',
      },
    ],
  },
]

export function getToolPage(slug: string): ToolPageConfig | undefined {
  return TOOL_PAGES.find((p) => p.slug === slug)
}
