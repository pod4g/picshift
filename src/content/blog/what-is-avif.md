---
title: "What Is AVIF? Browser Support, File Size, and Use in 2026"
description: "AVIF is an AV1-based image format. Learn its capabilities, how support varies by environment, and why file-size results must be measured per image."
cover: "/blog/what-is-avif-cover.webp"
publishedAt: 2026-04-25
updatedAt: 2026-08-04
author: "PicShift"
tags: ["avif", "format-comparison", "web-performance", "guide"]
relatedTools: ["jpg-to-avif", "png-to-avif", "avif-to-jpg", "avif-to-png", "heic-to-avif"]
---

<img src="/blog/what-is-avif-cover.webp" alt="What is AVIF? An AV1-based image format with high-bit-depth, HDR, and transparency support" width="1200" height="630" loading="eager" decoding="async" />

You start seeing `.avif` in download dialogs, or an application refuses to open one. Maybe you are trying to make a site lighter and someone keeps repeating "just switch to AVIF." So what is it, actually — and when is it worth testing in 2026?

Short version: AVIF is a practical web candidate when you provide a fallback and measure the output. Support in desktop, email, and print workflows must be checked separately.

## What AVIF actually is

AVIF stands for AV1 Image File Format. It is a still-image format that uses the AV1 video codec for compression — the same codec Netflix and YouTube use to push video at lower bitrates than H.264.

