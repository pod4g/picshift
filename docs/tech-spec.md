# PicShift - 技术规格文档

**产品**：PicShift (picshift.app)
**版本**：v1.0 MVP
**日期**：2026-02-25

---

## 1. 技术栈

| 层        | 选型              | 版本       | 理由                                                                   |
| --------- | ----------------- | ---------- | ---------------------------------------------------------------------- |
| 框架      | Astro             | 5.x        | SSG 静态生成，零 JS 开销，天然 SEO 友好                                |
| 交互组件  | React             | 19.x       | Astro Islands 按需加载，只有转换器组件需要客户端 JS                    |
| 样式      | Tailwind CSS      | 4.x        | 原子化 CSS，快速开发                                                   |
| HEIC 解码 | heic2any          | latest     | MIT 许可证，基于 libheif-js (WASM)，API 简洁                           |
| 图片处理  | Canvas API        | 浏览器原生 | 格式转换、质量控制、缩略图生成                                         |
| 并行处理  | Web Worker        | 浏览器原生 | 解码不阻塞 UI 主线程                                                   |
| ZIP 打包  | fflate            | latest     | 流式 ZIP 压缩，8KB 体积（JSZip 的 1/12），支持边转边写                 |
| 文件下载  | 原生 a.download   | 浏览器原生 | 触发浏览器下载，无需额外库                                             |
| 包管理    | pnpm              | latest     | 速度快，磁盘占用小                                                     |
| 代码检查  | ESLint + Prettier | latest     | 代码规范                                                               |
| 类型检查  | TypeScript        | 5.x        | 类型安全                                                               |
| 部署      | Cloudflare Pages  | —          | 免费，全球 CDN，无限带宽                                               |
| 域名      | picshift.app      | —          | Porkbun 注册，$14.20/年                                                |
| DNS       | Cloudflare DNS    | —          | 免费，与 Pages 天然集成                                                |
| 分析      | Umami 自托管      | latest     | 隐私友好，无 Cookie，GDPR 合规，部署在 Cloudflare Workers + D1（免费） |
| 广告      | Google AdSense    | —          | MVP 阶段主要变现                                                       |

---

## 2. 项目结构

```
picshift/
├── src/
│   ├── pages/                          # Astro 页面（SSG 静态生成）
│   │   ├── index.astro                 # 首页（通用转换器）
│   │   ├── heic-to-jpg.astro           # HEIC → JPG
│   │   ├── heic-to-png.astro           # HEIC → PNG
│   │   ├── heic-to-webp.astro          # HEIC → WebP
│   │   ├── webp-to-jpg.astro           # WebP → JPG
│   │   ├── webp-to-png.astro           # WebP → PNG
│   │   ├── png-to-jpg.astro            # PNG → JPG
│   │   ├── jpg-to-png.astro            # JPG → PNG
│   │   ├── jpg-to-webp.astro           # JPG → WebP
│   │   ├── avif-to-jpg.astro           # AVIF → JPG
│   │   ├── avif-to-png.astro           # AVIF → PNG
│   │   ├── image-compressor.astro      # 图片压缩
│   │   ├── privacy.astro               # 隐私政策
│   │   └── about.astro                 # 关于
│   │
│   ├── components/                     # 组件
│   │   ├── converter/                  # 转换器核心（React Islands）
│   │   │   ├── Converter.tsx           # 顶层容器，管理状态
│   │   │   ├── DropZone.tsx            # 拖拽上传区域
│   │   │   ├── FileList.tsx            # 文件列表 + 缩略图网格
│   │   │   ├── FileCard.tsx            # 单个文件卡片（预览+状态+下载）
│   │   │   ├── QualitySlider.tsx       # 质量滑块
│   │   │   ├── FormatSelector.tsx      # 输出格式下拉选择
│   │   │   ├── DownloadAll.tsx         # 全部下载按钮
│   │   │   └── CompareView.tsx         # 分屏质量对比（借鉴 Squoosh）
│   │   │
│   │   ├── layout/                     # 布局组件（Astro）
│   │   │   ├── Header.astro            # 页头导航
│   │   │   └── Footer.astro            # 页脚
│   │   │
│   │   └── seo/                        # SEO 内容组件（Astro）
│   │       ├── HowTo.astro             # How-to 步骤说明
│   │       ├── FAQ.astro               # FAQ 手风琴
│   │       └── PrivacyBadge.astro      # 隐私徽章
│   │
│   ├── workers/
│   │   └── convert-worker.ts           # Web Worker：HEIC 解码 + 格式转换
│   │
│   ├── lib/                            # 工具函数
│   │   ├── converter.ts                # 转换逻辑封装
│   │   ├── format-detect.ts            # 文件格式检测（magic bytes）
│   │   ├── zip.ts                      # fflate 流式 ZIP 打包
│   │   ├── thumbnail.ts                # 缩略图生成
│   │   ├── download.ts                 # 文件下载触发
│   │   ├── preferences.ts              # localStorage 偏好读写
│   │   └── analytics.ts                # Umami 事件埋点封装
│   │
│   ├── hooks/                          # React Hooks
│   │   ├── useConverter.ts             # 转换状态管理
│   │   └── useDropZone.ts              # 拖拽交互逻辑
│   │
│   ├── types/
│   │   └── index.ts                    # TypeScript 类型定义
│   │
│   ├── data/
│   │   └── tools.ts                    # 工具页面配置数据（标题/描述/FAQ/默认参数）
│   │
│   ├── layouts/
│   │   └── Layout.astro                # 全局布局（HTML head、meta、广告脚本）
│   │
│   └── styles/
│       └── global.css                  # Tailwind 入口 + CSS 变量
│
├── public/
│   ├── favicon.svg                     # 网站图标
│   ├── og-image.png                    # 社交分享预览图（1200x630）
│   └── robots.txt                      # 搜索引擎爬虫规则
│
├── astro.config.mjs                    # Astro 配置
├── tailwind.config.mjs                 # Tailwind 配置
├── tsconfig.json                       # TypeScript 配置
├── package.json
├── pnpm-lock.yaml
└── .gitignore
```

