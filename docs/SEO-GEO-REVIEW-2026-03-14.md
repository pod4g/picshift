# SEO / GEO 7 天复盘（2026-03-14）

本文件用于记录 `2026-03-14` 这次 GSC 复盘的结论、趋势判断和下一轮动作。

注意：

- 本次导出目录：`/Users/lyf/Downloads/picshift.app-Performance-on-Search-2026-03-14`
- 本次 `GSC` 过滤器为：`过去 7 天`
- 上轮基线 `2026-03-07` 使用的是：`过去 28 天`
- 因此本次更适合看：
  - 趋势方向
  - 按天平均曝光变化
  - 是否出现新的稳定 query / 页面信号
- 不适合直接用“总展示量”与上轮做绝对值硬比较

## 复盘目标

本次不是立刻继续大规模扩页，而是回答三个问题：

- 上轮 `2026-03-07` 的重点页强化，是否已经开始被 Google 感知
- 哪些页面已经开始起量，值得进入下一轮继续加深
- 当前最先要修的是内容问题，还是 URL / canonical / redirect 问题

## 本次数据范围

读取的核心文件包括：

- `查询数.csv`
- `网页.csv`
- `图表.csv`
- `过滤器.csv`

过滤器确认：

- 搜索类型：`网络`
- 日期：`过去 7 天`

## 本次核心结论

一句话结论：

- 本轮方向是正向的，已经从“几乎只有零散低位曝光”进入到“部分重点页开始稳定拿到展示”的阶段
- 但当前仍主要停留在曝光增长阶段，点击尚未形成稳定结果
- 下一步最重要的不是继续平均改全站，而是：
  - 先收敛 `http/www` 变体
  - 再继续强化已经起量、但排名仍在 `50-80` 区间的页面

## 正向信号

### 1. 英文重点页开始拿到更稳定曝光

这次 7 天数据里，几个上轮重点页已经明显起量：

- `/heic-to-png`
  - query `heic to png`：上轮 `28 天 3` 展示 -> 本轮 `7 天 46`
  - 页面：`107` 展示，平均排名 `72.41`
- `/avif-to-png`
  - query `avif to png`：上轮 `28 天 37` 展示 -> 本轮 `7 天 54`
  - query `convert avif to png`：上轮 `28 天 4` -> 本轮 `7 天 9`
  - 页面：`101` 展示，平均排名 `70.49`
- `/jpg-to-webp`
  - query `jpg to webp`：上轮 `28 天 1` -> 本轮 `7 天 10`
  - 排名从 `86` 提升到 `66.5`
- `/jpg-to-avif`
  - 页面开始获得 `16` 展示，平均排名 `48.88`
- `/avif-to-jpg`
  - query `avif to jpg`：上轮 `28 天 1` -> 本轮 `7 天 15`
  - 页面：`53` 展示

结论：

- 上轮针对英文工具页做的 query-oriented 强化，已经开始把部分页面从“几乎没有信号”推到“有持续展示”
- 当前更像是收录与相关性开始放大的早期阶段

### 2. 多语言页的信号比上轮更强

本轮多语言页不再只是零散冒头，而是出现了更明显的放大：

- `fr`
  - `/fr/png-to-jpg`：`309` 展示，平均排名 `77.59`
  - `/fr/image-resizer` 与其 `http` 变体合计信号很强
- `es`
  - `/es/webp-to-jpg` 与 `https://www.picshift.app/es/webp-to-jpg` 合计展示明显
  - `/es/webp-to-png/`：`65` 展示
- `ja`
  - `/ja/image-compressor`：`54` 展示，排名从 `95.96` 改善到 `76.94`
- `pt`
  - `/pt/heic-to-jpg/`：`10` 展示，平均排名改善到 `61.9`
- `de / it`
  - 本轮也开始出现更多曝光，不再局限于上轮重点观察的语言

结论：

