# GSC Query Action Map (2026-03-14)

本文件基于 `/Users/lyf/Downloads/picshift.app-Performance-on-Search-2026-03-14/` 中导出的 `过去 7 天` GSC CSV，目的是把本轮已经出现的 query 与对应页面、下一步动作固定下来，便于继续做定向优化。

注意：

- 本次数据窗口是 `过去 7 天`
- 上轮 `2026-03-07` 的 Action Map 使用的是 `过去 28 天`
- 因此本次更适合识别：
  - 哪些 query 在短窗口内明显起量
  - 哪些页面正在承接更多真实意图
  - 哪些 URL 归因仍被宿主名或协议变体污染

## 当前整体判断

- 站点已经进入“部分重点页开始连续曝光”的阶段
- 当前最大问题不是缺少新页面，而是：
  - GSC 数据窗口内仍能看到历史 `http/www` 变体
  - 已起量页面仍普遍停留在 `50-80` 排名区间
  - 点击尚未形成稳定闭环
- 下一轮应该优先：
  - 观察 `http/www` 历史变体是否开始收敛
  - 加深已起量页的 query 匹配
  - 继续观察 14 天后的排名演化

## A 层：已明显起量，下一轮继续强化

| Query | 本轮展示 | 排名 | 建议页面 | 当前判断 | 下一步动作 |
| --- | ---: | ---: | --- | --- | --- |
| `heic to png` | 46 | 73.02 | `/heic-to-png` | 已明显起量 | 强化 lossless / editing / design handoff 场景，补 “why PNG instead of JPG” |
| `avif to png` | 54 | 71.46 | `/avif-to-png` | 已明显起量 | 强化 lossless workflow、quality retention、file size increase 解释 |
| `convert avif to png` | 9 | 67.33 | `/avif-to-png` | 相关变体开始出现 | 补更直接的 converter / how-to 问法 |
| `jpg to webp` | 10 | 66.5 | `/jpg-to-webp` | 排名改善明显 | 强化 web delivery / smaller files / faster loading 角度 |
| `heif to jpg` | 23 | 63.74 | `/heif-to-jpg` | 新出现且量不低 | 补 HEIF compatibility、older apps、upload support 场景 |
| `webp to jpg` | 11 | 76.64 | `/webp-to-jpg` | 有持续信号 | 继续补 compatibility、social uploads、email/office tools 问法 |
| `avif to jpg` | 15 | 50.4 | `/avif-to-jpg` | 曝光增加，但排名未继续前推 | 先观察，同时补 unsupported apps / fallback upload 场景 |
| `webp to png` | 9 | 85.56 | `/webp-to-png` | 有信号但还偏弱 | 强化 transparency / editing / lossless output 价值 |

## B 层：多语言页已有稳定放大，应该正式纳入重点池

| Query | 本轮展示 | 排名 | 建议页面 | 语言 | 下一步动作 |
| --- | ---: | ---: | --- | --- | --- |
| `redimensionner image` | 30 | 80.03 | `/fr/image-resizer` | fr | 补 query 风格 FAQ，强调 photo / image / resize 区别与常见场景 |
| `redimensionner photo` | 15 | 90.8 | `/fr/image-resizer` | fr | 与上合并优化，补 mobile / upload / size preset 问法 |
| `transformer png en jpg` | 12 | 76.33 | `/fr/png-to-jpg` | fr | 强化 transparency removed / smaller file / easy sharing 说明 |
| `convertisseur photo png en jpg` | 11 | 62.45 | `/fr/png-to-jpg` | fr | 补 converter 风格表达与 gratuit / en ligne 问法 |
| `convertir webp a jpg` | 9 | 81.67 | `/es/webp-to-jpg` | es | 继续强化 compatibility 和 “abrir en cualquier lugar” 场景 |
| `convertir webp a png` | 9 | 79.44 | `/es/webp-to-png` | es | 强化 transparency / edición / calidad 保留场景 |
| `de webp a jpg` | 9 | 76.44 | `/es/webp-to-jpg` | es | 补更口语化问法 |
| `画像圧縮` | 10 | 78.5 | `/ja/image-compressor` | ja | 继续补 query 风格 FAQ，强调 容量削减 / 品質維持 |
| `写真 圧縮` | 5 | 76.8 | `/ja/image-compressor` | ja | 与上合并优化 |
| `webp a jpg` | 17 | 78.47 | `/it/webp-to-jpg` 或西语系近邻页观察 | it | 先确认实际落地页和本地化质量，再决定是否进入下一轮 |

