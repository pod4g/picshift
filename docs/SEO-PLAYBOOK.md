# Blog 内容策略与 SEO 经验沉淀

本文件记录 blog 建设的策略原则和 SEO 经验教训，后续写文章、搭建 blog 系统、做内容决策时参考。

## 核心策略：先合后拆

### 原则

- 搜索量大、有独立意图的词 → 各写一篇独立文章
- 搜索量小的长尾词 → 先合并成一篇综合文章，用 H2 子章节覆盖
- 发布后通过 GSC 观察每个 H2 锚点的展示和点击
- 如果某个 H2 起量了，再单独拆成一篇深度文章

### 为什么这样做

- 避免为没有搜索量的词浪费精力写独立文章
- H2 锚点会以 `url#xxx` 形式出现在 GSC 数据中，可以观察每个子话题的真实需求
- 等数据证明某个长尾词值得深做，再投入时间写独立文章
- 尤其适合新词、新兴需求的试水

### 判断标准

- 一个 query 在 GSC 里持续有展示且排名在改善 → 值得独立成文
- 一个 query 只在某一周零散出现 → 继续作为 H2 观察
- 一个 query 的展示量已经超过所在综合文章其他 H2 的总和 → 必须拆出来

## 文章结构规范

### H1：用主关键词，覆盖最大的搜索意图

- 写成决策型或解释型标题
- 不要写成"格式百科"
- 例：`PNG vs JPG: When to Use Which Format`

### H2：每个子章节覆盖一个细分意图

- H2 标题本身就应该是用户会搜的问题
- 例：`Why PNG files are usually larger than JPG`
- H2 会被 Astro 自动生成锚点 ID，GSC 能追踪到

### 内链规则

- 每篇 blog 自然链接到 2-3 个工具页
- 不要硬塞链接，只在上下文合理时链
- 例：在讲"什么时候该转 PNG 到 JPG"时，自然提到 `/png-to-jpg`

### 语气

- 像开发者解释问题，不像 AI 写教科书
- 不灌水，控制在 800-1200 词
- 每段有明确目的，不写"众所周知"式的废话

## 第一批 blog 主题

按优先级排序，基于 GSC 真实 query 信号：

### 1. PNG vs JPG: When to Use Which Format

```
H1: PNG vs JPG: When to Use Which Format
H2: Why PNG files are usually larger than JPG
H2: When to convert PNG to JPG
H2: When to convert JPG to PNG
H2: When neither is the best choice (WebP, AVIF)
```

承接 query：`png to jpg`、`jpg to png`、`jpg in png`、`png vs jpg`
内链到：`/png-to-jpg`、`/jpg-to-png`、`/jpg-to-webp`

### 2. Why Your Converted Image Is Larger Than the Original

```
H1: Why Your Converted Image Is Larger Than the Original
H2: Why HEIC to JPG always increases file size
H2: Why JPG to PNG gets much larger
H2: When conversion actually makes files smaller
H2: How to control output size
```

承接 query：`file quality`、`quality file`、`why is png larger`
内链到：`/heic-to-jpg`、`/jpg-to-png`、`/docs/size-increase-explainer`

### 3. HEIC on Windows: Why iPhone Photos Won't Open and How to Fix It

```
H1: HEIC on Windows: Why iPhone Photos Won't Open
H2: Why iPhones use HEIC instead of JPG
H2: How to open HEIC on Windows
H2: When to convert to JPG vs PNG vs WebP
```

承接 query：`heic to jpg`、`heic to png`、`convert heic`
内链到：`/heic-to-jpg`、`/heic-to-png`、`/heic-to-webp`

## 多语言策略

- 先只写英文 blog
- 验证有效后（GSC 里开始拿到解释型 query 的曝光和点击），再考虑翻译
- 工具页做多语言值得，blog 做多语言现在太早

## 发布节奏

- 不要一次发多篇，每篇间隔 1-2 周
- 每篇发布后观察 7-14 天 GSC 数据
- 根据数据决定下一篇写什么、以及是否需要拆分 H2

## GSC 观察方法

发布 blog 后，在 GSC 的 Performance 报表中：

- 筛选 `Page` 为 blog 文章的 URL
- 看 `Queries` 列表，观察哪些 query 在命中
- 特别关注带锚点的 URL（`url#h2-slug`），它们代表 H2 子章节的独立曝光
- 如果某个 H2 的曝光量持续增长且排名在改善，就值得拆成独立文章

---

## SEO 经验沉淀

以下是在 PicShift 的 SEO 实践中积累的经验和外部学习的策略，用于指导后续所有内容建设和优化决策。

### 品牌词策略：不抢别人的，建设自己的

#### 绝对不做的事

- 不在工具页 title / description 里塞竞品品牌词（如 TinyPNG、iLoveIMG、CloudConvert）
- 不做伪装成竞品的页面（如 `tinypng-converter`）
- 不在首页试图排竞品品牌词

#### 原因

- Google 天然把品牌词的前几名留给品牌方自己
- 即使抢到了，用户搜 A 看到 B，转化极差
- 有被投诉、降权甚至整站被 kill 的风险

#### 可以做的事

- 比较型页面：`PicShift vs TinyPNG`、`PicShift vs Squoosh`
- 替代型页面：`TinyPNG alternatives`、`best free image converter no upload`
- 决策型 blog：`Best Free Image Converters Compared`

#### 为什么这些可以做

- 搜这类词的用户本身就在比较和选择，不是在找某个品牌的官网
- 你是在帮用户做决策，不是在冒充别人
- Google 的搜索意图判断也支持这类内容排名
- 风险低、转化高、长期稳定

#### 首页策略

- 首页专注自己的品牌词 + 一个核心通用词
- 对 PicShift 来说，首页承接的是 `picshift`（品牌）+ `image converter`（通用）
- 随着品牌知名度提升，首页会越来越多地承接品牌词搜索

### 长尾模式：PicShift 的核心增长逻辑

#### 为什么长尾模式适合 PicShift

- 22 个转换工具页 × 12 种语言 = 264 个长尾入口
- 每个入口承接一个细分需求（`heic to jpg`、`png vers jpg`、`avif to png`...）
- 单个页面流量不大，但所有页面加起来形成可观的总量
- 一次做好，长期获客，边际成本为零

#### 长尾模式的 4 个关键点

1. **痛点够尖**：不是"做图片处理平台"，而是"解决私人照片不想上传就能转格式"
2. **SEO 复利**：一篇好文章 / 一个好工具页可以持续获客数年，不需要投广告
3. **产品化交付**：用户打开就能用，不需要一对一服务
4. **积少成多**：每个多语言工具页贡献一点展示、一点点击，累积起来就是增长

#### 长尾模式的耐心要求

