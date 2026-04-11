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
      'PicShift privacy policy. Image conversion stays on your device. We do not upload your source images for processing, and we explain exactly what traffic data we do and do not see.',
    sections: [
      {
        heading: 'The Short Version',
        content:
          'PicShift processes image files locally in your browser. No image is uploaded to our server for conversion, compression, resizing, or metadata removal. You do not need to register or sign in.',
      },
      {
        heading: 'What happens to your images',
        content:
          'When you pick a file, your browser reads it into local memory, runs the conversion with in-browser codecs and WebAssembly modules, and creates the result locally. We do not keep a server-side copy of the source file or the converted file because the conversion job never goes through our server in the first place.',
      },
      {
        heading: 'What we do not collect',
        content:
          'We do not collect your image content. Specifically:',
        items: ['We do not upload images before or after processing'],
      },
      {
        heading: 'What we do collect',
        content:
          'Like any public website, PicShift sees some ordinary website traffic records. That includes the page URL, referrer, approximate country, device type, browser family, and whether a button or internal link was clicked. We use that data to improve the user experience: to see which pages are actually useful, which tools people finish using, which blog articles lead readers into the product, and which parts of the site need to be more localized or faster. The most important point is that this data still does <strong>not</strong> include the image itself.',
      },
      {
        heading: 'Analytics and third-party services',
        content:
          'We currently use a small number of infrastructure and analytics providers so the site can load reliably and we can understand basic usage patterns:',
        items: [
          'Cloudflare for hosting, CDN delivery, and Cloudflare Web Analytics',
          'Umami for privacy-friendly website analytics',
          'Those services process ordinary website request data, but they do not receive your source images for conversion processing',
          'With our current configuration, both Umami and Cloudflare Web Analytics retain analytics data for six months',
        ],
      },
      {
        heading: 'Cookies and tracking',
        content:
          'PicShift does not run ad networks or cross-site tracking scripts. Our analytics setup is intentionally lightweight and minimal. We do not use analytics to follow you across unrelated websites, and we do not use your image content for profiling because we never receive that content for processing.',
      },
      {
        heading: 'Local preferences and browser storage',
        content:
          'PicShift may store small interface preferences in your browser, such as language choice, theme, or conversion defaults. That is there so the site feels consistent the next time you open it. Those settings stay in your browser unless you clear them yourself.',
      },
      {
        heading: 'Your rights',
        content:
          'Depending on where you live, you may have the right to ask what personal data we hold about you, request correction or deletion, or object to certain processing. In PicShift’s case, we do not get data that tells us who a visitor is. If you want to make a privacy request, email us and we will explain clearly and honestly what we actually have and what we do not have.',
      },
      {
        heading: 'Project status and legal scope',
        content:
          'PicShift is currently operated as an independent project through picshift.app. If the operating entity, governing law, or hosting structure changes in a way that materially affects privacy, we will update this page rather than pretending nothing changed.',
      },
      {
        heading: 'Changes to this policy',
        content:
          'When this policy changes, we update this page and the Last updated date. The core promise is simple: your images are processed on your device, not on our server.',
      },
      {
        heading: 'Contact',
        content: 'Questions, corrections, or privacy requests: privacy@picshift.app.',
      },
    ],
    lastUpdated: 'Last updated: April 2026',
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
      title:
        'JPG to PNG converter online — batch, no upload | PicShift',
      description:
        'Turn JPG into PNG for safer editing, markup, and re-export without stacking more lossy saves. Up to 200 files in your browser — nothing is sent to servers.',
      h1: 'Convert JPG to PNG',
      introText:
        'Use this JPG-to-PNG converter when you need a lossless container for edits or annotations. It does not recover quality already lost in the source JPG, but it helps avoid extra degradation on every future save.',
      howToSteps: [
        'Drag and drop your JPG files into the box above, or click to browse.',
        'Files are converted to PNG instantly in your browser.',
        'Click Download to save each file, or Download All to get a ZIP.',
      ],
      faqs: [
        {
          q: 'How do I convert JPG to PNG online?',
          a: 'Drop your JPG files in, keep PNG as the output format, then download. PicShift runs entirely in your browser with batch support (up to 200 files per run) and no upload.',
        },
        {
          q: 'Does converting JPG to PNG improve quality?',
          a: 'No. Converting from JPG to PNG does not restore quality lost during JPG compression. However, converting to PNG prevents any further quality loss if you need to edit and re-save the image.',
        },
        {
          q: 'When is PNG better than staying on JPG?',
          a: 'Choose PNG when you need transparency, lossless intermediate files, or a workflow where you will save many times. Stay on JPG when you only need a small file to share or upload.',
        },
        {
          q: 'Will the PNG file be larger than the JPG?',
          a: 'Usually yes. PNG stores more image information and is less aggressive about discarding detail, so file size often increases — that is normal when you prioritize edit stability over size.',
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
      title:
        'Resize images online — width, height, presets | PicShift',
      description:
        'Change image size or pixel dimensions in your browser: presets or exact width and height. Up to 200 files per batch, no upload, local processing.',
      h1: 'Resize Images',
      introText:
        'Resize photos for websites, forms, email, or social posts. Pick a preset (1920px, 1080px, 50%) or enter custom pixels — all processing stays on your device.',
      howToSteps: [
        'Upload your images by dragging them into the box above, or click to browse.',
        'Pick a size preset or enter custom dimensions.',
        'Choose output format and quality, then download.',
      ],
      faqs: [
        {
          q: 'How do I change image resolution (pixel width and height)?',
          a: 'Use Custom mode and enter the target width and height in pixels (or a percentage). PicShift downscales with high-quality resampling so the result stays sharp for typical screen use.',
        },
        {
          q: 'Can I resize images without installing software?',
          a: 'Yes. Add files in the browser, choose a preset or custom dimensions, then download. Nothing is uploaded to a server.',
        },
        { q: 'What resize presets are available?', a: 'PicShift offers Max 1920px (long edge), Max 1080px, 50% scale, and a Custom mode where you can enter exact pixel dimensions or a percentage.' },
        { q: 'Does resizing reduce image quality?', a: 'Downscaling uses high-quality resampling. You can also adjust the quality slider to control compression. The combination of resize + compression gives you the best control over file size.' },
        { q: 'Can I resize and convert format at the same time?', a: 'Yes. You can change both the output format (JPG, PNG, WebP, AVIF) and the dimensions in a single step.' },
      ],
    },
    'image-compressor': {
      title:
        'Image compressor online — batch, no upload | PicShift',
      description:
        'Shrink JPG, PNG, WebP, HEIC, and AVIF files before you upload or share them. Up to 200 images per batch in the browser — 100% local, no upload.',
      h1: 'Compress Images',
      introText:
        'Shrink file sizes while keeping the picture usable for web or email. Move the quality slider and check the side-by-side preview before you download.',
      howToSteps: [
        'Drag and drop your images into the box above, or click to browse.',
        'Adjust the quality slider to control compression level.',
        'Click Download to save the compressed images.',
      ],
      faqs: [
        {
          q: 'Can I compress many images at once?',
          a: 'Yes — up to 200 files per run. For very large batches, if the browser slows down, split into smaller groups and download between runs.',
        },
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
    'metadata-remover': {
      title: 'Remove Image Metadata — EXIF, GPS, Camera Data | PicShift',
      description:
        'Remove EXIF, GPS, and camera metadata from JPG, PNG, WebP, HEIC, and AVIF in your browser. Free tool — your files never upload.',
      h1: 'Remove Image Metadata',
      introText:
        'Strip hidden metadata from your photos before sharing. GPS coordinates, camera model, timestamps, and software tags are embedded in most images by default. This tool removes all of it locally in your browser — the image never leaves your device.',
      howToSteps: [
        'Drag and drop your images into the box above, or click to browse.',
        'Metadata is stripped instantly in your browser — nothing is uploaded.',
        'Click Download to save the clean images, or Download All for a ZIP.',
      ],
      faqs: [
        {
          q: 'What metadata is removed?',
          a: 'All EXIF data is removed, including GPS coordinates, camera make and model, lens info, timestamps, software tags, and thumbnail previews. The resulting image contains no embedded metadata.',
        },
        {
          q: 'Does removing metadata change the image quality?',
          a: 'No. Metadata removal strips only the non-visual data embedded in the file. The pixel content of your image remains identical.',
        },
        {
          q: 'Why should I remove metadata before sharing?',
          a: 'Photos taken by phones and cameras contain hidden data like your exact GPS location, device model, and the time the photo was taken. Removing metadata protects your privacy when sharing images online or with others.',
        },
        {
          q: 'Why is the cleaned JPG larger than the original HEIC or HEIF file?',
          a: 'HEIC and HEIF are built for strong compression, so originals are often much smaller on disk than a typical JPG. In the browser PicShift exports cleaned HEIC/HEIF as JPG because same-format HEIC/HEIF downloads are not widely supported yet. A larger JPG is normal and does not mean metadata removal failed. JPG, PNG, WebP, and AVIF still download in the same format as the input. If the smallest file matters more than widest compatibility, keep your HEIC/HEIF originals when you can, or use another modern format your workflow supports (for example AVIF) where applicable.',
        },
        {
          q: 'What image formats are supported?',
          a: 'JPG, PNG, WebP, HEIC, HEIF, and AVIF. JPG, PNG, WebP, and AVIF download in the same format; cleaned HEIC and HEIF are delivered as JPG.',
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
          body: 'The practical workflow is simple: inspect first, then clean, then keep using the cleaned copy when needed.',
          items: [
            'Drop the image into the tool and check what the file actually contains.',
            'If the file only shows width, height, or color space, you will see 0 sensitive fields. If it contains GPS, device details, or timestamps, those will be flagged as sensitive.',
            'Download the cleaned file and use that version whenever you save, send, upload, or keep a copy.',
          ],
        },
      ],
    },
  },
}

export default en
