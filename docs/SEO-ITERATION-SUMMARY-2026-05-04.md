# SEO 迭代总结（2026-05-04）

本文件固定 `2026-05-04` 这一轮 SEO / GEO / i18n 改动，并给下一次 SEO 开工前复盘使用。

更底层的长期规则见：

- `docs/SEO-PLAYBOOK.md` → 事实核查红线、结构化数据约束、踩坑记录
- `docs/SEO-ITERATION-SUMMARY-2026-04-25.md` → 上一轮记录（Tier 1 blog + GEO + fact-check gate）
- `docs/gsc-export-2026-05-04/` → 本轮基线 GSC 数据（7d / 28d / 3m）

## 本轮提交一览（按时间）

| Commit | 主题 | 类型 |
|---|---|---|
| `cfb064b` | 7 篇 blog frontmatter 按真实 GSC query 重写 | Blog / CTR |
| `89b07d1` | 阿语 `heic-to-jpg` / `heif-to-jpg` 深化 | i18n / 内容 |
| `d771660` | HEIC / HEIF 工具页形成专题内链集群 | 内链 / 结构 |
| `ea44f5e` | 推 `/es/image-resizer` 排名：西语 authority pin + image-resizer schema 增强 | SEO / 内链 / schema |
| `cde34d9` | 近赢查询批量精修：6 页、5 语种 title/description 微调 | SEO / i18n |
| `a518d38` | `/pt/jpg-to-png`、`/fr/image-resizer` authority pin + 葡语 copy 精修 | SEO / 内链 / i18n |
| `d62c918` | 修复 schema 虚构 preset 与阿语 iOS 版本号声明 | 修复 / playbook 合规 |

## 本轮 GSC 基线（2026-05-04 导出）

数据已归档到：

- `docs/gsc-export-2026-05-04/export-7d/`
- `docs/gsc-export-2026-05-04/export-28d/`
- `docs/gsc-export-2026-05-04/export-3m/`

### 总体指标

| 窗口 | 点击 | 展示 | CTR | 加权平均排名 | 说明 |
|---|---:|---:|---:|---:|---|
| 7d | 10 | 2,714 | 0.37% | 42.7 | 进入低点击但可分析阶段；可做 near-win 微调 |
| 28d | 29 | 11,558 | 0.25% | 51.2 | 对比 4-25 记录的 28d 约 8,733 展示 / 15 点击，展示约 +32%，点击约 +93% |

### 7d Top pages

| Page | Clicks | Impressions | CTR | Avg rank | 本轮含义 |
|---|---:|---:|---:|---:|---|
| `/ar/heic-to-jpg` | 2 | 58 | 3.45% | 9.45 | 阿语 HEIC 页已能进前 10，是本轮继续深化阿语的直接依据 |
| `/ar/heif-to-jpg` | 2 | 6 | 33.33% | 8.5 | 小样本但点击质量高；补全 HEIF 阿语页是合理动作 |
| `/blog/what-is-avif` | 1 | 188 | 0.53% | 8.43 | 4-25 Tier 1 blog 起量最快，证明 blog 可进入 SERP 前排 |
| `/` | 1 | 59 | 1.69% | 12.68 | 品牌 / 首页查询开始有点击 |
| `/ja` | 1 | 10 | 10% | 10.8 | 日语首页有少量有效点击 |
| `/ko/png-to-avif` | 1 | 4 | 25% | 4.75 | 韩语长尾质量高 |
| `/ko/heic-to-png` | 1 | 2 | 50% | 15.5 | 小样本，继续观察 |
| `/zh-Hant/metadata-remover` | 1 | 1 | 100% | 7 | 样本太小，不单独优化 |

### 7d Top queries