- 长尾是慢的，前 1-3 个月主要是积累
- 但一旦起来就停不住，因为每个页面都在持续获客
- PicShift 的实际验证：
  - 第 1 周：几乎没有信号
  - 第 2 周：开始出现零散曝光
  - 第 3 周：部分页面进入 `50-80` 排名区间
  - 第 4 周：首次搜索点击出现，部分页面进入前 `30`
  - 第 5 周：总展示持续增长，多语言页开始爆发

### 站内 SEO 有天花板

#### 站内 SEO 能做到的

- 让 Google 正确理解你的页面
- 把你放进候选池
- 大致推到排名 `30-60`（取决于竞争程度）

#### 站内 SEO 做不到的

- 从 `30` 推到前 `10`（需要外链）
- 建立品牌信任度（需要时间和口碑）
- 获得用户行为信号（需要先有流量）

#### 突破天花板需要什么

- **外链积累**：findly.tools、PeerPush、Reddit、AlternativeTo、GitHub awesome-list
- **内容深度**：blog 文章承接解释型和决策型 query
- **品牌口碑**：持续在社区有存在感，让用户自发推荐
- **时间**：新站从上线到稳定排名前 10，通常需要 3-6 个月

### 内容建设的优先级框架

#### 当前阶段（上线 1-2 个月）

1. 工具页文案优化（已完成大部分）
2. 多语言本地化（已完成高曝光页）
3. URL 归一和技术 SEO（已完成）

#### 下一阶段（上线 2-4 个月）

1. 写解释型 blog（`PNG vs JPG`、`Why files get larger`、`HEIC on Windows`）
2. 持续积累外链
3. 站内 SEO 转为维护模式，只在 GSC 数据指向时才改

#### 后续阶段（上线 4-6 个月）

1. 写比较型 / 决策型页面（`PicShift vs TinyPNG`、`Best Image Converters`）
2. 根据 blog H2 数据拆分独立文章
3. 考虑 blog 多语言化（如果英文 blog 验证有效）
4. 考虑轻量变现（如果流量足够）

### SEO 三大系统框架

SEO 不是单点优化，是三个系统的长期竞争工程：

#### 1. 技术系统（页面基建）— 地基，一次性工程

解决的问题：你的页面能不能被 Google 索引、理解、使用。

包括：
- 页面性能（加载速度、CDN、服务稳定性）
- 结构系统（URL 结构、目录层级、内链结构）
- 设备体验（响应式适配）
- 多语言（lang、hreflang）
- 语义结构（结构化数据、schema）
- 基础配置（robots.txt、sitemap.xml、404/重定向处理）

PicShift 现状：**基本完成**。Astro 静态站 + Cloudflare CDN + 正确的 canonical/hreflang + JSON-LD + sitemap（精确 lastmod）+ URL 归一 + 移动端适配。后续只需维护，不需要重做。

#### 2. 内容系统（页面内容）— 核心竞争力，持续投入

解决的问题：用户和 Google 是否认可你的内容。

关键原则：

**页面形态跟着 SERP 走**：Google 搜索结果前排是什么形态（工具页、blog、落地页），你就做什么形态。不是你想做什么就做什么。

**关键词难度决定优先级**：
- 蓝海词（低竞争）→ 先做
- 中等词 → 站稳蓝海后做
- 大词 → 最后做
- 这是"农村包围城市"策略，不是偏好选择

**搜索意图决定投入**：
- 信息型 query（`what is png`）→ 价值密度低，零点击时代越来越多被 AI 直接回答
- 决策型 query（`png vs jpg which is better`）→ 价值密度中等
- 交易型 query（`convert png to jpg`）→ 价值密度最高，用户直接要用工具
- 优先做交易型和决策型，信息型放后面

**内链是权重引导系统**：
- 内链不是 SEO 技巧，是在告诉 Google 哪些页面最重要
- 核心页面（工具页）应该被更多内部页面链接到
- blog 文章链接到工具页 = 给工具页投信任票
- 工具页之间互相链接 = 建立主题关联

PicShift 现状：工具页内容已经做了 3 轮优化，多语言页已补强。下一步是 blog（解释型 + 决策型内容），以及利用 blog 给工具页做内链支持。

#### 3. 信任系统（外链）— 突破天花板的关键

解决的问题：外部世界是否信任你、给你投票。

外链的三个作用：
- **排名提升**：提升页面在 SERP 中的权重竞争力
- **引荐流量**：导入真实用户
- **发现与收录**：给爬虫修路，新页面更快被发现

外链分两类：
- **首页外链**：提升整站权重，影响所有页面的排名
- **页面外链**：提升单页竞争力，用于打核心关键词

**外链必须是自然增长**：
- 短时间大量新增高质量外链 → 触发风控
- 来源结构异常集中 → 触发风控
- 增长曲线异常陡峭 → 触发风控
- 正确做法：持续、稳定、多来源地积累

PicShift 现状：findly.tools（DR 76）、vibecodinglist、PeerPush（排队中）、Reddit、Product Hunt。节奏正确，继续保持自然增长。

### 关键词优先级策略：农村包围城市

对 PicShift 来说：

**蓝海词（已经在做，部分已进前 30）：**
- `webp to heif`
- `avif to png converter`
- 各种多语言长尾（`convertir png en jpg`、`redimensionar imagen`）

**中等词（正在争取，排名 30-60）：**
- `heic to png`
- `jpg to webp`
- `avif to jpg`
- `webp to jpg`

**大词（目标，但需要时间和外链）：**
- `heic to jpg`
- `png to jpg`
- `image compressor`
- `image converter`

不要一上来就想打大词，先把蓝海词和中等词的排名稳住，积累权重后再向大词进攻。

### 内链规划原则

PicShift 的内链结构应该是：

```
首页
  ├── 核心工具页（image-compressor、image-resizer、heic-to-jpg ...）
  │     ├── 相关工具页（互相链接）
  │     └── 相关 docs 页
  ├── docs 页（privacy、format-compatibility、quality-vs-size ...）
  │     └── 链接回工具页
  └── blog 页（PNG vs JPG、Why files get larger ...）
        └── 自然链接到 2-3 个工具页
```

原则：
- 工具页是最重要的核心章节，应该被最多内部页面链接
- blog 的主要内链价值是给工具页"投票"
- docs 页既是 GEO 证据层，也是给工具页的语义补充
- 不要所有页面都链到所有页面，要有层级

### 零点击时代的应对

文章提到"信息型价值密度下降，交易型价值密度上升"。

对 PicShift 的启示：
- 你的工具页天然是交易型（用户搜 `heic to jpg` 就是要转格式），这是你的优势
- blog 应该偏决策型（`PNG vs JPG 该选哪个`），而不是纯信息型（`什么是 PNG`）
- 纯信息型内容越来越多被 AI 直接回答，用户不需要点进来
- 但如果你的信息型内容同时带有"你可以直接用 PicShift 做这件事"的行动引导，价值就不一样了

### Alternatives 页面矩阵：决策型内容的规模化打法

#### 模式说明

为每个主要竞品写一篇 `{品牌} Alternatives` 页面，承接"用户在找替代品"的搜索意图。

