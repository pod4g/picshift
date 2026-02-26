# PicShift - 产品需求文档（PRD）

**产品名称**：PicShift
**域名**：picshift.app
**版本**：v1.0 MVP
**日期**：2026-02-25
**作者**：lyf

---

## 1. 产品概述

### 1.1 一句话定义

PicShift 是一个浏览器端图片格式转换工具，所有处理在用户本地完成，照片永远不上传到服务器。

### 1.2 核心卖点

- **隐私优先**：100% 浏览器端处理（WASM），零服务器上传
- **批量处理**：一次拖入多张，一键 ZIP 下载
- **极简体验**：拖入即转，无需注册，无需登录
- **完全免费**：基础功能全免费，无限制

### 1.3 目标用户

| 用户画像     | 场景                                             | 痛点                    |
| ------------ | ------------------------------------------------ | ----------------------- |
| Windows 用户 | 收到 iPhone 发来的 HEIC 照片，打不开             | Windows 不原生支持 HEIC |
| iPhone 用户  | 想把照片发到非苹果设备或上传到不支持 HEIC 的平台 | 需要转成 JPG/PNG        |
| 设计师/运营  | 批量处理 WebP/AVIF 格式图片                      | 需要转成通用格式        |
| 隐私敏感用户 | 不想把私人照片上传到第三方服务器                 | 现有工具都需要上传      |

### 1.4 竞品定位

| 竞品          | 模式                   | PicShift 的差异                      |
| ------------- | ---------------------- | ------------------------------------ |
| heictojpg.com | 服务器处理，免费有限制 | 本地处理，无限制                     |
| Convertio     | 服务器处理，免费 100MB | 本地处理，无容量限制                 |
| iLoveIMG      | 服务器处理，批量要付费 | 本地批量，免费                       |
| Squoosh       | 本地处理               | Squoosh 不支持 HEIC 输入，不支持批量 |

---

## 2. 功能需求

### 2.1 MVP 功能（v1.0）

#### F1: 图片格式转换（核心功能）

**支持的输入格式**：

- HEIC / HEIF（iPhone 默认格式）
- WebP
- PNG
- JPG / JPEG
- AVIF

**支持的输出格式**：

- JPG / JPEG
- PNG
- WebP

**转换逻辑**：

- 用户选择或拖入图片文件
- 自动检测输入格式
- 用户选择输出格式（默认 JPG）
- 浏览器端解码 → Canvas 渲染 → 导出目标格式
- 显示预览 + 提供下载按钮

#### F2: 拖拽上传

- 支持拖拽文件到页面指定区域（Drop Zone）
- 支持点击上传（file input）
- 支持同时选择/拖入多个文件
- 支持的最大单文件大小：50MB（超过提示"文件过大，可能导致浏览器卡顿"）
- 不限制文件数量（建议一次不超过 100 张）

#### F3: 批量处理

- 多文件拖入后，自动排队逐一转换
- 显示整体进度（已完成 / 总数）
- 每张转换完成后显示预览缩略图 + 单独下载按钮
- 提供"全部下载"按钮，打包为 ZIP 文件下载

#### F4: 质量控制

- JPG 输出：质量滑块（1-100，默认 92）
- PNG 输出：无损，无质量选项
- WebP 输出：质量滑块（1-100，默认 90）
- 实时显示预估输出文件大小

#### F4.1: 分屏质量对比（借鉴 Squoosh）

单张图片点击预览时，进入**分屏对比视图**：

- 左侧显示原图，右侧显示转换后的图片
- 中间一条**可拖拽的竖向分割线**，用户左右拖动直观对比质量差异
- 分割线上方显示标签：左 "Original" / 右 "Converted"
- 左下角显示原始文件大小，右下角显示转换后文件大小 + 压缩率（如 "890 KB · -58%"）
- 拖动质量滑块时，右侧图片实时更新（重新转换）
- 点击关闭或点击空白区域退出对比视图，返回文件列表
- 仅在单张预览时显示，批量模式下不显示（性能考虑）

#### F5: 多工具页面（SEO 矩阵）