---

## 3. 核心模块设计

### 3.1 类型定义 (`src/types/index.ts`)

```typescript
// 支持的输入格式
export type InputFormat =
  | 'heic'
  | 'heif'
  | 'webp'
  | 'png'
  | 'jpg'
  | 'jpeg'
  | 'avif'
  | 'bmp'

// 支持的输出格式
export type OutputFormat = 'image/jpeg' | 'image/png' | 'image/webp'

// 输出格式简称（用于 UI 和 URL）
export type OutputFormatKey = 'jpg' | 'png' | 'webp'

// 文件转换状态
export type FileStatus = 'queued' | 'converting' | 'done' | 'error'

// 单个文件的完整状态
export interface ConvertFile {
  id: string // 唯一标识（crypto.randomUUID()）
  originalFile: File // 原始 File 对象（浏览器 File 对象是惰性引用，不占内存）
  name: string // 文件名（不含扩展名）
  inputFormat: InputFormat // 检测到的输入格式
  size: number // 原始文件大小（bytes）
  status: FileStatus
  progress: number // 0-100
  outputBlob: Blob | null // 转换后的 Blob（流式模式下写入 ZIP 后置 null 释放）
  outputSize: number // 转换后文件大小（bytes）
  thumbnailUrl: string | null // 缩略图 URL（200px 宽，~50KB，用于 UI 预览）
  error: string | null // 错误信息
  flushedToZip: boolean // 是否已写入 ZIP 流（已写入则 outputBlob 可释放）
}

// 用户偏好设置
export interface UserPreferences {
  outputFormat: OutputFormatKey
  quality: number // 1-100
}

// 工具页面配置
export interface ToolPageConfig {
  slug: string // URL slug: 'heic-to-jpg'
  title: string // 页面标题
  description: string // Meta description
  defaultInputFormat: InputFormat | null // null = 接受所有格式
  defaultOutputFormat: OutputFormatKey
  h1: string // 页面 H1 标题
  howToSteps: string[] // How-to 步骤
  faqs: Array<{ q: string; a: string }> // FAQ 列表
}

// Worker 通信消息
export interface WorkerRequest {
  id: string // 对应 ConvertFile.id
  file: File
  outputFormat: OutputFormat
  quality: number
}

export interface WorkerResponse {
  id: string
  status: 'progress' | 'done' | 'error'
  progress?: number
  blob?: Blob // 全尺寸输出（写入 ZIP 后释放）
  thumbnail?: Blob // 缩略图（200px 宽，~50KB，长期保留用于 UI 预览）
  error?: string
}
```

### 3.2 格式检测 (`src/lib/format-detect.ts`)

通过文件头 magic bytes 精确检测格式，不依赖文件扩展名：

```typescript
export async function detectFormat(file: File): Promise<InputFormat | null> {
  const buffer = await file.slice(0, 12).arrayBuffer()
  const bytes = new Uint8Array(buffer)

  // HEIC/HEIF: 检查 ftyp box
  if (bytes.length >= 12) {
    const ftyp = String.fromCharCode(bytes[4], bytes[5], bytes[6], bytes[7])
    if (ftyp === 'ftyp') {
      const brand = String.fromCharCode(
        bytes[8],
        bytes[9],
        bytes[10],
        bytes[11],
      )
      if (['heic', 'heix', 'hevc', 'hevx', 'mif1'].includes(brand)) {
        return 'heic'
      }
    }
  }

  // PNG: 89 50 4E 47
  if (
    bytes[0] === 0x89 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x4e &&
    bytes[3] === 0x47
  ) {
    return 'png'
  }

  // JPEG: FF D8 FF
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) {
    return 'jpg'
  }

  // WebP: RIFF....WEBP
  if (
    bytes[0] === 0x52 &&
    bytes[1] === 0x49 &&
    bytes[2] === 0x46 &&
    bytes[3] === 0x46 &&
    bytes[8] === 0x57 &&
    bytes[9] === 0x45 &&
    bytes[10] === 0x42 &&
    bytes[11] === 0x50
  ) {
    return 'webp'
  }

  // AVIF: ftyp avif
  if (bytes.length >= 12) {
    const ftyp = String.fromCharCode(bytes[4], bytes[5], bytes[6], bytes[7])
    const brand = String.fromCharCode(bytes[8], bytes[9], bytes[10], bytes[11])
    if (ftyp === 'ftyp' && brand === 'avif') {
      return 'avif'
    }
  }

  // BMP: 42 4D
  if (bytes[0] === 0x42 && bytes[1] === 0x4d) {
    return 'bmp'
  }

  return null
}
```

### 3.3 Web Worker (`src/workers/convert-worker.ts`)

转换逻辑在 Worker 线程中执行，不阻塞 UI：