这类页面的特点：
- 搜索意图明确：用户已经知道某个工具，但在考虑替代方案
- Google 认可：帮用户做决策，不是冒充品牌
- 可模板化：每篇结构相同，只改品牌名和具体对比点
- 转化率高：搜这类词的人正好是你的目标用户

#### 实际案例

SEMRush 为每个知名网站生成 `{domain} Alternatives & Competitors` 页面：
- 14,453 个页面，月总流量 430 万
- 单页最高月流量 184 万
- 每个页面结构一致，模板化批量生成

#### PicShift 可以做的 alternatives 页面

```
/blog/tinypng-alternatives
/blog/squoosh-alternatives
/blog/iloveimg-alternatives
/blog/cloudconvert-alternatives
/blog/convertio-alternatives
```

#### 统一页面结构

```
H1: Best {品牌} Alternatives in 2026
H2: Why people look for {品牌} alternatives
H2: PicShift — local processing, no upload, free
H2: Other alternatives worth trying
H2: How to choose the right image converter
```

每篇的差异化卖点都是同一个：
- TinyPNG 要上传 → PicShift 本地处理
- Squoosh 只能单张 → PicShift 批量 200 张
- CloudConvert 有免费额度限制 → PicShift 完全免费
- Convertio 要注册 → PicShift 无需注册

#### 执行时机

不是现在做，而是在解释型 blog 验证有效之后：

1. 先写解释型 blog（`PNG vs JPG`、`Why files get larger`）
2. 验证 blog 系统能跑通、GSC 有数据
3. 然后开始做 alternatives 系列
4. 每周写 1 篇，5 个竞品 = 5 周

#### 注意事项

- 内容要公正，不能只夸自己贬别人
- 每篇都要提供真实有用的对比信息
- PicShift 的优势自然呈现，不要硬推
- 如果某个竞品在某个场景确实更好（比如 TinyPNG 有 API），要诚实写出来

### 外链建设 9 种方法（来自教程总结）

按适合 PicShift 当前阶段排序：

#### 已在做的
1. **社区链接建设** — Reddit、Hacker News 发帖互动，在讨论中自然提到工具
2. **内容提交到导航平台** — Product Hunt、findly.tools、vibecodinglist、PeerPush、AlternativeTo

#### 可以开始做的
3. **写客座文章（Guest Post）** — 找技术博客投稿，文章中自然包含 PicShift 链接。搜索 `image optimization + "write for us"` 或类似主题找投稿平台
4. **替换死链接** — 找竞品网站上已经 404 的外链，写一篇同主题内容，联系链接源头替换成你的。适合用 Ahrefs 的 `site explorer -> best by links -> 404 not found` 功能
5. **利用未链接提及** — 找到提到过 PicShift 或"browser image converter"但没放链接的文章，联系作者请求加上链接

#### 后续有余力再做的
6. **内容重复利用** — 把 blog 内容改编成视频、信息图、或在其他平台发布摘要版本（附链接）
7. **重新激活失效链接** — 如果以后有外链因为对方更新内容而被移除，友好沟通请求恢复
8. **付费推广** — 不是买链接，而是通过广告让更多人看到内容，自然产生外链。当前阶段不需要
9. **"偷盗"低质量高外链页面的链接** — 找到内容差但外链多的竞品页面，写更好的内容，联系那些外链源头换链。需要 Ahrefs，当前阶段不急

#### 核心原则
- 外链的前提是有好内容，先写好 blog 再做外链推广
- 外链必须自然增长，不要短时间大量获取
- 优先做成本为零的方法（社区、提交、替换死链）
- 每种方法都要保持相关性，不要为了链接去不相关的网站

### On-Page SEO 检查清单（来自教程总结）

以下是 PicShift 应该持续检查的 on-page SEO 要素，大部分已经在做：

#### URL
- 包含核心关键词 — 已做（`/heic-to-jpg`、`/png-to-jpg`）
- URL 简短，5 个词以内 — 已做
- 使用连字符分隔 — 已做
- 全小写 — 已做

#### Title Tag
- 前置加载核心关键词 — 已做
- 不超过 55 个字符 — 大部分已做，Bing 报过几个太短的已修复
- 标题吸引人，不是纯关键词堆砌 — 已做

#### Meta Description
- 包含核心关键词和相关关键词 — 已做
- 150-160 字符 — 大部分已做，Bing 报过几个太短的已修复
- 描述能让用户想点击 — 已做

#### 内容
- 前 150 词内出现核心关键词 — 工具页的 introText 已做到
- H2/H3 标题包含相关关键词 — searchIntentSections 已做到
- 使用同义词和 LSI 关键词 — 自然语言写作已覆盖
- 内容分块提升可读性 — FAQ + 正文块 + How-to 已做到
- 包含多媒体（图片）— 工具本身就是互动内容

#### 链接
- 内部链接到相关工具页和 docs — 已做（related tools、related guides）
- 外部链接到权威来源 — docs 页有，工具页不需要

#### 精选摘要优化
- FAQ 格式天然适合 Google 的"People Also Ask"
- 后续 blog 的 H2 可以针对精选摘要优化（用 46-84 词段落直接回答问题）

### EEAT 在 PicShift 上的体现

EEAT = Experience（经验）+ Expertise（专业性）+ Authoritativeness（权威性）+ Trustworthiness（可信度）

PicShift 已有的 EEAT 信号：
- **Experience**：docs/why-picshift 解释了为什么建这个工具，展示了真实的开发经验
- **Expertise**：使用 MozJPEG、OxiPNG、libwebp 等专业编解码器，技术栈有深度
- **Authoritativeness**：被 ChatGPT 引用过 3 次，有 Product Hunt 和 findly.tools 收录
- **Trustworthiness**：privacy-local-processing docs 详细解释了隐私模型，可以断网验证

后续可以加强的：
- blog 文章署名作者信息（如果搭建 blog 系统时考虑）
- 在 about 页面或 docs 里增加开发者背景介绍
- 获取更多权威外链（来自技术博客、测评文章）

### GEO 优化工具和方法（来自教程总结）

对 PicShift 当前有用的 GEO 相关实践：

#### 已在做的
- `llms.txt` / `llms-full.txt` — 大模型的快速参考文件
- 结构化数据（JSON-LD）— SoftwareApplication、BreadcrumbList、ItemList、FAQPage
- docs 作为 GEO 证据层 — privacy、format-compatibility、quality-vs-size
- 可引用事实（quote-ready facts）— 在 llms.txt 中

#### 可以继续做的
- 保持 `llms.txt` 时间戳最新（每次内容大更新后同步）
- blog 文章写得像"可被模型摘取的知识块"
- 在 docs 和 blog 中提供数据化的事实（如"WebP 比 JPG 小 25-34%"），大模型更容易引用有具体数据的内容
- 继续维护 preferred citations 列表，让大模型知道该引用哪个页面来支持哪个论点

