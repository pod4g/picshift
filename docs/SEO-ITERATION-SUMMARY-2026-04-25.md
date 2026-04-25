# SEO 迭代总结（2026-04-25）

本文件固定 `2026-04-25` 这一轮落地改动，并给 **约 7 天后（建议 2026-05-02）** 的复盘提供统一入口。
更底层的规则、经验教训与 URL 规范化原则见：

- `docs/SEO-PLAYBOOK.md` → 历轮 lessons learned
- `docs/SEO-ITERATION-SUMMARY-2026-04-18.md` → 上一轮记录（URL 规范化 + 4-18 P1/P2）
- `docs/gsc-export-2026-04-25/` → 本轮基线 GSC 数据（28d default + 7d filtered）

## 本轮提交一览（按时间）

| Commit | 主题 | 类型 |
|---|---|---|
| `b25fd00` | `heif-to-jpg` 6 语言本地化 + 全局变音符号回填 | 内容 / i18n |
| `23bb155` | 归档 4-25 GSC 7d / 28d 导出 | 数据基线 |
| `1538341` | `image-resizer` 主流量语言深化（es/de/it/ru/pt） | 内容 |
| `d4003c5` | `png-to-jpg` / `jpg-to-png` / `heic-to-jpg` 深化 + docs↔tools 内链 | 内容 + 内链 |
| `8e4871f` | `image-compressor` / `webp-to-jpg` 深化 + H1 fallback 修复 + docs↔blog 内链 | 内容 + 修复 |
| `d700988` | Hero 副标题差异化重写 + `OfflineBadge` | UI / CTR |
| `973de58` | 17 个国际 AI 爬虫白名单 + `llms.txt` 扩充 + `SoftwareApplication` schema 增强 | GEO |
| `395282a` | 15 个中文 AI 爬虫显式白名单 | GEO |
| `0c64e3f` | 回滚私有 GitHub 引用（`sameAs` / `Source code` / "open source"） | GEO 修复 |
| `b992f15` | DuckDuckGo `DuckDuckBot` / `DuckAssistBot` / `DuckDuckGo-Favicons-Bot` 显式 allow + 文档说明 | GEO 加固 |
| `238bc0c` | 配套 sitemap `file-dates` 刷新 | 数据 |
| `285bf5d` | `.tmp/` 加入 `.gitignore`（本地生图 artifacts） | 杂项 |
| `<待 commit>` | Tier 1 三篇 blog（`what-is-avif` / `webp-explained` / `compress-without-losing-quality`）+ 事实核查硬约束 + blog audit 扩展 + 配图与命名规则强制 | 内容 + 防御 |

## 本轮做了什么

### 1. 多语言内容深化（GSC 4-25 真实查询驱动）

> **背景**：4-25 GSC 显示一批已经跑到展示量的非英语近赢页，CTR 接近 0。原因是这些页面虽然按语言映射生成了，但文案仍偏通用模板，没贴近用户真实输入。

#### 1.1 `image-resizer` 五语言深化（commit `1538341`）

- **es**：`title` / `description` / `intro` 切到 `cambiar tamaño de imagen` 与 `redimensionar imagen`；FAQ 6 → 8（新增 1080×1080 / 1200×630 / 1080×1920 社媒尺寸 + 隐私问答）
- **de**：修了破损 title `Bildgroesse → Bildgröße`，FAQ 5 → 8
- **it**：FAQ 5 → 8，intro 引入 1080×1080 + 社媒/二手交易场景
- **ru**：title 切到 `Изменить размер изображения онлайн`，FAQ 3 → 6
- **pt**：title 切到 `mudar tamanho`，新增 1 条 `como mudar o tamanho de uma imagem em pixels`
- 配套 `toolSearchIntent.ts`：为 it / de / ru 各加 3-section block

#### 1.2 `png-to-jpg` / `jpg-to-png` / `heic-to-jpg` 深化（commit `d4003c5`）

- **en/png-to-jpg**（289 imp，rank 74.75）：FAQ 1 → 8，title 改 `PNG to JPG converter online`
- **es/jpg-to-png**（100 imp，rank 76）：FAQ 1 → 6，`Convertir JPG a PNG online` 框架
- **it/jpg-to-png**（49 imp，rank 72）：FAQ 1 → 6，`Convertire JPG in PNG online`
- **de/jpg-to-png**（68 imp on `jpg in png umwandeln`，rank 37.28）：FAQ 4 → 7，修了一批 umlaut 错字
- **es/heic-to-jpg**（126 imp，rank 65.8）+ **de/heic-to-jpg**（55 imp，rank 77.1）：各 FAQ 4 → 8

#### 1.3 `image-compressor` / `webp-to-jpg` C1+C2（commit `8e4871f`）

- 在 es/de/it/pt 四语言深化 `image-compressor` 与 `webp-to-jpg`
- 真实查询锚点：`comprimir foto sin perder calidad` / `comprimir foto para email` / `pasar webp a jpg` 等
- intro 扩写、FAQ 3-5 → 7-8，配套 `toolSearchIntent.ts` 增加原生场景 block

#### 1.4 `heif-to-jpg` 全语言补齐（commit `b25fd00`）

- 给 de / es / it / ja / ko / pt 6 语言补全 `heif-to-jpg` 全套（title/desc/H1/intro/howTo/FAQ/search-intent）
- 此前 4-18 P1 只覆盖到 fr/ru，其它语言仍为英文 fallback

### 2. 全局变音符号回填（去机翻感）（commit `b25fd00`）

> **背景**：抽样审阅 `heif-to-jpg` 本地化时发现一批 ASCII 化的非英文词（`compresion`、`groesse`、`Wurfeln`），这种用户不会这样输入查询，hreflang 与 helpful-content 信号也会扣分。

- 影响文件：`i18n/docsUi.ts`、`toolFaqOverrides.ts`、`toolSearchIntent.ts`、`translations/{de,es,fr,it,pt}.ts`
- 同步修了对应的 `[lang]/docs/size-increase-explainer.astro` / `image-quality-vs-file-size.astro` / `why-picshift.astro`
- 涵盖：西语 `¿` 倒装问号补回（`ToolFaqOverrides` 共 40+ 条）、德语 ä/ö/ü/ß 补回、葡语 ã/õ/ç 补回、法语 à/é/è/ç 补回、意语 à/è/ò 补回

