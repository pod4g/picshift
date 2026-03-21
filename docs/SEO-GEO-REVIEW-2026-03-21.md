# SEO / GEO 7 天复盘（2026-03-21）

本文件记录 `2026-03-21` 这次 GSC 复盘的结论、趋势判断和下一轮动作。

基线文档：

- `docs/SEO-ITERATION-SUMMARY-2026-03-14.md`
- `docs/GSC-QUERY-ACTION-MAP-2026-03-14.md`

## 数据范围

- 导出目录：`/Users/lyf/Downloads/picshift.app-Performance-on-Search-2026-03-21`
- 过滤器：`过去 7 天`（`2026-03-12` ~ `2026-03-18`）
- 上轮 `2026-03-14` 导出也是 `过去 7 天`（`2026-03-05` ~ `2026-03-11`）
- 两次窗口可以直接做 7d vs 7d 对比

## 整体数据

| 指标 | 上轮 7 天 | 本轮 7 天 | 变化 |
| --- | ---: | ---: | ---: |
| 总展示 | 1,969 | 1,317 | -652 |
| 总点击 | 3 | 3 | 0 |
| query 数 | 584 | 588 | +4 |
| 页面数 | 133 | 139 | +6 |

总展示下降，但这主要由两个原因驱动：

- URL 归一开始生效，以前分裂在 `http/www` 变体上的展示被合并
- 部分页面展示出现自然周间波动

## 核心结论

### 本轮最大的结构性改善：URL 归一正在生效

| 异常 URL | 上轮展示 | 本轮展示 | 变化 |
| --- | ---: | ---: | ---: |
| `http://picshift.app/fr/image-resizer` | 123 | 0 | 彻底消失 |
| `https://www.picshift.app/es/webp-to-jpg` | 110 | 5 | -105 |

与此同时，对应的 apex canonical URL 展示上升：

| apex URL | 上轮展示 | 本轮展示 | 变化 |
| --- | ---: | ---: | ---: |
| `https://picshift.app/es/webp-to-jpg` | 9 | 124 | +115 |

这说明 `2026-03-14` 完成的 Cloudflare `Always Use HTTPS` + `www -> apex` 规则已经转化为 GSC 层面的信号收敛。

剩余 `http/www` 变体都在 `1-5` 展示级别，属于残留尾巴。

### 第一次在工具页上看到真实搜索点击

| 页面 | 展示 | 点击 | 排名 | 对应 query |
| --- | ---: | ---: | ---: | --- |
| `https://picshift.app/es/webp-to-jpg` | 124 | 2 | 70.7 | `webp a jpg` |
| `https://picshift.app/ja/image-compressor` | 31 | 1 | 75.9 | - |

这不再只是"被看见"，而是开始真正承接用户行为。

query `webp a jpg` 的排名从 `78.5 -> 62.8`，改善了 15 位，且产生了 2 次点击。

### 部分重点页排名明确前推

| 页面 | 上轮排名 | 本轮排名 | 变化 |
| --- | ---: | ---: | ---: |
| `https://picshift.app/heic-to-png` | 72.4 | 36.2 | +36 位 |
| `https://picshift.app/jpg-to-webp` | - | 34.0 | 新出现，直接进前 40 |
| `https://picshift.app/webp-to-png` | - | 71.7 | 新出现 |

`heic-to-png` 展示从 `107 -> 4`，但排名从 `72 -> 36`。这通常意味着 Google 在重新评估页面位置，短期展示缩窄但排名前推，属于积极信号。

### 新语言开始冒头

| 语言 | 本轮展示 |
| --- | ---: |
| es | 347 |
| fr | 329 |
| en/docs/other | 205 |
| de | 146 |
| ru | 93 |
| pt | 84 |
| ja | 51 |
| it | 45 |
| zh-Hant | 32 |
| ko | 23 |

西语现在是最大曝光语种。俄语 `ru` 的 `/ru/image-compressor` 新出现 `64` 展示，西语 `/es/image-resizer` 新出现 `65` 展示。

