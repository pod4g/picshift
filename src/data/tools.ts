import type { ToolPageConfig } from '../types'

export const TOOL_PAGES: ToolPageConfig[] = [
  {
    slug: 'image-compressor',
    title:
      'Image Compressor - Reduce File Size Online, Free & Private | PicShift',
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
        a: 'It depends on the source image. A quality setting of 80% typically reduces JPG file sizes by 40-60% with minimal visible difference. Use the comparison view to check quality before downloading.',
      },
      {
        q: 'What formats can I compress?',
        a: 'You can compress JPG, PNG, WebP, HEIC, and AVIF images. The output format can be JPG, PNG, WebP, or AVIF.',
      },
    ],
  },
  {
    slug: 'heic-to-jpg',
    title: 'HEIC to JPG Converter - Free, Private, No Upload | PicShift',
    description:
      'Convert HEIC photos to JPG instantly in your browser. 100% private — files never leave your device. Free, no limits, no sign-up.',
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
    title: 'HEIC to PNG Converter - Free, Private, No Upload | PicShift',
    description:
      'Convert HEIC photos to PNG format in your browser. Lossless quality, 100% private, no upload required.',
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
        a: 'Yes, PNG files are typically 2-5x larger than JPG because PNG is lossless. If file size matters more than perfect quality, consider converting to JPG instead.',
      },
    ],
  },
  {
    slug: 'heic-to-webp',
    title: 'HEIC to WebP Converter - Free, Private, No Upload | PicShift',
    description:
      'Convert HEIC photos to WebP format in your browser. Smaller files, great quality, 100% private.',
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
    slug: 'webp-to-jpg',
    title: 'WebP to JPG Converter - Free, Private, No Upload | PicShift',
    description:
      'Convert WebP images to JPG format in your browser. Free, private, no upload needed.',
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
        a: 'While WebP is widely supported in browsers, some older applications, email clients, and social media platforms may not accept WebP. JPG is the most universally compatible image format.',
      },
    ],
  },
  {
    slug: 'webp-to-png',
    title: 'WebP to PNG Converter - Free, Private, No Upload | PicShift',
    description:
      'Convert WebP images to lossless PNG format in your browser. Free, private, no upload.',
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
    title: 'PNG to JPG Converter - Free, Private, No Upload | PicShift',
    description:
      'Convert PNG images to JPG format in your browser. Reduce file size while keeping great quality.',
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
    slug: 'jpg-to-png',
    title: 'JPG to PNG Converter - Free, Private, No Upload | PicShift',
    description:
      'Convert JPG images to lossless PNG format in your browser. Free, private, no upload.',
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
    title: 'JPG to WebP Converter - Free, Private, No Upload | PicShift',
    description:
      'Convert JPG images to WebP format in your browser. Smaller files, same quality, 100% private.',
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
        a: 'WebP is typically 25-34% smaller than JPG at the same visual quality. A 1 MB JPG might become 650-750 KB as WebP with no visible difference.',
      },
    ],
  },
  {
    slug: 'avif-to-jpg',
    title: 'AVIF to JPG Converter - Free, Private, No Upload | PicShift',
    description:
      'Convert AVIF images to JPG format in your browser. Free, private, no upload required.',
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
    slug: 'avif-to-png',
    title: 'AVIF to PNG Converter - Free, Private, No Upload | PicShift',
    description:
      'Convert AVIF images to lossless PNG format in your browser. Free, private, no upload.',
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