每种转换组合一个独立页面，共享同一个转换组件，仅默认参数不同：

| 页面路径            | 标题                   | 默认设置                   |
| ------------------- | ---------------------- | -------------------------- |
| `/heic-to-jpg`      | HEIC to JPG Converter  | 输入 HEIC，输出 JPG        |
| `/heic-to-png`      | HEIC to PNG Converter  | 输入 HEIC，输出 PNG        |
| `/heic-to-webp`     | HEIC to WebP Converter | 输入 HEIC，输出 WebP       |
| `/webp-to-jpg`      | WebP to JPG Converter  | 输入 WebP，输出 JPG        |
| `/webp-to-png`      | WebP to PNG Converter  | 输入 WebP，输出 PNG        |
| `/png-to-jpg`       | PNG to JPG Converter   | 输入 PNG，输出 JPG         |
| `/jpg-to-png`       | JPG to PNG Converter   | 输入 JPG，输出 PNG         |
| `/jpg-to-webp`      | JPG to WebP Converter  | 输入 JPG，输出 WebP        |
| `/avif-to-jpg`      | AVIF to JPG Converter  | 输入 AVIF，输出 JPG        |
| `/avif-to-png`      | AVIF to PNG Converter  | 输入 AVIF，输出 PNG        |
| `/image-compressor` | Image Compressor       | 输入任意，输出同格式低质量 |

首页 (`/`) 为通用入口，支持所有格式互转。

#### F6: 用户偏好记忆

- 使用 localStorage 存储用户上次选择的输出格式和质量参数
- 下次访问自动恢复设置
- 不存储任何图片数据

### 2.2 不做的功能（MVP 范围外）

| 功能               | 原因                                         |
| ------------------ | -------------------------------------------- |
| 用户注册/登录      | 不需要，增加摩擦                             |
| 图片存储/历史记录  | 与隐私卖点冲突，技术上受限                   |
| 图片裁剪/旋转/滤镜 | 超出 MVP 范围，后续版本考虑                  |
| AVIF 输出          | 浏览器 Canvas 对 AVIF 导出支持不完善，暂不做 |
| 桌面客户端         | 后续版本考虑（Tauri 打包）                   |
| Pro 付费版         | 流量起来后再做                               |
| API 接口           | 后续版本考虑                                 |

---

## 3. 非功能需求

### 3.1 性能

| 指标                  | 目标                             |
| --------------------- | -------------------------------- |
| 单张转换（2MB HEIC）  | < 2 秒                           |
| 单张转换（10MB HEIC） | < 5 秒                           |
| 50 张批量转换         | < 60 秒                          |
| 首屏加载（LCP）       | < 2.5 秒                         |
| WASM 包加载           | 懒加载，用户首次拖入文件时才加载 |
| UI 响应               | 转换过程不阻塞 UI（Web Worker）  |

### 3.2 兼容性

| 环境           | 要求                                        |
| -------------- | ------------------------------------------- |
| Chrome 57+     | 完全支持                                    |
| Firefox 52+    | 完全支持                                    |
| Safari 11+     | 完全支持                                    |
| Edge 79+       | 完全支持                                    |
| iOS Safari     | 完全支持（注意内存限制，单文件建议 < 20MB） |
| Android Chrome | 完全支持                                    |
| IE             | 不支持，显示升级提示                        |

### 3.3 SEO

| 项目         | 要求                                                          |
| ------------ | ------------------------------------------------------------- |
| SSG 预渲染   | 所有工具页面静态生成                                          |
| Meta 标签    | 每页独立的 title、description、og:image                       |
| 结构化数据   | SoftwareApplication + HowTo schema                            |
| Sitemap      | 自动生成 sitemap.xml                                          |
| robots.txt   | 允许全站抓取                                                  |
| 页面标题格式 | `{X} to {Y} Converter - Free, Private, No Upload \| PicShift` |
| URL 结构     | 纯静态路径，无查询参数                                        |
| 内容         | 每个工具页面包含 FAQ 和简短说明文字（辅助 SEO）               |

### 3.4 隐私与安全