### Blog 排版细节标准

#### 正文字体颜色

- 深色模式：使用 `var(--color-text-primary)`（`#e8edf5`）
- 浅色模式：加深到 `#1a1a1a`（接近纯黑），不使用默认的 `#1e293b`
- 原因：长文阅读需要比工具页更高的对比度，Medium 在白背景上用 `#242424`，我们更激进一点用 `#1a1a1a`

#### 表格样式

- 外框圆角 `0.75rem`，`border-collapse: separate` + `overflow: hidden` 实现
- 单元格内边距 `0.875rem 1.25rem`，比默认更宽松
- 表头：无衬线字体、小号、大写、`letter-spacing: 0.03em`、`text-secondary` 颜色
- 行间用 `border-bottom` 分隔，最后一行去掉底线
- hover 时行背景变为 `drop-bg`
- 不使用垂直边框线（只有水平分隔），视觉更干净

#### 图片标签规则

- **永远用 `<img>` 标签，不用 Markdown `![]()` 语法**，因为 Markdown 语法无法指定 `width` 和 `height`
- 每个 `<img>` 必须带 `width` 和 `height` 属性，防止页面加载时布局跳动（CLS）
- 格式：`<img src="/blog/xxx.webp" alt="描述" width="1200" height="630" />`
- cover 图尺寸：`width="1200" height="630"`
- 内文插图尺寸：`width="1000" height="按实际比例"`

#### Blog 列表页卡片规则

- cover 图用 `aspect-ratio` 按原图比例显示，不用固定 `h-48` 裁剪
- 正确写法：`class="w-full aspect-[1200/630] object-cover"`
- `<img>` 标签带 `width="1200" height="630"` 和 `loading="lazy"`
- 卡片用 `overflow-hidden` + `rounded-xl` 让图片圆角和卡片一致
- 文章少（< 6 篇）时 cover 在上方，文章多了再考虑改成右侧缩略图

#### 其他排版注意点

- cover 图和第一段之间应该有自然间距（由 Markdown 段落间距自动处理）
- H2 之间间距 `3rem`，足够让读者感受到章节切换
- 引用块用紫色左边线 + 斜体
- 图片自动圆角 `0.5rem`

### Blog 文章去 AI 化规则

#### 核心原则

blog 不是个人博客也不是聊天，是技术工具站的解释型内容。目标是"专业但不僵硬"，不是"像发微博"。

#### 应该做的

- **有明确立场**：不要"两者各有优劣"，要"如果你要 X，选 A；如果要 Y，选 B"
- **用具体数字**："a 5 MB PNG compresses to 800 KB as JPG" 比 "小很多" 更有人味
- **写真实场景**："上传表单有大小限制"、"邮件附件太重"，而不是抽象的"提升效率"
- **短句穿插长句**：不要每句都是复合句
- **直接给建议**：一句话总结，不绕弯

#### 要改掉的 AI 特征

- 删掉 "If you have ever... you are not alone" 式的共情开场
- 删掉 "This guide covers..." 式的导航过渡句
- 删掉 "In conclusion" / "To summarize" 式的总结套话
- 删掉 "It is worth noting that" / "It should be mentioned" 式的填充语
- 不要每段结构都一模一样
- 不要太"客观中立"，要有判断

#### 不应该做的

- 不要加口语语气词（`嘛`、`哦`、`说白了`），英文技术内容不适合
- 不要故意写碎句或写错来装"人味"
- 不要过度自嘲（工具站说"我也搞不清"会降低信任感）
- 不要去掉 H2/表格/决策指南等结构（这些是 SEO 优势）

#### 自查三步

1. 读完问自己：这像不像一个有经验的开发者在解释问题？
2. 删掉所有套话后还剩多少实质内容？
3. 每个段落是否都有具体信息，而不只是"过渡"？

### Blog 配图 Workflow

#### 规则

- 每篇文章至少 1 张 cover 图
- 如果内容适合可视化（流程图、对比图、决策图），加 1-2 张内文插图
- 所有图片必须是 **WebP 格式**（体积小、加载快、现代浏览器全支持）
- 图片存放在 `public/blog/` 目录下
- 命名规则：`{文章slug}-{用途}.webp`，如 `png-vs-jpg-cover.webp`

#### 生图流程

1. 用 Nano Banana Pro（`gemini-3-pro-image-preview`）生成图片
2. API 调用方式见 `docs/image-gen-api.md`（直接调 Vertex AI）
3. 生成后自动裁掉白边
4. 转为 WebP 格式并调整到目标尺寸
5. 保存到 `public/blog/`

#### 图片尺寸标准

- Cover 图：`1200x630`（和 OG image 一致，方便社交分享）
- 内文插图：宽度 `1000px`，高度按内容比例
- 流程图 / 信息图：宽度 `1000px`，高度 `500-600px`

#### Cover 图双用途规范

Cover 图同时用于**文章顶部展示**和**社交分享 OG 预览**（`og:image` / `twitter:image`），必须同时满足两个场景的要求：

**尺寸**：必须是 `1200x630`（宽高比 1.91:1）
- 这是 Twitter/LinkedIn/Facebook 的推荐 OG 尺寸
- 太窄会被裁切，太方会显示不全

**安全区域**：核心内容（文字、主视觉）放在图片**中央 80% 区域**内
- 社交平台可能裁切边缘 5-10%
- 博客卡片列表用 `object-cover` 也会轻微裁切

**文字**：
- 如果图上有文字，字号不能太小（社交卡片预览可能只有 600px 宽）
- 文字不要超过图片面积的 20%（Facebook 曾限制文字过多的图片曝光）
- 文字颜色要和背景有足够对比度

**视觉**：
- 不要在图片底部放关键内容（博客卡片展示时底部可能被标题遮挡）
- 深色背景 + 高饱和主色调，在深色和浅色模式的 feed 里都要醒目

**格式**：WebP，**quality 设为 95**（约 70KB）。不要用默认低质量（约 47KB），否则社交平台预览卡片会明显模糊。实测 Twitter/Facebook/LinkedIn 均支持 WebP OG 图，一图两用（文章展示 + 社交分享），无需额外生成 JPG/PNG 版本。

**注意**：Cloudflare 的 **Bot Fight Mode 必须关闭**，否则 Twitter 爬虫会被拦截导致 OG 图无法加载。这不是图片格式问题，是 Cloudflare 安全策略问题。

**代码侧**：博客 frontmatter 的 `cover` 字段同时用于文章展示和 OG 分享图，自动传给 Layout 的 `ogImage`，无需额外配置。

#### Prompt 要求

- 风格必须和站点统一：深色背景 `#1a2332`
- 用站点主色调：indigo `#818cf8`、purple `#a78bfa`
- 要有创意，让人一看就忘不了
- 不要用 stock photo 风格，用 flat illustration / graphic design
- 明确写 "No white borders" 防止生成白边
- 核心视觉元素居中，不要贴边

