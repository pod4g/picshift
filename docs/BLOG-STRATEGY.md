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

### 不要做的事（经验教训清单）

- 不要每天盯 GSC 刷数据，7 天看一次够了
- 不要因为单周排名波动就改页面
- 不要为没有搜索量的词单独写文章
- 不要同时改太多页面，会搞乱因果判断
- 不要在 title / description 里塞竞品品牌词
- 不要用机械翻译做多语言，要用 GSC 里真实出现的本地搜索表达
- 不要依赖 `npx` 拉最新版外部工具做部署，要锁版本或显式配置
- 不要信 Reddit 上说"发现了你站的漏洞要赏金"的 DM