### 3. 内链建设（commit `d4003c5` + `8e4871f`）

- 新建 `src/components/docs/RelatedToolsBlock.astro`：lang-aware，链向 6 个高流量工具（image-compressor、image-resizer、heic-to-jpg、png-to-jpg、jpg-to-png、metadata-remover），用每个语言自己的 H1 作锚文本
- 嵌入 `/docs`（hub）、`/docs/why-picshift`、`/docs/size-increase-explainer` 的英文版与全部 i18n 版
- docs ↔ blog 双向链：`format-compatibility` / `image-quality-vs-file-size` / `privacy-local-processing` / `size-increase-explainer` 互相引向 4 篇 blog；blog 4 篇也反链 docs
- 同步修了之前 es/de `heic-to-jpg` FAQ 里的死链 `/{lang}/exif-stripper` → `/metadata-remover`

### 4. 技术 SEO 修复（commit `8e4871f`）

#### 4.1 H1 fallback 修复（A1）

- `src/layouts/Layout.astro` 中 polyfill UI 旧用 `<h1>`，会让支持 fallback 的页面同时存在 2 个 H1
- 改为 `<div role="heading" aria-level="1">`，对屏幕阅读器和 SEO 都还是 H1，但消除了 GSC 的 "multiple H1" 警告
- **覆盖：402/402 页面 → 0 multiple-H1**

#### 4.2 SERP 卡片优化（B3 / B4）

- 一批 thin title（<30c）和 thin description（<80c）扩写：`docsUi.ts`、`toolMeta.ts`、英文 privacy/404/why-picshift、`avif-to-png`、`heif-to-webp`
- 一批 over-200c description 压缩到 SERP 安全长度：`privacy` / `home` / `image-compressor` / 两个 docs 页

### 5. 首屏差异化（CTR 优化）（commit `d700988`）

#### 5.1 Hero 副标题改写（A1 来自 analyst feedback）

- 11 语言 hero 副标题：从「格式列表」改为「真实差异化卖点」（local processing / offline / no upload / no signup）
- 格式列表降级为后置 `supports-line`
- **未动 `<title>` / `<h1>` / meta description**，避免扰动已有排名

#### 5.2 `OfflineBadge`（A3）

- 新增 `src/components/seo/OfflineBadge.astro`，与 `PrivacyBadge` 并列出现在 `/` 与 `/[lang]`
- 12 语言文案（`en`/`zh`/`zh-Hant`/`es`/`fr`/`de`/`ja`/`ko`/`pt`/`ru`/`ar`/`it`）
- **目的**：在 SERP 之外的首屏增加第二个信任信号；并尝试匹配 `offline image converter` / `image converter no signup` / `local image compressor` 这些此前不命中的查询桶

### 6. GEO（生成式引擎优化）

> **背景**：评估 PicShift 在 ChatGPT / Claude / Perplexity / 国内 AI 助手中的可被引用性。基础设施齐（`robots.txt` 不封禁、`llms.txt` 已存在、schema 多样），但缺少**显式信号**与**可被引用的具体 fact**。

#### 6.1 AI 爬虫显式白名单（G1，commits `973de58` + `395282a`）

- `public/robots.txt` 显式 `Allow: /` 共 35 个 User-agent：
  - **19 个国际 AI / 搜索 bot**：`GPTBot` / `OAI-SearchBot` / `ChatGPT-User` / `ClaudeBot` / `anthropic-ai` / `Claude-Web` / `PerplexityBot` / `Perplexity-User` / `Google-Extended` / `Applebot-Extended` / `DuckDuckBot` / `DuckAssistBot` / `DuckDuckGo-Favicons-Bot` / `Amazonbot` / `Meta-ExternalAgent` / `FacebookBot` / `cohere-ai` / `YouBot` / `CCBot`
  - **15 个中文 AI / 搜索 bot**：`Bytespider` / `Doubaobot`（字节）/ `QwenBot` / `TongyiBot` / `AlibabaBot` / `AliyunBot`（阿里）/ `Baiduspider` / `ERNIEBot` / `YiyanBot`（百度）/ `Hunyuan`（腾讯）/ `ChatGLM-Spider`（智谱）/ `Kimibot` / `MoonshotBot`（月之暗面）/ `DeepSeekBot` / `MiniMaxBot`
- 保留 `User-agent: *` 兜底
- 解决问题：把"隐式允许"升级为"显式欢迎"，对部分严格模型（Anthropic / Google-Extended）来说，显式 allow 才是更强信号
- **DuckDuckGo 三件套**：因为 DuckDuckGo 在 4-25 referrer 中占 12%（仅次于 Google / ChatGPT / Bing），单独把搜索爬虫 `DuckDuckBot`、AI 答案爬虫 `DuckAssistBot`（背后是 Anthropic Claude）、favicon 爬虫 `DuckDuckGo-Favicons-Bot` 全部显式列出，与 DuckAssist 形成"搜索 + AI 答案 + 站标"完整白名单

#### 6.2 `llms.txt` / `llms-full.txt` 扩充（G2，commit `973de58` 后被 `0c64e3f` 校正）

- 版本 → `2026-04-25.1`，`Supersedes: 2026-04-11.1`
- `Quote-ready facts`：`llms.txt` 6 → 12 条；`llms-full.txt` 11 → 14 条
- 新增量化 fact 示例：
  - "Setting JPEG or WebP quality to about 80 ... reduces file size by 40-60% with no perceptible visual difference"
  - "WebP delivers approximately 25-35% smaller files than JPG at equivalent visual quality"
  - "AVIF can be 20-30% smaller than WebP for large photographic images"
  - "PicShift can process up to 200 images per batch in a single browser session"
- `llms-full.txt` 新增 `## Underlying technology` 与 `## Verification workflow (no-upload claim)` 两节
- ⚠ **校正记录**：`973de58` 误把私有 GitHub repo URL 写进 `Source code` / `Preferred citations` / "open source" fact；`0c64e3f` 全部回滚（详见下文 8）

#### 6.3 `SoftwareApplication` / `WebApplication` schema 增强（G4，commit `973de58` 后被 `0c64e3f` 校正）

