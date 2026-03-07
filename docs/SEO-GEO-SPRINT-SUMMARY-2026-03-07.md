# SEO / GEO 冲刺总结（2026-03-07）

本文件用于固定 2026-03-07 这一轮 SEO / GEO 优化的基线、改动范围、验证结果和后续观察方式。

下次复盘时，优先把这份文档和新的 GSC 数据一起提供给 AI，这样可以直接基于同一基线做对比，而不是重新回忆上下文。

## 本轮目标

- 不是做泛泛的“全站都优化一点”
- 而是优先强化已经出现曝光、但排名仍偏低的重点页
- 同时提升这些页面对搜索引擎和大模型的可发现性、可理解性、可引用性

## 优化前的 GSC 基线

基于 2026-03-07 时提供的 GSC 截图和 28 天导出，优化前的整体状态如下：

- 大多数 query 仍处于低位曝光区间，排名大致集中在 `40-95`
- CTR 普遍偏低，很多 query 接近 `0`
- 当前核心问题更偏向：
  - 收录与抓取优先级不足
  - 重点页相关性信号不够强
  - 页面间差异度不足，尤其是模板型工具页
  - `http` / `www` 变体与历史 URL 仍在 GSC 中出现
- 英文主站已有一些核心 query 信号
- 多语言页开始出现零散曝光，尤其是：
  - `fr`
  - `es`
  - `pt`
  - `ja`
  - `ko`
  - `ar`

更细的 query 到页面映射，见 `docs/GSC-QUERY-ACTION-MAP-2026-03-07.md`。

## 本轮重点页范围

英文主站优先强化页：

- `image-compressor`
- `image-resizer`
- `heic-to-jpg`
- `heic-to-webp`
- `heic-to-png`
- `png-to-webp`
- `png-to-jpg`
- `webp-to-jpg`
- `jpg-to-avif`
- `avif-to-jpg`

后续纳入观察或补强的页：

- `avif-to-png`
- `jpg-to-webp`
- 若干多语言高曝光页

## 本轮实际做了什么

### 1. 英文重点工具页：从模板页改成 query-oriented 页面

对重点英文工具页进行了内容强化，包括：

- 重写更贴近真实搜索意图的 `title` / `description`
- FAQ 从泛化问答改为更接近真实 query 的问法
- 新增 `searchIntentSections`
- 正文块聚焦以下问题：
  - 为什么要把 X 转成 Y
  - 什么场景下 Y 是更合理的目标格式
  - 什么场景下不建议转换
  - 兼容性、体积、透明度、编辑稳定性等 trade-off

额外补充：

- `avif-to-png` 本轮也补上了 query-oriented 正文块

### 2. 多语言高曝光页：补本地化正文块和 FAQ

对已有 GSC 曝光信号的多语言页进行了优先补强，包括：

- `fr/webp-to-jpg`
- `fr/image-resizer`
- `es/webp-to-jpg`
- `es/webp-to-png`
- `pt/heic-to-jpg`
- `pt/avif-to-jpg`
- `ja/image-compressor`
- `ko/heic-to-jpg`
- `ar/jpg-to-png`

处理方式不是机械翻译，而是按 query 意图补：

- compatibility
- lossless / editing
- size trade-off
- upload / old apps / office tools

### 3. 修正多语言内容渲染链路

本轮顺手修复了一个重要问题：

- 仓库里很多语言本来已经有各自的工具页翻译
- 但实际页面渲染时，FAQ 仍可能回退到旧的通用模板
- 这会导致“明明补了本地化内容，页面却没有真正显示”

本轮已修正为：

- 多语言工具页优先读取本地化内容
- FAQ 可按语言和 slug 做定向覆盖
- 本地化正文块与 FAQ 不再被旧回退逻辑绕过

### 4. URL 归一：补充 redirect 规则

为减少 GSC 中宿主名和协议变体导致的信号分裂，本轮确认需要做：

- `http -> https`
- `www -> apex`
- `http://www -> https://apex`

这一步的目标是把历史变体逐步收敛到唯一 canonical：

- `https://picshift.app/...`

注意：

- 在你当前的 Cloudflare Workers 静态资源部署模式下，仓库内 `_redirects` 不能用于这类主机名级跳转
- 这类规则应改为在 Cloudflare 控制台的 Redirect Rules / Bulk Redirects 中配置

