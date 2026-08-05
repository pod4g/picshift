import type { PageTranslations } from '../config'

const en: PageTranslations = {
  home: {
    // Near-win refinement for query "local image converter" (rank 11,
    // 3 imp/7d, stable). Title front-loads "Local Image Converter" to
    // match user intent verbatim; description opens with the same phrase
    // as an affirmative answer.
    title: 'Local Image Converter - HEIC, WebP, JPG, PNG, AVIF | PicShift',
    description:
      'Local image converter running in your browser — no upload or sign-up. HEIC to JPG, WebP to PNG, AVIF and more. Successfully loaded workflows are reusable offline.',
  },
  privacy: {
    title: 'Privacy Policy — Local Image Processing, No Uploads | PicShift',
    description:
      'How PicShift keeps your photos private: images are processed inside your browser, source files never leave your device, and we explain exactly what analytics we do see.',
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
          'Analytics availability and retention follow each provider’s current policy and the active PicShift account configuration; PicShift does not publish a fixed deletion period here',
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
    lastUpdated: 'Last updated: August 2026',
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
          a: "HEIC (High Efficiency Image Container) has been a default iPhone photo format since iOS 11. It is designed for efficient storage, but size and visual quality depend on the image and encoding settings. Some Windows apps and upload workflows still do not accept HEIC.",
        },
        {
          q: 'Is it safe to convert my photos here?',
          a: 'Yes. PicShift processes everything in your browser using WebAssembly, so no image file is uploaded for conversion. To test offline reuse, first complete this exact workflow online so its code and codec load, then disconnect, reload the same page, and repeat with a non-sensitive test image.',
        },
        {
          q: 'How many files can I convert at once?',
          a: 'Limits are 50 MB per file, 200 files per batch, and 1 GB total per batch. Device memory and browser performance also affect large jobs.',
        },
        {
          q: 'Will I lose image quality?',
          a: 'The default quality setting (85%) is a starting point, not a guarantee of identical appearance. Compare important details before downloading; higher values usually preserve more detail but can produce larger files.',
        },
      ],
    },
    'heic-to-png': {
      title: 'HEIC to PNG Converter - Adjustable PNG Output | PicShift',
      description:
        'Convert HEIC photos to PNG for editing and design handoff. Quality 95-100 preserves decoded pixels; lower values may reduce the color palette.',
      h1: 'Convert HEIC to PNG',
      introText:
        'Convert your iPhone HEIC photos to PNG in your browser. This dedicated PNG page starts at quality 100.',
      howToSteps: [
        'Drag and drop your HEIC files into the box above, or click to browse.',
        'Keep quality at 95-100 for decoded-pixel-preserving PNG output, or lower it only after comparing the result.',
        'Click Download to save each file, or Download All to get a ZIP.',
      ],
      faqs: [
        {
          q: 'Why convert HEIC to PNG instead of JPG?',
          a: 'PNG supports lossless storage, but PicShift behavior depends on the quality setting. At 95-100 it preserves the decoded pixels and applies lossless OxiPNG optimization; below 95, palette quantization may reduce colors. Choose JPG when smaller files matter more than transparency.',
        },
        {
          q: 'Are PNG files larger than JPG?',
          a: 'PNG can be larger or smaller than JPG depending on the decoded image and encoder settings. Compare the generated files; use JPG when its lossy trade-off fits the workflow.',
        },
      ],
    },
    'heic-to-webp': {
      title: 'HEIC to WebP Converter - Smaller Web Images | PicShift',
      description:
        'Convert HEIC photos to WebP and compare the actual size and visual result. Output depends on the source and encoder settings.',
      h1: 'Convert HEIC to WebP',
      introText:
        'Convert iPhone HEIC photos to WebP. WebP may reduce size for web use, but the result depends on the source, encoder settings, and target support.',
      howToSteps: [
        'Drag and drop your HEIC files into the box above, or click to browse.',
        'Files are converted to WebP instantly in your browser.',
        'Click Download to save each file, or Download All to get a ZIP.',
      ],
      faqs: [
        {
          q: 'What is WebP?',
          a: 'WebP is an image format developed by Google that supports lossy and lossless compression. It can be smaller than JPG for some sources and settings. Check the actual output and verify support in the browsers or apps you target.',
        },
        {
          q: 'When should I use WebP?',
          a: 'WebP is useful for web delivery and may reduce payload size for some images and settings. Compare the output and verify target support; JPG can be more compatible with older sharing workflows.',
        },
      ],
    },
    // Near-win refinement for query "heif to avif" (rank 8.25, 4 imp/7d).
    // data/tools.ts default description ("AV1-based compression gains in
    // modern delivery pipelines") is too technical; override with a
    // concrete, affirmative answer.
    'heif-to-avif': {
      title: 'Convert HEIF to AVIF in Your Browser — No Upload | PicShift',
      description:
        'Convert HEIF files to AVIF for modern web delivery. Size and visual quality vary with the source and settings, so compare the output before publishing.',
    },
    'webp-to-jpg': {
      title: 'WebP to JPG Converter - Broad App Support | PicShift',
      description:
        'Convert WebP to JPG for email, social uploads, and older software compatibility. No upload, runs locally.',
      h1: 'Convert WebP to JPG',
      introText:
        'Convert WebP images to broadly supported JPG for workflows that do not accept WebP. Source images are processed in the browser.',
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
      title: 'WebP to PNG Converter for Transparency and Editing | PicShift',
      description:
        'Convert WebP images to PNG for editing and transparency. Quality 95-100 preserves decoded pixels; lower values may reduce the color palette.',
      h1: 'Convert WebP to PNG',
      introText:
        'Convert WebP images to PNG for transparency or editing. This dedicated PNG page starts at quality 100.',
      howToSteps: [
        'Drag and drop your WebP files into the box above, or click to browse.',
        'Keep quality at 95-100 for decoded-pixel-preserving PNG output, or compare the result before choosing a lower value.',
        'Click Download to save each file, or Download All to get a ZIP.',
      ],
      faqs: [
        {
          q: 'Does WebP to PNG conversion lose quality?',
          a: 'It depends on the setting. At quality 95-100, PicShift preserves the pixels decoded from the WebP source and applies lossless OxiPNG optimization. Below 95, palette quantization may reduce colors, so compare the result when exact pixel fidelity matters.',
        },
      ],
    },
    'png-to-jpg': {
      title:
        'PNG to JPG converter online — batch, no upload | PicShift',
      description:
        'Convert PNG to JPG online to shrink photos before email, web upload or e-commerce listings. Adjust quality, batch up to 200 files, fully in-browser — no upload.',
      h1: 'Convert PNG to JPG',
      introText:
        'Convert PNG to JPG when a photo saved as PNG is too heavy for email, a contact form, or a website. JPG drops transparency; the size and visible change depend on the source and quality setting, so compare the output.',
      howToSteps: [
        'Drag and drop your PNG files into the box above, or click to browse.',
        'Use quality 80–85 as a starting range, then compare size and fine details.',
        'Click Download to save each file, or Download All to get a ZIP.',
      ],
      faqs: [
        {
          q: 'How do I convert PNG to JPG online?',
          a: 'Drop your PNG files into PicShift, keep JPG as the output format, optionally tune the quality slider, then download. The conversion runs entirely in your browser — files are not uploaded to any server.',
        },
        {
          q: 'Why convert PNG to JPG?',
          a: 'PNG stores decoded pixels losslessly, which can make photographic PNGs large. Converting to JPG may reduce size, but the result and visible loss depend on the image and quality setting. Compare the output before using it for an email, form, or website.',
        },
        {
          q: 'Will I lose transparency when converting PNG to JPG?',
          a: 'Yes. JPG does not support transparency, so any transparent area becomes white in the JPG. If you need to keep transparency, convert to WebP instead — it supports both transparency and small file sizes.',
        },
        {
          q: 'How much smaller is JPG compared to PNG?',
          a: 'There is no reliable fixed ratio. Photographs, flat graphics, screenshots, and text can behave very differently. Compare the generated size and fine details, and keep PNG when transparency or sharp edges matter.',
        },
        {
          q: 'What quality setting should I use?',
          a: 'Quality 80–85 is a practical starting range, not a universal sweet spot. Compare fine details and file size, then move in small steps; the right value depends on the source and use case.',
        },
        {
          q: 'When should I keep PNG instead of converting?',
          a: 'Keep PNG for screenshots, app UI captures, line art, logos and anything with sharp text or hard edges. JPG can introduce subtle blocking around high-contrast edges, while PNG stays crisp.',
        },
        {
          q: 'Can I convert multiple PNG files at once?',
          a: 'Yes. PicShift handles up to 200 files per batch directly in the browser. For very large jobs, process in groups of 50–100 to keep the browser responsive.',
        },
        {
          q: 'Are my PNG files uploaded to a server?',
          a: 'No. Conversion happens in your browser via WebAssembly. After this exact workflow and its codec have completed successfully online, you can disconnect, reload the same page, and test the same workflow offline. A new or unused codec may still need a connection.',
        },
      ],
    },
    'jpg-to-png': {
      title:
        'JPG to PNG converter online — batch, no upload | PicShift',
      description:
        'Turn JPG into PNG for editing, markup, and re-export. Quality 95-100 preserves decoded pixels; lower values may reduce the color palette.',
      h1: 'Convert JPG to PNG',
      introText:
        'Use this JPG-to-PNG converter for edits or annotations. It does not recover detail already lost in the JPG; this dedicated PNG page starts at quality 100.',
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
          a: 'No. PNG cannot restore detail lost during JPG compression. At PicShift quality 95-100, the PNG preserves the pixels decoded from the JPG and applies lossless OxiPNG optimization; below 95, palette quantization may reduce colors.',
        },
        {
          q: 'When is PNG better than staying on JPG?',
          a: 'Choose PNG for transparency or an editing-oriented workflow, keeping quality at 95-100 when decoded-pixel fidelity matters. Stay on JPG when a smaller sharing file is the priority.',
        },
        {
          q: 'Will the PNG file be larger than the JPG?',
          a: 'Usually yes. PNG stores more image information and is less aggressive about discarding detail, so file size often increases — that is normal when you prioritize edit stability over size.',
        },
      ],
    },
    'jpg-to-webp': {
      title: 'JPG to WebP Converter - Compare Web Output | PicShift',
      description:
        'Convert JPG to WebP and compare size and visual quality for web delivery. Results depend on the source and encoder settings.',
      h1: 'Convert JPG to WebP',
      introText:
        'Convert JPG images to WebP and compare the actual visual quality and size. Savings depend on the source and encoder settings.',
      howToSteps: [
        'Drag and drop your JPG files into the box above, or click to browse.',
        'Files are converted to WebP instantly in your browser.',
        'Adjust the quality slider to balance size vs. quality.',
      ],
      faqs: [
        {
          q: 'How much smaller is WebP compared to JPG?',
          a: 'WebP can be smaller than JPG at a similar visual quality, but no fixed reduction applies to every image. Compare the generated file with the source before publishing.',
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
          a: 'AVIF is an image format based on the AV1 video codec. It can be smaller than JPG or WebP for some images and settings, but no fixed advantage is guaranteed and target support should be checked.',
        },
      ],
    },
    'avif-to-png': {
      title: 'AVIF to PNG Converter for Editing Workflows | PicShift',
      description:
        'Convert AVIF images to PNG for editing and transparency. Quality 95-100 preserves decoded pixels; lower values may reduce the color palette.',
      h1: 'Convert AVIF to PNG',
      introText:
        'Convert AVIF images to PNG for editing workflows. This dedicated PNG page starts at quality 100.',
      howToSteps: [
        'Drag and drop your AVIF files into the box above, or click to browse.',
        'Keep quality at 95-100 for decoded-pixel-preserving PNG output, or compare the result before choosing a lower value.',
        'Click Download to save each file, or Download All to get a ZIP.',
      ],
      faqs: [
        {
          q: 'Why convert AVIF to PNG?',
          a: 'Some applications do not accept AVIF, while PNG is broadly supported. At quality 95-100 PicShift preserves decoded pixels with lossless OxiPNG optimization; lower values may quantize the palette.',
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
          a: 'Use Custom mode and enter the target width and height in pixels (or a percentage). Resampling and re-encoding can change detail, so compare the result at its intended display size.',
        },
        {
          q: 'Can I resize images without installing software?',
          a: 'Yes. Add files in the browser, choose a preset or custom dimensions, then download. Nothing is uploaded to a server.',
        },
        { q: 'What resize presets are available?', a: 'PicShift offers Max 1920px (long edge), Max 1080px, 50% scale, and a Custom mode where you can enter exact pixel dimensions or a percentage.' },
        { q: 'Does resizing reduce image quality?', a: 'The result depends on the source, target dimensions, format, and quality setting. Compare visible detail and file size after resampling and re-encoding.' },
        { q: 'Can I resize and convert format at the same time?', a: 'Yes. You can change both the output format (JPG, PNG, WebP, AVIF) and the dimensions in a single step.' },
      ],
    },
    'image-compressor': {
      title:
        'Image compressor online — batch, no upload | PicShift',
      description:
        'Shrink JPG, PNG, WebP, HEIC, and AVIF files in the browser. Source images are not sent to a conversion server; limits are 50 MB per file, 200 files, and 1 GB per batch.',
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
          a: 'Compression results are source-dependent. Quality 80 is a starting suggestion, not a guaranteed saving or a PicShift benchmark result. Use the comparison view to check size and important details before downloading.',
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
        'Inspect hidden metadata before sharing. PicShift re-encodes accepted images locally without intentionally copying the supported fields it detects, such as GPS, camera, timestamp, and software tags; source image content is not uploaded for this operation.',
      howToSteps: [
        'Drag and drop your images into the box above, or click to browse.',
        'Review the supported metadata fields the local scanner detected.',
        'Click re-encode, then download the successful outputs individually or as a ZIP.',
      ],
      faqs: [
        {
          q: 'What metadata is removed?',
          a: 'PicShift can detect fields such as GPS coordinates, camera and lens details, timestamps, software tags, and thumbnail metadata. It re-encodes the image without intentionally copying detected fields, but browser-added encoder or color-profile data may remain; independently inspect a security-critical output.',
        },
        {
          q: 'Does removing metadata change the image quality?',
          a: 'Metadata fields are removed, but some formats must be decoded and re-encoded, so do not assume byte-for-byte or pixel-identical output. Compare the result when visual fidelity is critical.',
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
          body: 'This tool targets metadata embedded in the file itself. Re-encoding does not erase visible objects or text, but it can change pixel values in lossy formats, so it addresses hidden-data exposure rather than content already visible on screen.',
          items: [
            'Detected fields can include GPS coordinates, device details, timestamps, and software tags; cleanup does not erase faces, license plates, watermarks, or visible text.',
            'JPG, PNG, WebP, and AVIF are downloaded in the same format. Cleaned HEIC and HEIF files are downloaded as JPG because the browser still cannot write them back as HEIC or HEIF.',
            'Some apps and social platforms strip part of the metadata after upload, but that behavior is inconsistent and can change. The safer move is to clean the file yourself before sharing it.',
          ],
        },
        {
          title: 'How to remove image metadata',
          body: 'The practical workflow is simple: inspect first, then clean, then keep using the cleaned copy when needed.',
          items: [
            'Drop the image into the tool and check what the file actually contains.',
            'A result of 0 means no supported metadata field was detected; it is not proof that every possible metadata block is absent. Detected GPS, device, or timestamp fields are flagged as sensitive.',
            'Download the cleaned file and use that version whenever you save, send, upload, or keep a copy.',
          ],
        },
      ],
    },
  },
}

export default en
