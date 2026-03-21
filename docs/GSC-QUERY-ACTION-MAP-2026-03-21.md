# GSC Query Action Map (2026-03-21)

本文件基于 `过去 7 天`（`2026-03-12` ~ `2026-03-18`）GSC 导出，用于固定当前 query 到页面的映射和下一步动作。

## A 层：已有正向信号，继续巩固

| Query | 展示 | 点击 | 排名 | 建议页面 | 当前状态 | 下一步 |
| --- | ---: | ---: | ---: | --- | --- | --- |
| `webp a jpg` | 16 | 2 | 62.8 | `/es/webp-to-jpg` | 首次产生点击，排名改善 15 位 | 不要改页面，继续观察 |
| `jpg in png` | 31 | 0 | 49.5 | `/de/jpg-to-png` | 排名持续改善 | 继续观察 |
| `avif to png` | 29 | 0 | 72.1 | `/avif-to-png` | 稳定曝光 | 保持不动 |
| `transformer png en jpg` | 14 | 0 | 73.6 | `/fr/png-to-jpg` | 排名小幅改善 | 保持不动 |
| `convertir webp a jpg` | 10 | 0 | 71.6 | `/es/webp-to-jpg` | 排名改善 10 位 | 保持不动 |
| `de webp a jpg` | 9 | 0 | 73.1 | `/es/webp-to-jpg` | 排名改善 | 保持不动 |
| `webp to jpg` | 10 | 0 | 72.7 | `/webp-to-jpg` | 排名改善 | 保持不动 |
| `convert avif to png` | 9 | 0 | 67.8 | `/avif-to-png` | 稳定 | 保持不动 |
| `jpg to avif` | 5 | 0 | 54.4 | `/jpg-to-avif` | 排名稳定在前 55 | 保持不动 |
| `avif to png converter` | 6 | 0 | 60.0 | `/avif-to-png` | 稳定 | 保持不动 |

## B 层：新冒头或有潜力，值得补强

| Query | 展示 | 排名 | 建议页面 | 语言 | 下一步 |
| --- | ---: | ---: | --- | --- | --- |
| `redimensionar imagen` | 12 | 80.0 | `/es/image-resizer` | es | 补本地化 FAQ 和正文 |
| `cambiar resolucion de imagen` | 8 | 87.8 | `/es/image-resizer` | es | 与上合并优化 |
| `cambiar tamaño de imagen` | 6 | 96.3 | `/es/image-resizer` | es | 与上合并优化 |
| `comprimir imagenes` | 7 | 89.6 | `/es/image-compressor` | es | 补本地化 FAQ |
| `größe von webp bild ändern` | 7 | 88.1 | `/de/image-resizer` | de | 先观察，可能值得补德语 FAQ |
| `画像最適化` | 7 | 88.7 | `/ja/image-compressor` | ja | 补 query 风格 FAQ |
| `conversor de jpg para png` | 4 | 65.0 | `/pt/jpg-to-png/` | pt | 补本地化正文 |
| `heic a png` | 6 | 62.0 | `/es/heic-to-png` | es | 补本地化 FAQ |
| `pasar archivo webp a jpg` | 6 | 71.0 | `/es/webp-to-jpg` | es | 已有不错内容，继续观察 |
| `convertir webp en jpg` | 7 | 83.0 | `/fr/webp-to-jpg` | fr | 继续观察 |
| `webp to heif` | 3 | 20.3 | `/webp-to-heif` | en | 排名大幅前推到 20，值得关注是否持续 |

## C 层：继续观察

| Query | 展示 | 排名 | 判断 |
| --- | ---: | ---: | --- |
| `avif to heif` | 5 | 86.8 | 新出现，量低，观察 |
| `comprimi immagine` | 5 | 85.4 | 意大利语信号，先观察 |
| `画像 最適化` | 5 | 89.4 | 和 `画像最適化` 类似，合并观察 |
| `file quality` | 9 | 53.1 | 排名不错但意图不明确 |
| `quality file` | 4 | 65.8 | 同上 |

## 页面优先级

### 第一优先级：不要动，继续观察

- `/es/webp-to-jpg`
- `/heic-to-png`
- `/jpg-to-webp`
- `/avif-to-png`
- `/fr/png-to-jpg`
- `/ja/image-compressor`
- `/webp-to-heif`

### 第二优先级：补强新冒头页面的本地化内容

- `/es/image-resizer`
- `/es/image-compressor`
- `/es/heic-to-png`
- `/ru/image-compressor`
- `/de/jpg-to-png`
- `/pt/jpg-to-png/`
- `/pt/heic-to-png`

### 第三优先级：跟进法语 resizer URL 归并

- 在 GSC 中对 `https://picshift.app/fr/image-resizer/` 做 URL Inspection
- 确认 Google 选定的 canonical
- 如果仍未正确归并，手动请求编入索引

## URL 归一状态

| 异常 URL | 上轮展示 | 本轮展示 | 判断 |
| --- | ---: | ---: | --- |
| `http://picshift.app/fr/image-resizer` | 123 | 0 | 已收敛 |
| `https://www.picshift.app/es/webp-to-jpg` | 110 | 5 | 基本收敛 |
| 其他 `http/www` 变体 | - | 1-4 | 残留尾巴，不需要额外处理 |

结论：URL 归一已基本完成，后续只需继续观察残留变体是否继续下降。
