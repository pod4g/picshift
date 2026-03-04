import type { PageTranslations } from '../config'

const en: PageTranslations = {
  home: {
    title:
      'PicShift - Free Image Converter | HEIC, WebP, PNG, JPG, AVIF | No Upload',
    description:
      'Convert images instantly in your browser — without uploading. HEIC to JPG, WebP to PNG, AVIF and more. 100% private, works offline. Free, no limits, no sign-up.',
  },
  privacy: {
    title: 'Privacy Policy | PicShift',
    description:
      'PicShift privacy policy. All image processing happens on your device. No files are uploaded, no personal data is collected.',
    sections: [
      {
        heading: 'The Short Version',
        content:
          'PicShift converts images inside your browser on your device. Source files and converted binaries are not uploaded to PicShift servers for conversion, and we do not store image content on our backend.',
      },
      {
        heading: 'How It Works',
        content:
          'When you choose a file, your browser reads it into local memory, runs conversion with in-browser codecs (including WebAssembly paths), and creates a downloadable result locally. Conversion does not require an account session or file upload pipeline.',
      },
      {
        heading: 'What We Track',
        content:
          'We measure product usage with privacy-focused analytics for reliability and product decisions. Specifically:',
        items: [
          'No analytics cookies are used for this purpose',
          'We do not build cross-site behavioral profiles',
          'Analytics events do not include image content or converted file binaries',
          'We do not associate conversion activity with a personal account identity',
        ],
      },
      {
        heading: 'Your Data',
        content:
          'PicShift conversion works without sign-up. Temporary processing data stays in your browser runtime during conversion, and in-memory buffers are cleared by the browser lifecycle after completion or tab close. Files you download are saved only where you choose on your device.',
      },
      {
        heading: 'No Ads, No Selling Data',
        content:
          'PicShift does not sell user data. The external service currently used is:',
        items: [
          'Umami (open-source analytics) for aggregate traffic and usage metrics',
        ],
      },
      {
        heading: 'Changes to This Policy',
        content:
          'When this policy changes, we update this page and the Last updated date. The core processing model remains local conversion in the browser without server-side file conversion storage.',
      },
      {
        heading: 'Contact',
        content: 'Questions? Reach out at privacy@picshift.app.',
      },
    ],
    lastUpdated: 'Last updated: February 2026',
  },
  tools: {
    'heic-to-jpg': {
      title: 'HEIC to JPG Converter - iPhone Photos to JPG | PicShift',
      description:
        'Convert iPhone HEIC photos to JPG for Windows, websites, and uploads. Local browser processing with no file upload.',
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
          a: "You can convert up to 200 files at a time. For best performance with large batches, we recommend 100 or fewer.",
        },
        {
          q: 'Will I lose image quality?',
          a: 'The default quality setting (85%) produces files visually identical to the original. You can adjust the quality slider — higher values mean better quality but larger files.',
        },
      ],
    },
    'heic-to-png': {
      title: 'HEIC to PNG Converter - Lossless PNG Export | PicShift',
      description:
        'Convert HEIC photos to lossless PNG for editing and design handoff. Runs in your browser with no upload.',
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
    'heic-to-webp': {
      title: 'HEIC to WebP Converter - Smaller Web Images | PicShift',
      description:
        'Convert HEIC photos to WebP for smaller image payloads and faster page delivery. Local-only browser conversion.',
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
    'webp-to-jpg': {
      title: 'WebP to JPG Converter - Open Anywhere | PicShift',
      description:
        'Convert WebP to JPG for email, social uploads, and older software compatibility. No upload, runs locally.',
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
    'webp-to-png': {
      title: 'WebP to PNG Converter for Lossless Transparency | PicShift',
      description:
        'Convert WebP images to lossless PNG when you need pixel-stable output and transparency workflows.',
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
    'png-to-jpg': {
      title: 'PNG to JPG Converter - Reduce PNG Size | PicShift',
      description:
        'Convert PNG to JPG to reduce file size for faster uploads and sharing. Browser-based processing without file upload.',
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
    'jpg-to-png': {
      title: 'JPG to PNG Converter - Editing and Re-export | PicShift',
      description:
        'Convert JPG images to PNG when you need stable editing and repeated re-export without additional lossy encoding.',
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
    'jpg-to-webp': {
      title: 'JPG to WebP Converter - Faster Page Load | PicShift',
      description:
        'Convert JPG to WebP for smaller web images and faster load speed. Tune quality in-browser and download instantly.',
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
    'avif-to-jpg': {
      title: 'AVIF to JPG Converter - Legacy App Support | PicShift',
      description:
        'Convert AVIF to JPG for editors, devices, and platforms that do not accept AVIF files. Runs locally with no upload.',
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
    'avif-to-png': {
      title: 'AVIF to PNG Converter for Lossless Workflow | PicShift',
      description:
        'Convert AVIF images to PNG for lossless editing and asset pipeline stability.',
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
    'image-resizer': {
      title: 'Image Resizer - Resize Images Online Free & Private | PicShift',
      description: 'Resize images in your browser. Preset sizes or custom dimensions. 100% private, no upload.',
      h1: 'Resize Images',
      introText: 'Resize your images to exact dimensions or common presets. Everything happens in your browser — your images never leave your device.',
      howToSteps: [
        'Upload your images by dragging them into the box above, or click to browse.',
        'Pick a size preset or enter custom dimensions.',
        'Choose output format and quality, then download.',
      ],
      faqs: [
        { q: 'What resize presets are available?', a: 'PicShift offers Max 1920px (long edge), Max 1080px, 50% scale, and a Custom mode where you can enter exact pixel dimensions or a percentage.' },
        { q: 'Does resizing reduce image quality?', a: 'Downscaling uses high-quality resampling. You can also adjust the quality slider to control compression. The combination of resize + compression gives you the best control over file size.' },
        { q: 'Can I resize and convert format at the same time?', a: 'Yes. You can change both the output format (JPG, PNG, WebP, AVIF) and the dimensions in a single step.' },
      ],
    },
    'image-compressor': {
      title: 'Image Compressor - Reduce Image Size Online | PicShift',
      description:
        'Compress images in your browser. Reduce JPG, PNG, and WebP file sizes while keeping great quality. 100% private, no upload.',
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
  },
}

export default en