| Query | Clicks | Impressions | CTR | Rank | 动作 |
|---|---:|---:|---:|---:|---|
| `تحويل من heic الى jpg` | 1 | 7 | 14.29% | 7.43 | 阿语 HEIC 深化 |
| `picshift` | 1 | 4 | 25% | 5.25 | 首页 title 改为 `Local Image Converter ... | PicShift` 后需继续观察品牌 CTR |
| `png to jpg` | 0 | 42 | 0% | 68.43 | 暂不做大词；需要权重，不是 copy 能解决 |
| `heic to jpg` | 0 | 38 | 0% | 41.58 | 同上，继续靠 HEIC cluster + blog / 外链 |
| `redimensionar imagen` | 0 | 25 | 0% | 61.24 | P0：`/es/image-resizer` authority pin |
| `cambiar tamaño de imagen` | 0 | 25 | 0% | 64.28 | P0：`/es/image-resizer` authority pin |
| `avif to png` | 0 | 25 | 0% | 92.52 | 暂不动，排名太后 |
| `cambiar resolucion de imagen` | 0 | 23 | 0% | 42.78 | P0：西语 image-resizer |
| `jpg to avif` | 0 | 20 | 0% | 33.1 | 英文待观察 |
| `redimensionner image en ligne` | 0 | 19 | 0% | 27.63 | P2：`/fr/image-resizer` authority pin |

## 本轮做了什么

### 1. Blog frontmatter 按真实 query 重写（commit `cfb064b`）

目标：不改正文，只调 7 篇 blog 的 `title` / `description`，让 SERP 片段更贴近当前真实展示 query。

改动：

- `compress-without-losing-quality`：前置 `JPG 100 vs 80`，对应 `jpeg quality 80`、`jpg 100 vs 80` 类 query。
- `heic-heif-on-windows`：标题改为 `HEIC on Windows... and 3 Fixes`，更像用户在 Windows 上遇到的问题。
- `png-vs-jpg`：标题改为 `PNG or JPG: Which Format to Pick and Why`，description 用 "Photos: JPG... Logos/screenshots/transparency: PNG" 直接给判断。
- `social-media-exif-stripping`：标题前置 Instagram / WhatsApp / Discord，并保留 2026 tested。
- `webp-explained`：标题改成 `What Is WebP? Why Your JPG Saves as .webp...`，直接命中 `.webp` 保存困惑。
- `what-is-avif`：标题前置 Browser Support / File Size / 2026。
- `what-is-exif-data`：标题前置 GPS / Camera Info / Strip。

验证：

- `npm run seo:audit`：7 篇 blog title 56-63 字符，description 153-164 字符，0 warning。
- 没有改正文事实声明，所以没有新增事实核查负担。

复盘重点：

- `/blog/what-is-avif` 已经 7d 188 展示 / rank 8.43 / 1 click，是本轮最值得跟踪的 blog。
- 下次看 3 篇 4-25 新 blog 是否继续进入 query 桶，而不是只看总体 blog impression。

### 2. 阿语 HEIC / HEIF 深化（commit `89b07d1`，后续 `d62c918` 修正）

背景：7d GSC 显示阿语 HEIC 页已经进入前 10 且有点击：

- `/ar/heic-to-jpg`：2 clicks / 58 impressions / rank 9.45
- `/ar/heif-to-jpg`：2 clicks / 6 impressions / rank 8.5

改动：

- `ar.ts`：
  - `heic-to-jpg` title / description / intro / FAQ 从通用转换器页深化为 iPhone HEIC → JPG 场景。
  - 新增完整 `heif-to-jpg` 阿语翻译（title / desc / h1 / intro / steps / FAQ）。
- `toolSearchIntent.ts`：
  - 给 `ar/heic-to-jpg` 加 3 个 search-intent section：为什么 iPhone HEIC 在 Windows 打不开、什么时候 JPG 最合适、什么时候 PNG/WebP 更好。
  - 给 `ar/heif-to-jpg` 加 3 个 section：HEIF vs HEIC、什么时候发图选 JPG、HEIF → JPG 是否损失质量。

后续修正：

- 初版写了 `iOS 15/16/17` 与 FAQ 的 `iOS 15/16/17/18`，属于版本号事实声明 + 同页不一致。
- `d62c918` 改成版本无关：工具支持任意 HEIC 文件，而不是某几个 iOS 版本。