```typescript
import heic2any from 'heic2any'

self.onmessage = async (e: MessageEvent<WorkerRequest>) => {
  const { id, file, outputFormat, quality } = e.data

  try {
    let imageBlob: Blob

    // Step 1: 解码（HEIC 需要 heic2any，其他格式浏览器原生支持）
    const isHeic =
      file.type === 'image/heic' ||
      file.type === 'image/heif' ||
      file.name.toLowerCase().endsWith('.heic') ||
      file.name.toLowerCase().endsWith('.heif')

    self.postMessage({ id, status: 'progress', progress: 10 })

    if (isHeic) {
      // HEIC: 使用 heic2any 解码为中间格式（PNG blob）
      const result = await heic2any({
        blob: file,
        toType: 'image/png',
        quality: 1,
      })
      imageBlob = Array.isArray(result) ? result[0] : result
    } else {
      imageBlob = file
    }

    self.postMessage({ id, status: 'progress', progress: 50 })

    // Step 2: 用 Canvas 转换到目标格式
    const bitmap = await createImageBitmap(imageBlob)

    const canvas = new OffscreenCanvas(bitmap.width, bitmap.height)
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('Canvas context unavailable')

    ctx.drawImage(bitmap, 0, 0)
    bitmap.close()

    self.postMessage({ id, status: 'progress', progress: 80 })

    // Step 3: 导出目标格式（全尺寸）
    const outputBlob = await canvas.convertToBlob({
      type: outputFormat,
      quality: quality / 100,
    })

    self.postMessage({ id, status: 'progress', progress: 90 })

    // Step 4: 生成缩略图（200px 宽，用于 UI 预览，体积约 30-80KB）
    // 优化：使用 createImageBitmap 的 resizeWidth，在解码阶段直接缩小
    // 避免从全尺寸 outputBlob 再次展开为完整位图（如 4000x3000=48MB）
    const thumbBitmap = await createImageBitmap(outputBlob, {
      resizeWidth: 200,
      resizeQuality: 'medium',
    })

    const thumbCanvas = new OffscreenCanvas(
      thumbBitmap.width,
      thumbBitmap.height,
    )
    const thumbCtx = thumbCanvas.getContext('2d')!
    thumbCtx.drawImage(thumbBitmap, 0, 0)
    thumbBitmap.close() // 立即释放

    const thumbnail = await thumbCanvas.convertToBlob({
      type: 'image/jpeg',
      quality: 0.6,
    })

    self.postMessage({ id, status: 'progress', progress: 100 })

    // Step 5: 返回全尺寸 blob + 缩略图
    // 主线程收到后：缩略图长期保留用于 UI，全尺寸 blob 写入 ZIP 后释放
    self.postMessage({ id, status: 'done', blob: outputBlob, thumbnail })
  } catch (err) {
    self.postMessage({
      id,
      status: 'error',
      error: err instanceof Error ? err.message : 'Conversion failed',
    })
  }
}
```

**注意事项**：

- 使用 `OffscreenCanvas`（Worker 内不能用普通 Canvas）
- `createImageBitmap` 在 Worker 中可用，用于解码非 HEIC 图片
- heic2any 在 Worker 中加载 WASM，首次调用会有约 1-2 秒延迟
- 对于超大文件（>20MB），`createImageBitmap` 可能耗时较长
- Worker 同时返回全尺寸 blob 和缩略图，主线程决定何时释放全尺寸 blob

### 3.4 转换状态管理 (`src/hooks/useConverter.ts`)

**核心设计：流式处理 + 即时释放内存**

内存管理策略：

- `originalFile`（File 对象）：浏览器 File 是惰性引用，不占内存，全程保留（用于单张重新转换）
- `outputBlob`（全尺寸结果）：转换完成后立即写入 ZIP 流，写完置 null 释放
- `thumbnailUrl`（缩略图）：~50KB/张，长期保留用于 UI 预览
- Worker 池最大并发 2 个，队列式处理，避免内存峰值