## C 层：值得观察，但暂不扩页

| Query | 本轮展示 | 排名 | 当前判断 | 动作 |
| --- | ---: | ---: | --- | --- |
| `webp to heif` | 2 | 78 | 仍有信号，但量级低 | 继续观察 7-14 天，不单独新建页 |
| `avif to webp` | 9 | 54.89 | 有一定潜力 | 先观察是否连续出现，再决定是否升优先级 |
| `jpg in png` | 28 | 54.21 | 可能对应“JPG 转 PNG”意图，但表述异常 | 先检查实际承接页与 query 质量，不急着单独调页标题 |
| `jpg in png umwandeln` | 20 | 71.85 | 同上 | 先观察是否稳定重复出现 |

## 页面动作优先级

### 第一优先级：下一轮直接动手补强

- `/heic-to-png`
- `/avif-to-png`
- `/jpg-to-webp`
- `/heif-to-jpg`
- `/webp-to-jpg`
- `/fr/png-to-jpg`
- `/fr/image-resizer`
- `/ja/image-compressor`
- `/pt/heic-to-jpg`
- `/es/webp-to-png`

### 第二优先级：继续观察后再决定是否深改

- `/avif-to-jpg`
- `/jpg-to-avif`
- `/es/webp-to-jpg`
- `/fr/webp-to-jpg`
- `/it/webp-to-jpg`

### 第三优先级：docs 继续作为 GEO 层维护

- `/docs/privacy-local-processing`
- `/docs/why-picshift`
- `/docs/format-compatibility`
- `/docs/image-quality-vs-file-size`

这类页面当前表现已经不错，原则是：

- 维持内容质量
- 继续与工具页建立语义互补
- 不需要因为短期数据就大改结构

## URL 归一异常

本轮需要重点跟进的异常 URL：

- `http://picshift.app/fr/image-resizer`
- `https://www.picshift.app/es/webp-to-jpg`
- `http://picshift.app/webp-to-heif`
- `http://picshift.app/png-to-webp`
- `https://www.picshift.app/pt/jpg-to-webp`
- `http://www.picshift.app/ja/heic-to-jpg`

当前动作：

- 以上 URL 在 `2026-03-14` 的 GSC `过去 7 天` 数据中仍然出现
- 但在本次复盘后，已在 `Cloudflare` 中完成并验证：
  - `http -> https`
  - `www -> apex`
  - `http://www -> https://apex`
- 实测验证通过：
  - `https://www.picshift.app/es/webp-to-jpg` -> `301` -> `https://picshift.app/es/webp-to-jpg` -> 站点补尾斜杠 -> `200`
  - `http://www.picshift.app/ja/heic-to-jpg` -> `301` -> `https://www...` -> `301` -> `https://picshift.app/...` -> 站点补尾斜杠 -> `200`
- 因此下一次复盘时，对这些 URL 的判断应以“历史数据是否开始下降”为主，而不是继续把它们视为尚未配置 redirect 的证据

## 推荐执行顺序

1. 继续观察 `http/www` 历史变体是否在 7 到 14 天窗口内下降
2. 继续强化 A 层英文页，优先处理 `/heic-to-png`、`/avif-to-png`、`/jpg-to-webp`
3. 同步强化 `fr` 的高曝光页，尤其是 `/fr/png-to-jpg` 与 `/fr/image-resizer`
4. 保持 `ja / pt / es` 的高曝光页继续本地化补强
5. 14 天后再次对照本文件，判断哪些页真正进入前 `50` 或前 `30`
