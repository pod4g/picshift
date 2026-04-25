---
title: "WebP Explained: When Sites Serve .webp and How to Convert"
description: "Why Chrome saves a JPG as .webp on big sites but not small ones — what WebP is, where it works in 2026, and how to get a JPG back when you need to."
cover: "/blog/webp-explained-cover.webp"
publishedAt: 2026-04-25
author: "PicShift"
tags: ["webp", "format-comparison", "browser", "guide"]
relatedTools: ["webp-to-jpg", "webp-to-png", "jpg-to-webp", "png-to-webp"]
---

<img src="/blog/webp-explained-cover.webp" alt="Why some sites save photos as .webp and what to do about it" width="1200" height="630" loading="eager" decoding="async" />

You're on a big site — a marketplace, a Pinterest-style board, a media site. You right-click an image. The URL ends in `.jpg`. You hit "Save image as…" and Chrome offers `something.webp` as the only filename. You drop the file into PowerPoint. Nothing. You drag it into an old Photoshop. Error. You email it to a colleague on Outlook desktop. They get a broken attachment.

Then you try the exact same right-click on a small blog or a static site, and it saves as a normal `.jpg`. No dialog tricks, no surprises.

Both are real. Whether you get a `.webp` depends on what the site put between you and the original file. Here is what WebP actually is, when the `.webp` switcheroo happens, and how to convert it back when it does.

## When (and when not) does Chrome save a JPG as .webp

This is the part most explanations get wrong by leaving out the "when."

The right-click "Save image as…" gives you a `.webp` only when the *server* hands the browser WebP bytes. The browser is not converting anything — it's saving what it received.

So the answer comes down to who is in front of the image:

- **Static sites and small blogs** (GitHub Pages, default Netlify, plain Nginx, most personal blogs, PicShift itself) — the server returns `image/jpeg` and you get a `.jpg` save dialog. Try it on this very page and that's what you'll see.
- **Sites behind an image CDN with WebP delivery enabled** (Cloudflare Polish with the WebP toggle on, Akamai Image Manager, Imgix, ImageKit, BunnyCDN Optimizer, Vercel Image Optimization, Next.js `<Image>` component, Shopify CDN, Pinterest, Amazon product images, many e-commerce platforms) — the CDN inspects the browser's `Accept` header (which lists `image/webp` for Chrome), sometimes also the `User-Agent`, and rewrites the response to `Content-Type: image/webp`. Same URL, different bytes. Your browser saves what it got — `.webp`. (Note: Cloudflare Polish is opt-in. Per [Cloudflare's docs](https://developers.cloudflare.com/images/polish/compression/), the WebP option must be enabled separately by the site owner and only kicks in when the WebP version is significantly smaller than the original.)

The file extension in the URL was never the source of truth. HTTP doesn't care about extensions — it cares about the `Content-Type` header. If the response says `image/webp`, that's what got transmitted, regardless of whether the URL ends in `.jpg`, `.png`, or `.html`.

It is not Chrome being annoying — it is the CDN being clever. From the site's perspective, this is a free bandwidth reduction with no work on their end. [Cloudflare's Polish documentation](https://developers.cloudflare.com/images/polish/compression/) reports roughly **26% smaller** for PNG inputs and **17% smaller** for JPEG inputs once WebP is enabled. From your perspective, you got a `.webp` you didn't ask for.

<img src="/blog/webp-explained-cdn-trick.webp" alt="Comic showing a browser right-click menu, a CDN cloud sending a Content-Type header, and a downloaded file named vacation-photo.webp despite the URL ending in .jpg" width="1000" height="559" loading="lazy" decoding="async" />

A quick way to know which case you're in before you save: right-click the image, choose **Inspect** (or *Inspect Element*), open the **Network** tab, refresh the page, click the image's request, and look at **Response Headers → Content-Type**. If it says `image/webp`, the dialog will offer `.webp`. If it says `image/jpeg`, you'll get a normal `.jpg`. No guessing.

## What WebP actually is

WebP is an image format developed by Google. It is based on the VP8 video codec (the lossy mode) and supports:

- Lossy compression (the common case — competes with JPEG)
- Lossless compression (competes with PNG)
- Animation (competes with animated GIF)
- Alpha transparency (competes with PNG)

In one format. JPEG can't do transparency. PNG can't do animation. GIF can't do photographs. WebP can do all of it.

The compression numbers, in plain language:

- WebP is about **25–35% smaller than JPEG** at matched perceptual quality
- WebP is about **26% smaller than PNG** in lossless mode
- For animations, WebP is dramatically smaller than animated GIF — often less than half the size

That is why CDNs like it. That is why Google pushes it. That is why you keep ending up with `.webp` files.

## Where WebP works in 2026

Browser support is essentially universal ([versions per caniuse](https://caniuse.com/webp)):

| Browser | Native WebP support |
| --- | --- |
| Chrome | Since 32 (January 2014) |
| Edge | Since 18 (October 2018) — the original Edge had no WebP |
| Firefox | Since 65 (January 2019) |
| Opera | Since 19 (2014) |
| Safari (iOS) | iOS 14+ (partial); full support since iOS 16 |
| Safari (macOS) | Safari 14 (September 2020) — partial; full support since Safari 16 |

If a user is on a browser made in the last six years, WebP just works.

Outside the browser, the picture is messier than people assume:

| Software | WebP support |
| --- | --- |
| Windows 10/11 Photos | Yes (built-in since 2018) |
| macOS Preview / Quick Look | Yes (since macOS 11 Big Sur) |
| Microsoft Word, PowerPoint, Excel (desktop) | Yes, since Microsoft 365 v2402 (Feb 2024) |
| Microsoft 365 web apps (PowerPoint Web etc.) | No — limited image support |
| Photoshop | Native since version 23.2 (March 2022). Animations still need the WebPShop plugin. |
| Older Photoshop (≤23.1) | Plugin required |
| Gmail | Yes |
| Outlook desktop (Microsoft 365 v2402+, Feb 2024) | Yes |
| Outlook 2019 / LTSC / many corporate installs | Often shows WebP as broken or strips it |
| Apple Mail | Yes |
| Most older third-party photo apps | No — convert to JPG first |
| Print labs | Almost never — they want JPG/TIFF |

The pattern: modern desktop tools have caught up over the past two years, but corporate email, older software, and print pipelines still don't speak WebP fluently.

## When to convert WebP back to JPG or PNG

You usually want to convert WebP *out* in three situations:

**The receiver's software doesn't support it.** A coworker on Outlook desktop, a relative running Office 2019, a print shop, a photo book service, an older content management system. Any of these is a reason to convert WebP → JPG before you send.

**You need to edit the image and your editor is older.** If Photoshop is older than 23.2, or you're using a generation of Pixelmator / Affinity / Sketch that predates WebP support, convert to PNG (lossless) or JPG (lossy) first.

**You're printing.** Print pipelines almost universally expect JPG or TIFF. Convert before you upload to the print service.

The conversion in PicShift takes seconds and runs locally:

- [Convert WebP to JPG](/webp-to-jpg) — best for sharing, email, print, older software
- [Convert WebP to PNG](/webp-to-png) — best for editing, transparency, lossless workflows

One thing to be honest about: if the WebP is already a *lossy* WebP, converting it to JPG won't restore detail that the WebP encoder threw away. You're just changing the wrapper. The image looks the same; it's now openable in more places.

## When to convert TO WebP

The reverse direction matters when you're publishing.

**Web pages.** Cutting image weight by 25–35% directly improves Largest Contentful Paint, which is a Google ranking signal. For e-commerce or blog sites with image-heavy pages, this is one of the cheapest performance wins available.

**CMS uploads with size limits.** WordPress's default upload cap, Shopify's product image limits, and similar guardrails are friendlier to WebP than to JPG.

**Animated graphics.** If you have an animated GIF that's 8 MB, the WebP version is often under 2 MB with no visible quality difference.

If you're starting from scratch:

- [Convert JPG to WebP](/jpg-to-webp) — typical 25–35% size reduction
- [Convert PNG to WebP](/png-to-webp) — keeps transparency, often 50% smaller

## What about AVIF?

AVIF compresses about 15–25% harder than WebP. Browser support crossed ~90% globally by mid-2023 once Safari 16.4 shipped (March 2023), and is around 95% in 2026 ([caniuse](https://caniuse.com/avif)). For a website starting fresh in 2026, AVIF is now a strong primary format with WebP and JPG as fallbacks.

But WebP is not going anywhere. Plenty of CDNs still default to WebP because it's the safe middle ground — every modern browser handles it, every modern desktop tool handles it, the encoder is fast. AVIF is *better* on file size, but WebP is *good enough and significantly faster to encode*. Newer CDN tiers (Vercel Image Optimization, ImageKit's auto-format, Cloudflare Image Resizing with `format=auto`) increasingly serve AVIF first and fall back to WebP — but the fallback chain still passes through WebP, not JPEG, for any browser without AVIF. (Cloudflare's classic Polish product still defaults to WebP rather than AVIF for now — AVIF requires Image Resizing.)

If you want the longer take, see [What is AVIF](/blog/what-is-avif) for when AVIF is worth the extra encoding cost.

## How to get a JPG out when the site is serving WebP

Three options, ordered by reliability:

1. **Save the WebP, then convert it.** Open the file in [PicShift's WebP to JPG converter](/webp-to-jpg) and you have a JPG you can drop into PowerPoint, email, or print upload. The image is identical to the WebP you saved (you're swapping the container, not recovering the original) — for almost every reason you needed JPG, that's exactly what you wanted. This works on every site because it doesn't depend on the CDN cooperating.

2. **Use a "Save Image As Type" extension.** Chrome Web Store has several. Once installed, you get an extra right-click menu item that exports JPG or PNG instead of WebP. Same caveat as option 1: you're getting a converted version, not the original JPG that lives on the site's origin server.

3. **Right-click and drag (macOS Chrome).** Hold right-click on the image, drag it outside the browser window, then release — the resulting Save dialog will sometimes show the URL extension (`.jpg`) instead of the served format (`.webp`). Inconsistent across browsers and OS versions; worth trying once.

Three things people sometimes suggest that *don't* reliably work in 2026: appending `?` to the URL (modern CDNs normalize or ignore the query), spoofing your User-Agent to something old (the site often breaks in other ways), and "Open image in new tab, then save" (the CDN serves WebP to that tab too).

For most people, option 1 — save and convert — is the easiest. It's two extra clicks and it works on every site.

## The short version

WebP is a good format. Lossy mode beats JPG by ~30% on size. Lossless mode beats PNG. It does animation. It does transparency. Browsers and modern desktop apps support it.

The friction is real but localized: corporate Outlook, older software, print labs, web-only Office, and a handful of third-party tools. When your image needs to land in one of those, converting WebP back to JPG or PNG is the right answer.

If you're trying to decide between JPG, PNG, and WebP for your own publishing pipeline, our [PNG vs JPG guide](/blog/png-vs-jpg) covers when each format actually pays off, and our [format compatibility doc](/docs/format-compatibility) maps which formats open where without friction.