- 多语言页已经开始从“薄壳曝光”向“可继续优化的真实承接页”转变
- `fr` 目前最值得提升到下一轮重点池

### 3. docs 页表现很好，说明知识型内容方向是对的

本轮 docs 页有明显正向表现：

- `/docs/privacy-local-processing`：`90` 展示，平均排名 `2.94`
- `/docs/why-picshift`：`44` 展示，平均排名 `4.2`
- `/docs/image-quality-vs-file-size`：`33` 展示，平均排名 `26.7`
- `/docs/format-compatibility/`：`25` 展示，平均排名 `3.36`
- `/docs`：`18` 展示，平均排名 `4.61`

结论：

- 上轮把站点往“知识型工具站”推进的方向是正确的
- 当前不仅工具页在被看见，文档页也在承接搜索和 GEO 信号

## 当前主要问题

### 1. `http/www` 变体仍在大量分裂信号

这次 7 天数据里，变体 URL 仍然明显存在：

- `http://picshift.app/fr/image-resizer`：`123` 展示，`1` 点击
- `https://www.picshift.app/es/webp-to-jpg`：`110` 展示
- `http://picshift.app/webp-to-heif`：`7` 展示
- `http://picshift.app/png-to-webp`：`4` 展示
- `https://www.picshift.app/pt/jpg-to-webp`：`4` 展示
- `http://www.picshift.app/ja/heic-to-jpg`：`2` 展示

这说明：

- 当前 canonical 目标虽然明确，但真实抓取与展示层面仍未完全收敛
- URL 信号分裂已经开始实质影响页面归因
- 这不是“可顺便处理”的小问题，而是下一轮的高优先级问题

补充说明：

- 以上判断来自 `2026-03-14` 当天拿到的 GSC `过去 7 天` 数据
- 但在本次复盘之后，已实际完成 Cloudflare 层的 URL 归一配置与线上验证
- 因此从现在开始，`http/www` 继续出现在 GSC 中，更应理解为历史数据滞后，而不是当前规则仍未配置

### 1.1 Cloudflare URL 归一验证结果

本次复盘后，已在 Cloudflare 中完成：

- `Always Use HTTPS = On`
- `www -> apex` 的 `301` Redirect Rule

实际验证结果如下：

- `http://picshift.app/fr/image-resizer`
  - 第一跳：`301` 到 `https://picshift.app/fr/image-resizer`
- `https://www.picshift.app/es/webp-to-jpg`
  - 第一跳：`301` 到 `https://picshift.app/es/webp-to-jpg`
  - 随后由站点补尾斜杠到 `/es/webp-to-jpg/`
  - 最终落到：`https://picshift.app/es/webp-to-jpg/`
- `http://www.picshift.app/ja/heic-to-jpg`
  - 第一跳：`301` 到 `https://www.picshift.app/ja/heic-to-jpg`
  - 第二跳：`301` 到 `https://picshift.app/ja/heic-to-jpg`
  - 随后由站点补尾斜杠到 `/ja/heic-to-jpg/`
  - 最终落到：`https://picshift.app/ja/heic-to-jpg/`

结论：

- `http -> https` 已生效
- `www -> apex` 已生效
- 最终 canonical 宿主名已统一到 `https://picshift.app/...`
- 当前仍可能在响应链中看到一次站点级 `307`，其作用只是补尾斜杠，不再属于域名归一问题

### 2. 曝光已经扩大，但点击还没有形成稳定结果

本轮 `查询数.csv` 中没有稳定点击 query，页面点击也只有极少数：

- `http://picshift.app/fr/image-resizer`：`1` 点击
- `https://picshift.app/`：`1` 点击
- `https://picshift.app/zh-Hant/heic-to-avif/`：`1` 点击

这意味着：

- 当前主要提升发生在“被看见”层
- 还没有稳定进入“可持续拿点击”的阶段
- 下一轮更应继续争取：
  - 从 `70-90` 提升到 `40-70`
  - 从 `40-70` 继续逼近前 `30`