### SEMRush 竞品数据基线（2026-03-28）

#### PicShift 现状

| 指标 | 数值 |
|---|---|
| Authority Score | 2 |
| 自然流量（SEMRush 估算） | 10/月 |
| 自然搜索关键词 | 637 |
| 反向链接 | 84 |
| 引荐域名 | 26 |
| dofollow 链接 | 77 |
| nofollow 链接 | 7 |
| AI 引用页面 | 1（ChatGPT） |

排名分布：约 95% 在 51-100 名，少量在 21-50 名。

主要外链来源：startuptile.com（43 链接）、HN 生态站（~30 链接）、张鑫旭博客（nofollow）。

#### TinyPNG 数据（主要竞品参照）

| 指标 | 数值 |
|---|---|
| Authority Score | 60 |
| 自然流量 | 88,400/月 |
| 自然搜索关键词 | 10,800 |
| 反向链接 | 1.5M |

TinyPNG 的流量主要靠品牌词（`tinypng` 搜索量 22,200），通用 query 排名反而不是它的核心流量来源。

#### PicShift vs TinyPNG 关键差距

| 维度 | PicShift | TinyPNG | 差距 |
|---|---|---|---|
| Authority Score | 2 | 60 | 30 倍，需要外链积累 |
| 关键词覆盖 | 637 | 583（品牌词） | 通用词覆盖广度接近 |
| 排名深度 | 大部分 51-100 | 大部分前 10 | 需要权重推动 |
| 流量 | ~10 | 88,400 | 需要排名前推才能转化为流量 |

结论：差距主要在域名权重，不在内容覆盖面。

#### 最大的关键词机会：`heic to jpg`

搜索量 201,000/月，是 PicShift 站内最大的潜在流量入口。

当前状态：
- `/heic-to-jpg` 页面已存在，内容已优化
- GSC 里有 query 信号，排名约 50-70
- 但 Authority Score 2 vs 竞品 40-70，排名受限

攻克路径：

**短期（现在 - 1 个月）：围绕 HEIC 建立主题权威**
- 写 blog `HEIC on Windows: Why iPhone Photos Won't Open`
- blog 内链到 `/heic-to-jpg`
- 承接解释型长尾（`why can't I open heic`、`heic not supported windows`）

**中期（1-3 个月）：外链持续积累**
- 目标：Authority Score 从 2 推到 10-20
- 继续提交目录、写 blog 被引用、Reddit/HN 持续曝光

**长期（3-6 个月）：内容集群包围**
- 围绕 HEIC 建立多个互相链接的页面：
  - `/heic-to-jpg`（核心工具页）
  - `/blog/heic-on-windows`（解释型）
  - `/blog/heic-vs-jpg`（比较型，未来写）
  - `/heic-to-png`、`/heic-to-webp`（相关工具页）
- 每个页面都链接到 `/heic-to-jpg`，形成内链网络

排名预期：
- 现在 50-70 → 1-2 个月后 30-50 → 3-4 个月后 20-30 → 6+ 个月后 10-20
- 进前 10 需要 Authority Score 到 20+，预计 6-12 个月

#### 当前"弱排名"关键词机会

SEMRush 标记的"你有排名但弱"的词，最容易提升：

| 关键词 | 搜索量 | 语言 | 对应页面 |
|---|---|---|---|
| `avif to png` (变体) | 170 | en | `/avif-to-png` |
| `imagen webp a jpg` | 70 | es | `/es/webp-to-jpg` |
| `transformar webp em png` | 70 | pt | `/pt/webp-to-png` |
| `convertir web a png` | 50 | es | `/es/webp-to-png` |

这些不需要单独优化，随着权重提升会自然前移。但它们验证了多语言策略的有效性。

### SimilarWeb 行业数据基线（2026-03-28）

数据来源：SimilarWeb 报告，Dec 2025 - Feb 2026

#### 竞品流量规模

| 竞品 | 月均访问 | 跳出率 | 平均停留 | 页面/次 |
|---|---|---|---|---|
| iLoveIMG | 35.85M | 32.3% | 3:36 | 3.71 |
| TinyPNG | 2.78M | 65.3% | 2:50 | 1.65 |
| Squoosh | 1.69M | 30.5% | 4:32 | 4.73 |
| PicShift | ~0 | - | - | - |

关键发现：
- iLoveIMG 是真正的巨头（月访问 3580 万），比 TinyPNG 大 13 倍
- Squoosh 用户粘性最好（停留 4:32，跳出率 30.5%）
- TinyPNG 跳出率最高（65.3%），说明很多用户用完就走

#### 全行业非品牌热门搜索词

| 搜索词 | 全球搜索量 | CPC |
|---|---|---|
| `heic to jpg` | 2,057,665 | $0.17 |
| `webp to jpg` | 1,990,640 | $0.18 |
| `resize image` | 1,261,268 | $0.22 |
| `upscale image` | 919,256 | $0.24 |

`heic to jpg` 全球 205 万搜索量，是 SEMRush 美区数据（20 万）的 10 倍。这是全行业最大的非品牌搜索词之一。

#### 外链流量来源（全行业）

| 来源 | 流量份额 | 说明 |
|---|---|---|
| chatgpt.com | 28.55% | AI 推荐是行业最大外链流量来源 |
| ilovepdf.com | 16.66% | iLoveIMG 姊妹站互链 |
| google.com | 13.25% | 搜索直接跳转 |
| tinify.com | 4.27% | TinyPNG 自家域名 |
| yandex.ru | 4.00% | 俄罗斯搜索 |

**最重要的发现：ChatGPT 是全行业最大的外链流量来源（28.55%）。** 这意味着 GEO（大模型可见性优化）已经不是"未来趋势"，而是当前最大的流量渠道之一。继续维护 `llms.txt` 和解释型内容是正确的。

#### 地理分布（全行业）

| 国家 | 流量份额 |
|---|---|
| 印度尼西亚 | 12.57% |
| 印度 | 12.41% |
| 巴西 | 8.03% |
| 日本 | 5.10% |
| 俄罗斯 | 4.77% |

PicShift 多语言已覆盖：日语、俄语、葡语（巴西）。尚未覆盖：印尼语（但印尼用户多数用英语搜索）。

#### 设备分布

行业以桌面端为主（70-86%），但移动端占比在增长（iLoveIMG 已到 29.1%）。PicShift 的移动端适配已完成。

#### 对策略的启示

1. **GEO 是最大增长杠杆**：chatgpt.com 占行业外链流量 28.55%，继续优化 `llms.txt`、docs、blog 的可引用性
2. **iLoveIMG 才是最大竞品**：月访问 3580 万，后续写 Alternatives 时 `iLoveIMG alternatives` 可能比 `TinyPNG alternatives` 价值更大
3. **巴西市场正在验证**：`/pt/jpg-to-png/` 已经爆发，SimilarWeb 数据显示巴西占全行业 8% 流量
4. **`heic to jpg` 全球 205 万**：再次确认这是最大的单一关键词机会

