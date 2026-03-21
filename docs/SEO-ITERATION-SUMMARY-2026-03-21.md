# SEO 迭代总结（2026-03-21）

本文件用于固定 `2026-03-21` 这轮实际落地的改动和下次复盘要看的数据。

推荐下次先读本文件，再读：

- `docs/SEO-GEO-REVIEW-2026-03-21.md`
- `docs/GSC-QUERY-ACTION-MAP-2026-03-21.md`

## 本轮核心发现

基于 `2026-03-14` 和 `2026-03-21` 两次 `过去 7 天` GSC 数据的对比：

- URL 归一已经开始生效：`http` 变体从 `123 -> 0`，`www` 变体从 `110 -> 5`
- 首次在工具页上看到真实搜索点击：`/es/webp-to-jpg`（2 次）、`/ja/image-compressor`（1 次）
- 部分重点页排名大幅前推：`/heic-to-png` 从 `72 -> 36`，`/jpg-to-webp` 直接出现在 `34`
- 西语成为最大曝光语种（`347` 展示），俄语、德语也开始冒头
- 总展示从 `1,969 -> 1,317`，主要因为 URL 变体合并和自然波动，不是降权

## 本轮做了什么

### 1. 复盘文档固化

- `docs/SEO-GEO-REVIEW-2026-03-21.md`
- `docs/GSC-QUERY-ACTION-MAP-2026-03-21.md`

### 2. 补强 7 个新冒头的多语言页文案

这些页面已经有展示但内容还偏模板，本轮做了本地化 FAQ 和 introText 补强：

- `/es/image-resizer`
- `/es/image-compressor`
- `/es/heic-to-png`
- `/ru/image-compressor`
- `/de/jpg-to-png`
- `/pt/jpg-to-png`
- `/pt/heic-to-png`

### 3. 给上述 7 个页面补了 `searchIntentSections`

之前这些多语言页只有 FAQ，没有页面正文块。现在补上了本地化的 3 段正文块，让页面内容深度和英文版对齐。

涉及文件：`src/i18n/toolSearchIntent.ts`

### 4. 更新 `llms.txt` / `llms-full.txt` 时间戳

从 `2026-03-07` 更新到 `2026-03-21`。

### 5. 修复暗模式下按钮文字对比度问题

问题：格式选择按钮、尺寸预设按钮、隐私徽章在暗模式下选中态文字使用 `slate-950`，在彩色背景上几乎看不见。

修复：

- `FormatSelector.tsx`：选中态改为 `text-white`，滑块背景改为 `bg-primary-500`
- `ResizeSelector.tsx`：选中态 `dark:text-slate-950` 改为 `text-white`（2 处）
- `PrivacyBadge.astro`：暗模式文字改为 `dark:text-white`

### 6. Bing Webmaster Tools 优化

基于 Bing 后台 `Top Recommendations` 的 4 条建议，本轮全部处理完：

- `IndexNow`：已配置 API key 并提交全站 384 个 URL，后续每次部署可通过 `pnpm run indexnow` 通知 Bing 和 Yandex
- `Meta descriptions too short`：加长了 `/zh/docs/`、`/zh-Hant/docs/`、`/zh-Hant/docs/why-picshift`、`/zh-Hant/jpg-to-png/` 的 description，补了缺失的 `/zh/jpg-to-avif/` 中文翻译
- `Page titles too short`：加长了 `/zh/docs/` 和 `/zh-Hant/docs/` 的 title
- `Inbound links`：新站正常现象，不需要额外操作，通过 Reddit 推广和内容积累逐步改善

Bing Search Performance 中已出现首次点击（`png转jpg 画素不改`，排名 `6.0`，CTR `100%`），多语言 query 也开始在 Bing 上出现。

### 7. 百度搜索资源平台

- 已完成站点验证（HTML 标签方式）
- sitemap 提交受新站配额限制（每日上限 `0`），等待百度自动分配额度
- 手动提交也受同一配额限制，暂时无法操作
- 后续等配额放开后提交 `https://picshift.app/sitemap-0.xml`

## 本轮涉及的文件