### 5. GSC 诊断文档化

新增或更新了两类策略文档：

- `docs/SEO-KEYWORD-MAP.md`
- `docs/GSC-QUERY-ACTION-MAP-2026-03-07.md`

作用：

- 让“query -> 页面 -> 改动动作”的映射固定下来
- 减少后续继续凭感觉改文案
- 方便后续对照 GSC 判断哪些改动有效

### 6. SEO / GEO 回归守卫

本轮还补了回归验证，避免后续改动把结构弄坏：

- Playwright E2E 核心流程
- 多语言路由 smoke
- docs 与工具页 smoke
- SEO / GEO 守卫
- 高曝光多语言 FAQ 显示守卫

## 本轮对 GEO 的直接价值

这轮优化对 GEO 的正向影响主要体现在四点：

- 更容易被发现：重点页、docs、canonical、redirect 更清晰
- 更容易被理解：FAQ 和正文块更像“可回答问题的知识块”
- 更容易被引用：docs 与 `llms.txt` / `llms-full.txt` 组成了更清晰的证据链
- 更容易做多语言归因：非英文页不再只是薄壳页

一句话总结：

- 本轮不是单纯做 SEO，而是在把 PicShift 从“工具站”继续推进成“可被模型理解和引用的知识型工具站”

## 本轮验证结果

已完成的验证包括：

- `npm run build`
- Playwright 核心 E2E
- 回归 smoke
- 多语言 FAQ 渲染守卫
- 最近编辑文件的 lint 检查

结果：

- 构建通过
- 相关 E2E 通过
- 无新增 lint 报错

注意：

- `http/www` 归一需要在 Cloudflare 控制台配置后，再用真实 URL 验证 301 是否生效

## 下次怎么复盘

建议不要“随便过几天看一眼”，而是按固定节奏回看：

### 第一次：7 天后

重点看方向是否开始变对：

- 总曝光是否继续增长
- A 层重点页是否拿到更多 query
- 平均排名是否开始从 `70-90` 往 `40-70` 走
- 多语言页是否出现更稳定曝光
- `http/www` 变体是否减少

### 第二次：14 天后

重点看是否形成稳定信号：

- 重点页 query 是否更集中
- 页面级 impressions 是否从分散变集中
- 是否开始出现少量点击
- 是否有页进入前 `50` 或前 `30`

### 第三次：28 天后

重点看结论：

- 哪些改动明显正向
- 哪些页面没有变化
- 哪些 query 漂移到了别的页
- 下一轮应该继续补内容、做收录清理，还是调整页面策略

## 下次需要提供什么

下次复盘时，建议至少提供：

- 这份文档：`docs/SEO-GEO-SPRINT-SUMMARY-2026-03-07.md`
- `docs/GSC-QUERY-ACTION-MAP-2026-03-07.md`
- 新的 GSC 导出或截图

优先给这些数据：

- `查询数.csv`
- `网页.csv`
- 最近 7 天截图
- 最近 14 天截图
- 最近 28 天截图
- 未收录 / 已发现未收录 的截图

如果可以，最好做对比：

- 最近 7 天 vs 前 7 天
- 最近 14 天 vs 前 14 天
- 最近 28 天 vs 本次优化前 28 天

## 下次和 AI 协作的推荐方式

推荐你下次直接这样说：

1. 先看 `docs/SEO-GEO-SPRINT-SUMMARY-2026-03-07.md`
2. 再看 `docs/GSC-QUERY-ACTION-MAP-2026-03-07.md`
3. 然后结合我这次给你的 GSC 数据，分析本轮优化是否正向

这样做的好处是：

- 不需要重新回忆这次改了什么
- 可以直接基于固定基线做对比
- 结论会更稳定，也更容易形成下一轮动作

## 结论

本轮 SEO / GEO 冲刺的核心，不是大规模扩页，而是：

- 强化重点页的 query 匹配能力
- 提高页面差异度
- 补齐多语言高曝光页内容
- 收敛 URL 信号
- 固化基线，方便后续做对比复盘

后续最重要的不是立刻继续改，而是观察这轮改动在 GSC 中是否开始转化为：

- 更多曝光
- 更高排名
- 更集中 query
- 更清晰页面承接关系