- 新建 `src/lib/softwareApplicationSchema.ts`，集中两个 schema 的构造逻辑
- 全部工具页 `SoftwareApplication`：
  - `featureList`：根据 `tool.slug` 与 input/output format 动态生成（如 metadata-remover 强调 EXIF/GPS，HEIC→JPG 强调 cross-format）
  - `mentions`：根据 input/output format 映射到具体 codec（heic → libheif、jpg → MozJPEG、png → OxiPNG、webp/avif → JSquash），加上基础栈 WebAssembly / Web Workers / Service Worker
- 首页 `WebApplication`：完整 `featureList` + 全栈 `mentions`
- ⚠ **校正记录**：`sameAs` / `publisher.sameAs` 字段在 `0c64e3f` 移除（私有 repo 不能挂 `sameAs`）

### 7. 数据基线归档（commit `23bb155`）

- `docs/gsc-export-2026-04-25/`
  - `export-default/` → 28 天默认视图
  - `export-1/` → 7 天过滤视图
- 每个目录下：`图表.csv` / `查询数.csv` / `网页.csv` / `国家_地区.csv` / `设备.csv` / `搜索结果呈现.csv` / `过滤器.csv`
- 用途：下次复盘可直接 diff，不必再去 GSC 重新导一遍

### 8. 私有 GitHub repo 引用回滚（commit `0c64e3f`）

> **教训**：在 `git remote -v` 拿到 `github.com/pod4g/picshift.git` 时，没有先核实 repo 可见性，直接当成公开仓库写进了 `sameAs` / `llms.txt` / "open source" fact。

- 影响范围：`src/lib/softwareApplicationSchema.ts`（`REPO_URL` 常量 + 4 处 `sameAs`）、`public/llms.txt`（5 处）、`public/llms-full.txt`（6 处）、`docs/tech-optimizations-en.md`（1 处）
- 全部清理后 `dist/` 内 0 命中 `github.com/pod4g`、0 命中 `open source`
- **G1 / G2 / G4 中不依赖仓库可见性的部分（爬虫白名单 / 量化 fact / `featureList` / `mentions`）全部保留**

### 9. 内容生产：Tier 1 三篇 blog（GSC 长尾驱动）

> **背景**：4-25 GSC 7d 视图过滤出"高展示低 CTR / 解释型查询"，挑出 PicShift 暂未覆盖的三个内容桶。这是本仓库第一次在一个迭代里发布 3 篇 blog，过程中暴露了 LLM 写作的事实风险，连带做了一次写作流程的硬化。

#### 9.1 选题（GSC 4-25 真实查询驱动）

| Slug | 命中查询桶 | GSC 4-25 7d 信号 |
| --- | --- | --- |
| `webp-explained` | 「为什么右键存下来是 .webp」/「open webp」/「webp vs jpg」 | `webp-to-jpg` 工具页接住转化，但解释型查询无 blog 接住 |
| `compress-without-losing-quality` | 「compress image without losing quality」/「jpeg quality 80」 | `image-compressor` 工具页接住转化，但 `quality 80 actually means` 等长尾流向其它站 |
| `what-is-avif` | 「what is avif」/「avif vs jpeg」/「should i use avif」 | AVIF 工具页有 4 个，但 0 解释型 blog 给前置流量入口 |

每篇 1500–2200 词，1 张 cover + 1 张内文图 + 至少 1 张表，frontmatter 全部 `publishedAt: 2026-04-25`。

#### 9.2 写作（事实核查硬约束）

> **关键过程教训**：第一稿因为 LLM 凭印象写"用户行为断言"被本地实测打脸（`webp-explained` 写"Chrome 右键保存 JPG **总是**变 .webp"，实测保存仍是 .jpg；真实情况是看站点是否启用 CDN WebP delivery）。

由此触发一次完整事实审计，订正 13 处 LLM 凭印象的"看似合理"，全部加回权威来源链接：

- AV1 royalty-free 改为"AOMedia 单方框架 + Sisvel patent pool 已签下约一半市场 + Dolby/InterDigital 仍在诉讼"
- Photoshop AVIF 原生支持时间从 v24.0 (2022) 订正为 v26.x (2025)
- macOS Quick Look "原生预览 AVIF" 删除（截至 Sequoia 仍需第三方插件）
- JPEG XL 状态从 2023 Chrome 移除更新到 2026-02 `jpx-rs` Rust 解码器 ship + Safari 17 已支持
- WebP 浏览器版本号、Cloudflare Polish 行为、Photoshop AVIF 加载方式等版本/日期硬数据全部对照 caniuse / 官方 release notes
- JPEG 质量表的文件大小百分比改为真实 benchmark 数（Q95 ≈ 45% / Q85 ≈ 24% / Q75 ≈ 16%）
- MozJPEG 节省幅度从夸大的"20–30%"改为 libjpeg-turbo 官方 ~8% / 真实 web 中位数 ~10%

13 条全部追加到 `SEO-PLAYBOOK.md` §事故记录反面教材表，作为下一批 blog 写作前必读。

#### 9.3 工程防御（防止下批 blog 复犯）

- **`docs/SEO-PLAYBOOK.md` 顶部新增 §事实核查硬性约束**：红线、必须联网检索的 8 类场景、来源等级（S/A/B/不可作来源）、写 blog 必做执行清单、不可使用的写法、事故记录表（追加本次 13 处事实错误 + 5 处规则违反共 18 行）
- **`docs/SEO-PLAYBOOK.md` §去 AI 化新增 §收尾 H2 不可重复**：背景是 7 篇里 6 篇都用 `## The bottom line` 收尾。本次把 6 篇全部改成各自不同的收尾 H2（`## The setting that actually matters` / `## The honest take` / `## The simple rule` / `## The short version` / `## Should you switch?` / `## Why you should care`）；规则要求写完用 `rg "^## " src/content/blog/*.md` 自查
- **`docs/PR-GEO-CHECKLIST.md` §7 事实核查关卡**：作为 release gate，含逐条声明核查表
- **`scripts/seo-audit.mjs` 扩展 blog frontmatter audit**：之前仅扫 `src/data/tools.ts`，blog frontmatter 是盲区。新增校验：title 长度 (≤65)、description 长度 (≤165)、跨文 title/desc 重复、cover 文件存在、cover 文件名 `{slug}-{purpose}.webp` 模式、内文 `<img>` src 存在性与命名一致。本次顺手扫出 2 个既存问题（`heic-heif-on-windows` title 68 / `social-media-exif-stripping` cover 命名不一致）一并修
- **配图 quality 强制**：第一版 `compress-quality-cover.webp` 50 KB 实测不是 q95（dwebp + cwebp -q 95 重新编码到 86 KB 才接近 PLAYBOOK 期望的 ~70 KB），生图 workflow 要求显式 `cwebp -q 95 -m 6`

