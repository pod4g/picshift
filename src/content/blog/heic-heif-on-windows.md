---
title: "HEIC/HEIF on Windows: Why iPhone Photos Won't Open and How to Fix It"
description: "Windows can't open HEIC or HEIF photos from your iPhone? Here's why Apple uses this format, what the difference is between HEIC and HEIF, and how to convert them."
cover: "/blog/heic-heif-on-windows-cover.webp"
publishedAt: 2026-04-06
author: "PicShift"
tags: ["heic", "heif", "iphone", "windows", "guide"]
relatedTools: ["heic-to-jpg", "heic-to-png", "heif-to-jpg", "heif-to-webp"]
---

<img src="/blog/heic-heif-on-windows-cover.webp" alt="HEIC and HEIF photos from iPhone not opening on Windows" width="1200" height="630" loading="eager" decoding="async" />

You take a photo on your iPhone, send it to a Windows PC, and get this: "This file format is not supported." Or worse — the file opens in the Windows Photos app as a blank screen with a prompt to buy a codec extension from the Microsoft Store.

This happens every day to millions of people. The file is fine. Windows just does not know what to do with it.

<img src="/blog/heic-heif-on-windows-error.webp" alt="Windows Photos error: Sorry, Photos can't open this file because the format is currently unsupported" width="1000" height="490" loading="lazy" decoding="async" />

## What is HEIC and why does your iPhone use it

HEIC stands for High Efficiency Image Container. Starting with iOS 11 in 2017, Apple switched the default photo format from JPG to HEIC.

The reason is simple: HEIC files are about 50% smaller than equivalent JPG photos at the same visual quality. On a 256 GB iPhone that stores thousands of photos, that is a meaningful difference.

HEIC uses the HEVC (H.265) codec for compression — the same codec used for 4K video. It is genuinely better technology. The problem is not the format. The problem is that the rest of the world took years to catch up.

## HEIC vs HEIF — what is the difference

People use these terms interchangeably, but they are not the same thing:

- **HEIF** (High Efficiency Image Format) is the standard. It is defined by the MPEG group and describes how to store images using modern codecs.
- **HEIC** is Apple's specific implementation of HEIF that uses the HEVC codec.

Think of it like this: HEIF is the container specification, HEIC is what Apple puts inside it. When your iPhone saves a `.heic` file, it is technically a HEIF container with HEVC-compressed image data.

In practice, the terms are interchangeable for most people. If someone says "convert HEIF to JPG" or "convert HEIC to JPG," they mean the same thing.

There is also **AVIF** — another format that uses the HEIF container but with the AV1 codec instead of HEVC. Google and Android are pushing AVIF as the next-generation image format. Same container idea, different compression engine.

## Why Windows cannot open HEIC files out of the box

Windows does not bundle the HEVC codec by default. HEIC files use HEVC compression internally, and Microsoft has to license it from the patent holders.

What you actually need to install:

1. **HEIF Image Extensions** — free from the Microsoft Store. Handles the container format.
2. **HEVC Video Extensions** — $0.99 from the Microsoft Store. Handles the compression codec that HEIC files actually use. Without this, HEIF Extensions alone will not open most iPhone photos.

There is a hidden free alternative — "HEVC Video Extensions from Device Manufacturer" — but it only works if your PC shipped with a hardware HEVC decoder. Most people never find it.

Even after installing both extensions, the experience is not smooth. Windows Photos loads HEIC files slower than JPG, thumbnails sometimes fail to generate, and third-party apps like Canva, Google Docs, or older versions of Photoshop still may not accept HEIC files.

The bottom line: Windows *can* open HEIC with extra steps, but it is not the seamless experience you get with JPG.

## The fastest fix: convert to JPG

If you just need the photo to open and work everywhere, converting HEIC to JPG solves the problem instantly.

JPG has been universally supported since the 1990s. Every operating system, every browser, every email client, every app on earth can open a JPG. It is not the most efficient format, but it is the most compatible one.

The conversion trade-off:

| | HEIC | JPG |
| --- | --- | --- |
| File size | Smaller (~50% of JPG) | Larger |
| Quality | Excellent | Excellent at quality 85+ |
| Compatibility | iPhone, Mac, some Android | Everything |
| Transparency | Supported | Not supported |
| Editing | Limited app support | Universal |

For most use cases — email, upload, share, print — JPG is the right target. The file gets larger, but it opens everywhere.

[Convert HEIC to JPG in your browser →](/heic-to-jpg)

## When JPG is not the best target

JPG works for sharing, but it is not always the ideal conversion:

**Choose PNG when:**
- You need lossless quality for editing or archiving
- The image has transparency (logos, design assets)
- You plan to edit and re-save the file multiple times

[Convert HEIC to PNG →](/heic-to-png)

**Choose WebP when:**
- The image is going on a website
- You want smaller files than JPG with similar quality
- Browser support is sufficient (96%+ globally in 2026)

[Convert HEIF to WebP →](/heif-to-webp)

**Choose AVIF when:**
- You need maximum compression for web delivery
- Your platform supports AVIF
- JPG fallback is available for older browsers

## How to stop your iPhone from shooting HEIC

If you would rather avoid the problem entirely, you can switch your iPhone's camera format:

1. Open **Settings → Camera → Formats**
2. Select **Most Compatible** instead of High Efficiency

This switches the camera back to JPG. Your photos will be roughly twice as large, but they will work everywhere without conversion.

The trade-off is real. A week of vacation photos in HEIC might be 3 GB. The same photos in JPG might be 6 GB. On a 128 GB iPhone, that matters.

Most people are better off keeping HEIC and converting only the photos they need to share.

## Batch conversion: when you have hundreds of HEIC files

Transferring an entire photo library from iPhone to Windows? You probably have hundreds or thousands of HEIC files to deal with.

One-at-a-time conversion is not practical. You need batch processing:

- Drag up to 200 files at once
- All converted in your browser — no upload, no install, no account
- Download as a ZIP

[Batch convert HEIC/HEIF photos →](/heic-to-jpg)

## The bottom line

HEIC is a better format than JPG — smaller files, better quality, modern compression. Apple made the right technical choice. The problem is that Windows still has not caught up, and the ecosystem around HEIC remains fragmented.

Until that changes, converting HEIC to JPG remains the most reliable way to move iPhone photos into the rest of the world. It takes seconds, and the quality difference at 85+ is invisible.

For a side-by-side view of where HEIC, HEIF, WebP, AVIF, PNG and JPG actually open without friction — and where they still break — see our [format compatibility guide](/docs/format-compatibility). And if you are wondering why a converted JPG sometimes ends up bigger than the HEIC original, we explain that in [why output size can increase](/docs/size-increase-explainer).