#### SEMRush 使用规则

- 每次 SEO 复盘时，顺手看一下 Authority Score 和关键词数的变化趋势
- 定期查竞品外链来源，找自己还没提交的平台
- 用"关键词差异"功能找竞品有排名但你没有的词
- 不需要每天看，每 2-4 周看一次够了

### 新页面上线前必查清单

每次新增页面（blog、docs、工具页），上线前必须检查：

- **title 长度**：不低于 30 字符，建议 50-60 字符
- **description 长度**：不低于 120 字符，建议 150-160 字符
- **`<img>` 标签**：必须带 `width` 和 `height`
- **图片格式**：必须是 WebP
- **canonical URL**：确认正确
- **内链**：至少链接到 1-2 个相关页面
- **构建验证**：`npm run build` 通过
- **SEO 审计**：`npm run seo:audit` 通过（如果是工具页）

这条清单存在的原因：Bing 会检测 title 和 description 长度不足并标记为告警，修复后也要等 1-2 周才能消除。提前检查比事后修复省时间。

### Sitemap lastmod 精确化：改了才更新，不改不动

#### 为什么要做

Google 官方明确说过：如果 `lastmod` 不准确（每次构建都刷新所有页面的时间戳），Google 会直接忽略这个字段。一旦被标记为不可信，等于 sitemap 中的 `lastmod` 完全失效。

#### 精确 lastmod 的三个好处

1. **爬虫效率**：Google 的 crawl budget 有限。精确的 lastmod 让爬虫只抓真正更新过的页面，386 个页面中改了 5 个就只标记 5 个，节省大量爬取预算
2. **索引速度**：内容变更后，lastmod 更新 → Google 更快重新抓取和索引 → SEO 内容优化更快生效
3. **信任信号**：Google 会逐渐信任"改了才变"的 lastmod，给它更高权重；反之，"每次都变"的 lastmod 会被彻底忽略

#### PicShift 的实现方案

**原理**：通过 `git log` 获取每个源文件的最后 commit 日期，构建时根据 URL → 源文件的映射关系，取所有关联文件中最晚的日期作为该 URL 的 lastmod。

**核心文件**：
- `scripts/gen-lastmod.mjs` — 构建前运行，导出所有文件的 git 最后修改日期到 `src/.file-dates.json`
- `astro.config.mjs` 的 `serialize` 函数 — 读取日期文件，按 URL 类型反推源文件，取 max 日期

**URL → 源文件映射规则**：

| URL 类型 | 关联的源文件 |
|---|---|
| `/` | `src/pages/index.astro` |
| `/privacy/` 等英文静态页 | `src/pages/privacy.astro`（只看自己的模板） |
| `/heic-to-jpg/` 等英文工具页 | `src/pages/[slug].astro` + `src/data/tools.ts` |
| `/zh/privacy/` 等非英文静态页 | `src/pages/[lang]/privacy.astro` + 对应语言翻译文件 |
| `/zh/heic-to-jpg/` 等非英文工具页 | `src/pages/[lang]/[slug].astro` + `tools.ts` + 翻译文件 + `toolSearchIntent.ts` + `toolFaqOverrides.ts` |
| `/blog/` 列表页 | `src/pages/blog/index.astro` + 所有 `src/content/blog/*.md` |
| `/blog/xxx/` 文章页 | 对应 `xxx.md` + `src/pages/blog/[slug].astro` |
| `/docs/xxx/` 英文文档 | `src/pages/docs/xxx.astro` |
| `/zh/docs/xxx/` 非英文文档 | `src/pages/[lang]/docs/xxx.astro` + 翻译文件 + `docsUi.ts` |

**Cloudflare CI 兼容**：Cloudflare 做 shallow clone（depth 1），脚本自动 `git fetch --deepen=1` 获取父 commit，只合并本次 commit 真正改动的文件日期，其余保持已提交的基线文件。

**验证标准**：
- 连续两次 build 不改文件 → sitemap 字节级一致（幂等性）
- 改了 `tools.ts` → 只有工具页 lastmod 更新，blog/docs/privacy 不动
- 新增 blog 文章 → 文章页和列表页 lastmod 更新，其他不动
- 零 fallback：所有 386 个 URL 的 lastmod 都来自 git 历史，没有任何一个用当前构建时间

#### 注意事项

- 新增语言时，需要在 `astro.config.mjs` 的 `NON_EN_LOCALES` 数组中添加
- `.file-dates.json` 已提交到 git，不在 `.gitignore` 中（CI 需要读取）
- 本地 build 会自动更新 `.file-dates.json`，记得一起 commit

### 竞品分析与市场定位（来自 Beatable 验证报告）

数据来源：https://beatable.co/analysis/68cc637743

#### PicShift 的竞争定位

在"企业功能"和"隐私/本地处理"两个维度上：

- PicShift 位于：企业功能低 + 隐私/本地处理最高
- 最近的竞品是 Squoosh（同样本地处理，但无批量、无 API）
- 最远的竞品是 Cloudinary（全平台但完全云端）

#### 主要竞品一览

| 竞品 | 核心定位 | 本地处理 | 批量 | API | 免费 |
|---|---|---|---|---|---|
| Cloudinary | 企业级媒体平台 + CDN | 否 | 是 | 是 | 有限 |
| TinyPNG | 感知压缩，简单好用 | 否 | API 支持 | 是 | 有限 |
| Squoosh | 浏览器端 WASM 压缩 | 是 | 有限 | 否 | 完全免费 |
| ShortPixel | WordPress 插件优先 | 否 | 是 | 是 | 有限 |
| Kraken.io | 开发者 API 优先 | 否 | 是 | 是 | 有限 |
| ImageOptim | macOS 桌面端本地优化 | 是 | 文件夹 | CLI | 免费 |
| Convertio | 通用在线转换 | 否 | 是 | 是 | 有限 |
| Photopea | 浏览器端图片编辑器 | 大部分 | 是 | 部分 | 广告免费 |

#### PicShift vs Squoosh（最近竞品）

PicShift 的差异化优势：
- 批量处理：200 张 vs Squoosh 基本是单张
- HEIC/HEIF 解码：libheif-js 支持 vs Squoosh 有限
- 多格式互转：22 种转换路径 vs Squoosh 主要是压缩
- 12 种语言 vs Squoosh 仅英文
- PWA 离线 + 质量对比 vs Squoosh 无离线

#### PicShift 的 SWOT

**优势：**
- 真正的本地优先隐私模型，可验证的离线转换
- 现代编解码器支持（AVIF、WebP、HEIC/HEIF），WASM + 多线程
- 批量优先体验（200 张），区别于单文件工具
- 无账号、无水印、无文件限制，降低使用摩擦

**劣势：**
- 缺少企业功能（CDN、托管、动态转换 API、分析）
- 浏览器资源限制（内存/CPU）可能制约大批量高分辨率处理
- 用户期望本地免费工具，变现存在摩擦
- 缺少服务端自动化管道集成

