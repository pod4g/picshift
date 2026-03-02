# PicShift

PicShift 是一个浏览器端图片转换与压缩工具，核心特点是 **本地处理、零上传、隐私优先**。

- 支持输入：HEIC/HEIF、JPG/JPEG、PNG、WebP、AVIF、BMP
- 支持输出：JPG、PNG、WebP、AVIF
- 支持批量转换、ZIP 下载、分屏对比、尺寸调整
- 支持多语言路由与 SEO 静态页面生成

## 技术栈

- **框架**：Astro 5（静态输出）
- **交互层**：React 19（Astro Islands）
- **样式**：Tailwind CSS 4
- **转换引擎**：Web Worker + OffscreenCanvas + WASM 编码器
- **HEIC 解码**：浏览器原生优先，回退 `libheif-js`
- **打包下载**：`fflate` 流式 ZIP
- **PWA**：`@vite-pwa/astro`

## 本地开发

```bash
pnpm install
pnpm dev
```

默认启动地址：`http://localhost:4321`

## 常用命令

- `pnpm dev`：启动开发环境
- `pnpm build`：构建生产产物
- `pnpm preview`：本地预览构建结果
- `pnpm astro ...`：执行 Astro CLI 命令

## 目录结构

```text
picshift/
├── src/
│   ├── pages/                    # 页面与路由（含多语言动态路由）
│   ├── components/               # UI 组件（Astro + React）
│   ├── hooks/                    # 核心状态与任务调度
│   ├── workers/                  # 图片转换 Worker
│   ├── lib/                      # 工具函数（zip、download、preferences 等）
│   ├── i18n/                     # 多语言配置与文案
│   ├── data/                     # 工具页面配置（slug、title、faq 等）
│   └── types/                    # 类型定义
├── public/                       # 静态资源
├── docs/                         # PRD 与技术文档
├── astro.config.mjs
└── package.json
```

## 路由策略

- `/`：英文首页
- `/{lang}/`：非英文首页（如 `/zh/`）
- `/{slug}`：英文工具页（由 `src/data/tools.ts` 驱动）
- `/{lang}/{slug}`：非英文工具页
- `/privacy` 与 `/{lang}/privacy`：隐私页

## 关键实现说明

- 转换任务由 `useConverter` 统一调度，使用 worker 池并发处理
- worker 内完成解码、编码、缩略图生成、进度回传
- 批量结果在转换过程中持续写入流式 ZIP，减少高峰内存
- 对比视图支持原图/转换图分屏，按需复用缓存与重建结果

## 相关文档

- 产品需求：`docs/PRD.md`
- 技术规格：`docs/tech-spec.md`

> 当前仓库以“代码即现实”为准，文档会随实现持续更新。