## 重点页判断

### 已经开始起量，应该继续加深

- `/heic-to-png`
- `/avif-to-png`
- `/jpg-to-webp`
- `/heif-to-jpg`
- `/webp-to-jpg`
- `/ja/image-compressor`
- `/pt/heic-to-jpg`
- `/es/webp-to-png`

这些页面的共同点：

- 已经拿到真实曝光
- 排名仍大多在 `50-80`
- 仍然处于最适合通过内容差异和 query 匹配继续往前推的区间

### 可以继续观察，但先不重投入

- `/avif-to-jpg`
- `/jpg-to-avif`
- `/es/webp-to-jpg`
- `/fr/webp-to-jpg`

原因：

- 已经有信号，但一部分页面排名波动仍较大
- 部分页面同时受到 `http/www` 变体分裂影响
- 更适合在 URL 归一之后再判断内容是否还需要大改

### 暂时不建议因为单次 query 扩页

- `webp to heif`

虽然本轮仍然出现，但目前量级仍低，优先级不足以驱动独立新页建设。

## 下一轮建议执行顺序

### 第一优先级：先修 URL 信号归一

本项已在本次复盘后完成配置并验证：

- `http -> https`
- `www -> apex`
- `http://www -> https://apex`

后续要做的，不再是继续配规则，而是继续观察数据收敛：

- 下一次 GSC 复盘时，继续观察变体曝光是否减少
- 看 apex URL 的曝光是否进一步集中
- 如果 `http/www` 变体在 14 到 28 天后仍持续显著出现，再进一步做 GSC 检查与抓取验证

### 第二优先级：继续做“已经起量页”的 query-oriented 补强

优先顺序建议：

1. `/heic-to-png`
2. `/avif-to-png`
3. `/jpg-to-webp`
4. `/heif-to-jpg`
5. `/webp-to-jpg`
6. `/fr/png-to-jpg`
7. `/fr/image-resizer`
8. `/ja/image-compressor`
9. `/pt/heic-to-jpg`
10. `/es/webp-to-png`

补强方向仍保持和上轮一致：

- 强化真实 query 问法
- 补“为什么转成这个格式”
- 补“不适合转换的场景”
- 补兼容性 / 体积 / 透明度 / 编辑稳定性 trade-off
- 多语言页继续本地化，而不是机械翻译

### 第三优先级：继续维护 docs 作为 GEO 证据层

当前 docs 页已经开始被很好地抓取，说明这条线应继续保留并缓慢扩充。

原则：

- 不要突然扩很多 docs
- 优先围绕已经有展示的主题继续补强
- 保持 docs 与工具页之间的内部链接和语义互补关系

## 下一轮不建议做的事

- 不要因为单个低展示 query 继续大规模扩页
- 不要脱离 GSC 凭感觉全站重写 title / description
- 不要把精力平均分散到所有语言、所有工具页
- 不要在 `http/www` 仍未归一时过早判断页面表现失真

## 本次复盘结论

本轮 7 天复盘说明：

- 上轮 SEO / GEO 冲刺已经开始转化为更大的曝光面
- 重点英文页与多语言页都出现了可继续加深的信号
- docs 页的表现证明“知识型工具站”方向有效
- 在 `2026-03-14` 的数据窗口中，最大的结构性阻碍仍表现为 URL 信号分裂
- 但在本次复盘后，Cloudflare 层的 `http -> https` 与 `www -> apex` 已完成并验证通过
- 因此下一次复盘时，应把重点从“是否已配置规则”转向“GSC 是否开始逐步收敛历史变体”

所以，下一轮的核心不是“再铺更多页面”，而是：

- 等待 URL 信号逐步收敛
- 再集中打磨已经起量的页
- 用 14 天和 28 天后的 GSC 继续判断哪些页真正进入稳定增长