**机会：**
- 瞄准受监管行业（医疗、法律、政府），它们需要本地处理
- 构建 CLI/NPM/Electron 无头运行时，进入 CI/CD 和企业市场
- 创建 CMS 插件或浏览器扩展，成为编辑端转换的首选
- 通过开发者便利功能变现：可复现构建、高并发、企业支持

**威胁：**
- 成熟免费工具（Squoosh、ImageOptim）和服务端巨头（TinyPNG）
- 浏览器/OS 限制和安全策略变化可能影响功能
- 用户可能更倾向集成 CDN 的云端自动优化
- 编解码标准快速变化需要持续工程投入

#### 理想客户画像（ICP）

按优先级：

1. **开发者优先的 Web 团队** — 需要本地开发流程中的格式转换，不想引入云依赖
2. **隐私敏感的创作者** — 摄影师、设计师、记者，拒绝云上传
3. **代理公司和工作室** — 大批量客户图片优化，需要批处理和隐私保护
4. **受监管的企业团队** — 医疗、法律、政府，需要可验证的本地处理
5. **CMS 编辑和站长** — WordPress/Shopify 管理员，想在上传前转换图片
6. **DevOps/CI-CD 团队** — 需要无头可复现的本地图片转换

#### 市场规模估算

- TAM（总可寻址市场）：~30 亿美元/年（全球图片/媒体优化工具）
- SAM（可服务市场）：~6 亿美元（本地/浏览器/离线优先工具）
- SOM（可获取市场，3 年内）：600 万 - 1200 万美元

#### 未来变现方向参考

当前 PicShift 完全免费，但如果未来考虑变现：

| 层级 | 定价 | 功能 |
|---|---|---|
| Free | $0 | 完整浏览器应用，基础批量 |
| Developer Pro | $7/月 | 更高批量、CLI 访问、高级预设 |
| Team | $49/月（5 席） | 团队 CLI、自托管、共享预设 |
| Enterprise | 定制 | 签名二进制、气隙部署、SLA、合规文档 |
| CI Runner 席位 | $199/年 | CI/CD 无头运行时许可 |

这些不是现在要做的，但作为长期方向参考。

#### 竞品市场份额估算

| 竞品 | 估算份额 | 估算年收入 |
|---|---|---|
| Cloudinary | 28% | $1.2-2 亿 |
| TinyPNG | 18% | $600-2000 万 |
| Squoosh | 12% | 极少（开源） |
| ShortPixel | 8% | $400-1200 万 |
| Kraken.io | 7% | $300-800 万 |
| ImageOptim | 6% | <$200 万 |
| Convertio | 6% | $200-800 万 |
| Photopea | 5% | $300-1000 万 |

#### 对当前 SEO 策略的启示

- **Alternatives 页面的竞品选择**有据可依：TinyPNG（18% 份额）、Squoosh（12%）、CloudConvert、ShortPixel 都是值得写 alternatives 的目标
- **blog 主题可以借鉴竞品弱点**：比如"Why local processing matters"、"TinyPNG uploads your files — here's an alternative that doesn't"
- **ICP 排序**指导内容方向：开发者和隐私用户是最优先的目标群体，内容应该围绕他们的关切（隐私、本地处理、WASM 技术）来写

### 技术 SEO 完美清单（新站必做）

以下是新站上线时应该一次性做到位的技术 SEO 项，全部在代码层面可控，不依赖外链和权重。

#### `<head>` 必备 meta

- `charset` + `viewport` — 基础中的基础
- `title`（50-60 字符）+ `description`（150-160 字符）
- `link rel="canonical"` — 每个页面必须有，指向自己的规范 URL
- `meta name="theme-color"` — 移动端浏览器顶栏颜色，深浅模式各一个
- hreflang — 多语言站点的每个页面列出所有语言版本 + `x-default`

#### Open Graph（社交分享）

- `og:type` — 普通页面用 `website`，**博客文章必须用 `article`**
- `og:title` / `og:description` / `og:url` / `og:image`
- `og:image:alt` — 无障碍 + 部分平台展示需要
- `og:image:width` + `og:image:height` — 让平台正确渲染预览
- `og:locale` + `og:locale:alternate` — 多语言
- 文章类页面额外加：`article:published_time` / `article:modified_time` / `article:author` / `article:tag`

#### Twitter Card

- `twitter:card` = `summary_large_image`
- `twitter:title` / `twitter:description` / `twitter:image` / `twitter:image:alt`

#### JSON-LD 结构化数据

- `WebSite` — 全站级，但**不要加 `SearchAction` 除非真的实现了站内搜索**（Google 对此有严格的真实性要求）
- `WebApplication` / `SoftwareApplication` — 工具页
- `Article` — 博客文章
- `BreadcrumbList` — 面包屑导航
- `FAQPage` — FAQ 内容
- `HowTo` — 步骤类内容

#### Sitemap

- 使用精确的 `lastmod`（基于 git 历史，不是构建时间）
- `robots.txt` 里的 `Sitemap:` 指向正确的 URL

#### 404 页面

- 必须有自定义 `404.astro`，生成品牌一致的 `404.html`
- 提供"返回首页"和其他导航入口，降低用户流失

#### 图片优化

- 所有 `<img>` 必须有 `width` + `height`（防止 CLS）
- 首屏图（LCP 候选）：`loading="eager"` + `decoding="async"`
- 非首屏图：`loading="lazy"` + `decoding="async"`
- 图片格式优先 WebP

#### 字体

- 关键字体 `preload` + `font-display: swap`（防止 FOIT）

#### 其他

- `robots.txt` — `Allow: /` + `Sitemap:` 绝对 URL
- `llms.txt` / `llms-full.txt` — LLM 可读的站点说明，**每次内容大更新后同步时间戳和 Key pages**
- PWA manifest — 图标、名称、主题色
- favicon 全套 — `favicon.ico` + PNG 16/32 + `apple-touch-icon` 180

### 2026-03-29 技术 SEO 完善记录

#### 本次解决的问题

| 问题 | 修复 | 影响 |
|---|---|---|
| `WebSite` JSON-LD 有虚假 `SearchAction` | 移除 `potentialAction` | 消除 Google 结构化数据违规风险 |
| 博客 `og:type` 固定为 `website` | Layout 支持传入 `ogType`，博客传 `article` + 文章元数据 | 社交分享正确识别为文章，解锁 `article:published_time` 等属性 |
| 博客 OG 图用全站通用图 | `cover` 字段自动传给 Layout 的 `ogImage` | 社交分享展示文章专属 cover 图 |
| 缺 `meta theme-color` | 深浅模式各一个 | 移动端浏览器顶栏颜色融合 |
| 缺 `og:image:alt` / `twitter:image:alt` | 用页面 title 自动填充 | 无障碍 + 平台展示 |
| 缺 `meta name="author"` | 博客页自动从 frontmatter 输出 | LinkedIn Post Inspector 正确识别作者 |
| 无自定义 404 页面 | 新建 `404.astro` + wrangler `not_found_handling: "404-page"` | 品牌一致的错误页 |
| 博客图片缺 `loading`/`decoding` | cover 用 `eager`，内文图用 `lazy`，全部 `decoding="async"` | Web Vitals 优化 |
| Sitemap lastmod 每次 build 全刷 | 基于 git 历史的精确 lastmod，改了才更新 | 爬虫效率 + Google 信任 |

