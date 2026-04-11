---
title: "Does Instagram, WhatsApp, or Discord Remove EXIF Data? (2026)"
description: "Which social platforms strip GPS, camera, and EXIF metadata from your photos — and which ones don't? Tested and verified platform-by-platform."
cover: "/blog/social-media-exif-cover.webp"
publishedAt: 2026-04-06
author: "PicShift"
tags: ["exif", "metadata", "privacy", "social-media"]
relatedTools: ["metadata-remover", "heic-to-jpg", "image-compressor"]
---

<img src="/blog/social-media-exif-cover.webp" alt="Which social platforms remove EXIF data from your photos" width="1200" height="630" loading="eager" decoding="async" />

You upload a photo to Instagram. Does the person who downloads it know where you took it? What about Discord? Telegram? Email?

The answer is different for every platform, and it changes more often than you would expect.

## The short answer

| Platform | Strips GPS? | Strips device info? | Strips timestamps? | Verdict |
| --- | --- | --- | --- | --- |
| **Instagram** | Yes | Mostly | Mostly | Safe |
| **WhatsApp** | Yes | Yes | Yes | Safe |
| **Facebook** | Yes | Mostly | Mostly | Safe |
| **Discord** | Yes (JPEG) | Yes (JPEG) | Yes (JPEG) | Safe for JPEG, not for PNG |
| **Telegram (photo)** | Yes | Yes | Yes | Safe |
| **Telegram (file)** | **No** | **No** | **No** | Dangerous |
| **Slack** | GPS only | **No** | **No** | Partial |
| **Signal** | Yes | Yes | Yes | Safe |
| **Email** | **No** | **No** | **No** | Dangerous |
| **Google Drive** | **No** | **No** | **No** | Dangerous |

Three platforms stand out as risks: **Telegram "send as file,"** **email attachments,** and **cloud storage links.** Everything else strips at least GPS.

## Instagram

Instagram strips EXIF metadata on upload. GPS coordinates, camera model, and most other fields are removed from the version that other users can download or screenshot.

Instagram does this primarily for its own reasons — smaller file sizes and faster delivery — but the privacy side effect is real.

One catch: Instagram **reads** your EXIF data before stripping it. The GPS coordinates, device info, and timestamps are processed by Instagram's servers. They just do not pass them through to other users. Whether that matters to you depends on your threat model.

## WhatsApp

WhatsApp is the cleanest. Photos sent through WhatsApp are compressed and re-encoded, which strips all EXIF metadata — GPS, device, timestamps, everything.

This applies to photos sent through the chat interface. If you send an image as a **document attachment** (the paperclip icon → Document), WhatsApp sends the original file untouched, metadata included. Same trap as Telegram.

## Discord

Discord used to be one of the worst platforms for EXIF privacy. For years, uploaded images kept all their metadata intact.

Discord now strips EXIF data from JPEG images as part of its server-side processing. GPS, camera info, and timestamps are removed. However, **PNG files may still retain EXIF data** — the PNG EXIF spec is newer and Discord's stripping is less thorough for that format.

If you see older articles saying "Discord does not strip EXIF," that is outdated for JPEGs. But if you share screenshots as PNG, do not assume the metadata is gone.

## Telegram — the tricky one

Telegram has two ways to send images, and they handle EXIF completely differently:

**Send as photo** (default): Telegram compresses the image and strips all metadata. GPS, device info, timestamps — all gone. This is the safe option.

**Send as file** (paperclip → File): Telegram sends the original, untouched file. All EXIF metadata survives — GPS coordinates, serial numbers, everything. This is how photographers and designers share high-quality images, but many people use it without realizing the privacy implications.

The HD mode introduced in Telegram 10.5 sits somewhere in between — better quality than standard compression, but less thorough metadata stripping.

If you share photos in public Telegram channels as files, anyone who joins the channel can download the full original with all metadata intact.

## Slack

Slack started stripping GPS coordinates in May 2020, following pressure from journalists and activists who pointed out that image metadata in Slack could compromise sources.

However, Slack only strips location data. **Device make and model are still preserved.** If you upload a photo taken on an iPhone 17 Pro, the recipient can see that.

For workplace use, this is usually fine. For sensitive communications, it is not enough.

## Email and cloud storage

Email attachments preserve all EXIF metadata. Always. There is no processing, no compression, no stripping. The file you attach is the file the recipient gets.

The same applies to cloud storage links — Google Drive, Dropbox, OneDrive. Sharing a photo via link gives the recipient the original file with full metadata.

This is the biggest blind spot for most people. You would not post your home GPS coordinates in the email body, but attaching a photo taken at home does exactly that.

## Signal

Signal strips all EXIF metadata from photos before sending. It is designed as a privacy-first messenger, and metadata stripping is part of that design. No GPS, no device info, no timestamps survive.

## The problem with relying on platforms

Platform policies change without notice. Discord went from keeping everything to stripping everything in a single update. Telegram's behavior depends on which "send" button you press. Slack strips GPS but nothing else.

If you rely on a platform to protect your metadata, you are betting that:
1. The platform's current policy covers what you care about
2. The policy has not changed since you last checked
3. You used the right sharing method (photo vs. file)

That is a lot of assumptions for something you can solve in 5 seconds yourself.

## The safer approach

Strip metadata before the photo leaves your device. Then it does not matter which platform you use, which "send" button you press, or what the platform's current policy is. If you are not sure what EXIF data is or why it matters, start with [What Is EXIF Data and Why You Should Remove It](/blog/what-is-exif-data/).

[Remove EXIF data from your photos →](/metadata-remover)

The fix takes seconds. Drop your images in, see what metadata is embedded, clean it, download. Done. No more guessing about platform behavior.