复盘重点：

- 看 `/ar/heic-to-jpg` 是否维持前 10，CTR 是否 >3%。
- 看新增 `/ar/heif-to-jpg` 是否从小样本点击扩到稳定展示。
- 不要因为小样本 33% CTR 过度乐观，至少等 2-3 周。

### 3. HEIC / HEIF 工具页专题内链集群（commit `d771660`）

背景：HEIC / HEIF 是 PicShift 的核心主题之一，但原 `Related tools` 可能把 HEIC 页链向通用工具，主题权重不够集中。

改动：

- 新增 `HEIC_SUITE_SLUGS`：
  - `heic-to-jpg`
  - `heic-to-png`
  - `heic-to-webp`
  - `heic-to-avif`
  - `heif-to-jpg`
  - `heif-to-png`
  - `heif-to-webp`
  - `heif-to-avif`
- 英文与多语言工具页：如果当前页属于 HEIC suite，则 related tools 改为同 suite 里的其它 7 个工具，排除自己。
- `toolPageUi.ts` 新增 12 语言 `heicSuiteTitle`：
  - en: `HEIC & HEIF tool suite`
  - es: `Conjunto de herramientas HEIC y HEIF`
  - pt: `Pacote de ferramentas HEIC e HEIF`
  - fr: `Suite d’outils HEIC et HEIF`
  - ar: `مجموعة أدوات HEIC وHEIF`
  - 等。
- `relatedToolsItemListSchema.name` 同步使用新的 heading。

验证：

- 本地 dist 验证：英文、es、pt、fr、ar 的 HEIC suite schema 都包含 7 个 sibling links，且排除当前页。
- 线上验证：`/heic-to-jpg` 有 `HEIC & HEIF tool suite`；`/ar/heic-to-jpg` 有阿语 heading。

复盘重点：

- 看 HEIC family 的总 impression 是否比其它格式 cluster 更快增长。
- 看 `heic to jpg`、`heif to jpg` 等英文 / 阿语 / 非英语查询是否更集中到对应 suite 页。

### 4. `/es/image-resizer` 排名推动（commit `ea44f5e`，后续 `d62c918` 修正）

背景：GSC 7d 真实 query 显示西语 image-resizer 是明确 P0：

- `redimensionar imagen`：25 impressions / 0 click / rank 61.24
- `cambiar tamaño de imagen`：25 impressions / 0 click / rank 64.28
- `cambiar resolucion de imagen`：23 impressions / 0 click / rank 42.78

目标：不是继续改 copy，而是通过内链和 schema 信号推排名。

改动：

- 多语言工具页新增 `AUTHORITY_PINS_BY_LANG`，初始：
  - `es: ['image-resizer']`
- 西语非 HEIC suite、非 authority-exempt 工具页的 related tools 第 1 位强制 pin 到 `/es/image-resizer`。
- exempt slugs：
  - `image-resizer`
  - `image-compressor`
  - `metadata-remover`
- HEIC suite 页不参与 pin，继续保持 HEIC family cluster。

后续修正：

- 初版还新增了 `buildImageResizerPresetsSchema`，声明 1080x1080 / 1200x630 / 1080x1920 / 1920x1080 为固定尺寸 preset。
- review 后发现 UI 里并没有这些固定 preset，只有 custom 输入框能输入这些尺寸。
- `d62c918` 删除整个 preset ItemList schema 与 injection，`featureList` 改为真实能力：
  - longest-edge preset：Max 2560 / 1920 / 1080 / 800
  - 50% / 75% 比例缩放
  - custom width/height 可输入 1080x1080 等社媒尺寸

复盘重点：

- `/es/image-resizer` rank 是否从 60+ 前推到 40-50 区间。
- `redimensionar imagen` / `cambiar tamaño de imagen` 是否开始出现点击。
- 注意不要把短期 3-5 天内波动归因到 pin；内链权重通常要等重抓 + 重算。

### 5. 近赢查询批量精修（commit `cde34d9`）

