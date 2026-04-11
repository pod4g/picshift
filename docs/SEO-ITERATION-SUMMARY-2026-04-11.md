# SEO 迭代总结（2026-04-11）

本文件固定 `2026-04-11` 落地改动与 **约 7 天后（建议 2026-04-18）** 复盘要看的数据。详细原则与观察清单见：

- `docs/SEO-PLAYBOOK.md` → **「### 2026-04-11 迭代记录」**

## 本轮做了什么

### 1. 尾斜杠与 canonical / hreflang 对齐（技术 SEO）

- **`astro.config.mjs`**：启用 **`trailingSlash: 'always'`**，与 Cloudflare 目录型 HTML URL 行为一致。
- **`src/lib/htmlCanonicalUrl.ts`**（新建）：对 `https://picshift.app` 下**无查询串、无 hash**的路径，若末段**不含 `.`** 则补 **`/`**；静态资源（末段含 `.`）不改写。
- **`src/layouts/Layout.astro`**：默认 `canonical` 与各语言 **`hreflang`** 备用链接均经 **`htmlCanonicalUrl`** 输出，避免 meta 与最终 307 目标不一致。
- **`src/i18n/index.ts`**：**`localePath()`** 内 **`ensureHtmlPathTrailingSlash`**，页面型内链与 `trailingSlash: always` 对齐；根语言首页为 `/${lang}/`。
- **工具页**：**`src/pages/[slug].astro`**、**`src/pages/[lang]/[slug].astro`** — `canonical`、`pagePath` 带尾斜杠；相关 docs 内链、`ItemList` / FAQ 外链、**`sizeIncreaseDocUrl`** 等绝对 URL 经 **`htmlCanonicalUrl`**。
- **博客与导航**：**`src/pages/blog/index.astro`**、**`src/pages/blog/[slug].astro`** — `canonical`、`pagePath`、面包屑、列表与 prev/next 使用 **`/blog/`**、**`/blog/{slug}/`**；**`src/components/layout/Header.astro`** Blog 链到 **`/blog/`**。

### 2. 内容与元数据（On-page）

1. **葡语**：`src/i18n/translations/pt.ts` — 全文巴西葡语重音与正字统一（含 `metadata-remover` 的 `detailSections`）。
2. **工具 canonical 文案长度**：`src/data/tools.ts` — `metadata-remover` description ≤165、`png-to-avif` title ≤65（`npm run seo:audit`）。
3. **英文 meta 对齐**：`src/i18n/translations/en.ts` — `metadata-remover` 的 `description` 与 `tools.ts` 一致。

**验证**：`npm run build`、`npm run seo:audit`（长度告警：无）。

## 涉及文件（canonical / 斜杠相关）

- `astro.config.mjs`
- `src/lib/htmlCanonicalUrl.ts`
- `src/layouts/Layout.astro`
- `src/i18n/index.ts`
- `src/pages/[slug].astro`
- `src/pages/[lang]/[slug].astro`
- `src/pages/blog/index.astro`
- `src/pages/blog/[slug].astro`
- `src/components/layout/Header.astro`

## 涉及文件（文案与 audit）

- `src/i18n/translations/pt.ts`
- `src/data/tools.ts`
- `src/i18n/translations/en.ts`

（同一日期工作区若还有 `de` / `es` / `fr` / `it` / `ja` / `ru` 等翻译微调，以实际 commit 为准。）

## 2026-04-18 左右复盘：优先打开 GSC 看什么

| 优先级 | 看什么 | 目的 |
|---|---|---|
| P0 | **URL 形态**：展示/点击是否向 **带尾斜杠** 规范 URL 集中；无斜杠变体是否减少 | 验证 canonical + `trailingSlash` + 内链是否生效 |
| P0 | 全站点击、CTR、平均排名；`country=Brazil` 或 `page` 含 `/pt/` | PT 正字 + URL 收敛是否带来 CTR / 首次点击 |
| P1 | 索引与体验：**重复网页**、**Google 选择的规范网址** 是否与预期一致 | 发现漏网 URL 或 hreflang 问题 |
| P1 | `metadata-remover` 各语言路径 + Top queries | 新 description 与真实 query 对齐度 |
| P1 | `/png-to-avif` 展示与 CTR | 标题缩短后的短期反应 |
| P2 | 已维护的 PT 工具 URL 排名 | 与全站 PT 与 URL 信号联动 |

## 下一轮可做（有数据再执行）

- 若 GSC 仍出现无斜杠或重复 URL：排查站外链接、sitemap、或漏改的硬编码 URL。
- 按 Top queries 微调 CTR 落后页的 title / description 首句。
- 部署后如有 IndexNow，提交变更 URL。
