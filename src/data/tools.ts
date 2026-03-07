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
      'Convert HEIC photos to PNG when you need lossless editing, design handoff, or a format that is easier to reuse in graphics workflows.',
    defaultInputFormat: 'heic',
    defaultOutputFormat: 'png',
    h1: 'Convert HEIC to PNG',
    introText:
      'Convert HEIC to PNG when editing stability matters more than file size. PNG is useful for design review, markup, and repeated export workflows that should avoid another lossy step.',
    howToSteps: [
      'Drag and drop your HEIC files into the box above, or click to browse.',
      'Files are converted to lossless PNG instantly in your browser.',
      'Click Download to save each file, or Download All to get a ZIP.',
    ],
    faqs: [
      {
        q: 'Does HEIC to PNG keep full quality?',
        a: 'PNG is lossless, so no extra quality is lost during the PNG export itself. It is a better choice than JPG when you want a stable file for editing, markup, or production handoff.',
      },
      {
        q: 'How do I convert HEIC to PNG online?',
        a: 'Upload your HEIC photos, keep PNG selected, then download the converted files. PicShift runs this workflow locally in the browser, which is useful when the images are private.',
      },
      {
        q: 'Why is HEIC to PNG larger than HEIC to JPG?',
        a: 'PNG is lossless, while JPG is lossy. That is why PNG exports are usually much larger in photo workflows even when both look similar at first glance.',
      },
      {
        q: 'When should I use HEIC to PNG instead of HEIC to JPG?',
        a: 'Choose PNG when you need a lossless file for editing, annotations, design review, or repeated exports. Choose JPG when compatibility and smaller file size matter more.',
      },
    ],
    searchIntentSections: [
      {
        title: 'Why choose HEIC to PNG',
        body: 'PNG is useful when you need a stable file for editing, markup, archiving, or production handoff. It avoids an extra lossy pass and is easier to reuse in design and review workflows.',
      },
      {
        title: 'Why the PNG output is often much larger',
        body: 'HEIC is highly efficient for photos, while PNG is lossless and stores much more data per pixel. That is why HEIC to PNG is usually chosen for workflow stability, not for smaller file size.',
      },
      {
        title: 'When another target is a better fit',
        body: 'If your real goal is smaller size or easier uploading, HEIC to JPG or HEIC to WebP is usually the better path. PNG is best when image editing needs outweigh file size concerns.',
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
      'Convert HEIF images to JPG for legacy software, uploads, and universal device support.',
    defaultInputFormat: 'heif',
    defaultOutputFormat: 'jpg',
    h1: 'Convert HEIF to JPG',
    introText:
      'Convert HEIF images to JPG for universal compatibility across apps, websites, and sharing platforms.',
    howToSteps: [
      'Drag and drop your HEIF files into the box above, or click to browse.',
      'Files are converted to JPG instantly in your browser.',
      'Click Download to save each file, or Download All to get a ZIP.',
    ],
    faqs: [
      {
        q: 'What is HEIF format?',
        a: 'HEIF is the container format family used by HEIC photos. It stores high-quality images with efficient compression.',
      },
      {
        q: 'Why convert HEIF to JPG?',
        a: 'JPG has the broadest compatibility across operating systems, older editors, and upload tools.',
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
      'Convert WebP to JPG for email, social uploads, office workflows, and older software that does not reliably accept WebP files.',
    defaultInputFormat: 'webp',
    defaultOutputFormat: 'jpg',
    h1: 'Convert WebP to JPG',
    introText:
      'Convert WebP to JPG when you need a format that opens more reliably in older apps, upload forms, and everyday sharing tools. Processing stays local in your browser, so nothing is uploaded.',
    howToSteps: [
      'Drag and drop your WebP files into the box above, or click to browse.',
      'Files are converted to JPG instantly in your browser.',
      'Click Download to save each file, or Download All to get a ZIP.',
    ],
    faqs: [
      {
        q: 'Why convert WebP to JPG?',
        a: 'WebP is widely supported in browsers, and some older applications, email clients, and social media platforms do not accept WebP. JPG is the most universally compatible image format.',
      },
      {
        q: 'How do I convert WebP to JPG online?',
        a: 'Upload the WebP file, keep JPG selected, then download the converted image. This is useful when you need a more widely accepted format for uploads or desktop apps.',
      },
      {
        q: 'Will WebP to JPG make the file larger?',
        a: 'It can. WebP is often more efficient than JPG, so converting to JPG for compatibility may increase file size depending on the source image and chosen quality.',
      },
      {
        q: 'Why won’t some apps or upload forms accept WebP?',
        a: 'Outside the browser, WebP support is still less predictable in older desktop software, office tools, and certain upload systems. Converting to JPG usually fixes that compatibility issue.',
      },
    ],
    searchIntentSections: [
      {
        title: 'Why WebP to JPG is still needed',
        body: 'WebP works well on the web, but many real-world workflows still expect JPG. Converting to JPG helps when a file needs to open in older apps, pass through upload forms, or be shared in more traditional channels.',
      },
      {
        title: 'Common cases where WebP fails',
        body: 'You will see WebP issues most often in office environments, legacy desktop tools, older social upload flows, and less flexible form validators. JPG remains the lowest-friction fallback in these situations.',
      },
      {
        title: 'Trade-off: compatibility versus file size',
        body: 'JPG is easier to use almost everywhere, but the output can be larger than the WebP source. This conversion is usually about compatibility, not about getting the smallest possible file.',
      },
    ],
  },
  {
    slug: 'webp-to-png',
    title: 'WebP to PNG Converter for Lossless Transparency | PicShift',
    description:
      'Convert WebP images to lossless PNG when you need pixel-stable output and transparency workflows.',
    defaultInputFormat: 'webp',
    defaultOutputFormat: 'png',
    h1: 'Convert WebP to PNG',
    introText:
      'Convert WebP images to lossless PNG format. Perfect for when you need transparency or lossless quality.',
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
    title: 'JPG to WebP Converter - Faster Page Load | PicShift',
    description:
      'Convert JPG to WebP for smaller web images and faster load speed. Tune quality in-browser and download instantly.',
    defaultInputFormat: 'jpg',
    defaultOutputFormat: 'webp',
    h1: 'Convert JPG to WebP',
    introText:
      'Convert JPG images to the modern WebP format for 25-34% smaller file sizes at the same visual quality.',
    howToSteps: [
      'Drag and drop your JPG files into the box above, or click to browse.',
      'Files are converted to WebP instantly in your browser.',
      'Adjust the quality slider to balance size vs. quality.',
    ],
    faqs: [
      {
        q: 'How much smaller is WebP compared to JPG?',
        a: 'WebP is 25-34% smaller than JPG at the same visual quality in benchmark comparisons. A 1 MB JPG converts to 650-750 KB as WebP in that range.',
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
    title: 'PNG to AVIF Converter for Smaller Transparent Images | PicShift',
    description:
      'Convert PNG images to AVIF to keep transparency while reducing transfer size.',
    defaultInputFormat: 'png',
    defaultOutputFormat: 'avif',
    h1: 'Convert PNG to AVIF',
    introText:
      'Convert PNG images to AVIF to reduce file size while keeping transparency support in modern clients.',
    howToSteps: [
      'Drag and drop your PNG files into the box above, or click to browse.',
      'Files are converted to AVIF instantly in your browser.',
      'Download each file or use Download All for batch output.',
    ],
    faqs: [
      {
        q: 'Does AVIF support transparency?',
        a: 'Yes. AVIF supports alpha transparency, so transparent regions from PNG remain transparent.',
      },
      {
        q: 'Why choose AVIF over PNG?',
        a: 'AVIF delivers smaller files than PNG in web delivery workflows while preserving transparency.',
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
      'Convert AVIF to JPG for editors, devices, social uploads, and platforms that still do not accept AVIF files. Private local conversion with no upload.',
    defaultInputFormat: 'avif',
    defaultOutputFormat: 'jpg',
    h1: 'Convert AVIF to JPG',
    introText:
      'Convert AVIF to JPG when an app, website, or upload endpoint rejects AVIF. JPG is still the safest fallback for broad compatibility, and PicShift lets you do the conversion locally in your browser.',
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
        a: 'Add the AVIF image, keep JPG selected, then download the converted file. This is a practical fallback when AVIF is blocked by editors, websites, or upload forms.',
      },
      {
        q: 'Why is AVIF not supported in some apps?',
        a: 'AVIF adoption is still uneven outside modern browsers and newer software. Many older editors, messaging tools, and upload systems still expect JPG or PNG, so converting to JPG is the simplest fallback.',
      },
      {
        q: 'Will AVIF to JPG increase file size?',
        a: 'It can. AVIF is often more efficient than JPG, so converting for compatibility may produce a larger file depending on the image content and selected quality.',
      },
    ],
    searchIntentSections: [
      {
        title: 'Why AVIF to JPG is a compatibility fallback',
        body: 'AVIF is efficient, but many upload flows and older apps still do not accept it reliably. Converting to JPG is the practical fallback when you need something that opens and uploads with fewer surprises.',
      },
      {
        title: 'Where AVIF compatibility still breaks down',
        body: 'The most common problems appear in older editors, office tools, messaging workflows, and systems that validate uploads against older format lists. JPG remains easier to move through these environments.',
      },
      {
        title: 'Trade-off: broader support, sometimes larger files',
        body: 'Converting AVIF to JPG solves compatibility issues, but the output can be larger because AVIF is often more efficient. This conversion is mainly about making the file usable in more places.',
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
      'Convert AVIF images to PNG for lossless editing and asset pipeline stability.',
    defaultInputFormat: 'avif',
    defaultOutputFormat: 'png',
    h1: 'Convert AVIF to PNG',
    introText:
      'Convert AVIF images to lossless PNG format. Perfect for preserving maximum quality.',
    howToSteps: [
      'Drag and drop your AVIF files into the box above, or click to browse.',
      'Files are converted to lossless PNG instantly in your browser.',
      'Click Download to save each file, or Download All to get a ZIP.',
    ],
    faqs: [
      {
        q: 'Why convert AVIF to PNG?',
        a: 'AVIF has limited support in some applications. Converting to PNG gives you a universally compatible, lossless format that works everywhere.',
      },
    ],
    searchIntentSections: [
      {
        title: 'Why AVIF to PNG helps in editing workflows',
        body: 'AVIF is efficient for delivery, but PNG is often easier to reuse in design review, editing, annotation, and export-heavy workflows. This conversion is usually about workflow stability rather than smaller file size.',
      },
      {
        title: 'When PNG is the better target than JPG or WebP',
        body: 'Choose PNG when you want a lossless output for further editing, quality-sensitive review, or a pipeline that expects a stable format. PNG is a better fit when preserving pixel integrity matters more than keeping the file small.',
      },
      {
        title: 'Trade-off: easier workflow, usually larger files',
        body: 'PNG is broadly compatible and lossless, but it will often be larger than the AVIF source. Use this conversion when compatibility and editability matter more than compression efficiency.',
      },
    ],
  },
]

export function getToolPage(slug: string): ToolPageConfig | undefined {
  return TOOL_PAGES.find((p) => p.slug === slug)
}