```typescript
import { useState, useCallback, useRef } from 'react'
import type { ConvertFile, OutputFormatKey, WorkerResponse } from '../types'
import { detectFormat } from '../lib/format-detect'
import { StreamingZip } from '../lib/zip'

const OUTPUT_MIME: Record<OutputFormatKey, string> = {
  jpg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
}

const MAX_WORKERS = 2

export function useConverter(defaultFormat: OutputFormatKey = 'jpg') {
  const [files, setFiles] = useState<ConvertFile[]>([])
  const [outputFormat, setOutputFormat] =
    useState<OutputFormatKey>(defaultFormat)
  const [quality, setQuality] = useState(92)
  const workersRef = useRef<Worker[]>([])
  const queueRef = useRef<string[]>([])
  const zipRef = useRef<StreamingZip | null>(null)

  // 添加文件
  const addFiles = useCallback(
    async (inputFiles: FileList | File[]) => {
      const newFiles: ConvertFile[] = []

      for (const file of Array.from(inputFiles)) {
        const format = await detectFormat(file)
        if (!format) continue

        newFiles.push({
          id: crypto.randomUUID(),
          originalFile: file,
          name: file.name.replace(/\.[^.]+$/, ''),
          inputFormat: format,
          size: file.size,
          status: 'queued',
          progress: 0,
          outputBlob: null,
          outputSize: 0,
          thumbnailUrl: null,
          error: null,
          flushedToZip: false,
        })
      }

      setFiles((prev) => [...prev, ...newFiles])

      // 初始化 ZIP 流（如果还没有）
      if (!zipRef.current) {
        zipRef.current = new StreamingZip()
      }

      // 加入转换队列
      newFiles.forEach((f) => queueRef.current.push(f.id))
      processQueue()
    },
    [outputFormat, quality],
  )

  // 处理队列
  const processQueue = useCallback(() => {
    while (
      workersRef.current.length < MAX_WORKERS &&
      queueRef.current.length > 0
    ) {
      const fileId = queueRef.current.shift()!
      startConversion(fileId)
    }
  }, [])

  // 启动单个文件转换
  const startConversion = useCallback(
    (fileId: string) => {
      setFiles((prev) =>
        prev.map((f) =>
          f.id === fileId ? { ...f, status: 'converting', progress: 0 } : f,
        ),
      )

      const worker = new Worker(
        new URL('../workers/convert-worker.ts', import.meta.url),
        { type: 'module' },
      )

      workersRef.current.push(worker)

      worker.onmessage = (e: MessageEvent<WorkerResponse>) => {
        const { id, status, progress, blob, thumbnail, error } = e.data

        if (status === 'progress') {
          setFiles((prev) =>
            prev.map((f) => (f.id === id ? { ...f, progress: progress! } : f)),
          )
        }

        if (status === 'done' && blob && thumbnail) {
          // 1. 生成缩略图 URL（~50KB，长期保留）
          const thumbnailUrl = URL.createObjectURL(thumbnail)

          // 2. 写入 ZIP 流（全尺寸 blob）
          const ext =
            outputFormat === 'png'
              ? '.png'
              : outputFormat === 'webp'
                ? '.webp'
                : '.jpg'
          setFiles((prev) => {
            const file = prev.find((f) => f.id === id)
            if (file && zipRef.current) {
              zipRef.current.addFile(`${file.name}${ext}`, blob)
            }
            return prev.map((f) =>
              f.id === id
                ? {
                    ...f,
                    status: 'done',
                    progress: 100,
                    outputBlob: null, // 不保留全尺寸 blob（已写入 ZIP）
                    outputSize: blob.size, // 只记录大小
                    thumbnailUrl,
                    flushedToZip: true,
                  }
                : f,
            )
          })

          cleanupWorker(worker)
          processQueue()
        }

        if (status === 'error') {
          setFiles((prev) =>
            prev.map((f) =>
              f.id === id ? { ...f, status: 'error', error: error! } : f,
            ),
          )
          cleanupWorker(worker)
          processQueue()
        }
      }

      setFiles((prev) => {
        const file = prev.find((f) => f.id === fileId)
        if (file) {
          worker.postMessage({
            id: fileId,
            file: file.originalFile,
            outputFormat: OUTPUT_MIME[outputFormat],
            quality,
          })
        }
        return prev
      })
    },
    [outputFormat, quality, processQueue],
  )

  const cleanupWorker = (worker: Worker) => {
    worker.terminate()
    workersRef.current = workersRef.current.filter((w) => w !== worker)
  }

  // 下载全部（ZIP 已在转换过程中流式构建）
  const downloadAll = useCallback(async () => {
    if (!zipRef.current) return
    await zipRef.current.finalize() // 完成 ZIP
    zipRef.current.download(
      `picshift-${files.filter((f) => f.status === 'done').length}-files.zip`,
    )
    zipRef.current = null
  }, [files])

  // 单张下载：按需重新转换（因为全尺寸 blob 已释放）
  const downloadSingle = useCallback(
    async (id: string) => {
      const file = files.find((f) => f.id === id)
      if (!file) return

      // 重新转换（原始 File 对象还在，惰性引用不占内存）
      const worker = new Worker(
        new URL('../workers/convert-worker.ts', import.meta.url),
        { type: 'module' },
      )

      return new Promise<void>((resolve) => {
        worker.onmessage = (e: MessageEvent<WorkerResponse>) => {
          if (e.data.status === 'done' && e.data.blob) {
            const ext =
              outputFormat === 'png'
                ? '.png'
                : outputFormat === 'webp'
                  ? '.webp'
                  : '.jpg'
            const url = URL.createObjectURL(e.data.blob)
            const a = document.createElement('a')
            a.href = url
            a.download = `${file.name}${ext}`
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
            URL.revokeObjectURL(url)
            worker.terminate()
            resolve()
          }
        }

        worker.postMessage({
          id: file.id,
          file: file.originalFile,
          outputFormat: OUTPUT_MIME[outputFormat],
          quality,
        })
      })
    },
    [files, outputFormat, quality],
  )

  // 删除文件
  const removeFile = useCallback((id: string) => {
    setFiles((prev) => {
      const file = prev.find((f) => f.id === id)
      if (file?.thumbnailUrl) URL.revokeObjectURL(file.thumbnailUrl)
      return prev.filter((f) => f.id !== id)
    })
    queueRef.current = queueRef.current.filter((fid) => fid !== id)
  }, [])

  // 清空所有
  const clearAll = useCallback(() => {
    files.forEach((f) => {
      if (f.thumbnailUrl) URL.revokeObjectURL(f.thumbnailUrl)
    })
    workersRef.current.forEach((w) => w.terminate())
    workersRef.current = []
    queueRef.current = []
    zipRef.current = null
    setFiles([])
  }, [files])

  return {
    files,
    outputFormat,
    quality,
    setOutputFormat,
    setQuality,
    addFiles,
    removeFile,
    clearAll,
    downloadAll,
    downloadSingle,
    completedCount: files.filter((f) => f.status === 'done').length,
    totalCount: files.length,
    isConverting: files.some((f) => f.status === 'converting'),
  }
}
```

**内存占用对比（50 张 3MB 照片）**：

| 阶段        | 旧方案                           | 流式方案                        |
| ----------- | -------------------------------- | ------------------------------- |
| 转换过程中  | ~150MB（所有 outputBlob 留内存） | ~10MB（仅当前 1-2 张 + 缩略图） |
| 全部转完后  | ~150MB                           | ~3MB（50 张缩略图）             |
| 下载 ZIP 时 | ~300MB（blob + ZIP 副本）        | ~几 MB（ZIP 已流式构建完成）    |

### 3.5 流式 ZIP 打包 (`src/lib/zip.ts`)

使用 fflate 替代 JSZip，支持流式写入——每转换完一张立即写入 ZIP，不在内存中积压所有 blob。