### 需要关注的波动

- `/fr/png-to-jpg`：`309 -> 174`，排名不变（`77.6`），属于自然波动
- `/fr/image-resizer/`：`34 -> 0`，但 `http` 变体也从 `123 -> 0`，说明 URL 归一可能把信号打散了
- `redimensionner image` / `redimensionner photo`：本轮消失，可能和法语 resizer 页的 URL 归并有关
- docs 页展示普遍下降，但排名依然靠前（`1.5`、`4.0`、`5.4`），不是降权

## 对上轮 4 个判断标准的回答

### 1. URL 归一是否开始收敛？
**是。** 最大的两个异常变体已经从 `123` / `110` 降到 `0` / `5`，apex URL 同步起量。

### 2. 重点英文页是否继续往前走？
**部分是。** `heic-to-png` 排名大幅前推到 `36`，`jpg-to-webp` 新出现在 `34`。但展示有波动，需要继续观察。

### 3. 多语言高曝光页是否更稳定？
**是。** 西语 `es/webp-to-jpg` 已经从分裂状态收敛到 apex，并出现点击。法语有波动但排名稳定。新语种开始冒头。

### 4. 是否开始出现真实点击？
**是。** `es/webp-to-jpg` 产生 2 次点击，`ja/image-compressor` 产生 1 次。这是站点历史上第一次在工具页上看到可归因的搜索点击。

## 下一轮建议

### 第一优先级：继续观察，不要大改已经起效的页面

这些页面现在处于"Google 正在重新评估"的阶段：

- `/heic-to-png`（排名大幅前推，展示暂时缩窄）
- `/jpg-to-webp`（新出现在前 40）
- `/es/webp-to-jpg`（首次点击，排名持续改善）

对这些页，最好的策略是**不动**，等 7 到 14 天看它们是否继续巩固。

### 第二优先级：补强新冒头但还偏弱的页面

这些页面已经有信号，但内容或 FAQ 还不够深：

- `/es/image-resizer`（新出现 `65` 展示）
- `/ru/image-compressor`（新出现 `64` 展示）
- `/de/jpg-to-png`（`80` 展示）
- `/es/heic-to-png`（`22` 展示）
- `/pt/jpg-to-png/`（`30` 展示）
- `/pt/heic-to-png`（`15` 展示）

这些页面目前很可能还是模板文案，值得按之前的策略做本地化补强。

### 第三优先级：跟进法语 resizer 的 URL 归并问题

`/fr/image-resizer` 的展示从 `34 -> 0`，同时 `http` 变体也从 `123 -> 0`。但 apex URL 没有接住这些展示。

建议：

- 在 GSC 里对 `https://picshift.app/fr/image-resizer/` 做 URL Inspection
- 确认 Google 是否已经把这页重新收录到正确的 canonical
- 如果还没收录，考虑在 GSC 里手动请求编入索引

### 第四优先级：考虑开始写 1 到 2 篇 blog

当前 docs 页排名依然很靠前，说明"解释型内容"对站点有正向价值。如果要开始写 blog，最值得先写的主题是：

- `PNG vs JPG: When to use which`（直接承接 `png to jpg` / `jpg to png` 这组 query）
- `Why converted files are sometimes larger`（承接 `file quality` 等解释型 query）

但这不是当前最急的事，可以放到下一轮。

## 下次复盘时间

建议 `2026-03-28` 左右再看一次，届时重点看：

- `heic-to-png` 展示是否回升（排名已经到 `36`，如果 Google 确认了位置，展示应该会跟上来）
- `es/webp-to-jpg` 是否继续有点击
- 法语 resizer 页的 URL 归并是否完成
- 新冒头的 `ru`、`de`、`pt` 页是否继续稳定

## 下次需要导出的数据

- `查询数.csv`
- `网页.csv`
- `图表.csv`
- `过滤器.csv`

建议同时导出 `过去 7 天` 和 `过去 28 天`，这样可以同时看短期趋势和中期累积效果。