| 项目       | 要求                                                   |
| ---------- | ------------------------------------------------------ |
| 数据上传   | 绝对禁止。任何图片数据不得离开浏览器                   |
| HTTPS      | 强制（.app 域名自动强制 HTTPS）                        |
| Cookie     | 仅用于匿名分析（如 Umami），不用于追踪                 |
| 第三方脚本 | 仅广告（AdSense）和分析（Umami），不加载其他第三方脚本 |
| 隐私声明   | 页面底部链接到隐私政策页，明确说明"图片不离开你的设备" |

---

## 4. 技术架构

### 4.1 技术栈

| 层        | 选型                           | 理由                                                                   |
| --------- | ------------------------------ | ---------------------------------------------------------------------- |
| 框架      | Astro（SSG 模式）              | 极快的静态站生成，天然 SEO 友好，零 JS 开销（仅需要交互的组件加载 JS） |
| 交互组件  | React（Astro Islands）         | 转换器组件需要丰富交互，用 React 写，Astro 按需加载                    |
| 样式      | Tailwind CSS                   | 快速开发，一致的设计系统                                               |
| HEIC 解码 | heic2any (MIT)                 | 基于 libheif-js 的高层封装，API 简洁                                   |
| 图片处理  | Canvas API                     | 浏览器原生，格式转换和质量控制                                         |
| 并行处理  | Web Worker                     | 解码不阻塞 UI                                                          |
| ZIP 打包  | JSZip                          | 批量下载打包                                                           |
| 文件下载  | FileSaver.js / 原生 a.download | 触发浏览器下载                                                         |
| 部署      | Cloudflare Pages               | 免费，全球 CDN，无限带宽                                               |
| 域名      | picshift.app (Porkbun)         | $14.20/年                                                              |
| 分析      | Umami 自托管                   | 隐私友好，无 Cookie，GDPR 合规，部署在 Cloudflare Workers + D1（免费） |
| 广告      | Google AdSense                 | MVP 阶段主要变现方式                                                   |

### 4.2 项目结构

```
picshift/
├── src/
│   ├── pages/
│   │   ├── index.astro                 # 首页（通用转换器）
│   │   ├── heic-to-jpg.astro           # HEIC→JPG 工具页
│   │   ├── heic-to-png.astro           # HEIC→PNG 工具页
│   │   ├── heic-to-webp.astro          # HEIC→WebP 工具页
│   │   ├── webp-to-jpg.astro           # WebP→JPG 工具页
│   │   ├── webp-to-png.astro           # WebP→PNG 工具页
│   │   ├── png-to-jpg.astro            # PNG→JPG 工具页
│   │   ├── jpg-to-png.astro            # JPG→PNG 工具页
│   │   ├── jpg-to-webp.astro           # JPG→WebP 工具页
│   │   ├── avif-to-jpg.astro           # AVIF→JPG 工具页
│   │   ├── avif-to-png.astro           # AVIF→PNG 工具页
│   │   ├── image-compressor.astro      # 图片压缩工具页
│   │   ├── privacy.astro               # 隐私政策
│   │   └── about.astro                 # 关于页面
│   ├── components/
│   │   ├── Converter.tsx               # 核心转换组件
│   │   ├── DropZone.tsx                # 拖拽上传区域
│   │   ├── FileList.tsx                # 文件列表 + 预览 + 进度
│   │   ├── QualitySlider.tsx           # 质量滑块
│   │   ├── FormatSelector.tsx          # 输出格式选择器
│   │   ├── DownloadButton.tsx          # 下载按钮（单个 + 全部）
│   │   ├── Header.astro                # 页头导航
│   │   ├── Footer.astro                # 页脚（隐私声明、链接）
│   │   ├── FAQ.astro                   # FAQ 组件（SEO 内容）
│   │   └── PrivacyBadge.astro          # "Your files never leave your device" 徽章
│   ├── workers/
│   │   └── convert-worker.js           # Web Worker 转换逻辑
│   ├── utils/
│   │   ├── converter.ts                # heic2any 封装 + Canvas 导出
│   │   ├── zip.ts                      # JSZip 批量打包
│   │   └── preferences.ts             # localStorage 偏好读写
│   ├── layouts/
│   │   └── Layout.astro                # 全局布局（SEO meta、广告位）
│   └── styles/
│       └── global.css                  # Tailwind 入口 + 全局样式
├── public/
│   ├── favicon.svg
│   ├── og-image.png                    # 社交分享预览图
│   └── robots.txt
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

### 4.3 核心转换流程

```
用户操作                    浏览器处理                           用户看到
─────────                  ──────────                          ────────
拖入/选择文件        →      File API 读取文件元信息        →     文件列表出现
                    →      检测格式（HEIC?WebP?）
                    →      创建 Web Worker
                    →      Worker: heic2any 解码          →     进度条推进
                    →      Worker: Canvas 渲染
                    →      Worker: canvas.toBlob()        →     预览缩略图出现
                    →      返回 Blob 到主线程             →     下载按钮可用