```typescript
import { Zip, ZipPassThrough } from 'fflate'

/**
 * 流式 ZIP 构建器
 *
 * 工作原理：
 * 1. 每转换完一张图片，调用 addFile() 将 blob 写入 ZIP 流
 * 2. ZIP 数据以 chunk 形式收集到 chunks 数组
 * 3. 所有文件写完后，调用 finalize() 关闭 ZIP
 * 4. 调用 download() 触发浏览器下载
 *
 * 内存优势：
 * - 传统方案：所有 blob 留内存 → 最后一次性打 ZIP → 内存翻倍
 * - 流式方案：blob 写入后立即释放 → ZIP chunk 逐步积累 → 内存峰值极低
 */
export class StreamingZip {
  private zip: Zip
  private chunks: Uint8Array[] = []
  private finalized = false

  constructor() {
    this.zip = new Zip((err, chunk, final) => {
      if (err) throw err
      this.chunks.push(chunk)
    })
  }

  /**
   * 将一个文件写入 ZIP 流
   * 调用后 blob 可以安全释放（主调方置 null 即可）
   */
  async addFile(filename: string, blob: Blob): Promise<void> {
    const buffer = await blob.arrayBuffer()
    const data = new Uint8Array(buffer)

    // ZipPassThrough = 不压缩（STORE），因为图片已经是压缩格式
    const file = new ZipPassThrough(filename)
    this.zip.add(file)
    file.push(data, true) // true = 这个文件的数据已全部写入
  }

  /** 关闭 ZIP（必须在所有 addFile 之后调用） */
  finalize(): void {
    if (this.finalized) return
    this.zip.end()
    this.finalized = true
  }

  /** 触发浏览器下载 */
  download(filename: string): void {
    if (!this.finalized) this.finalize()

    // 合并所有 chunks 为一个 Blob
    const blob = new Blob(this.chunks, { type: 'application/zip' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    // 释放 chunks 内存
    this.chunks = []
  }

  /** 获取当前 ZIP 大小（字节） */
  get size(): number {
    return this.chunks.reduce((sum, chunk) => sum + chunk.length, 0)
  }
}
```

### 3.6 单文件下载（按需重新转换）

流式方案下，全尺寸 blob 在写入 ZIP 后已释放。单张下载需要按需重新转换。

重新转换逻辑已集成在 `useConverter.downloadSingle()` 中（见 3.4 节）。

流程：用户点击单张下载 → 从 `originalFile`（File 惰性引用）重新转换 → 下载 → 释放。
单张重新转换耗时约 1-2 秒，用户感知轻微。

### 3.7 缩略图生成 (`src/lib/thumbnail.ts`)

```typescript
/**
 * 从全尺寸 Blob 生成小缩略图用于 UI 预览
 * 缩略图约 30-80KB，可长期保留在内存中
 *
 * 关键优化：使用 createImageBitmap 的 resizeWidth 选项，
 * 在解码阶段就缩小尺寸，避免在内存中展开全尺寸位图。
 *
 * 内存对比（以 4000x3000 照片为例）：
 * - 不用 resize：解码为 4000x3000x4=48MB 位图 → 画到 200px Canvas → 释放 48MB
 * - 用 resize：  直接解码为 200x150x4=120KB 位图 → 画到 Canvas → 无内存峰值
 *
 * 此优化仅影响缩略图生成，不影响最终输出（最终输出始终保持原始分辨率）。
 */
export async function generateThumbnail(
  blob: Blob,
  maxWidth: number = 200,
): Promise<Blob> {
  // 使用 resizeWidth 在解码阶段就缩小，避免 48MB 内存峰值
  const bitmap = await createImageBitmap(blob, {
    resizeWidth: maxWidth,
    resizeQuality: 'medium', // 'pixelated' | 'low' | 'medium' | 'high'
  })

  const canvas = new OffscreenCanvas(bitmap.width, bitmap.height)
  const ctx = canvas.getContext('2d')!
  ctx.drawImage(bitmap, 0, 0)
  bitmap.close()

  return canvas.convertToBlob({ type: 'image/jpeg', quality: 0.6 })
}
```

注意：缩略图生成已移入 Worker 中执行（见 3.3 节），此文件作为工具函数备用（主线程回退场景）。

### 3.7 用户偏好 (`src/lib/preferences.ts`)

```typescript
import type { UserPreferences, OutputFormatKey } from '../types'

const STORAGE_KEY = 'picshift_prefs'

const DEFAULTS: UserPreferences = {
  outputFormat: 'jpg',
  quality: 92,
}

export function loadPreferences(): UserPreferences {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULTS
    const parsed = JSON.parse(raw)
    return { ...DEFAULTS, ...parsed }
  } catch {
    return DEFAULTS
  }
}

export function savePreferences(prefs: Partial<UserPreferences>): void {
  try {
    const current = loadPreferences()
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...current, ...prefs }))
  } catch {
    // localStorage 不可用时静默失败
  }
}
```

### 3.8 分析埋点 (`src/lib/analytics.ts`)

```typescript
// Umami 自定义事件封装
// Umami 自托管于 Cloudflare Workers + D1，零成本
declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, string | number>) => void
    }
  }
}

// 统一 track 封装（后续如需切换到 Plausible 等，只改这一处）
function track(event: string, data?: Record<string, string | number>): void {
  window.umami?.track(event, data)
}

export function trackConvert(
  from: string,
  to: string,
  count: number,
  source: string,
): void {
  track('convert', { from, to, count, source })
}

export function trackDownloadZip(count: number): void {
  track('download_zip', { count })
}

export function trackDownloadSingle(format: string): void {
  track('download_single', { format })
}

export function trackCompareOpen(): void {
  track('compare_open')
}

export function trackQualityChange(quality: number): void {
  track('quality_change', { quality })
}
```