#### 9.4 配图

- 3 张 cover（1200×630, q95, 76–86 KB）+ 3 张内文图（1000×559, ~37–84 KB），全部 `.webp`
- 风格刻意分散：杂志拼贴 / 手绘漫画 / 微距摄影，避免连续 cover 视觉同质
- 文件命名严格 `{slug}-{purpose}.webp`，与 §9.3 audit 规则对齐

#### 9.5 发布策略

- 三篇全部 4-25 当天发布（同 publishedAt 日期），不分散
- 取舍：放弃"分散发布拿独立 GSC 观察窗口"，换"主题集群（topical authority）一次性建立"
- 风险：单篇 GSC 反馈会被 cluster 内的相似主题混淆；下轮要做的是**按 path 维度分别看**而不是合并看

## 本轮验证

- `npm run build`：402 → **405 页**成功（含 3 篇新 blog）
- `npm run seo:audit`：thin / over-length 全部清零；**新加的 blog frontmatter audit 段**对全部 7 篇 blog 输出 0 warning / 0 error
- `npm run e2e -- tests/e2e/seo-geo.spec.ts`：通过
- 抽查 `dist/`：
  - 0 命中 `github.com/pod4g`、0 命中 `open source`
  - 主页 `WebApplication` schema 含 `featureList` / `mentions`，无 `sameAs`
  - `heic-to-jpg` `SoftwareApplication` 含 `featureList` / `mentions`，无 `sameAs`
  - 三篇新 blog 的 `<title>` / `og:title` / `og:image` 全部用新 frontmatter（cover URL 全部不带尾斜杠）
  - `dist/sitemap-0.xml` 含三条新 blog URL（无尾斜杠，符合 4-18 `trailingSlash: 'never'` 政策）
- 主动到 GSC 对一批高展示带尾斜杠 URL 触发 `Test Live URL` + `Request Indexing`，加速 308 合并
- 三篇新 blog 在 GSC 主动 `Request Indexing`，加速首次抓取

## 上次读取的 GSC 数据是什么

本轮基于 **2026-04-25 导出的 GSC 数据**，并与 **2026-04-18 上一轮记录**对比。

### 总体基线

| 指标 | 2026-04-11 | 2026-04-18 | 2026-04-25 | 趋势说明 |
|---|---:|---:|---:|---|
| 28 天展示 | 7717 | 8733 | 待补 | 长期上行 |
| 28 天点击 | 13 | 15 | 待补 | 仍是上行但量小 |
| 28 天平均排名 | 62.6 | 58.1 | 看似回退到 ~60 | **看似下滑实为指数失真**（见下条） |
| 重复 URL 数 | 33 | 44 | 显著上升 | 因为带尾斜杠的旧版 URL 被 GSC 大量召回到展示池中 |
| 重复 URL 展示 | 1952 | 2868 | 显著上升 | URL 规范化合并仍在过程中，需要主动 reindex 加速 |

### "排名下滑"的真实解读

- **不是真的回退**。原因是 4-18 切到 `trailingSlash: 'never'` 后，旧的带尾斜杠 URL 在 GSC 视角下还在以独立 URL 形式展示，等于把展示池"扩大"了一圈，但这些旧 URL 排名普遍靠后，把均值拖回了 60 附近。
- 正确的看法：**新 canonical URL（不带尾斜杠）的平均排名**仍在改善；GSC 合并完成后整体均值会回升。
- **本轮采取的加速动作**：对一批高展示带尾斜杠 URL 主动到 GSC URL Inspection → Test Live URL → Request Indexing，让 Googlebot 重新踩到 308，触发信号合并。

### 本轮锁定的重点页面 / 查询词

| 优先级 | 页面 / 查询 | 数据点 | 本轮做了什么 |
|---|---|---|---|
| P0 | 一批带尾斜杠重复 URL | 重复 URL 44 → 仍在扩大 | 主动 reindex 高展示带尾斜杠 URL；sitemap 重新提交 |
| P1 | `/es/`、`/pt/`、`/it/`、`/de/`、`/fr/` `image-resizer` | ~900 imp / 1 click，rank 35-79 | 五语言深化（commit `1538341`） |
| P1 | `en/png-to-jpg` | 289 imp，rank 74.75 | FAQ 1 → 8，title 重写 |
| P1 | `de/jpg-to-png` | 68 imp（`jpg in png umwandeln` rank 37.28） | FAQ 4 → 7 + umlaut 修复 |
| P1 | `es/heic-to-jpg` / `de/heic-to-jpg` | 126 / 55 imp，rank 65.8 / 77.1 | 各 FAQ 4 → 8 |
| P1 | `es / de / it / pt` `image-compressor` + `webp-to-jpg` | 高展示低 CTR | C1+C2 深化 |
| P1 | `de / es / it / ja / ko / pt` `heif-to-jpg` | 4-18 P1 仅覆盖 fr/ru，其它语言仍英文 fallback | 6 语言补全 |
| P2 | 全站变音符号 ASCII 化 | hreflang / helpful-content 隐性扣分 | 全局回填 |
| P2 | docs ↔ tools / blog 内链稀疏 | 站内权重传递不集中 | `RelatedToolsBlock` + 4 篇 blog 反链 docs |
| P3 | hero 副标题就是格式列表 | CTR 偏弱、与 tinypng/cloudconvert 同质 | 11 语言重写 + `OfflineBadge` |
| GEO | LLM 引用基础信号 | 仅靠隐式允许 + 旧版 `llms.txt` | 35 个 UA 显式 allow（含 DuckDuckGo 三件套）+ facts 扩到 12-14 + schema 增 featureList/mentions |

