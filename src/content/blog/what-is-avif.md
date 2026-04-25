---
title: "What Is AVIF, and Should You Be Using It in 2026?"
description: "AVIF beats JPEG and WebP on file size — but support outside the browser is still patchy. Here's what it is, where it works, and where to use JPG instead."
cover: "/blog/what-is-avif-cover.webp"
publishedAt: 2026-04-25
author: "PicShift"
tags: ["avif", "format-comparison", "web-performance", "guide"]
relatedTools: ["jpg-to-avif", "png-to-avif", "avif-to-jpg", "avif-to-png", "heic-to-avif"]
---

<img src="/blog/what-is-avif-cover.webp" alt="What is AVIF? AV1 codec, 10-bit color, HDR — 30 to 50 percent smaller than JPEG" width="1200" height="630" loading="eager" decoding="async" />

You start seeing `.avif` in download dialogs. Quick Look refuses to preview the file. Or maybe you're trying to make your own site lighter and someone keeps repeating "just switch to AVIF." So what is it, actually — and is it worth the migration in 2026?

Short version: yes, on the web. Almost never anywhere else.

## What AVIF actually is

AVIF stands for AV1 Image File Format. It is a still-image format that uses the AV1 video codec for compression — the same codec Netflix and YouTube use to push video at lower bitrates than H.264.