### 3.10 分屏质量对比组件 (`src/components/converter/CompareView.tsx`)

借鉴 Squoosh 的分屏对比交互：左右分屏显示原图和转换后图片，中间可拖拽分割线。

```typescript
import { useState, useRef, useCallback, useEffect } from 'react';

interface CompareViewProps {
  originalUrl: string;       // 原图 ObjectURL
  convertedUrl: string;      // 转换后 ObjectURL
  originalSize: number;      // 原始大小（bytes）
  convertedSize: number;     // 转换后大小（bytes）
  quality: number;           // 当前质量值
  onQualityChange: (q: number) => void;  // 质量滑块变化回调
  onClose: () => void;       // 关闭对比视图
}

export function CompareView({
  originalUrl,
  convertedUrl,
  originalSize,
  convertedSize,
  quality,
  onQualityChange,
  onClose,
}: CompareViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [splitPosition, setSplitPosition] = useState(50); // 百分比，默认居中
  const [isDragging, setIsDragging] = useState(false);

  // 拖拽分割线逻辑
  const handlePointerDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSplitPosition(percent);
  }, [isDragging]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
      return () => {
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('pointerup', handlePointerUp);
      };
    }
  }, [isDragging, handlePointerMove, handlePointerUp]);

  const compressionRate = Math.round((1 - convertedSize / originalSize) * 100);
  const formatSize = (bytes: number) =>
    bytes > 1024 * 1024
      ? `${(bytes / 1024 / 1024).toFixed(1)} MB`
      : `${(bytes / 1024).toFixed(0)} KB`;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
         onClick={onClose}>
      <div className="relative max-w-4xl w-full mx-4"
           onClick={e => e.stopPropagation()}>

        {/* 关闭按钮 */}
        <button onClick={onClose}
                className="absolute -top-10 right-0 text-white/70 hover:text-white">
          Close
        </button>

        {/* 对比区域 */}
        <div ref={containerRef}
             className="relative overflow-hidden rounded-xl select-none"
             style={{ touchAction: 'none' }}>

          {/* 左侧：原图（全宽显示，通过 clip-path 裁切） */}
          <img src={originalUrl} alt="Original"
               className="w-full block" draggable={false} />

          {/* 右侧：转换后（绝对定位叠加，从分割线位置开始显示） */}
          <img src={convertedUrl} alt="Converted"
               className="absolute inset-0 w-full h-full object-cover"
               style={{ clipPath: `inset(0 0 0 ${splitPosition}%)` }}
               draggable={false} />

          {/* 分割线 */}
          <div className="absolute top-0 bottom-0 w-0.5 bg-white cursor-col-resize"
               style={{ left: `${splitPosition}%` }}
               onPointerDown={handlePointerDown}>
            {/* 拖拽手柄 */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2
                            w-8 h-8 bg-white rounded-full shadow-lg
                            flex items-center justify-center cursor-col-resize">
              ⟷
            </div>
          </div>

          {/* 标签 */}
          <span className="absolute top-3 left-3 bg-black/60 text-white text-xs
                           px-2 py-1 rounded">Original</span>
          <span className="absolute top-3 right-3 bg-black/60 text-white text-xs
                           px-2 py-1 rounded">Converted</span>

          {/* 文件大小 */}
          <span className="absolute bottom-3 left-3 bg-black/60 text-white text-xs
                           px-2 py-1 rounded">{formatSize(originalSize)}</span>
          <span className="absolute bottom-3 right-3 bg-black/60 text-white text-xs
                           px-2 py-1 rounded">
            {formatSize(convertedSize)} · -{compressionRate}%
          </span>
        </div>

        {/* 质量滑块（对比视图内嵌，调整后实时更新右侧图片） */}
        <div className="mt-4 flex items-center gap-4 text-white">
          <span className="text-sm">Quality</span>
          <input type="range" min={1} max={100} value={quality}
                 onChange={e => onQualityChange(Number(e.target.value))}
                 className="flex-1" />
          <span className="text-sm w-10 text-right">{quality}%</span>
        </div>
      </div>
    </div>
  );
}
```

**交互细节**：

- 使用 Pointer Events（兼容鼠标和触摸）
- 分割线拖拽使用 `clip-path: inset()` 实现裁切，性能优于 DOM 裁切
- 质量滑块变化时触发重新转换（debounce 300ms），右侧图片实时更新
- 仅单张预览时可进入对比视图，批量模式下不显示（性能考虑）
- 按 ESC 或点击外部区域关闭

**点击缩略图进入对比视图的加载流程**：

由于流式方案下全尺寸 outputBlob 已释放（写入 ZIP 后置 null），点击缩略图查看详情时需要按需重新生成全尺寸图片。

```typescript
// useConverter hook 中新增
const openCompare = useCallback(
  async (id: string) => {
    const file = files.find((f) => f.id === id)
    if (!file || file.status !== 'done') return

    setCompareLoading(true) // UI 显示加载动画

    // 1. 生成原图预览 URL（非 HEIC 格式可直接用 originalFile）
    let originalUrl: string
    const isHeic = file.inputFormat === 'heic' || file.inputFormat === 'heif'
    if (isHeic) {
      // HEIC 浏览器无法直接显示，需要先解码为 PNG
      const decoded = await reconvertInWorker(
        file.originalFile,
        'image/png',
        100,
      )
      originalUrl = URL.createObjectURL(decoded)
    } else {
      originalUrl = URL.createObjectURL(file.originalFile)
    }

    // 2. 重新转换为当前输出格式（按需生成全尺寸结果）
    const convertedBlob = await reconvertInWorker(
      file.originalFile,
      OUTPUT_MIME[outputFormat],
      quality,
    )
    const convertedUrl = URL.createObjectURL(convertedBlob)

    setCompareLoading(false)

    // 3. 打开 CompareView（传入两个全尺寸 URL）
    setCompareState({
      originalUrl,
      convertedUrl,
      originalSize: file.size,
      convertedSize: convertedBlob.size,
    })

    // 4. 关闭时释放这两个临时 URL
    // onClose → URL.revokeObjectURL(originalUrl); URL.revokeObjectURL(convertedUrl);
  },
  [files, outputFormat, quality],
)
```

