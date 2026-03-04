import type { ToolPageConfig } from '../types'

export const TOOL_PAGES: ToolPageConfig[] = [
  {
    slug: 'image-resizer',
    title: 'Image Resizer - Resize Images Online Free & Private | PicShift',
    description:
      'Resize images in your browser. Preset sizes or custom dimensions. 100% private, no upload.',
    defaultInputFormat: null,
    h1: 'Resize Images',
    introText:
      'Resize your images to exact dimensions or common presets. Everything happens in your browser — your images never leave your device.',
    howToSteps: [
      'Upload your images by dragging them into the box above, or click to browse.',
      'Pick a size preset or enter custom dimensions.',
      'Choose output format and quality, then download.',
    ],
    faqs: [
      {
        q: 'What resize presets are available?',
        a: 'PicShift offers Max 1920px (long edge), Max 1080px, 50% scale, and a Custom mode where you can enter exact pixel dimensions or a percentage.',
      },
      {
        q: 'Does resizing reduce image quality?',
        a: 'Downscaling uses high-quality resampling. You can also adjust the quality slider to control compression. The combination of resize + compression gives you the best control over file size.',
      },
      {
        q: 'Can I resize and convert format at the same time?',
        a: 'Yes. You can change both the output format (JPG, PNG, WebP, AVIF) and the dimensions in a single step.',
      },
    ],
  },
  {
    slug: 'image-compressor',
    title: 'Image Compressor - Reduce Image Size Online | PicShift',
    description:
      'Compress images in your browser. Reduce JPG, PNG, and WebP file sizes while keeping great quality. 100% private, no upload.',
    defaultInputFormat: null,
    h1: 'Compress Images',
    introText:
      'Reduce image file sizes while maintaining visual quality. Drag the quality slider to find the perfect balance.',
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
    ],
  },
  {
    slug: 'heic-to-jpg',
    title: 'HEIC to JPG Converter - iPhone Photos to JPG | PicShift',
    description:
      'Convert iPhone HEIC photos to JPG for Windows, websites, and uploads. Local browser processing with no file upload.',
    defaultInputFormat: 'heic',
    defaultOutputFormat: 'jpg',
    h1: 'Convert HEIC to JPG',
    introText:
      'Convert your iPhone HEIC photos to JPG format instantly. Everything happens in your browser — your photos never leave your device.',
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
        q: 'Is it safe to convert my photos here?',
        a: 'Yes. PicShift processes everything in your browser using WebAssembly. Your photos never leave your device — no files are uploaded to any server. You can verify this by disconnecting from the internet and trying the converter.',
      },
      {
        q: 'How many files can I convert at once?',
        a: "There's no hard limit. We recommend up to 100 files at a time for best performance. If you have more, just do multiple batches.",
      },
      {
        q: 'Will I lose image quality?',
        a: 'The default quality setting (85%) produces files visually identical to the original. You can adjust the quality slider — higher values mean better quality but larger files.',
      },
    ],
  },
  {
    slug: 'heic-to-png',
    title: 'HEIC to PNG Converter - Lossless PNG Export | PicShift',
    description:
      'Convert HEIC photos to lossless PNG for editing and design handoff. Runs in your browser with no upload.',
    defaultInputFormat: 'heic',
    defaultOutputFormat: 'png',
    h1: 'Convert HEIC to PNG',
    introText:
      'Convert your iPhone HEIC photos to lossless PNG format. All processing happens locally in your browser.',
    howToSteps: [
      'Drag and drop your HEIC files into the box above, or click to browse.',
      'Files are converted to lossless PNG instantly in your browser.',
      'Click Download to save each file, or Download All to get a ZIP.',
    ],
    faqs: [
      {
        q: 'Why convert HEIC to PNG instead of JPG?',
        a: 'PNG is a lossless format, meaning no quality is lost during conversion. Choose PNG when you need perfect quality or transparency support. Choose JPG for smaller file sizes.',
      },
      {
        q: 'Are PNG files larger than JPG?',
        a: 'Yes, PNG files are 2-5x larger than JPG in standard photo workflows because PNG is lossless. If file size matters more than perfect quality, convert to JPG instead.',
      },
    ],
  },
  {
    slug: 'heic-to-webp',
    title: 'HEIC to WebP Converter - Smaller Web Images | PicShift',
    description:
      'Convert HEIC photos to WebP for smaller image payloads and faster page delivery. Local-only browser conversion.',
    defaultInputFormat: 'heic',
    defaultOutputFormat: 'webp',
    h1: 'Convert HEIC to WebP',
    introText:
      'Convert your iPhone HEIC photos to the modern WebP format. WebP offers 25-34% smaller files than JPG at the same quality.',
    howToSteps: [
      'Drag and drop your HEIC files into the box above, or click to browse.',
      'Files are converted to WebP instantly in your browser.',
      'Click Download to save each file, or Download All to get a ZIP.',
    ],
    faqs: [
      {
        q: 'What is WebP?',
        a: 'WebP is a modern image format developed by Google. It provides 25-34% smaller file sizes compared to JPG at equivalent quality. WebP is supported by all major browsers (96.5% global support).',
      },
      {
        q: 'When should I use WebP?',
        a: 'WebP is ideal for web use — smaller files mean faster page loads. For sharing via email or messaging, JPG is more universally compatible.',
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
    title: 'WebP to JPG Converter - Open Anywhere | PicShift',
    description:
      'Convert WebP to JPG for email, social uploads, and older software compatibility. No upload, runs locally.',
    defaultInputFormat: 'webp',
    defaultOutputFormat: 'jpg',
    h1: 'Convert WebP to JPG',
    introText:
      'Convert WebP images to the universally compatible JPG format. All processing happens locally in your browser.',
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
    title: 'PNG to JPG Converter - Reduce PNG Size | PicShift',
    description:
      'Convert PNG to JPG to reduce file size for faster uploads and sharing. Browser-based processing without file upload.',
    defaultInputFormat: 'png',
    defaultOutputFormat: 'jpg',
    h1: 'Convert PNG to JPG',
    introText:
      "Convert PNG images to JPG to reduce file size. Great for photos saved as PNG that don't need transparency.",
    howToSteps: [
      'Drag and drop your PNG files into the box above, or click to browse.',
      'Files are converted to JPG instantly in your browser.',
      'Adjust the quality slider to balance size vs. quality.',
    ],
    faqs: [
      {
        q: 'Will I lose transparency?',
        a: 'Yes. JPG does not support transparency. Any transparent areas in your PNG will become white. If you need transparency, keep your image as PNG or convert to WebP.',
      },
    ],
  },
  {
    slug: 'png-to-webp',
    title: 'PNG to WebP Converter for Transparent Web Images | PicShift',
    description:
      'Convert PNG images to WebP for transparent web assets with smaller transfer size.',
    defaultInputFormat: 'png',
    defaultOutputFormat: 'webp',
    h1: 'Convert PNG to WebP',
    introText:
      'Convert PNG images to WebP to reduce transfer size for web delivery while keeping transparency support.',
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
        q: 'Will transparent backgrounds stay transparent?',
        a: 'Yes. WebP supports alpha transparency, so transparent regions are preserved.',
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
    title: 'JPG to AVIF Converter - AVIF for Web Delivery | PicShift',
    description:
      'Convert JPG to AVIF for stronger compression in AVIF-ready browsers and apps. Private local conversion in browser.',
    defaultInputFormat: 'jpg',
    defaultOutputFormat: 'avif',
    h1: 'Convert JPG to AVIF',
    introText:
      'Convert JPG images to AVIF for smaller transfer sizes in modern web delivery environments.',
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
        q: 'Is AVIF supported everywhere?',
        a: 'No. AVIF support is broad in modern browsers and newer apps, while some legacy environments still require JPG.',
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
    title: 'AVIF to JPG Converter - Legacy App Support | PicShift',
    description:
      'Convert AVIF to JPG for editors, devices, and platforms that do not accept AVIF files. Runs locally with no upload.',
    defaultInputFormat: 'avif',
    defaultOutputFormat: 'jpg',
    h1: 'Convert AVIF to JPG',
    introText:
      'Convert AVIF images to the universally compatible JPG format. All processing happens locally.',
    howToSteps: [
      'Drag and drop your AVIF files into the box above, or click to browse.',
      'Files are converted to JPG instantly in your browser.',
      'Click Download to save each file, or Download All to get a ZIP.',
    ],
    faqs: [
      {
        q: 'What is AVIF?',
        a: 'AVIF is a next-generation image format based on the AV1 video codec. It offers better compression than both JPG and WebP, but support is still growing.',
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
  },
]

export function getToolPage(slug: string): ToolPageConfig | undefined {
  return TOOL_PAGES.find((p) => p.slug === slug)
}
