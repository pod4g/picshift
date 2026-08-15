# PicShift SEO 迭代记录（2026-08-15）

## 数据来源与边界

本轮直接使用已登录 Google Search Console 的精确网页过滤，数据最后更新于 2026-08-15，完整日窗口截至 2026-08-13。界面 CSV 原始导出保存在本机 `.local-data/gsc-ui-export/2026-08-15/`，该目录已被 Git 忽略，不进入生产提交。

仓库的 Search Console API 导出器同时进行了只读尝试，但当前配额项目尚未启用 Search Console API，因此本轮没有把 API 失败误写成零数据，也没有擅自变更 Google Cloud 项目设置。界面导出的查询、国家和设备表仍受匿名查询及隐私阈值影响，分层行数不能与页面总数强行对账。

## 今日唯一页面级实验

目标页面：`https://picshift.app/heic-to-webp`

| 窗口 | 点击 | 展示 | CTR | 平均排名 |
|---|---:|---:|---:|---:|
| 近 7 天 | 4 | 802 | 0.50% | 7.50 |
| 近 28 天 | 11 | 2,093 | 0.53% | 8.33 |
| 近 3 个月 | 20 | 3,588 | 0.56% | 9.08 |

近 28 天主要查询：

| 查询 | 点击 | 展示 | CTR | 平均排名 |
|---|---:|---:|---:|---:|
| `heic to webp` | 5 | 1,350 | 0.37% | 8.20 |
| `heic to webp converter` | 1 | 167 | 0.60% | 7.89 |
| `convert heic to webp` | 2 | 142 | 1.41% | 8.17 |

分层信号进一步支持 CTR 瓶颈：美国近 28 天 283 展示、0 点击、排名 8.8；桌面端 1,652 展示、CTR 0.61%、排名 8.19；移动端 98 展示、0 点击、排名 9.12。国家和设备表受隐私阈值影响，只用于定位方向，不用于还原全量总数。

现有 title：

`HEIC to WebP Converter - Smaller Web Images | PicShift`

实验 title：

`HEIC to WebP Converter — Free, No Upload | PicShift`

改动只替换 title。description、H1、正文、FAQ、页面内链和指向该页的新站内外链接全部冻结，避免再次出现多变量实验。2026-08-15 抽查的直接竞品样本中，[TwineConvert](https://twineconvert.com/heic-to-webp) 的标题使用 `Free, in Your Browser`，[SnapHEIC](https://snapheic.com/) 的首屏使用 `no upload` 与 `unlimited and free`，[SammaPix](https://www.sammapix.com/convert/heic-to-webp) 的标题使用 `Free Online - No Upload`。这是三个页面的便利样本，只用于验证卖点表达，不代表整个 SERP；本次 title 只采用 PicShift 已实现且可验证的免费与不上传源图事实，不引入速度、质量或压缩率承诺。

## 同日候选页复核

| 页面 | 近 28 天页面数据 | 主要查询信号 | 今日判断 |
|---|---|---|---|
| `/es/image-resizer` | 23 点击、2,641 展示、CTR 0.87%、排名 21.66 | `cambiar tamaño de imagen` 268 展示、CTR 0.75%、排名 14.16 | 排名仍是主要瓶颈，现有西语 title、H1、FAQ 和 authority pin 已覆盖查询，不改 meta 或正文 |
| `/metadata-remover` | 2 点击、97 展示、CTR 2.06%、排名 41.49 | `exif remover` 仅 5 展示、排名 75.8 | 样本和排名不足，不做 CTR 改写；只从隐私说明页增加一个高度相关的上下文链接 |
| `/png-to-jpg` | 3 点击、1,340 展示、CTR 0.22%、排名 37.07 | `png to jpg` 537 展示、0 点击、排名 31.10 | 核心问题仍是排名，现有 title 已精确覆盖查询，不改 title |

## `webp-to-heif` 集群复核

对所有网址包含 `webp-to-heif` 的页面做 3 个月精确集群过滤，结果为 0 点击、9 展示、平均排名 6.6。页面从创建起就是明确说明“不支持 HEIF 输出”的支持状态页，不是假装可转换的工具页。

本轮不执行集群 `noindex`。原因是当前没有 crawl budget 或索引污染证据，页面陈述真实，而且 9 次展示不足以证明保留或移除会带来增长。实际调整仅限于把隐私处理文档中不相关的 `/webp-to-heif` 链接替换为 `/metadata-remover`，停止从该高相关文档给不支持的输出意图分配权重。

## 验收规则

- 上线后 7 天只检查 Google 是否采用新标题以及页面排名是否异常跌出前 12
- 上线满 14 天后使用精确页面过滤复盘固定查询、国家和设备
- 成功标准为页面平均排名保持 7–11，页面 CTR 至少达到 0.8%，核心查询 `heic to webp` CTR 明显高于 0.37%
- 若 Google 未采用新标题，不把 CTR 波动归因于 title
- 实验期不新增指向 `/heic-to-webp` 的站内或外部深链

## 外部权威工作边界

今天已准备 Metadata Remover 的目录提交与定制外联材料，但公开编辑 DEV 文章、提交目录、创建 GitHub PR 或发送邮件都属于对外代表性操作，必须在实际提交前由项目所有者确认。`/heic-to-webp` 的新增深链延后到本次 title-only 实验结案后。