加载耗时约 1-2 秒（取决于文件大小），期间显示骨架屏或 spinner。用户体验流程：

| 步骤         | 用户看到                       | 内存影响                   |
| ------------ | ------------------------------ | -------------------------- |
| 点击缩略图   | 加载动画（spinner）            | Worker 启动                |
| 1-2 秒后     | 全尺寸分屏对比视图             | 两张全尺寸图临时在内存     |
| 关闭对比视图 | 返回文件列表                   | revokeObjectURL，内存释放  |
| 调整质量滑块 | 右侧图片更新（debounce 300ms） | 旧 blob 释放，新 blob 生成 |

此方案保持了流式方案的低内存优势——全尺寸图片仅在对比视图打开期间存在于内存中。

---

## 4. 工具页面配置系统

### 4.1 页面数据 (`src/data/tools.ts`)

所有工具页面共享同一个 `<Converter>` 组件，只通过配置数据区分：

```typescript
import type { ToolPageConfig } from '../types'

export const TOOL_PAGES: ToolPageConfig[] = [
  {
    slug: 'heic-to-jpg',
    title: 'HEIC to JPG Converter - Free, Private, No Upload | PicShift',
    description:
      'Convert HEIC photos to JPG instantly in your browser. 100% private — files never leave your device. Free, no limits, no sign-up.',
    defaultInputFormat: 'heic',
    defaultOutputFormat: 'jpg',
    h1: 'Convert HEIC to JPG',
    howToSteps: [
      'Drag and drop your HEIC files into the box above, or click to browse.',
      'Your photos are converted instantly in your browser — nothing is uploaded.',
      'Click Download to save each file, or Download All to get a ZIP.',
    ],
    faqs: [
      {
        q: 'What is HEIC format?',
        a: "HEIC (High Efficiency Image Container) is the default photo format on iPhones since iOS 11. It produces smaller files than JPG while maintaining the same quality. However, many Windows apps and websites don't support HEIC, which is why you may need to convert to JPG.",
      },
      {
        q: 'Is it safe to convert my photos here?',
        a: 'Yes. PicShift processes everything in your browser using WebAssembly. Your photos never leave your device — no files are uploaded to any server. You can verify this by disconnecting from the internet and trying the converter — it still works.',
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
  // ... 其他页面配置（结构相同，内容不同）
]
```

### 4.2 Astro 工具页面模板

每个工具页面的 `.astro` 文件非常简短，只引用配置数据：

```astro
---
// src/pages/heic-to-jpg.astro
import Layout from '../layouts/Layout.astro';
import { Converter } from '../components/converter/Converter';
import HowTo from '../components/seo/HowTo.astro';
import FAQ from '../components/seo/FAQ.astro';
import { TOOL_PAGES } from '../data/tools';

const page = TOOL_PAGES.find(p => p.slug === 'heic-to-jpg')!;
---

<Layout title={page.title} description={page.description}>
  <main class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-semibold text-slate-800 mb-2">{page.h1}</h1>
    <p class="text-slate-500 mb-8">
      Free, private, browser-based. Your files never leave your device.
    </p>

    <Converter
      client:load
      defaultOutputFormat={page.defaultOutputFormat}
      acceptFormats={page.defaultInputFormat ? [page.defaultInputFormat] : undefined}
      pageSlug={page.slug}
    />

    <HowTo steps={page.howToSteps} title={`How to ${page.h1}`} />
    <FAQ items={page.faqs} />
  </main>
</Layout>
```

---

## 5. 性能优化

### 5.1 WASM 懒加载

heic2any 的 WASM 文件约 2MB。不在页面加载时加载，仅在用户首次拖入 HEIC 文件时才加载：

```typescript
// 在 Worker 中，heic2any 首次调用时自动加载 WASM
// 用户拖入非 HEIC 文件时，完全不加载 heic2any
```

### 5.2 Web Worker 池

- 最多同时运行 2 个 Worker（`MAX_WORKERS = 2`）
- 避免并发过多导致内存溢出
- Worker 完成后立即 terminate，释放内存
- 使用队列管理待转换文件

### 5.3 内存管理

```typescript
// 转换完成后，及时释放资源
URL.revokeObjectURL(previewUrl) // 释放预览 URL
bitmap.close() // 释放 ImageBitmap

// 关闭/刷新页面时，所有 Blob 和 ObjectURL 自动释放
```

### 5.4 大文件保护

```typescript
const MAX_FILE_SIZE = 50 * 1024 * 1024 // 50MB
const WARN_FILE_SIZE = 20 * 1024 * 1024 // 20MB

function validateFile(file: File): { valid: boolean; warning?: string } {
  if (file.size > MAX_FILE_SIZE) {
    return { valid: false }
  }
  if (file.size > WARN_FILE_SIZE) {
    return {
      valid: true,
      warning: 'Large file — conversion may be slow on mobile devices.',
    }
  }
  return { valid: true }
}
```