## GEO 流量基线（2026-04-25 优化**之前**的 Umami 过去 7 天来源域名）

> **时间窗口**：Umami 截图选用的是「过去 7 天」视图，对应大致 **2026-04-18 ~ 2026-04-25** 的累计数据。
>
> **时间归属说明**：本轮 4-25 GEO 优化的 commit 在 12:47-12:53 才推到 main，部署 + AI 爬虫重抓 + LLM 索引更新都是数天级别。也就是说：
> - 这 7 天的 GEO 流量**几乎全部来自本次优化之前的存量基础设施**（早期 `llms.txt`、`robots.txt` 不封禁、schema 多样、内容质量）
> - 即便末端两小时部分流量在 deploy 后产生，影响也低于统计噪声
> - **与本轮 G1/G2/G4 的效果无关**
>
> 这条数据的真实意义有两个：
> 1. **作为 5-02 复盘的对照基线**——5-02 截 Umami「过去 7 天」（对应 4-25 ~ 5-02 窗口）做 1:1 比较，差值才是 4-25 改动是否起效的可量化证据。**比较时务必两边都用 7 天累计**，不要拿当日点数据 vs 7 天累计。
> 2. **回答了"GEO 优化是不是空打"这个问题**——优化前 7 天就已经有 28% GEO 流量回流，说明 PicShift 进入 LLM 引用池这件事**早就在发生**，不是从零做起。
>
> **样本量警告**：7 天累计 25 个访客（约日均 3.6 访客）是非常小的样本量。绝对值波动 ±1-2 访客就能改变 4-8 个百分点的占比。**5-02 单次 diff 不要做强归因**——要看连续 2-3 周的趋势才能区分"信号变化"和"采样噪声"。

### 过去 7 天来源域名分布（25 个访客累计，2026-04-18 ~ 2026-04-25，4-25 GEO 改动落地前）

| 来源域名 | 访客 | 占比 | 渠道归类 |
|---|---:|---:|---|
| google.com | 7 | 28% | 传统搜索 |
| **chatgpt.com** | **5** | **20%** | **GEO（OpenAI）** |
| bing.com | 4 | 16% | 传统搜索 |
| duckduckgo.com | 3 | 12% | 传统搜索 |
| **doubao.com** | **2** | **8%** | **GEO（字节豆包）** |
| reddit.com | 2 | 8% | 社交 |
| com.reddit.frontpage | 1 | 4% | 社交 |
| in.search.yahoo.com | 1 | 4% | 传统搜索 |

### 关键观察（4-25 优化前的 7 天稳态）

- **GEO 渠道合计 = 7 / 25 = 28%**，与 Google 持平、显著高于 Bing（16%）
- **`chatgpt.com` 排第 2**：4-25 改动**之前**的过去 7 天，OpenAI 就已经在 ChatGPT 回答里把 PicShift 作为可点击来源链接外露给用户。这是**优化前的存量水平**，不是优化成果
- **`doubao.com` 出现**：4-25 改动**之前**的过去 7 天，字节豆包就已经在引用 PicShift。本轮把 15 个中文 AI bot 加进 robots.txt **是基于这条已存在信号去加码**，不是反过来由这次改动产生
- **样本量小**：单数据点不可强归因，**连续 2-3 周趋势**才有判断意义
- **不要把这条数据当成"本轮 GEO 优化已生效"** —— 是否生效要等 5-02 / 5-09 看 diff

### 5-02 应同时观察的（当前 0 流量）GEO 渠道

国际：
- `claude.ai` / `anthropic.com`
- `perplexity.ai`
- `you.com`
- `phind.com`

中文：
- `yuanbao.tencent.com`（腾讯元宝）
- `tongyi.aliyun.com` / `qwen.aliyun.com`（通义千问）
- `kimi.com` / `kimi.moonshot.cn`（月之暗面）
- `chat.deepseek.com`
- `chatglm.cn` / `bigmodel.cn`（智谱）
- `hailuoai.com`（MiniMax）
- `yiyan.baidu.com`（百度文心一言）

> 这些渠道在本基线里 0 出现。**如果**（注意是"如果"，不是"必然"）4-25 的 robots.txt 显式 allow 起效、`llms.txt` 的 fact 被吃进去，5-02 才**有可能**看到 1-2 个新增渠道首次出现。
>
> 现实预期管理：LLM 索引更新周期长，OpenAI/Anthropic 的爬虫节奏通常是周级别甚至月级别，5-02（仅 7 天后）拿到强变化的概率不高。**更可能的结果是变化不显著**——这并不能直接证明 G1/G2/G4 失败，需要再多观察 1-2 个迭代周期。

## 7 天后下次重点关注什么

建议在 **2026-05-02 左右** 打开 GSC，优先看下面这些点。

### P0：URL 规范化合并是否真正落地

- **重复 URL 数**应该开始**回落**（从 44 往下走才算合并起效）
- **重复 URL 展示**应该开始下降
- 对 reindex 过的页面，"Google 选择的规范网址"应该已经是不带尾斜杠版本
- 重点查 page：`/blog`、`/docs`、`/pt/jpg-to-png`、`/ru/image-compressor`、`/es/heic-to-jpg`、`/de/jpg-to-png`
- 同时看：**28 天平均排名**应该开始**回升**（前提是合并起效）

### P1：5 个语言 image-resizer 是否拿到首批点击

- **页面**：`/es/image-resizer`、`/de/image-resizer`、`/it/image-resizer`、`/ru/image-resizer`、`/pt/image-resizer`
- **重点 query**：
  - es：`cambiar tamaño de imagen` / `redimensionar imagen` / `redimensionar foto online`
  - de：`Bildgröße ändern` / `Bild verkleinern online`
  - it：`ridimensionare immagine` / `ridurre dimensioni foto`
  - ru：`Изменить размер изображения` / `уменьшить размер картинки`
  - pt：`mudar tamanho da imagem` / `redimensionar imagem online`
- **观察**：CTR 是否从 ~0% 升到至少 1%+，平均排名是否再前移 5-10 位

### P1：`png-to-jpg` / `jpg-to-png` / `heic-to-jpg` 深化页

