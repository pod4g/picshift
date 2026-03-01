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
          'Your images stay on your device — always. PicShift converts images right inside your browser. Nothing is uploaded to the internet. We never see, store, or have access to your photos.',
      },
      {
        heading: 'How It Works',
        content:
          "When you convert an image with PicShift, everything happens on your own device. Your files are never sent to any server. In fact, you can turn off your internet connection and PicShift will still work perfectly — that's how local it is.",
      },
      {
        heading: 'What We Track',
        content:
          "We count basic things like how many people visit PicShift so we can improve it. That's it. Specifically:",
        items: [
          "We don't use cookies",
          "We don't know who you are",
          "We can't see what images you convert",
          "We don't track you across websites",
        ],
      },
      {
        heading: 'Your Data',
        content:
          "There is no account, no sign-up, no personal data stored anywhere. Your converted images exist only on your device and disappear when you close or refresh the page. We have no database of users or files — because we don't need one.",
      },
      {
        heading: 'No Ads, No Selling Data',
        content:
          'PicShift has no ads and does not sell any data. The only external services we use are:',
        items: [
          'Umami, an open-source analytics tool — anonymous visitor counting with no cookies or personal tracking',
        ],
      },
      {
        heading: 'Changes to This Policy',
        content:
          "If we update this policy, we'll update this page. Our core promise will never change: your images stay on your device and are never uploaded.",
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
      title: 'HEIC to JPG Converter - Free, Private, No Upload | PicShift',
      description:
        'Convert HEIC photos to JPG instantly in your browser. 100% private — files never leave your device. Free, no limits, no sign-up.',
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
      title: 'HEIC to PNG Converter - Free, Private, No Upload | PicShift',
      description:
        'Convert HEIC photos to PNG format in your browser. Lossless quality, 100% private, no upload required.',
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
    'heic-to-webp': {
      title: 'HEIC to WebP Converter - Free, Private, No Upload | PicShift',
      description:
        'Convert HEIC photos to WebP format in your browser. Smaller files, great quality, 100% private.',
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
      title: 'WebP to JPG Converter - Free, Private, No Upload | PicShift',
      description:
        'Convert WebP images to JPG format in your browser. Free, private, no upload needed.',
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
    'webp-to-png': {
      title: 'WebP to PNG Converter - Free, Private, No Upload | PicShift',
      description:
        'Convert WebP images to lossless PNG format in your browser. Free, private, no upload.',
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
      title: 'PNG to JPG Converter - Free, Private, No Upload | PicShift',
      description:
        'Convert PNG images to JPG format in your browser. Reduce file size while keeping great quality.',
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
      title: 'JPG to PNG Converter - Free, Private, No Upload | PicShift',
      description:
        'Convert JPG images to lossless PNG format in your browser. Free, private, no upload.',
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
      title: 'JPG to WebP Converter - Free, Private, No Upload | PicShift',
      description:
        'Convert JPG images to WebP format in your browser. Smaller files, same quality, 100% private.',
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
    'avif-to-jpg': {
      title: 'AVIF to JPG Converter - Free, Private, No Upload | PicShift',
      description:
        'Convert AVIF images to JPG format in your browser. Free, private, no upload required.',
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
      title: 'AVIF to PNG Converter - Free, Private, No Upload | PicShift',
      description:
        'Convert AVIF images to lossless PNG format in your browser. Free, private, no upload.',
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
      title:
        'Image Compressor - Reduce File Size Online, Free & Private | PicShift',
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
          a: 'It depends on the source image. A quality setting of 80% typically reduces JPG file sizes by 40-60% with minimal visible difference. Use the comparison view to check quality before downloading.',
        },
        {
          q: 'What formats can I compress?',
          a: 'You can compress JPG, PNG, WebP, HEIC, and AVIF images. The output format can be JPG, PNG, or WebP.',
        },
      ],
    },
  },
}

export default en
