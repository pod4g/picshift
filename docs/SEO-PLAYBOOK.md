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

PicShift 现状：**基本完成**。Astro 静态站 + Cloudflare CDN + 正确的 canonical/hreflang + JSON-LD + sitemap + URL 归一 + 移动端适配。后续只需维护，不需要重做。

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

#### Prompt 要求

- 风格必须和站点统一：深色背景 `#1a2332`
- 用站点主色调：indigo `#818cf8`、purple `#a78bfa`
- 要有创意，让人一看就忘不了
- 不要用 stock photo 风格，用 flat illustration / graphic design
- 明确写 "No white borders" 防止生成白边

### 不要做的事（经验教训清单）

- 不要每天盯 GSC 刷数据，7 天看一次够了
- 不要因为单周排名波动就改页面
- 不要为没有搜索量的词单独写文章
- 不要同时改太多页面，会搞乱因果判断
- 不要在 title / description 里塞竞品品牌词
- 不要用机械翻译做多语言，要用 GSC 里真实出现的本地搜索表达
- 不要依赖 `npx` 拉最新版外部工具做部署，要锁版本或显式配置
- 不要信 Reddit 上说"发现了你站的漏洞要赏金"的 DM