点击"下载"           →      URL.createObjectURL(blob)      →     浏览器下载
点击"全部下载"       →      JSZip 打包所有 Blob            →     ZIP 文件下载
关闭/刷新页面        →      内存释放，零残留
```

---

## 5. 页面设计规范

### 5.1 页面结构（每个工具页）

```
┌─────────────────────────────────────────────┐
│  Header: Logo | HEIC | WebP | PNG | JPG | ▼ │
├─────────────────────────────────────────────┤
│                                             │
│   [广告位 - 顶部横幅 728x90]                  │
│                                             │
│   ┌─────────────────────────────────────┐   │
│   │                                     │   │
│   │     拖拽图片到这里                    │   │
│   │     或点击选择文件                    │   │
│   │                                     │   │
│   │     🔒 Your files never leave       │   │
│   │        your device                  │   │
│   │                                     │   │
│   └─────────────────────────────────────┘   │
│                                             │
│   输出格式: [JPG ▼]  质量: [====○===] 85%    │
│                                             │
│   ┌──────┐ ┌──────┐ ┌──────┐               │
│   │ 预览1 │ │ 预览2 │ │ 预览3 │  ...         │
│   │ 2.1MB │ │ 1.8MB │ │ 3.2MB │              │
│   │ [下载] │ │ [下载] │ │ [下载] │             │
│   └──────┘ └──────┘ └──────┘               │
│                                             │
│   [ 全部下载 ZIP (7.1MB) ]                   │
│                                             │
│   [广告位 - 中部矩形 300x250]                 │
│                                             │
│   ── How to Convert HEIC to JPG ──          │
│   1. Drag and drop your HEIC files...       │
│   2. Choose output format...                │
│   3. Click Download...                      │
│                                             │
│   ── FAQ ──                                 │
│   Q: What is HEIC format?                   │
│   Q: Is it safe to convert here?            │
│   Q: How many files can I convert?          │
│                                             │
├─────────────────────────────────────────────┤
│  Footer: Privacy | About | © 2026 PicShift  │
└─────────────────────────────────────────────┘
```

### 5.2 设计原则

- **极简**：页面主体只有一个拖拽区 + 结果列表，没有多余元素
- **快速**：用户从打开页面到完成转换 < 10 秒（不含文件处理时间）
- **信任感**：隐私徽章始终可见，颜色用绿色/蓝色系传达安全感
- **响应式**：移动端一列布局，桌面端自适应宽度
- **无暗模式（MVP）**：后续版本考虑

### 5.3 多语言（MVP 范围外）

MVP 仅英文。后续可考虑中文、日文、韩文等版本，每种语言独立子目录（`/zh/heic-to-jpg`），扩大 SEO 覆盖面。

---

## 6. 变现策略

### 6.1 MVP 阶段（0-6 个月）

- **Google AdSense 广告**：每页 2-3 个广告位（顶部横幅 + 中部矩形 + 底部）
- 所有功能完全免费，无任何限制
- 预估收入：取决于流量，$0-300/月

### 6.2 增长阶段（6 个月+，日 UV > 5000）

- 加入 Freemium 模式（需登录系统）
- Pro 版定价：$3.99/月 或 $49 买断
- Pro 功能：去广告、自定义输出尺寸、EXIF 编辑、自动重命名规则
- 支付通道：LemonSqueezy

---

## 7. 获客策略

### 7.1 SEO（主要渠道）

- 11+ 工具页面，每页针对一个精确搜索关键词
- 每页包含 How-to 内容 + FAQ（增加内容深度）
- 结构化数据（SoftwareApplication + HowTo schema）
- 目标关键词：`heic to jpg`、`webp to jpg`、`heic converter`、`image converter online free` 等
- 策略：先打长尾词（`convert heic to jpg without uploading`、`batch heic converter`），再攻主词

### 7.2 Product Hunt 发布

- 强调 "privacy-first, no upload, browser-based"
- 准备 demo GIF / 短视频
- 争取当日 Top 5

### 7.3 社区推广

- Reddit: r/iphone、r/windows、r/privacy 相关讨论中自然推荐
- Hacker News: Show HN 帖子
- 不做垃圾推广，只在有人真正问"怎么转换 HEIC"时回答

---

## 8. 数据分析

### 8.1 核心指标

| 指标         | 工具              | 说明                               |
| ------------ | ----------------- | ---------------------------------- |
| UV / PV      | Umami             | 每日/每周/每月访问量               |
| 转换次数     | 自定义事件        | 记录每次成功转换（不记录文件内容） |
| 转换格式分布 | 自定义事件        | 哪种格式转换最多                   |
| 流量来源     | Umami             | SEO / Direct / Referral 占比       |
| 跳出率       | Umami             | 页面跳出率                         |
| 广告收入     | AdSense Dashboard | 每日/每月广告收入                  |

### 8.2 事件埋点（仅匿名统计，不含文件信息）

```javascript
// 转换完成事件
umami.track('Convert', {
  props: {
    from: 'heic',
    to: 'jpg',
    count: 5, // 批量数量
    source: 'heic-to-jpg', // 来自哪个工具页
  },
})

