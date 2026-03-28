# SEO 迭代总结（2026-03-28）

本文件用于固定 `2026-03-28` 这轮实际落地的改动和下次复盘要看的数据。

推荐下次先读本文件，再读：

- `docs/SEO-GEO-REVIEW-2026-03-28.md`
- `docs/SEO-PLAYBOOK.md`

## 本轮核心发现

基于 `2026-03-21` 和 `2026-03-28` 两次 GSC 数据对比：

- 总展示从 `1,317` 回升到 `1,895`（+44%）
- 28 天累计 `5,383` 展示、`11` 次点击
- `/jpg-to-webp` 排名到 `22.7`，接近前 20
- 首页排名到 `17.4`，28 天累计 `10.3`，接近第一页
- `/pt/jpg-to-png/` 爆发到 `536` 展示
- URL 归一完全收敛，不再需要关注
- 多个重点页排名持续前推（`/heif-to-jpg` +26 位，`/avif-to-jpg` +21 位）

## 本轮做了什么

### 1. GSC 复盘并固化文档

- `docs/SEO-GEO-REVIEW-2026-03-28.md`

### 2. 搭建 Blog 系统

完整的博客系统，基于 Astro Content Collections + Markdown：

- `/blog/` 列表页（带 cover 图卡片）
- `/blog/[slug]` 详情页（Medium 风格排版）
- 自托管 Lora 衬线字体（正文用）+ Inter 无衬线字体（标题用）
- 内容区宽度 `680px`，行高 `1.7`，对标 Medium 阅读体验
- 浮动 TOC 目录（桌面端），滚动高亮当前章节
- Related Tools 卡片（文章底部自动链接到工具页）
- 上一篇 / 下一篇导航
- Article JSON-LD schema + BreadcrumbList
- 自动加入 sitemap
- 标签显示
- 浅色模式正文字体加深到 `#1a1a1a`
- 表格圆角、hover 高亮、无衬线表头

### 3. 发布第一篇 Blog 文章

`PNG vs JPG: When to Use Which Format`

- 承接 query：`png to jpg`、`jpg to png`、`jpg in png`、`png vs jpg`
- 内链到：`/png-to-jpg`、`/jpg-to-png`、`/jpg-to-webp`
- 配图：cover 图 + decision 流程图（WebP 格式，Nano Banana Pro 生成）
- 去 AI 化处理：去掉共情开场、导航过渡句，加具体数字和真实场景

### 4. Header 导航加了 Blog 入口

桌面端和移动端导航栏都加了 `Blog` 链接。

### 5. 修复 Blog 页面语言跳转 bug

非英文用户访问 `/blog/` 时会被跳转到 `/zh/blog/` 导致 404。已修复：`/blog/` 路径跳过语言自动跳转。

### 6. 修复格式按钮暗模式文字对比度

`FormatSelector`、`ResizeSelector`、`PrivacyBadge` 在暗模式下选中态文字使用 `slate-950`，改为 `text-white`。

### 7. 提交外链

- **SaaSHub**：已提交并完成验证，等审核（最多 32 天）
  - 填了 7 个竞品：TinyPNG、Squoosh、CloudConvert、iLoveIMG、Convertio、Online Convert、Zamzar 等
  - 填了 20+ 个额外竞品页面
  - 6 个分类
- **findly.tools**：已生效（dofollow, DR 76）

### 8. IndexNow 提交

部署后提交了全站 386 个 URL。

### 9. SEO Playbook 大幅扩展

`docs/SEO-PLAYBOOK.md` 新增了：

- Blog 排版细节标准（字体颜色、表格样式、图片规则）
- Blog 去 AI 化写作规则
- Blog 配图 Workflow（Nano Banana Pro → 裁白边 → 转 WebP）
- SEO 三大系统框架（技术 + 内容 + 信任）
- 关键词优先级策略（农村包围城市）
- 内链规划原则
- 零点击时代应对策略
- 外链建设 9 种方法
- On-Page SEO 检查清单
- EEAT 信号分析
- GEO 优化方法
- Alternatives 页面矩阵策略
- 品牌词策略
- 长尾模式增长逻辑
- 图片标签规则和列表页卡片规则