目标：只对 rank 5-12 且 CTR=0 的小样本 near-win query 做最小 title/description 改动，不重写正文，不新建页面。

本轮覆盖 6 页 / 5 语种：

| 页面 | 目标 query | 数据 | 改动 |
|---|---|---:|---|
| `/ru/heif-to-png` | `heif в png` | 3m rank 5.25 / 9 imp | 新增 title/description override |
| `/ko/webp-to-jpg` | `webp 파일 jpg로 저장` | 7d rank 10.88 / 8 imp | title 加 `파일` / `저장`，desc 贴近保存场景 |
| `/heif-to-avif` | `heif to avif` | 7d rank 8.25 / 4 imp | 英文 title/description override，降低默认描述技术感 |
| `/` | `local image converter` | 7d rank 11 / 3 imp | 首页 title 前置 `Local Image Converter` |
| `/zh-Hant/image-resizer` | `圖片縮放` | 7d rank 9.33 / 3 imp | description 加 1080×1080 / 1200×630 / 1920×1080 |
| `/it/jpg-to-avif` | `da jpg a avif` | 7d rank 10.8 / 5 imp | 新增 title/description override |

技术配套：

- `ToolTranslation` 改成字段可选，支持只 override title/description。
- `getLocalizedToolContent` 改成字段级 fallback，避免 partial translation 让 `faqs` / `howToSteps` 变成 undefined。

踩坑：

- 初次 build 出现 `localizedContent.faqs is not iterable`，原因是 partial override 后 `getLocalizedToolContent` 仍假设所有字段存在。
- 修复后 build 通过。

复盘重点：

- 这些 near-win 都是小样本，不应 7 天内强判断成败。
- 下次看是否继续有展示、排名是否守住；点击可以作为 bonus，不作为唯一 KPI。

### 6. `/pt/jpg-to-png` 与 `/fr/image-resizer` authority pin（commit `a518d38`）

背景：review P2 后，基于真实 GSC 数据选择 both：

- 葡语 JPG→PNG cluster：
  - 多个 `converter/conversor/transformar jpg em/para png` 变体合计 800+ impressions，rank 55-60。
- 法语 image-resizer：
  - `redimensionner image en ligne`：19 impressions / rank 27.63，接近 top 20。

改动：

- `AUTHORITY_PINS_BY_LANG` 扩为：
  - `es: ['image-resizer']`
  - `pt: ['jpg-to-png']`
  - `fr: ['image-resizer']`
- 修复 self-link：
  - pinned page 自己不再把自己 pin 到 related tools 第 1 位。
- `pt/jpg-to-png` title/description 改为：
  - title: `Conversor JPG para PNG — converter imagem grátis | PicShift`
  - description 覆盖 `JPG em PNG` 与 `JPG para PNG` 两种葡语介词表达。

验证：

- `/es/webp-to-jpg` first related = `image-resizer`
- `/pt/webp-to-jpg` first related = `jpg-to-png`
- `/fr/webp-to-jpg` first related = `image-resizer`
- `/pt/jpg-to-png` 自己 first related = `png-to-jpg`，无 self-link。

复盘重点：

- `/pt/jpg-to-png` 是否从 rank 55-60 前推。
- `/fr/image-resizer` 是否从 rank 27-28 进入 top 20。
- 不要继续无限扩 pin；pin 是权重集中工具，不是所有页面都该互相置顶。

### 7. Review 后的修复（commit `d62c918`）

这是本轮最重要的质量控制动作。

#### 7.1 删除虚构的 image-resizer preset schema

问题：

- `buildImageResizerPresetsSchema` 声明了 4 个固定尺寸 preset：
  - `1080x1080`
  - `1200x630`
  - `1080x1920`
  - `1920x1080`
- `SoftwareApplication.featureList` 也写了 `Resize to 1080x1080 square preset...` 等 4 条。
- 但 `ResizeSelector.tsx` 真实 UI 只提供：
  - Original
  - Max 2560 / 1920 / 1080 / 800
  - 75%
  - 50%
  - Custom...