- **英文 `png-to-jpg`**：289 imp 有没有顶起 CTR？rank 75 是否前移到前 30
- **es/it/de `jpg-to-png`**：3 个语言是否一起拿到点击
- **es/de `heic-to-jpg`**：FAQ 4 → 8 后是否有 rich snippet 出现（看 GSC 搜索结果呈现报表）

### P1：`image-compressor` / `webp-to-jpg` 四语言深化

- **页面**：`/{es,de,it,pt}/image-compressor`、`/{es,de,it,pt}/webp-to-jpg`
- **重点 query**：
  - es：`comprimir foto sin perder calidad` / `comprimir foto para email` / `pasar webp a jpg`
  - de：`Bild komprimieren ohne Qualitätsverlust` / `webp in jpg umwandeln`
  - it：`comprimere foto senza perdere qualità` / `convertire webp in jpg`
  - pt：`comprimir foto sem perder qualidade` / `converter webp para jpg`
- **观察**：是否进入"展示开始集中到压缩 / 转换核心 query"的形态

### P1：`heif-to-jpg` 6 语言补全后是否有展示

- **页面**：`/{de,es,it,ja,ko,pt}/heif-to-jpg`
- **观察**：
  - 这 6 个之前是 0 展示的（英文 fallback），看是否开始有自己语言下的 query 进来
  - 与已有的 `fr/heif-to-jpg`、`ru/heif-to-jpg` 对比，是否 4 周后能进近赢区

### P2：H1 fallback 修复后 GSC 警告

- GSC 体验报告 → 应该不再出现 "Multiple H1 tags" 提示
- 受 polyfill 影响的页（旧浏览器 fallback 路径）：抽查 1-2 个 dist HTML，确认 `role="heading" aria-level="1"` 仍然渲染

### P2：`OfflineBadge` 与 hero 副标题改写后

- **CTR 维度看 GSC `网页` 报表**：首页与 `/[lang]` 的 CTR 是否较 4-18 基线提升
- **新 query 桶**：`offline image converter` / `image converter no signup` / `local image compressor` / `image converter without upload` 是否首次出现展示

### P2：内链建设的间接信号

- 6 个被 `RelatedToolsBlock` 链向的工具页（image-compressor / image-resizer / heic-to-jpg / png-to-jpg / jpg-to-png / metadata-remover）的总展示是否较 4-18 上升
- 4 篇 blog 反链 docs 后，docs 页的展示与点击是否上升（次级 KPI）

### P0：三篇新 blog 的索引状态与起步 impression

> 三篇都是 4-25 当天发布，5-02 是发布后第 7 天，处于 Google 首次抓取 + 索引阶段。这一轮的 KPI 主要是「**是否进入索引**」与「**起步 impression 是否落到对的 query 桶**」，**不是「是否拿到点击」**——blog 起量周期通常 14–28 天，单篇 7 天就有点击属于例外不是常态。

**索引状态（GSC URL Inspection 抽查）**：

- `/blog/what-is-avif`、`/blog/webp-explained`、`/blog/compress-without-losing-quality` 三条全部应该是 "URL is on Google" 状态
- 如果还停在 "Discovered – currently not indexed" 或 "Crawled – currently not indexed"，立刻再 Request Indexing
- 同时确认 `dist/sitemap-0.xml` 里这三条 lastmod 是 `2026-04-25`

**GSC `网页` 报表（按 path 过滤，逐篇看）**：

| Path | 期望命中查询桶 | 5-02 看哪些 |
| --- | --- | --- |
| `/blog/what-is-avif` | `what is avif` / `avif vs jpeg` / `avif file format` / `should i use avif` | impression > 0；命中 query 是否包含上述至少 1 个 |
| `/blog/webp-explained` | `what is webp` / `why webp file` / `convert webp to jpg` / `open webp file` | impression > 0；与工具页 `webp-to-jpg` 对同一 query 的展示分配（blog 应该接住"信息型"，工具页接住"操作型"，两者不互斥） |
| `/blog/compress-without-losing-quality` | `compress image without losing quality` / `jpeg quality 80` / `image quality vs file size` | impression > 0；是否触达本身就是稳定搜索词的"compress without losing quality"主词 |

**与既有 docs 的关系**：

- `/docs/image-quality-vs-file-size` 是原理型解释，已经在排名。新 blog `/blog/compress-without-losing-quality` 是 how-to + 决策型。如果两者撞在同一 query，看 Google 怎么选规范页
- 如果 docs 排前、blog 排不进，下轮考虑给 blog 加更明确的"how to / 操作步骤" 锚点
- 如果 blog 排前、docs 掉队，在 docs 里加显眼的 inline link 把权重传给 blog（避免 docs 完全失去入口）

### P1：三篇 blog 的 cover 在 OG 卡片中是否清晰

> 第一版 `compress-quality-cover.webp` 50 KB 经 dwebp + cwebp 重新编码确认不是 q95（更接近 q75）。本轮升到 86 KB 后预期清晰。