// ZIP 下载事件
umami.track('Download ZIP', {
  props: { count: 10 },
})
```

---

## 9. 开发计划

| 阶段   | 内容                                                      | 产出             |
| ------ | --------------------------------------------------------- | ---------------- |
| Week 1 | 项目搭建 + 核心转换功能 + 拖拽上传 + 单张/批量 + ZIP 下载 | 可运行的核心功能 |
| Week 2 | 多工具页面 + 响应式设计 + 质量控制                        | 完整页面矩阵     |
| Week 3 | SEO 优化 + 广告接入 + Umami 分析 + 部署上线               | 上线             |
| Week 4 | Product Hunt 发布 + 社区推广 + 监控数据 + 修 bug          | 推广             |

---

## 10. 风险与应对

| 风险                      | 影响            | 应对                                                              |
| ------------------------- | --------------- | ----------------------------------------------------------------- |
| iOS Safari 大文件内存溢出 | 移动端体验差    | 检测文件大小，超 20MB 提示警告                                    |
| WASM 包首次加载慢（~2MB） | 首次使用等待    | 懒加载 + loading 提示                                             |
| SEO 排名上升慢            | 前 6 个月流量低 | 预期管理，同时做 PH/社区推广                                      |
| Google AdSense 审核不过   | 无广告收入      | 先用 Carbon Ads 或 EthicalAds 替代                                |
| heic2any 库停止维护       | 长期风险        | 该库依赖 libheif（活跃维护），风险低；必要时可直接调用 libheif-js |

---

## 11. 成功标准

| 时间         | 目标                               |
| ------------ | ---------------------------------- |
| 上线 1 个月  | 功能完整，无严重 bug，日 UV > 50   |
| 上线 3 个月  | 日 UV > 500，Google 收录所有工具页 |
| 上线 6 个月  | 日 UV > 2,000，广告月收入 > $100   |
| 上线 12 个月 | 日 UV > 5,000，月总收入 > $500     |

---

_文档版本：v1.0_
_最后更新：2026-02-25_