修复：

- 删除整个 `buildImageResizerPresetsSchema`。
- 删除英文 / 多语言两个 route template 的 import、变量、JSX injection。
- 重写 `featureList` 为真实 UI 能力，同时把 1080x1080 等写成 custom 输入框 examples。

教训：

- 任何 JSON-LD / featureList / ItemList 里的功能声明，都必须能在 UI 中找到对应按钮、下拉项、输入框或实际行为。
- "用户会搜这个尺寸"不等于"工具有这个 preset"。
- 这是与 2026-03-29 `SearchAction` 虚构站内搜索同类的结构化数据事故。

#### 7.2 修阿语 iOS 版本号声明

问题：

- description 写 `iOS 15/16/17`。
- FAQ 写 `iOS 15/16/17/18`。
- 同页不一致，而且 PicShift 实际支持任意 HEIC 文件，不依赖拍摄 iOS 版本。

修复：

- description 改成 `متوافق مع جميع صور HEIC التي يلتقطها iPhone`。
- FAQ 改成 `تعمل الأداة مع أي ملف HEIC مهما كان طراز iPhone أو إصدار iOS الذي التقطه`。

教训：

- 工具支持的是文件格式，不是某几个 OS 版本。
- 列版本号前必须查证，而且要问代码是否真的依赖这个版本。

## 本轮验证

本地：

- `npm run build`：405 pages built。
- `npm run seo:audit`：0 warning / 0 error。
- `ReadLints`：核心改动文件无 lint error。
- Python dist 校验：
  - 12 个 `image-resizer` locale 都已移除 `size presets` ItemList。
  - `SoftwareApplication.featureList` 不再出现 `1080x1080 square preset` 等虚构词。
  - `featureList` 包含真实 `Max 2560, 1920, 1080, or 800 pixels`、`50% or 75%`、custom 1080x1080 examples。
  - authority pins 保持生效。
  - HEIC suite heading 保持生效。

线上：

- `/image-resizer`、`/es/image-resizer`、`/ar/image-resizer`：preset schema gone，featureList live。
- `/ar/heic-to-jpg`：阿语新 wording live；无 `iOS 15/16/17/18` 文案声明（只保留全站 legacy-browser fallback 的 `iOS 16.4+`，那是浏览器运行环境要求，不是 HEIC 支持声明）。
- `/es/webp-to-jpg`：first related = `image-resizer`。
- `/pt/webp-to-jpg`：first related = `jpg-to-png`。
- `/fr/webp-to-jpg`：first related = `image-resizer`。
- `/heic-to-jpg`：`HEIC & HEIF tool suite` live。
- `/ar/heic-to-jpg`：`مجموعة أدوات HEIC` live。
- `npm run indexnow`：提交 404 URLs，HTTP 200。

## 本轮新增 playbook 记录

已在 `docs/SEO-PLAYBOOK.md` §事故记录追加两条：

1. **image-resizer preset schema 虚构功能**
   - schema 声明 UI 不存在的 fixed-size preset。
   - 修复：删除 ItemList schema，featureList 改成真实能力 + custom examples。
   - 规则：schema 每个功能都必须能映射到 UI 或真实行为。

2. **阿语 iOS 版本号自相矛盾**
   - description 与 FAQ 列出的 iOS 版本不同。
   - 修复：改成版本无关，按文件格式支持表述。
   - 规则：不要随手列 OS / App 版本号；列之前先查证、先确认代码依赖。

## 下次 SEO 开工前 checklist

### 必读

- [ ] 先读本文件，确认 5-04 做过哪些页面，避免重复改同一批页面导致因果混乱。
- [ ] 打开 `docs/SEO-PLAYBOOK.md` 的事故记录，重点看 2026-05-04 两条。
- [ ] 跑 `npm run build` + `npm run seo:audit`，确认基线 clean。

### GSC 复盘（建议 2026-05-11 或之后）