It was developed by the Alliance for Open Media, a consortium that includes Google, Apple, Microsoft, Mozilla, Netflix, and Amazon. AOMedia released AV1 under a [royalty-free patent license](https://aomedia.org/license/patent-license/) and a BSD-3-Clause Clear reference implementation. That framing is contested in 2026: [Sisvel runs an AV1 patent pool](https://www.sisvel.com/insights/sisvel-has-licensed-half-the-av1-market-while-bringing-much-needed/) that has signed roughly half the AV1 finished-product market (1,941 patents from 21 owners), and in [March 2026 Dolby sued Snap Inc.](https://arstechnica.com/gadgets/2026/03/av1s-open-royalty-free-promise-in-question-as-dolby-sues-snapchat-over-codec/) over alleged AV1 patent infringement — InterDigital is pursuing a parallel case against Amazon Fire devices. For website publishers this does not change the day-to-day calculus: serving an AVIF image doesn't put a royalty bill in your inbox. But "royalty-free" is the AOMedia framing, not a fact every patent holder agrees with. The AVIF container itself is the same [HEIF box](https://aomediacodec.github.io/av1-avif/latest-approved.html) that holds Apple's HEIC photos — different codec, same plumbing.

The features that matter in practice:

- Lossy and lossless modes in one format
- 10-bit and 12-bit color depth (mainstream JPEG is 8-bit; the [JPEG standard's 12-bit extended profile](https://www.w3.org/Graphics/JPEG/itu-t81.pdf) exists but is rarely supported by consumer software)
- HDR with wide color gamut (BT.2020, PQ, HLG)
- Alpha transparency, like PNG
- Film grain synthesis — store the *recipe* for noise instead of the noise itself ([mandatory in the AV1 spec](https://norkin.org/research/film_grain/index.html); [Netflix has been rolling it out at scale](https://netflixtechblog.com/av1-scale-film-grain-synthesis-the-awakening-ee09cfdff40b))

That last one matters more than it sounds. It is part of why AVIF holds up so well on photographs that have natural grain or texture without ballooning the file.

## How small is "smaller"

Independent tests by [Netflix](https://netflixtechblog.com/avif-for-next-generation-image-coding-b1d75675fe4), Cloudflare, and Google land on roughly the same numbers:

| Comparison | Typical size reduction at matched quality |
| --- | --- |
| AVIF vs JPEG | 30–50% smaller |
| AVIF (lossy) vs PNG (originally lossless) | 50–70% smaller |
| AVIF vs WebP | 15–25% smaller |

A 500 KB JPEG photograph compresses down to roughly 250–350 KB as AVIF with no visible quality difference. A 2 MB PNG screenshot drops to around 400–600 KB. These are not edge cases — the pattern holds across photographs, illustrations, and UI captures, though the exact ratio varies meaningfully with image content.

<img src="/blog/what-is-avif-size-comparison.webp" alt="Bar chart comparing the file size of the same photograph encoded as JPEG (500 KB), WebP (360 KB), and AVIF (250 KB)" width="1000" height="559" loading="lazy" decoding="async" />

The trade-off is encoding speed. AV1 is slower to encode than JPEG; for large batches it shows. Decoding (the part that matters when a user loads your site) is fast enough that browsers don't flag AVIF as a performance problem.

## Where AVIF works in 2026

Browser support has reached the same bar as WebP did a few years ago ([versions per caniuse](https://caniuse.com/avif)):

| Browser | AVIF support since |
| --- | --- |
| Chrome | 85 (August 2020) |
| Edge | 121 (January 2024) — earlier builds had AVIF disabled by default |
| Firefox | 93 (October 2021) |
| Opera | 71 (August 2020) |
| Samsung Internet | 14 (2021) |
| Safari (iOS / iPadOS) | 16.0 (Sept 2022, partial — no animation), 16.4 for full support |
| Safari (macOS) | 16.4 (March 2023, requires macOS Ventura) |

Global coverage is around 95% in 2026. The remaining few percent are users on iOS 15 and older, plus a long tail of in-app browsers and locked-down corporate Windows builds.

For a production website in 2026 that's good enough to ship — the same support story as WebP, with a JPEG fallback for the long tail.

## Where AVIF still does not work

This is the part nobody mentions in the marketing. AVIF outside the browser is patchy.

- **Microsoft Office** (Word, PowerPoint, Excel — Windows and Mac alike) does not support AVIF natively in 2026. [Microsoft's own Q&A](https://learn.microsoft.com/en-us/answers/questions/5507794/using-avif-or-web-photos-in-powerpoint-for-mac) confirms this and recommends converting to PNG/JPG before inserting. WebP is supported in Microsoft 365; AVIF still isn't.
- **macOS Finder Quick Look** does *not* preview AVIF natively as of macOS Sequoia. The system frameworks (Safari, WebKit) have decoded AVIF since Ventura, but Quick Look itself still needs a [third-party plugin](https://github.com/dreampiggy/AVIFQuickLook). Pressing space on an `.avif` in Finder shows a placeholder; double-clicking opens it in Preview.
- **Windows File Explorer** thumbnails need the AV1 Video Extension installed from the Microsoft Store. Without it, the file shows as a generic icon.
- **Photoshop** added native AVIF support in the [June 2025 release (v26.x)](https://helpx.adobe.com/photoshop/using/whats-new/2025-6.html), alongside JPEG XL. WebP has been native since 23.2 (March 2022) — the formats arrived almost three years apart. Anything older than v26 needs a plugin or a converted file.
- **Email clients** are split. Gmail web shows AVIF inline; Outlook desktop usually does not, regardless of Microsoft 365 version. Apple Mail handles it on macOS Ventura+.
- **Print pipelines** rarely accept AVIF. Print labs and design houses still want TIFF or high-quality JPEG.

If your image needs to leave the browser — go into a slide deck, get printed, get attached to an email — AVIF is often the wrong target. Convert to JPG or PNG first.

## When to use AVIF (and when to skip it)

| Use case | AVIF a good fit? |
| --- | --- |
| Hero image on a marketing site | Yes |
| Product photos in a CMS | Yes (with JPG fallback) |
| Blog post cover images | Yes |
| Image embedded in a Word doc or slide deck | No — convert to PNG/JPG |
| Photo to email a relative | No — JPG is safer |
| Print or commercial photography deliverable | No — TIFF or JPG |
| Image for editing in Photoshop | Maybe — JPG/PNG is still smoother |
| Long-term archival storage | No — PNG or TIFF is more stable |

The pattern: AVIF is for images that live and stay on the web. The moment a file has to travel across operating systems, applications, or printers, JPG remains the safer universal target.

## A note on JPEG XL

JPEG XL is the other modern format in this conversation. On paper it has real advantages over AVIF — better lossless compression, true progressive decoding, and [lossless re-encoding from existing JPEGs](https://jpeg.org/jpegxl/) (about 20% smaller with zero pixel changes).

Its trajectory in browsers has been bumpy and is worth getting right:

- **Late 2022 / early 2023**: Google [removed JPEG XL from Chromium](https://chromium.googlesource.com/chromium/src/+/166a9f3c512fb7806324af7b4fdd85bee0cde149) in M110, citing "insufficient ecosystem interest." Edge inherited the removal.
- **September 2023**: Apple shipped [Safari 17 with native JPEG XL decoding](https://www.theregister.com/2023/06/07/apple_safari_jpeg_xl) on macOS Sonoma, iOS 17, iPadOS 17, watchOS, and visionOS. The Safari implementation is partial — no animation, no progressive decoding — but it's real native support.
- **November 2025**: Chrome's Architecture Tech Lead reversed the position and welcomed contributions for a memory-safe Rust decoder.
- **February 2026**: [Chrome 145 ships with a JPEG XL decoder](https://www.corewebvitals.io/pagespeed/jpeg-xl-core-web-vitals-support) (the Rust `jxl-rs` library), gated behind `chrome://flags/#enable-jxl-image-format` and not on by default. Firefox is integrating the same Rust decoder.

So as of April 2026: JPEG XL is **shipping natively in Safari**, **decoder-present-but-flag-off in Chrome 145+**, and on a path back into Firefox. AVIF is still the format with shipping defaults across every modern browser, and that's what to build with for production today. JPEG XL is now a credible "watch this space" candidate rather than the dead-end it was eighteen months ago — and for an Apple-heavy audience it's already viable behind a `<picture>` fallback.

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

- [Convert JPG to AVIF](/jpg-to-avif) — typical 30–50% size reduction
- [Convert PNG to AVIF](/png-to-avif) — keeps transparency
- [Convert AVIF back to JPG](/avif-to-jpg) — for software that cannot read AVIF
- [Convert AVIF to PNG](/avif-to-png) — when you need transparency or lossless
- [Convert HEIC to AVIF](/heic-to-avif) — recompress iPhone photos for the web

Files never leave your device — the AV1 encoder runs as WebAssembly in your browser. This matters when you're touching images you wouldn't want to upload to a stranger's server.

## Should you switch?

AVIF is the format the web has been waiting for. It compresses harder than JPEG and WebP, supports HDR and 10-bit color, and is finally on every major browser without flags. For web delivery in 2026, it is the right primary format.

Outside the browser, the picture flips. Office tools, email clients, and print labs still expect JPG. Until that changes you'll keep needing converters in both directions — to AVIF for the web, back to JPG for everything else.

If you're weighing AVIF against the older formats it's replacing, our [PNG vs JPG guide](/blog/png-vs-jpg) covers the legacy trade-offs, and our [format compatibility doc](/docs/format-compatibility) maps which formats actually open where without friction. For the practical question of how aggressive your quality settings can get without visible loss, see [image quality vs file size](/docs/image-quality-vs-file-size).