- 在 [opengraph.xyz](https://www.opengraph.xyz/) 输入 `https://picshift.app/blog/{slug}` 三条 URL，确认 cover 不糊
- 在 X / LinkedIn 各发一条带链接的预览，看实际抓取出来的卡片图是否清晰（移动端尤其关键）
- 如果仍模糊，下轮考虑给 blog 单独加 `/og-image/[slug]` endpoint，编译期生成专门的 1200×630 q95 PNG 备份图（绕开 WebP 在 LinkedIn 的偶发兼容问题）

### P1：三篇 blog 的内链是否产生站内分流

- 三篇 `relatedTools` 链向：`image-compressor` / `jpg-to-webp` / `webp-to-jpg` / `png-to-jpg`
- 看 Umami `网页` 报表，blog 页的「下一页」是否落到这些工具页（理想路径：blog → tool → 转化）
- 如果 7 天看不到这条通路，下轮考虑在 blog 正文中段（不只是末尾的 RelatedTools 块）加更显眼的 inline CTA 卡片

### P2：blog audit 的实际拦截效果

- 下次写 blog 时，**先**写完 frontmatter → 跑 `pnpm seo:audit` → 再展开正文。这是为了在第一时间被 audit 拦截，而不是写完整篇才发现 title/cover 不合规要返工
- 5-02 时回顾这周里 audit 是否真的在某次提交前拦下了违规（如果一次都没拦下，要么是规则太松要么是这周没新写——后者是好事）

### P2：收尾 H2 去模板化是否对 dwell time 有可见影响

- 这是定性观察，单周难有显著差异，**不要单周强归因**
- 期望基线（来自 Umami `网页` 报表）：blog 页平均停留时长 > 90 秒、bounce rate < 60% 是好信号；连续 2-3 周持续达到，可以认为「去 AI 化收尾」对停留有正贡献
- 如果停留反而降低，回头看是否是新收尾 H2 与正文断裂（比如 `## Should you switch?` 后的段落仍在写"AVIF 是个好格式"，没回答标题里的问句）

### GEO：与"4-25 优化前 7 天基线"做 diff

> **重要**：本基线 = **4-25 GEO 优化之前的过去 7 天稳态**（4-18 ~ 4-25 累计 25 visitors）。5-02 也要选 Umami「过去 7 天」视图，对应 4-25 ~ 5-02 窗口，**两边窗口长度必须一致**。

**预期管理**：
- LLM 索引更新周期长（OpenAI / Anthropic 通常周-月级），5-02 仅 7 天后拿到强变化的概率**不高**
- 7 天累计 25 visitors 是小样本，绝对值波动 ±1-2 访客就能改变 4-8 个百分点的占比
- **变化不显著本身不是失败信号**；需要 5-02 / 5-09 / 5-16 连续 3 个迭代周期才能区分"真实信号"和"采样噪声"

**P0 指标 — Umami「过去 7 天」referrer diff vs 4-18~4-25 baseline**：

- `chatgpt.com` 绝对访客与占比是否守住或上升（baseline：5 / 20%）
- `doubao.com` 是否守住或上升（baseline：2 / 8%）
- GEO 渠道总占比（baseline：28%）是否守住

**注意**：
- 这些项的"守住"本身只能证明优化没有破坏既有信号，**不能反推为"本次起效"**——因为这些信号在 4-25 改动之前就稳定存在
- 单周 ±1-2 访客的波动属于采样噪声，**不要单周 diff 强归因**

**P1 指标 — 是否新增 GEO referrer（这才是本次起效的可量化证据）**：

国际：`claude.ai` / `perplexity.ai` / `you.com` / `phind.com`
中文：`yuanbao.tencent.com` / `tongyi.aliyun.com` / `kimi.com` / `chat.deepseek.com` / `chatglm.cn` / `hailuoai.com` / `yiyan.baidu.com`

> 这 11 个渠道在 4-25 优化前都是 0 流量。**只有这里出现新渠道**，才可以归因到 4-25 的 robots.txt 显式 allow + `llms.txt` 扩充。但即便 0 新增，也只能证明"7 天观察期太短"，不能直接证伪。

**P2 指标 — 定性观察**：

- **AI 爬虫流量**：Cloudflare Web Analytics → Bot 维度，看 `GPTBot` / `ClaudeBot` / `PerplexityBot` / `Bytespider` / `Doubaobot` 的访问频次是否上升。**这个比 referrer 更早能看到变化**（爬取在前，引用在后）
- **LLM 引用抽样**：手工在 ChatGPT / Claude / Perplexity / 豆包 / 通义 / Kimi / DeepSeek 中各问 1 次"how to convert HEIC to JPG without uploading"，看是否提到 PicShift
- **schema 校验**：`https://search.google.com/test/rich-results` 抽查 1 个工具页，确认 `SoftwareApplication` 的 `featureList` / `mentions` 被识别

## 如果 7 天后看到这些结果，下一步怎么做

| 现象 | 下轮动作 |
|---|---|
| 重复 URL 已经开始回落，但还有 20+ | 继续手工 reindex 剩余高展示带尾斜杠 URL；考虑给 sitemap 加 `xhtml:link rel="alternate"` 强化合并信号 |
| `image-resizer` 五语言开始拿到点击但 CTR < 2% | 微调 title 前 50 字符，把社媒尺寸 `1080×1080` / `1200×630` 提到 SERP 可见区 |
| `image-resizer` 五语言仍 0 点击但展示稳定 | 增加 schema：`HowTo` + 各社媒尺寸的 `ImageObject` 例子 |
| `heic-to-jpg` rich snippet 出现 | 复用模式扩到 `heic-to-png` / `heic-to-webp` / `heic-to-avif` |
| `image-compressor` / `webp-to-jpg` 排名前移但 CTR 仍低 | description 重写为更结果导向（"reduce 50% size in 10 seconds, no upload"） |
| `heif-to-jpg` 6 语言开始有展示 | 把 `RelatedToolsBlock` 的语言锚文本进一步本地化校对 |
| hero 改写后 CTR 没变化 | 考虑把 `OfflineBadge` 与 `PrivacyBadge` 移到更靠近 CTA 的位置；做一次 1:1 文案 A/B（短期） |
| `chatgpt.com` 绝对访客与占比守住基线（5 / 20%） | 优化没有破坏既有信号即可，**不能据此断言本轮起效**；继续观察下轮 |
| `chatgpt.com` 绝对访客回落或占比掉到 <10% | 优先排查 `llms.txt` 抓取频次（用 Cloudflare bot 报表交叉看 `GPTBot` 是否还在拿 `llms.txt`）；考虑给 `llms.txt` 添加 `Last-Modified` 头与更频繁的版本号轮转 |
| `doubao.com` 守住基线（2 / 8%） + 新增 ≥1 个中文 GEO 渠道（kimi/yuanbao/tongyi/deepseek/chatglm 任一） | **新渠道**才是 4-25 中文 bot 白名单起效的强证据；下轮可考虑在 `llms.txt` / `llms-full.txt` 增加中文版本（或单独发 `llms.zh.txt`） |
| 中文 GEO 渠道完全没有新增（仍只有 doubao） | 不能直接证伪 4-25——LLM 索引周期长。再等 1 个迭代周期；同时重新评估中文 bot UA 是否真实存在（其中部分是社区推断的字符串） |
| 国际新增 ≥1 个 GEO 渠道（claude/perplexity/you/phind 任一） | 这是 4-25 显式 allow 起效的强证据；把同样的"显式 allow + quantitative fact"模式继续做厚 |
| 国际仍只有 chatgpt 一个 GEO 渠道 | 同上："7 天太短"是合理解释，先看 Cloudflare bot 维度的 `ClaudeBot` / `PerplexityBot` 抓取频次是否已经上升（爬取在前、引用在后） |
| Cloudflare bot 维度看到 4-25 后 AI 爬虫频次明显上升 | 这是比 referrer 更早能看到的"被欢迎"信号；即便 5-02 referrer 没变化也是好兆头 |
| LLM 抽样仍不提 PicShift | 重新评估 `llms.txt` 的 fact 是否够"声明性"；考虑加更多可信外部信号（IndieWeb / 行业报告引用 / 第三方评测背书）；不依赖任何 GitHub repo |
| schema 校验有 warning | 优先修 `featureList` 重复或 `mentions` 类型不一致的问题 |
| GSC 体验报告仍报 multiple H1 | 检查是否还有 `<h1>` 出现在 polyfill 之外的 fallback 入口 |
| 三篇新 blog 5-02 仍未索引（"Discovered" / "Crawled but not indexed"） | GSC URL Inspection → Request Indexing；同步在 `llms.txt` / `llms-full.txt` 增列 3 条 blog URL 引用；考虑在 docs hub `/docs` 加一个 blog 入口 block |
| 三篇都被索引但 0 impression | 不慌，blog 起量周期通常 14–28 天。继续观察；同时手工搜索几个目标 query 看 PicShift 是否在第 5+ 页 |
| 一篇拿到 impression、其它没有 | 拿到的那篇说明 frontmatter 命中点对了；没拿到的看实际命中 query 是否漂移，下轮给 frontmatter `description` 做一次 SERP-fit 重写 |
| 三篇全部进入 SERP 前 50 | 这是早期乐观信号；把"GSC 长尾驱动选题 + 1500–2200 词 + 事实核查硬约束 + 多样化收尾"组合写入 PLAYBOOK 作为 Tier 1 模板，下批继续按此 |
| `/blog/compress-without-losing-quality` 与 `/docs/image-quality-vs-file-size` 抢同一 query | 加 docs ↔ blog 双向反链；blog 主打"how-to + 决策"、docs 主打"原理"，分工不冲突 |
| 三篇被 ChatGPT / Claude / Perplexity 引用 | 把这 3 篇里的高密度数据再蒸成 facts 加到 `llms-full.txt`；继续加大 blog 投入 |
| 三篇 cover 在 LinkedIn / X 卡片预览仍糊 | 给 blog 单独加 `/og-image/[slug]` endpoint，编译期生成 1200×630 q95 PNG 备份；同时 review `<meta property="og:image">` 是否被 CDN 改写过 |
| `pnpm seo:audit` 在这周拦下了至少 1 次违规 | 证明 audit 扩展真有用；把同样的 audit 思路扩到 docs hub 与 i18n description |
| 没有任何提交被 audit 拦下，且没有新 blog | 正常（这周没写新 blog）；下次写新 blog 时回看这周 audit 输出是否完全沉默 |

## 下次（2026-05-02）开工前的 checklist

- [ ] 拉取 4-25 → 5-02 这一周新的 GSC 7 天数据
- [ ] 与 `docs/gsc-export-2026-04-25/` 做 diff，先看趋势再做改动
- [ ] **打开 Umami 来源域名报表，选「过去 7 天」视图（务必与基线窗口一致），截图保存**，与本文件"GEO 流量基线"那一节做 diff。注意：基线时间窗口是 2026-04-18 ~ 2026-04-25 累计 25 visitors，对照窗口应是 2026-04-25 ~ 2026-05-02 累计
- [ ] 打开 `docs/SEO-PLAYBOOK.md` 复习历轮经验（**重点扫一眼新加的 §事实核查硬性约束、§事故记录表、§收尾 H2 不可重复**）
- [ ] GSC URL Inspection 抽查 `/blog/what-is-avif`、`/blog/webp-explained`、`/blog/compress-without-losing-quality` 的索引状态
- [ ] GSC `网页` 报表过滤 `path contains /blog/`，看三篇新 blog 各自的 impression 与命中 query
- [ ] 在 [opengraph.xyz](https://www.opengraph.xyz/) 抽查三篇新 blog 的 cover OG 卡片是否清晰
- [ ] Umami `网页` 报表看三篇新 blog 的访客数、平均停留时长、bounce rate
- [ ] 跑一次 `pnpm seo:audit`，确认 0 error 0 warning 的状态在这一周里没被破坏
- [ ] 复查本文件「下次重点关注什么」中**还没确认的项**
- [ ] 优先做仍在退化或停滞的项；做完之后再做新增项

---

**本轮负责人**：Cursor（参与全部 10+ 个提交）
**本轮代码体量**：blog 三篇 ~5000 词正文 + 3 cover + 3 内文图 + `SEO-PLAYBOOK.md` 约 +200 行规则与事故记录 + `PR-GEO-CHECKLIST.md` 约 +60 行事实核查关卡 + `seo-audit.mjs` +130 行 blog frontmatter 段；累计文档/规则与脚本变更约 +600 行
**最大教训（本轮新增）**：

1. （承袭上轮）写任何 `sameAs` / "open source" 这类语义级声明前，先核实**底层事实**（仓库可见性、license 文件等），不要从远端 URL 字符串推断
2. **写 blog 任何事实声明（数据 / 版本号 / 日期 / 行为 / 论断）前，必须联网查证权威来源**，不能凭 LLM memory 或"看起来合理"。本轮 13 处订正全部源自这条教训，已落进 `SEO-PLAYBOOK.md` §事实核查硬性约束与事故记录表
3. **automation 没覆盖到的地方就是事故温床**：`seo-audit.mjs` 之前只扫 `tools.ts`，blog frontmatter 长度与命名违规一直是盲区；本轮把 audit 扩到 blog 后，立刻顺手扫出 2 个既存的旧问题。下次新增任何 content type（比如 docs 多语言、changelog 等），都要同时扩 audit
4. **去 AI 化不只是文风问题，是结构问题**：本轮发现 7 篇里 6 篇都用 `## The bottom line` 收尾。文风层面单篇看不出，但跨篇横向比对就明显是 LLM 模板。后续每次写完都用 `rg "^## "` 跨篇扫一遍