- [ ] 导出新的 7d / 28d GSC 数据，和 `docs/gsc-export-2026-05-04/` 对比。
- [ ] 先看总体 28d：展示是否继续从 11,558 上升；点击是否继续从 29 上升；平均排名是否继续从 51.2 改善。
- [ ] 单独看 `/es/image-resizer`：
  - `redimensionar imagen`
  - `cambiar tamaño de imagen`
  - `cambiar resolucion de imagen`
- [ ] 单独看 `/pt/jpg-to-png`：
  - `converter jpg em png`
  - `conversor de jpg para png`
  - `transformar jpg em png`
  - `jpg para png`
- [ ] 单独看 `/fr/image-resizer`：
  - `redimensionner image en ligne`
- [ ] 单独看阿语 HEIC：
  - `/ar/heic-to-jpg`
  - `/ar/heif-to-jpg`
  - query `تحويل من heic الى jpg`
- [ ] 单独看 blog：
  - `/blog/what-is-avif`
  - `/blog/webp-explained`
  - `/blog/compress-without-losing-quality`
  - 是否继续命中信息型 query，而不是被工具页抢错意图。
- [ ] 单独看 near-win 微调页：
  - `/ru/heif-to-png`
  - `/ko/webp-to-jpg`
  - `/heif-to-avif`
  - `/zh-Hant/image-resizer`
  - `/it/jpg-to-avif`
  - `/`

### 决策规则

| 复盘现象 | 下一步 |
|---|---|
| `/es/image-resizer` rank 从 60+ 前移但仍无点击 | 保持不动，再观察 7 天；不要继续加 schema 或堆文案 |
| `/es/image-resizer` 进入 top 30 但 CTR 仍 0 | 微调 title / description 首 60 字，把 `redimensionar imagen` 与 `cambiar tamaño` 更自然前置 |
| `/pt/jpg-to-png` rank 前移 | 不再扩 pin；说明 authority pin 生效，下一步考虑 blog / docs 自然内链 |
| `/pt/jpg-to-png` 无变化 | 先检查页面是否被重抓；不要马上再改 copy |
| `/fr/image-resizer` 进入 top 20 | 观察 CTR，再决定是否补一条法语 FAQ |
| 阿语 HEIC 点击继续增长 | 复制阿语 deepen 模式到 `ar/heic-to-png` / `ar/heic-to-webp`，但要先看 query 是否真的出现 |
| `what-is-avif` 继续 rank 前 10 | 把它作为 blog 成功样本，分析 query 分布与停留时长 |
| near-win 页无新点击但排名守住 | 不算失败，小样本；继续观察 |
| GSC 出现新的 rank 5-15 / CTR=0 query | 可以做下一轮 near-win 微调，但每次控制在 5-8 个页面内 |

### 强制红线

- [ ] 不允许再写任何 UI 不存在的 JSON-LD 功能。
- [ ] 不允许在 schema 里把 custom input examples 写成 preset。
- [ ] 不允许凭印象列 OS / 浏览器 / App 版本号。
- [ ] 不允许因为一次小样本点击就大规模改页面。
- [ ] 不允许使用其它项目（如 Solvely / AIO）的数据或经验直接套到 PicShift；所有建议必须来自本仓库或真实 GSC。

## 本轮最大教训

1. **schema 比普通文案更危险**：普通文案夸一点，用户可能还能理解；JSON-LD 是机器可读事实声明，错了就是结构化数据违规风险。
2. **SEO 信号要服务事实，不是反过来**：1080x1080 是用户会搜的尺寸，但如果 UI 没有 fixed preset，就只能说 custom input can set 1080x1080，不能说 preset。
3. **跨字段 review 很重要**：阿语 iOS 问题不是单句不通，而是 description 与 FAQ 放一起才看出矛盾。
4. **小样本 near-win 可以改，但要克制**：title/description 的最小改动可以做；不要把 3-9 impressions 的 query 当成稳定需求去大改页面。
5. **每轮都要沉淀一个复盘文件**：否则下一次只记得“做过 SEO”，但忘了具体数据、commit、验证和踩坑。