### 5.5 Astro 构建优化

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://picshift.app',
  output: 'static',
  integrations: [react(), tailwind(), sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // heic2any 单独分包，懒加载
            heic: ['heic2any'],
            // fflate 单独分包（仅 8KB，但隔离加载）
            zip: ['fflate'],
          },
        },
      },
    },
  },
})
```

---

## 6. SEO 实现

### 6.1 Meta 标签 (`src/layouts/Layout.astro`)

```astro
---
interface Props {
  title: string;
  description: string;
  ogImage?: string;
}

const { title, description, ogImage = '/og-image.png' } = Astro.props;
const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---

<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonicalURL} />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={canonicalURL} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={new URL(ogImage, Astro.site)} />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={new URL(ogImage, Astro.site)} />

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

  <!-- Umami Analytics（自托管于 Cloudflare Workers） -->
  <script defer src="https://analytics.picshift.app/script.js"
    data-website-id="YOUR_WEBSITE_ID"></script>
</head>
<body class="bg-[#f8f9fb] text-slate-800 font-sans antialiased">
  <slot />
</body>
</html>
```

### 6.2 结构化数据

每个工具页面注入 JSON-LD 结构化数据：

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PicShift HEIC to JPG Converter",
    "url": "https://picshift.app/heic-to-jpg",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Convert HEIC to JPG in your browser. Free, private, no upload."
  }
</script>

<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Convert HEIC to JPG",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Upload",
        "text": "Drag and drop your HEIC files or click to browse."
      },
      {
        "@type": "HowToStep",
        "name": "Convert",
        "text": "Files are converted instantly in your browser."
      },
      {
        "@type": "HowToStep",
        "name": "Download",
        "text": "Click Download or get all files as a ZIP."
      }
    ]
  }
</script>
```

### 6.3 Sitemap

由 `@astrojs/sitemap` 自动生成，无需手动维护。

### 6.4 robots.txt

```
User-agent: *
Allow: /
Sitemap: https://picshift.app/sitemap-index.xml
```

---

## 7. 部署

### 7.1 Cloudflare Pages 配置

```
Build command: pnpm build
Build output directory: dist
Node.js version: 20
```

### 7.2 域名配置

1. 在 Porkbun 购买 picshift.app
2. 将 DNS nameserver 改为 Cloudflare（或直接在 Porkbun 添加 CNAME 记录）
3. Cloudflare Pages 绑定自定义域名 picshift.app
4. .app 域名自动强制 HTTPS（HSTS preloaded）

### 7.3 CI/CD

使用 Cloudflare Pages 的 Git 集成：

- 推送到 `main` 分支 → 自动构建并部署到生产环境
- 推送到其他分支 → 自动部署到预览 URL

### 7.4 环境变量

```
# Cloudflare Pages 环境变量（无敏感数据，全在客户端）
PUBLIC_SITE_URL=https://picshift.app
PUBLIC_UMAMI_URL=https://analytics.picshift.app
PUBLIC_UMAMI_WEBSITE_ID=YOUR_WEBSITE_ID
```

---

## 8. 浏览器兼容性

### 8.1 核心依赖的浏览器支持

| 特性              | Chrome | Firefox | Safari | Edge |
| ----------------- | ------ | ------- | ------ | ---- |
| WebAssembly       | 57+    | 52+     | 11+    | 16+  |
| Web Worker        | 4+     | 3.5+    | 4+     | 12+  |
| OffscreenCanvas   | 69+    | 105+    | 16.4+  | 79+  |
| createImageBitmap | 50+    | 42+     | 15+    | 79+  |
| File API          | 6+     | 3.6+    | 6+     | 12+  |
| Drag & Drop       | 4+     | 3.5+    | 3.1+   | 12+  |
| crypto.randomUUID | 92+    | 95+     | 15.4+  | 92+  |

### 8.2 OffscreenCanvas 回退

Safari 16.4 之前不支持 OffscreenCanvas。需要回退方案：

```typescript
// Worker 中检测 OffscreenCanvas 支持
if (typeof OffscreenCanvas === 'undefined') {
  // 回退：在主线程用普通 Canvas 处理
  // 通过 postMessage 通知主线程执行 Canvas 操作
  self.postMessage({ id, status: 'fallback', blob: intermediateBlob })
}
```

MVP 阶段可暂不实现回退——Safari 16.4+ (2023年3月发布) 覆盖率已很高。如果用户反馈较多再补。

---

## 9. 安全考量

### 9.1 数据安全

- 零网络传输：所有图片处理在浏览器内完成，不发送任何 HTTP 请求
- 无服务器端代码：纯静态站点，无后端 API
- 内存隔离：Web Worker 在独立线程中运行，与主线程内存隔离

### 9.2 内容安全策略（CSP）

```
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://analytics.picshift.app https://pagead2.googlesyndication.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data:;
  worker-src 'self' blob:;
  connect-src 'self' https://analytics.picshift.app;
  frame-src https://googleads.g.doubleclick.net;
```

### 9.3 子资源完整性（SRI）

对第三方脚本（Umami、AdSense）添加 integrity 属性。

---

## 10. 开发规范

### 10.1 Git 分支策略

- `main`：生产分支，推送即部署
- `dev`：开发分支
- `feat/*`：功能分支
- `fix/*`：修复分支

### 10.2 代码规范

- TypeScript strict 模式
- ESLint + Prettier 格式化
- 组件命名：PascalCase
- 文件命名：kebab-case
- 函数命名：camelCase
- 常量命名：UPPER_SNAKE_CASE

### 10.3 提交规范

```
feat: add HEIC to WebP conversion page
fix: handle large file memory overflow on iOS Safari
style: update drop zone hover animation
docs: add privacy policy page
chore: update dependencies
```

---

_文档版本：v1.0_
_最后更新：2026-02-25_