The Alliance for Open Media publishes the [AV1 patent license](https://aomedia.org/license/patent-license/) and the [AVIF specification](https://aomediacodec.github.io/av1-avif/latest-approved.html). AVIF uses the ISO Base Media File Format family also used by HEIF-based formats, but stores AV1-coded image data.

The features that matter in practice:

- Lossy and lossless modes in one format
- 10-bit and 12-bit color depth (mainstream JPEG is 8-bit; the [JPEG standard's 12-bit extended profile](https://www.w3.org/Graphics/JPEG/itu-t81.pdf) exists but is rarely supported by consumer software)
- HDR with wide color gamut (BT.2020, PQ, HLG)
- Alpha transparency, like PNG
- Film grain synthesis — store the *recipe* for noise instead of the noise itself ([mandatory in the AV1 spec](https://norkin.org/research/film_grain/index.html); [Netflix has been rolling it out at scale](https://netflixtechblog.com/av1-scale-film-grain-synthesis-the-awakening-ee09cfdff40b))

Those capabilities give encoders more options, but they do not guarantee a smaller file or a particular visual result.

## How small is “smaller”

Published studies such as [Netflix's AVIF evaluation](https://netflixtechblog.com/avif-for-next-generation-image-coding-b1d75675fe4) show that AVIF can be more compression-efficient on the study's corpus and quality metrics. That does not establish a universal percentage for other images, encoders, or settings, and PicShift has not published a comparable corpus benchmark.

For your own file, generate JPG, WebP, and AVIF candidates, inspect the intended display size and important details, and compare byte size and encoding time. Photographs, screenshots, illustrations, and transparent assets can produce very different rankings.

Encoding and decoding cost depend on the implementation, speed setting, image dimensions, and hardware. Measure both transfer size and processing time for the workflow you plan to ship.

## AVIF browser support in 2026

AVIF is enabled in current releases of the major browser families listed in the live [Can I Use compatibility table](https://caniuse.com/avif). Because browser and embedded-webview populations change, check that table for your audience and keep a JPG or WebP fallback.

Support reached the same bar WebP cleared a few years ago. Here is the version where each browser turned AVIF on by default ([versions per caniuse](https://caniuse.com/avif)):

| Browser | AVIF supported by default since |
| --- | --- |
| Chrome | 85 (August 2020) |
| Edge | 121 (January 2024) — earlier builds had AVIF disabled by default |
| Firefox | 93 (October 2021) |
| Opera | 71 (August 2020) |
| Samsung Internet | 14 (2021) |
| Safari (iOS / iPadOS) | 16.0 (Sept 2022, partial — no animation), 16.4 for full support including animation |
| Safari (macOS) | 16.4 (March 2023, requires macOS Ventura or later) |

Treat the version table as a historical starting point, not proof that every in-app browser, managed device, or application in your audience supports the format. Test the actual target and use the `<picture>` fallback shown below.

## Where AVIF still does not work

Browser support does not imply support in every desktop application or delivery system.

- Check the current vendor documentation for the exact version of an editor or office application; for example, Adobe documents AVIF changes in its [Photoshop release notes](https://helpx.adobe.com/photoshop/using/whats-new/2025-6.html)
- Send a sample through the actual email, CMS, or messaging path because intermediaries may reject or transform the file
- Ask a print provider which formats and color profiles it accepts before preparing the final export

When the receiving workflow is unknown, JPG is usually the safer photo fallback and PNG is usually the safer transparency or editing fallback. Neither choice restores detail already discarded by the source.

## When to use AVIF (and when to skip it)

| Use case | Starting recommendation |
| --- | --- |
| Hero image on a marketing site | Yes |
| Product photos in a CMS | Yes (with JPG fallback) |
| Blog post cover images | Yes |
| Image embedded in a document or slide deck | Test the target app; keep PNG/JPG fallback |
| Photo sent through an unknown email client | JPG fallback |
| Print or commercial photography deliverable | Use the provider's stated format |
| Image for editing | Verify the editor version; PNG/JPG fallback |
| Long-term archival storage | Follow an archival policy; do not choose by size alone |

The pattern: AVIF is strongest when you control web delivery and fallback behavior. Cross-application workflows need direct compatibility testing.

## A note on JPEG XL

JPEG XL is another modern format with features such as progressive decoding and lossless JPEG recompression, described by the [JPEG committee](https://jpeg.org/jpegxl/). Browser and application support has changed repeatedly, so verify current support for the target audience instead of relying on a dated version timeline.

## How to actually serve AVIF on a site

The cleanest pattern is the `<picture>` element with fallbacks:

```html
<picture>
  <source srcset="/photos/sunset.avif" type="image/avif">
  <source srcset="/photos/sunset.webp" type="image/webp">
  <img src="/photos/sunset.jpg" alt="Sunset over the bay" width="1200" height="800">
</picture>
```

Browsers pick the best format they can render and ignore the rest. Older browsers fall back to JPEG silently. No JavaScript, no blank squares, no broken images.

If maintaining three versions sounds tedious, modern image CDNs (Cloudflare Images, Vercel Image Optimization, ImageKit, etc.) negotiate the format automatically based on the request's `Accept` header. You upload one source file; they serve AVIF to browsers that accept it and JPG to the rest.

## Working with AVIF in PicShift

If you have JPGs or PNGs you want to convert to AVIF — or AVIF files someone sent you that nothing on your computer wants to open — PicShift runs the encoders directly in your browser:

- [Convert JPG to AVIF](/jpg-to-avif) — compare actual size, visual quality, and encoding time
- [Convert PNG to AVIF](/png-to-avif) — keeps transparency
- [Convert AVIF back to JPG](/avif-to-jpg) — for software that cannot read AVIF
- [Convert AVIF to PNG](/avif-to-png) — for transparency and editing; use quality 95–100 when preserving decoded pixels matters
- [Convert HEIC to AVIF](/heic-to-avif) — recompress iPhone photos for the web

PicShift runs its AV1 encoder as WebAssembly in your browser and does not upload source image content for conversion. Normal page and analytics requests still occur as described in the privacy documentation.

## Should you switch?

AVIF is a useful web candidate because it supports modern image features and can be efficient on some sources. It is not automatically the smallest output or the right primary format for every audience. Generate candidates, inspect them, and keep a fallback that matches the receiving workflow.

If you're weighing AVIF against older formats, our [PNG vs JPG guide](/blog/png-vs-jpg) covers the legacy trade-offs, and our [format compatibility doc](/docs/format-compatibility) explains format properties and the need to verify the target environment. For a practical method to tune settings and inspect visible detail, see [image quality vs file size](/docs/image-quality-vs-file-size).
