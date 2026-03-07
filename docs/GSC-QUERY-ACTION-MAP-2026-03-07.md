# GSC Query Action Map (2026-03-07)

本文件基于 `/Users/lyf/Downloads/picshift.app-Performance-on-Search-2026-03-07/` 中导出的 28 天 GSC CSV，目的是把真实曝光 query 映射到具体页面和后续动作，减少凭感觉优化。

## 数据范围

- 搜索类型：网络
- 日期：过去 28 天
- 主要文件：
  - `查询数.csv`
  - `网页.csv`
  - `图表.csv`

## 当前整体信号

- 2026-03-04 展示明显放大：`125`
- 大多数 query 仍在低位曝光区间：约 `40-95`
- 已开始出现多语言曝光：`fr / es / pt / ja / ko / ar`
- 当前更需要的是：
  - 强化重点页相关性
  - 提高重点页抓取/收录优先级
  - 逐步把 `70-90` 推到 `20-40`

## A 层：已出现明确意图，继续强化

| Query | 展示 | 排名 | Landing page | 当前意图 | 后续动作 |
| --- | ---: | ---: | --- | --- | --- |
| `avif to png` | 37 | 70.41 | `/avif-to-png` | lossless / compatibility | 补 `why not JPG/WebP`、`file size increase` 说明 |
| `webp to jpg` | 5 | 75 | `/webp-to-jpg` | compatibility | 已补 FAQ + 正文块，继续观察 |
| `convert webp to jpg` | 1 | 70 | `/webp-to-jpg` | compatibility | 已补 “How do I convert…” 问法 |
| `heic to png` | 3 | 71 | `/heic-to-png` | lossless-editing | 已补 lossless / size trade-off，继续看收录 |
| `convert heic to jpg` | 1 | 65 | `/heic-to-jpg` | compatibility | 已补 Windows / uploads / privacy |
| `heic jpg converter` | 1 | 67 | `/heic-to-jpg` | compatibility | 当前页可以承接，后续观察是否要补 “converter” 变体 |
| `png to jpg` | 1 | 91 | `/png-to-jpg` | compression-speed | 已补 transparency / size / upload 场景 |
| `jpg to webp` | 1 | 86 | `/jpg-to-webp` | compression-speed | 下一轮补正文块和 FAQ |
| `avif to jpg` | 1 | 48 | `/avif-to-jpg` | compatibility | 已补 compatibility / larger file 风险 |
| `convert avif to png` | 4 | 89.5 | `/avif-to-png` | lossless workflow | 需要进入下一轮重点页 |

## B 层：多语言 query 已出现，优先跟进高曝光页面

| Query | 展示 | 排名 | 建议页面 | 语言 | 动作 |
| --- | ---: | ---: | --- | --- | --- |
| `convertir webp en jpg` | 3 | 87 | `/fr/webp-to-jpg` | fr | 已补正文块，后续补 FAQ 本地化增强 |
| `convertir webp a jpg` | 2 | 80.5 | `/es/webp-to-jpg` | es | 后续补本地化正文块 |
| `convertidor de webp a jpg` | 1 | 76 | `/es/webp-to-jpg` | es | 与上合并优化 |
| `convertir webp a png` | 1 | 81 | `/es/webp-to-png` | es | 已补正文块到高曝光页 |
| `de webp a png` | 1 | 68 | `/es/webp-to-png` | es | 继续观察 |
| `como transformar heic em jpg` | 1 | 77 | `/pt/heic-to-jpg` | pt | 已补正文块，后续补 FAQ 口语化 |
| `transformar avif em jpg` | 1 | 40 | `/pt/avif-to-jpg` | pt | 可列入下一轮 |
| `画像圧縮` | 3 | 77 | `/ja/image-compressor` | ja | 已补正文块，后续补 query 风格 FAQ |
| `写真 圧縮` | 3 | 73.67 | `/ja/image-compressor` | ja | 与上合并优化 |
| `heic jpg 변환` | 3 | 82.33 | `/ko/heic-to-jpg` | ko | 已补正文块，后续补 query 风格 FAQ |
| `تحويل من jpg الى png` | 2 | 38 | `/ar/jpg-to-png` | ar | 已补正文块，属于优先观察页 |

## C 层：异常或需要单独处理的信号

### 1. `http` / `www` 变体仍出现在导出页表

`网页.csv` 中出现：

- `http://picshift.app/`
- `http://www.picshift.app/ja/heic-to-jpg`
- `https://www.picshift.app/es/webp-to-jpg`
- `https://www.picshift.app/pt/jpg-to-webp`

当前状态：

- 已在仓库补充 `public/_redirects`
- 已声明 `http -> https`
- 已声明 `www -> apex`

后续动作：

- 部署后用真实线上 URL 再验证一次 301
- 等待 GSC 在后续抓取中逐步收敛这些历史变体

### 2. 旧查询页仍有曝光，但已核实为真实落地页

`网页.csv` 中出现：

- `/jpg-png-to-heic`
- `/ar/jpg-png-to-heic/`
- `/fr/jpg-png-to-heic`

当前状态：

- 这些 URL 当前都是真实存在的页面，不是 404 或残留路径
- 它们承接的是“当前不支持 / 替代方案”类 query，不应直接视为脏 URL

后续动作：

- 保留这些页继续承接相关 query
- 继续用更清晰的“support status + alternatives”文案维护
- 如果未来长期低质低效，再评估是否合并或 301

### 3. `webp to heif`

`查询数.csv` 中出现：

- `webp to heif`，展示 `1`，排名 `68`

动作：

- 暂不因为单次 query 新建页面
- 先观察 7 到 14 天是否重复出现
- 若持续出现，再决定是否用 docs 或 related tools 承接

## 页面动作优先级

### 第一优先级：继续加深内容差异

- `/avif-to-png`
- `/jpg-to-webp`
- `/es/webp-to-jpg`
- `/pt/avif-to-jpg`
- `/ja/image-compressor`
- `/ko/heic-to-jpg`

### 第二优先级：观察已强化页是否起量

- `/heic-to-jpg`
- `/heic-to-png`
- `/heic-to-webp`
- `/webp-to-jpg`
- `/png-to-jpg`
- `/png-to-webp`
- `/jpg-to-avif`
- `/avif-to-jpg`

## 推荐执行顺序

1. 先盯住 A 层英文页的 GSC 变化，观察 7 到 14 天
2. 同时继续强化已出现曝光的多语言页
3. 检查 `http/www` 和旧 URL 的 canonical / redirect 统一
4. 不要因为单次低展示 query 继续大规模扩页

