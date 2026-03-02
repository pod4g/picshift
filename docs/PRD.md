# PicShift 产品需求文档（代码对齐版）

**产品名称**：PicShift  
**域名**：picshift.app  
**文档版本**：v1.1（代码即现实）  
**更新时间**：2026-03-02

---

## 1. 产品定位

PicShift 是一个浏览器端图片处理工具，定位为「隐私优先、即开即用、批量友好」。

核心原则：

- 所有图片处理在本地完成，不上传原图
- 支持格式转换、压缩、尺寸调整三个高频需求
- 面向 SEO 工具页矩阵，覆盖多语言检索流量

---

## 2. 当前功能范围（已实现）

### 2.1 支持格式

- 输入格式：HEIC、HEIF、JPG、JPEG、PNG、WebP、AVIF、BMP
- 输出格式：JPG、PNG、WebP、AVIF

### 2.2 核心功能

- 文件拖拽/点击上传/粘贴上传
- 批量队列转换（worker 池并发）
- 单张下载 + 全量 ZIP 下载
- 质量调节（1-100，默认 85）
- 尺寸调整（预设 + 自定义像素/百分比）
- 分屏对比（原图 vs 转换图）
- 压缩模式（保留更小文件策略）
- 偏好记忆（格式、质量、尺寸参数）

### 2.3 工具页矩阵（配置驱动）

当前由 `src/data/tools.ts` 驱动的工具页包括：

- image-resizer
- image-compressor
- heic-to-jpg
- heic-to-png
- heic-to-webp
- webp-to-jpg
- webp-to-png
- png-to-jpg
- jpg-to-png
- jpg-to-webp
- avif-to-jpg
- avif-to-png

### 2.4 多语言

当前支持 12 种语言：

- en（默认，无前缀）
- zh、zh-Hant、es、fr、de、ja、ko、pt、ru、ar、it（有前缀）

---

## 3. 路由与页面策略（当前）

- `/`：英文首页
- `/{lang}/`：非英文首页
- `/{slug}`：英文工具页
- `/{lang}/{slug}`：非英文工具页
- `/privacy` 与 `/{lang}/privacy`：隐私页

页面由 Astro 静态生成，工具页与多语言页通过动态路由 + `getStaticPaths` 构建。

---

## 4. 非功能要求（当前要求）

### 4.1 性能

- 转换过程必须不阻塞主线程（使用 Web Worker）
- 首次访问保持轻量，重编解码能力按需加载
- 批量处理中内存可控，不应随文件量线性失控

### 4.2 兼容性

- 面向现代浏览器（Chrome/Edge/Firefox/Safari 新版本）
- 对过旧浏览器给出升级提示，不保证功能可用

### 4.3 隐私与安全

- 不上传图片内容到服务端
- 偏好仅存储在 `localStorage`
- 统计仅使用匿名埋点，不记录用户图片内容

### 4.4 SEO

- 页面级 title / description / canonical / hreflang
- 工具页注入 HowTo 与 FAQ 结构化数据
- 自动生成 sitemap

---

## 5. 数据与埋点（当前）

已实现 Umami 事件封装，覆盖：

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

## 6. 当前约束与边界

- 单文件大小上限：50MB
- 单次会话文件数上限：200
- 单次总文件体积上限：1GB
- 不提供账号系统与云端历史记录
- 不提供服务端 API

---

## 7. 已知风险与后续优先级

### P0（优先）

- 文档与代码长期存在偏差风险，需持续同步维护
- 静态资源（wasm/fonts/icons）需保证构建与部署产物一致

### P1（建议）

- 文件校验当前主要依赖扩展名，建议补充 magic-bytes 校验
- 埋点字段标准可进一步统一，便于长期分析

### P2（优化）

- 多语言翻译加载策略可评估按需拆分以降低初始体积
- SEO schema 可按页面类型进一步细化

---

## 8. 版本说明

本 PRD 以仓库当前实现为准。后续功能变更应同步更新：

- `README.md`
- `docs/PRD.md`
- `docs/tech-spec.md`