- `public/7f990ecb944d43fe805dce8a3db98fb7.txt`（IndexNow key 文件）
- `scripts/indexnow-submit.mjs`（IndexNow 提交脚本）
- `docs/SEO-GEO-REVIEW-2026-03-21.md`（新增）
- `docs/GSC-QUERY-ACTION-MAP-2026-03-21.md`（新增）
- `docs/SEO-ITERATION-SUMMARY-2026-03-14.md`（补充法语证据）
- `public/llms.txt`
- `public/llms-full.txt`
- `src/i18n/toolSearchIntent.ts`
- `src/i18n/translations/es.ts`
- `src/i18n/translations/de.ts`
- `src/i18n/translations/pt.ts`
- `src/i18n/translations/ru.ts`
- `src/components/converter/FormatSelector.tsx`
- `src/components/converter/ResizeSelector.tsx`
- `src/components/seo/PrivacyBadge.astro`

## 本轮验证结果

- `npm run seo:audit`：通过
- `npm run build`：通过，384 页正常产出
- Lint：无新增报错
- Cloudflare 部署：已成功

## 现在的策略

从 `2026-03-21` 起，不再继续加改页面，先观察 `7 天`。

## 下次复盘时间

建议 `2026-03-28` 左右。

## 7 天后重点看什么

### 1. 排名大幅前推的页面是否巩固

这几个页面上轮排名出现了显著改善，下次要看它们是否稳住了：

- `/heic-to-png`：排名从 `72 -> 36`，展示暂时缩窄到 `4`
  - 重点看：展示是否回升、排名是否稳定在 `30-40` 区间
- `/jpg-to-webp`：新出现在排名 `34`
  - 重点看：是否继续出现、展示是否开始增长
- `/webp-to-heif`：排名从 `78 -> 20`
  - 重点看：是否持续，如果稳定可以考虑正式强化这页

### 2. 首次点击的页面是否继续有点击

- `/es/webp-to-jpg`：上轮 2 次点击，排名 `70.7`
  - 重点看：点击是否继续、排名是否进一步改善
- `/ja/image-compressor`：上轮 1 次点击，排名 `75.9`
  - 重点看：点击是否重复出现

### 3. 新补强的多语言页是否开始起量

本轮补强了这些页面，下次要看它们是否开始拿到更多展示和更集中的 query：

- `/es/image-resizer`（上轮 `65` 展示）
- `/es/image-compressor`（上轮 `36` 展示）
- `/es/heic-to-png`（上轮 `22` 展示）
- `/ru/image-compressor`（上轮 `64` 展示）
- `/de/jpg-to-png`（上轮 `80` 展示）
- `/pt/jpg-to-png`（上轮 `30` 展示）
- `/pt/heic-to-png`（上轮 `15` 展示）

### 4. URL 归一是否继续收敛

上轮 `http/www` 变体已经大幅下降，下次要看：

- 残留变体（`1-5` 展示级别）是否继续下降或消失
- apex URL 的展示是否进一步集中
- 不再需要重点关注这个问题，除非变体曝光反弹

### 5. 法语 resizer 是否恢复

- `/fr/image-resizer/`：上轮展示归零
- 已确认 GSC 中已收录（URL Inspection 显示"网址已收录到 Google"）
- 下次看是否开始重新拿到 `redimensionner image` 等法语 query

### 6. 是否该开始写 blog

如果下次 GSC 数据里开始出现更多解释型 query（比如 `why is png larger`、`png vs jpg`），就可以考虑写 1-2 篇 blog。

最值得先写的候选主题：

- `PNG vs JPG: When to use which`
- `Why converted files are sometimes larger`

但如果解释型 query 信号还不够强，继续等就行。

## 下次需要导出的数据

- `查询数.csv`
- `网页.csv`
- `图表.csv`
- `过滤器.csv`

建议同时导出 `过去 7 天` 和 `过去 28 天`。

## 下次重点查询

优先检查这些 query 是否继续起量或改善：

- `webp a jpg`（上轮首次产生点击）
- `jpg in png`（排名已到 `49.5`）
- `avif to png`
- `transformer png en jpg`
- `convertir webp a jpg`
- `redimensionar imagen`
- `comprimir imagenes`
- `webp to heif`（排名到 `20.3`）
- `jpg to avif`
- `heic to png`

## 下次和 AI 协作的推荐方式

下次可以直接这样说：

1. 先看 `docs/SEO-ITERATION-SUMMARY-2026-03-21.md`
2. 再看 `docs/SEO-GEO-REVIEW-2026-03-21.md`
3. 再看 `docs/GSC-QUERY-ACTION-MAP-2026-03-21.md`
4. 然后结合新的 GSC 导出，判断这轮改动是否继续转化为更好的排名、更集中的曝光和更多点击
