# PicShift 技术规格文档（代码对齐版）

**产品**：PicShift（picshift.app）  
**文档版本**：v1.1（代码即现实）  
**更新时间**：2026-03-02

---

## 1. 技术栈

| 层 | 方案 | 说明 |
| --- | --- | --- |
| 构建框架 | Astro 5 | 静态输出（`output: 'static'`） |
| 交互层 | React 19 | 通过 Astro Islands 加载转换器组件 |
| 样式 | Tailwind CSS 4 | 全站原子化样式 |
| 转换执行 | Web Worker + OffscreenCanvas | 避免阻塞主线程 |
| HEIC 解码 | 原生 `createImageBitmap` 优先，回退 `libheif-js` | 兼容更多浏览器环境 |
| 编码器 | `@jsquash/jpeg`、`@jsquash/webp`、`@jsquash/avif`、`@jsquash/oxipng`、`@panda-ai/imagequant` | 在 worker 中按格式调用 |
| ZIP 打包 | `fflate` | 流式追加条目并下载 |
| 分析 | Umami | 匿名事件埋点 |
| PWA | `@vite-pwa/astro` | service worker + manifest |

---

## 2. 实际目录结构（关键路径）

```text
src/
├── pages/
│   ├── index.astro
│   ├── [slug].astro
│   ├── privacy.astro
│   └── [lang]/
│       ├── index.astro
│       ├── [slug].astro
│       └── privacy.astro
├── components/
│   ├── converter/
│   ├── layout/
│   └── seo/
├── hooks/
│   ├── useConverter.ts
│   └── useDropZone.ts
├── workers/
│   └── convert-worker.ts
├── lib/
│   ├── analytics.ts
│   ├── download.ts
│   ├── format-utils.ts
│   ├── preferences.ts
│   └── zip.ts
├── data/tools.ts
├── i18n/
└── types/index.ts
```

---

## 3. 路由与页面生成

### 3.1 路由规则

- 首页：`/`、`/{lang}/`
- 工具页：`/{slug}`、`/{lang}/{slug}`
- 隐私页：`/privacy`、`/{lang}/privacy`

### 3.2 生成机制

- 工具页不使用单独静态文件矩阵，而是依赖：
  - `src/data/tools.ts`（配置源）
  - `src/pages/[slug].astro`（英文）
  - `src/pages/[lang]/[slug].astro`（非英文）
- `getStaticPaths` 在构建期展开 slug 与 locale 组合。

### 3.3 i18n 策略

- 默认语言：`en`
- 支持语言：`en, zh, zh-Hant, es, fr, de, ja, ko, pt, ru, ar, it`
- 非默认语言带路径前缀（`prefixDefaultLocale: false`）
- `Layout` 包含首访语言识别与本地记忆跳转逻辑

---

## 4. 核心转换链路

### 4.1 模块职责

- `Converter.tsx`：UI 容器与页面行为
- `useConverter.ts`：文件状态、队列、worker 池、下载、对比缓存
- `convert-worker.ts`：解码、缩放、编码、缩略图、进度回传
- `zip.ts`：流式 ZIP 构建与下载

### 4.2 处理流程

1. 用户上传文件（拖拽/点击/粘贴）
2. `useConverter.addFiles` 执行文件过滤与会话限制检查
3. 合法文件入队，worker 池并发处理
4. worker 解码源图并执行可选 resize
5. 按目标格式编码，必要时执行优化或回退
6. 生成缩略图并回传进度/结果
7. 主线程更新 UI，并将结果持续写入 ZIP
8. 用户执行单张下载或批量 ZIP 下载

### 4.3 并发与内存策略

- 最大并发：`min(navigator.hardwareConcurrency, 4)`
- worker 可复用，批次结束后统一释放
- 缩略图使用 object URL，替换/删除时显式 `revokeObjectURL`
- 对比视图维护有限 LRU 缓存（默认上限 10 项）

---

## 5. 编解码细节（worker）

### 5.1 解码

- HEIC/HEIF：
  - 先尝试浏览器原生 `createImageBitmap`
  - 失败时回退 `libheif-js` WASM 解码
- 非 HEIC：
  - 使用 `createImageBitmap`，支持在解码阶段直接 resize

### 5.2 编码

- JPG：`@jsquash/jpeg`，失败回退原生 `convertToBlob`
- PNG：
  - 高质量走原生 PNG + `oxipng`
  - 低质量可走 `imagequant` 量化再优化
- WebP：`@jsquash/webp`，失败回退原生
- AVIF：`@jsquash/avif`，失败回退原生

### 5.3 keepSmaller

- 在压缩模式或同格式导出时，如果新文件更大，可保留原文件作为输出。

---

## 6. 数据结构与约束

### 6.1 核心类型

见 `src/types/index.ts`：

- `InputFormat` / `OutputFormatKey`
- `ConvertFile`
- `ResizeOption`
- `WorkerRequest` / `WorkerResponse`

### 6.2 文件限制

见 `src/lib/format-utils.ts`：

- 单文件上限：50MB
- 单次文件数上限：200
- 单次总大小上限：1GB

### 6.3 偏好持久化

见 `src/lib/preferences.ts`：

- 存储 key：`picshift_prefs`
- 存储内容：输出格式、质量、尺寸设置

---

## 7. SEO / PWA / Analytics

### 7.1 SEO

- `Layout.astro` 负责 title、description、canonical、OG、Twitter、hreflang
- `HowTo.astro` 注入 `HowTo` JSON-LD
- `FAQ.astro` 注入 `FAQPage` JSON-LD
- `@astrojs/sitemap` 自动生成站点地图
- `public/robots.txt` 当前允许全站并排除 `/test-encoders`

### 7.2 PWA

- `@vite-pwa/astro` 已启用
- 生产环境注入 `registerSW.js`
- 前端包含安装提示触发逻辑（`beforeinstallprompt`）

### 7.3 Analytics

`src/lib/analytics.ts` 当前事件：

- file_add
- file_format
- format_select
- convert_file
- convert_complete
- convert_error
- download_single
- download_zip
- compare_open
- clear_all
- pwa_install_click

---

## 8. 关键实现差异说明（相对旧文档）

- 工具页已从“手写页面矩阵”演进为“配置驱动动态路由”
- 已支持 AVIF 输出
- 多语言已落地，不再是规划项
- HEIC 主路径不再依赖单一库封装，采用原生优先 + wasm 回退
- ZIP 实现为 fflate 流式方案

---

## 9. 已知技术风险与建议

### 9.1 已知风险

- 输入校验主要依赖扩展名，缺少统一 magic-bytes 前置校验
- `public` 资源与代码引用需要持续保持一致（wasm/fonts/icons）

### 9.2 建议优先级

- P0：文档与代码同步流程固化（避免再次漂移）
- P1：补充文件头校验，提高输入鲁棒性
- P2：评估多语言文案按需加载策略