#### 踩坑记录

**1. Cloudflare Bot Fight Mode 拦截社交爬虫**

症状：Twitter/LinkedIn 分享链接时 OG 图不显示，但 curl 测试一切正常。

原因：Bot Fight Mode 对自动化请求发起 JS Challenge，社交平台爬虫（Twitterbot、LinkedInBot）不能执行 JS，被拦截。curl 能过是因为 Cloudflare 对不同来源 IP 的检测策略不同。

解决：关闭 Bot Fight Mode（Security > Bots）。对需要被搜索引擎和社交平台抓取的公开网站，这个功能弊大于利。

教训：**新站上线后第一时间检查 Cloudflare 安全设置，确保 Bot Fight Mode 关闭。**

**2. Twitter 卡片缓存无法主动清除**

症状：修复 OG 标签后重新分享同一 URL，Twitter 仍然不显示图片。

原因：Twitter 在 2022 年关闭了 Card Validator 工具，现在没有官方方式强制刷新 URL 的卡片缓存。缓存是 URL 级别的，删推重发不能清除。

解决：
- 等缓存自然过期（通常几天）
- 用 URL 参数绕过：`?v=2` 让 Twitter 认为是新 URL
- **最重要的是：第一次分享前确保 OG 标签和图片都已生效**

教训：**博客发布后，先用第三方工具（如 LinkedIn Post Inspector、opengraph.xyz）验证 OG 渲染正常，再分享到社交平台。第一次的结果会被缓存，修复成本很高。**

**3. Cloudflare Workers 静态资产不自动使用 404.html**

症状：创建了 `404.astro`，构建出了 `404.html`，但线上访问不存在的路径显示浏览器默认 404。

原因：Cloudflare Workers 静态资产默认 `not_found_handling: "none"`，返回空 body + 404 状态码，不读 `404.html`。

解决：在 `wrangler.jsonc` 里加 `"not_found_handling": "404-page"`。

教训：**Cloudflare Workers ≠ Cloudflare Pages，静态资产的 404 行为需要显式配置。**

**4. WebP cover 图质量不足导致社交预览模糊**

症状：LinkedIn Post Inspector 预览的 cover 图明显模糊。

原因：cover 图导出时用了默认 WebP 质量（约 quality 85，47KB），在社交卡片放大展示后压缩痕迹明显。

解决：以后生成 cover 图统一用 WebP quality 95（约 70KB），多 20KB 但清晰度差别很大。

教训：**已经压缩过的 WebP 不能通过重新保存为更高 quality 来恢复清晰度，必须从原始源文件重新导出。**

**5. LinkedIn 分享方式影响 OG 卡片展示**

症状：在 LinkedIn 发表"文章"（Article）并贴 URL，没有 OG 卡片预览。

原因：LinkedIn 只有"直接分享帖子"才会渲染 OG 卡片。文章正文和评论里的 URL 只是纯文本链接。

教训：**要在 LinkedIn 展示 OG 卡片，必须用"开始帖子" → 粘贴 URL → 等卡片出现 → 发布。不能在文章或评论里贴链接。**

#### 社交分享前的验证清单

每次发布新页面或博客文章，分享到社交平台前必须确认：

1. **Cloudflare Bot Fight Mode** — 必须关闭
2. **部署已完成** — 在 Cloudflare Dashboard 确认最新版本已上线
3. **OG 标签验证** — 用 LinkedIn Post Inspector（https://www.linkedin.com/post-inspector/）检查 title/image/type 全部正确
4. **图片可访问** — `curl -I https://picshift.app/blog/xxx-cover.webp` 返回 200
5. **先验证再分享** — 第一次分享的结果会被缓存，修复成本高

### 不要做的事（经验教训清单）

- 不要每天盯 GSC 刷数据，7 天看一次够了
- 不要因为单周排名波动就改页面
- 不要为没有搜索量的词单独写文章
- 不要同时改太多页面，会搞乱因果判断
- 不要在 title / description 里塞竞品品牌词
- 不要用机械翻译做多语言，要用 GSC 里真实出现的本地搜索表达
- 不要依赖 `npx` 拉最新版外部工具做部署，要锁版本或显式配置
- 不要信 Reddit 上说"发现了你站的漏洞要赏金"的 DM
- **不要在 JSON-LD 里声明不存在的功能**（如 SearchAction 没有对应的站内搜索）
- **不要所有页面都用 `og:type=website`**，博客文章要用 `article`
- **不要在 OG 验证之前就分享到社交平台** — 第一次的缓存很难清除
- **不要开 Cloudflare Bot Fight Mode** — 会拦截 Twitter/LinkedIn/Google 等合法爬虫
- **不要用低质量 WebP 做 cover 图** — quality 95 只比 85 多 20KB，但社交预览清晰度差别很大

### 外部验证：工具站内容优化的真实回报

以下是一位独立开发者在优化工具站 OnPage SEO 和内容后的真实数据分享，与 PicShift 的增长经验高度吻合。

#### 他的数据

- 上线后没有加新页面，外链只花了不到 300 美元
- 优化前：日 UV 30，GSC 曝光 100
- 优化后半个月：GSC 曝光涨到 300，日 UV 稳定 400+
- 增长来源不是外链，是**纯内容优化**

#### 他做了什么

- 花一周拆解了几个 SEO 做得最好的竞品网站
- 逐句优化每一段文案：可读性、场景词、变体词、长尾词、高转化修饰词
- 检查语句是否通顺、是否用最简单的词汇描述
- 精细到"多一个逗号"都要考虑

#### 他的结论

> "低估了内容对工具站的影响力。"
>
> "按说我都能想把内容优化到多一个逗号，同样上一个站，直接用 AI 一把梭出来的落地页肯定是打不过我的。"
>
> "不断加内页和不断加外链，这两个事情里面有太多的细节，不同的人执行起来效果差了很多。"

#### 对 PicShift 的启示

1. **内容质量 > 内容数量** — 精心打磨 22 个工具页的文案，比快速铺 100 个薄内容页有效
2. **AI 生成的文案需要人工精修** — AI 出初稿，但场景词、长尾词、可读性必须人工逐句调
3. **OnPage SEO 的 ROI 最高** — 不花钱，不依赖第三方，完全自己可控，效果持久
4. **PicShift 的验证** — 我们的排名从 75 → 64，曝光从 500 → 1730，路径完全一致
