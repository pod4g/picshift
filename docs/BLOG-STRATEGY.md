# Blog 内容策略

本文件记录 blog 建设的策略原则，后续写文章和搭建 blog 系统时参考。

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