### 10. 百度站点验证

HTML 标签方式验证通过。sitemap 提交受新站配额限制，等待放开。

### 11. Bing 优化

- IndexNow 配置完成
- Meta descriptions 加长
- Page titles 加长
- Site Scan 重新触发
- 中文 `zh/jpg-to-avif` 补了缺失翻译

### 12. OG Image 更新

用 Nano Banana Pro 生成了新的 OG image，替换了旧的模板风格图片。

## 本轮涉及的主要文件

- `src/content/config.ts`（新增）
- `src/content/blog/png-vs-jpg.md`（新增）
- `src/pages/blog/index.astro`（新增）
- `src/pages/blog/[slug].astro`（新增）
- `src/components/blog/TableOfContents.astro`（新增）
- `src/components/blog/RelatedTools.astro`（新增）
- `public/blog/png-vs-jpg-cover.webp`（新增）
- `public/blog/png-vs-jpg-decision.webp`（新增）
- `public/fonts/lora-400.woff2`（新增）
- `public/fonts/lora-700.woff2`（新增）
- `public/og-image.png`（替换）
- `src/styles/global.css`（Lora 字体注册）
- `src/layouts/Layout.astro`（blog 路径跳过语言跳转 + 百度验证标签）
- `src/components/layout/Header.astro`（Blog 导航链接）
- `src/components/layout/Footer.astro`（findly.tools badge）
- `src/components/converter/FormatSelector.tsx`（暗模式修复）
- `src/components/converter/ResizeSelector.tsx`（暗模式修复）
- `src/components/seo/PrivacyBadge.astro`（暗模式修复）
- `src/i18n/translations/zh.ts`（补 jpg-to-avif 翻译）
- `src/i18n/translations/zh-Hant.ts`（加长 description）
- `src/i18n/docsUi.ts`（加长中文 title 和 description）
- `docs/SEO-PLAYBOOK.md`（大幅扩展）
- `docs/SEO-GEO-REVIEW-2026-03-28.md`（新增）

## 下次复盘时间

建议 `2026-04-04` 左右。

## 下次复盘重点看什么

### 1. Blog 文章是否开始拿到展示

- `/blog/png-vs-jpg/` 是否出现在 GSC 中
- 拿到了哪些 query（`png vs jpg`、`when to use png`、`why is png larger` 等）
- 每个 H2 锚点是否有独立展示（`url#why-png-files-are-usually-larger-than-jpg`）
- 如果某个 H2 起量了，考虑拆成独立文章

### 2. 工具页排名是否继续前推

- `/jpg-to-webp`：上轮 `22.7`，是否进入前 20 或前 10
- `/heic-to-png`：上轮 `38.3`，是否稳住
- `/heif-to-jpg`：上轮 `51.8`，是否继续改善
- `/pt/jpg-to-png/`：上轮爆发到 `536`，是否持续

### 3. 首页排名

- 上轮 7 天排名 `17.4`，28 天排名 `10.3`
- 是否稳定在前 20，或进入前 10

### 4. 外链效果

- findly.tools（DR 76, dofollow）已生效约 1 周
- SaaSHub 是否审核通过
- PeerPush 是否上线（排队约 25 天）
- 整体域名权重是否开始提升

### 5. 是否该写第二篇 blog

根据第一篇的 GSC 数据决定：
- 如果 `file quality`、`why is png larger` 起量 → 写 `Why converted files are larger`
- 如果 `heic to jpg` 的 query 量更大 → 写 `HEIC on Windows`
- 如果第一篇某个 H2 独立起量 → 优先拆成独立文章

## 下次需要导出的数据

- `过去 7 天` 和 `过去 28 天` 各一份
- 重点看 `/blog/png-vs-jpg/`、`/jpg-to-webp`、`/pt/jpg-to-png/`、首页

## 下次和 AI 协作的推荐方式

1. 先看 `docs/SEO-ITERATION-SUMMARY-2026-03-28.md`
2. 再看 `docs/SEO-GEO-REVIEW-2026-03-28.md`
3. 再看 `docs/SEO-PLAYBOOK.md`（完整的 SEO 策略手册）
4. 结合新的 GSC 导出，判断 blog 和外链是否开始产生效果
