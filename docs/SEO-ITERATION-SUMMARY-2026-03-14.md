# SEO 迭代总结（2026-03-14）

本文件用于固定 `2026-03-14` 这轮实际落地的 SEO / GEO 改动、验证结果，以及下一次 `7 天后` 复盘时需要重点关注的数据。

推荐下次先读本文件，再读：

- `docs/SEO-GEO-REVIEW-2026-03-14.md`
- `docs/GSC-QUERY-ACTION-MAP-2026-03-14.md`

## 这轮做了什么

这轮不是继续大规模扩页，而是把已经出现曝光信号的页面做更深的 query-oriented 内容强化，并补齐 URL 归一的基础设施。

### 1. 完成 Cloudflare 层的 URL 归一

已完成：

- `Always Use HTTPS = On`
- `www -> apex` 的 `301` Redirect Rule

已验证：

- `http://picshift.app/fr/image-resizer`
  - `301` -> `https://picshift.app/fr/image-resizer`
- `https://www.picshift.app/es/webp-to-jpg`
  - `301` -> `https://picshift.app/es/webp-to-jpg`
  - 站点补尾斜杠
  - 最终到 `https://picshift.app/es/webp-to-jpg/`
- `http://www.picshift.app/ja/heic-to-jpg`
  - `301` -> `https://www.picshift.app/ja/heic-to-jpg`
  - `301` -> `https://picshift.app/ja/heic-to-jpg`
  - 站点补尾斜杠
  - 最终到 `https://picshift.app/ja/heic-to-jpg/`

结论：

- `http -> https` 已生效
- `www -> apex` 已生效
- 后续 GSC 中继续出现 `http/www` 更可能是历史数据滞后，而不是规则仍未配置

### 2. 强化英文重点工具页

本轮已继续补强这些英文页：

- `/heic-to-png`
- `/heif-to-jpg`
- `/webp-to-jpg`
- `/jpg-to-webp`
- `/webp-to-png`
- `/avif-to-jpg`
- `/avif-to-png`

主要改动方向：

- `title` / `description` 更贴近真实搜索意图
- `introText` 更像真实使用场景，而不是模板式格式说明
- FAQ 改成更像真实 query 的问法
- `searchIntentSections` 更明确区分：
  - compatibility
  - lossless editing
  - transparency
  - web delivery
  - file size trade-off

这一步的目标不是把页面写长，而是让每一页更明确承接一个主意图，减少模板页之间的相似度。

### 3. 强化多语言高曝光页

本轮已继续补强这些多语言页：

- `fr/png-to-jpg`
- `fr/image-resizer`
- `fr/webp-to-jpg`
- `fr/webp-to-png`
- `fr/jpg-to-png`
- `fr/jpg-to-webp`
- `es/webp-to-jpg`
- `es/webp-to-png`
- `es/png-to-jpg`
- `es/jpg-to-webp`
- `pt/heic-to-jpg`
- `pt/webp-to-jpg`
- `ja/image-compressor`

处理原则：

- 不做机械翻译
- 尽量贴近当地用户真实会搜的表达
- FAQ 以真实问题口吻写，而不是“什么是格式 X”式空泛问答
- 正文强调当地用户更可能遇到的实际场景：
  - uploads
  - old apps
  - email / office tools
  - transparency
  - editing
  - file size

补充观察：

- `/fr/png-to-jpg` 已经出现非常明确的法语 query 聚合信号
- 这不是只命中一个词，而是在承接一整组同义或近义法语表达
- 页面级 GSC 查询列表里，已出现的代表性 query 包括：
  - `png jpg`
  - `convertir une image png en jpg en ligne`
  - `png en jpg en ligne`
  - `convertir png jpeg`
  - `convertir png vers jpg`
  - `png vers jpg`
  - `comment convertir un png en jpeg`
  - `convertir un fichier png en jpg gratuit`
  - `transformer image png en jpeg`
  - `transformer un png en jpg`
- 这说明该页当前的问题已经不是“是否命中正确意图”，而是“能否继续把排名从 `80-90` 区间往前推”
- 因此这页当前不宜继续频繁改动，更适合给它一个 `7 天` 观察窗口，看 query 是否继续集中、排名是否继续改善、是否开始出现点击

### 4. 顺手修复了一个移动端问题

已修复：

- `Footer` 在移动端横向撑开页面，导致出现横向滚动条

处理方式：

- 去掉 footer 链接区在移动端的强制不换行
- 允许邮箱在小屏断行
- 小屏隐藏分隔符，避免换行后视觉混乱

## 这轮改动涉及的主要文件

- `src/data/tools.ts`
- `src/i18n/translations/fr.ts`
- `src/i18n/translations/es.ts`
- `src/i18n/translations/pt.ts`
- `src/i18n/translations/ja.ts`
- `src/components/layout/Footer.astro`

## 这轮验证结果

已完成验证：

- Cloudflare 真实线上 `curl` 跳转链验证
- `npm run seo:audit`
- 最近编辑文件的 lint 检查

结果：

- URL 归一规则验证通过
- 无重复 title
- 无重复 description
- 无高相似标题告警
- 无新增 lint 报错

## 现在的策略

从 `2026-03-14` 起，不再继续加改页面，先观察 `7 天`。

原因：

- 当前已经完成一轮比较集中、且有明确目标页的内容强化
- 如果继续不停改，会把下一次 GSC 复盘的因果关系搞乱
- 更好的做法是给这批改动一个观察窗口，先看是否开始转化为更集中的 query、更高排名，或少量点击

## 下次复盘时间

建议下一次复盘时间：

- `2026-03-21`

即在本轮改动后，先等待约 `7 天` 再看。

## 7 天后重点看什么

下次不要泛看全站，而是固定看以下 4 类信号。

### 1. URL 归一是否开始收敛

重点看：

- `http://picshift.app/`
- `https://www.picshift.app/`
- `http://www.picshift.app/`

目标信号：

- 这些变体 URL 的曝光下降
- 对应的 `https://picshift.app/...` 页面曝光更集中

代表性 URL：

- `http://picshift.app/fr/image-resizer`
- `https://www.picshift.app/es/webp-to-jpg`
- `http://www.picshift.app/ja/heic-to-jpg`

在 GSC 中要做：

- `URL Inspection`
- `测试实际网址`
- 查看 `Google 选定的规范网页`

### 2. 重点英文页是否继续往前走

优先观察这些页：

- `/heic-to-png`
- `/avif-to-png`
- `/jpg-to-webp`
- `/heif-to-jpg`
- `/webp-to-jpg`
- `/webp-to-png`
- `/avif-to-jpg`

重点指标：

- impressions 是否继续增长
- 平均排名是否从 `70-90` 往 `40-70` 推进
- 是否开始出现更稳定的 query 组合

### 3. 多语言高曝光页是否更稳定

优先观察：

- `/fr/png-to-jpg`
- `/fr/image-resizer`
- `/fr/webp-to-jpg`
- `/es/webp-to-jpg`
- `/es/webp-to-png`
- `/pt/heic-to-jpg`
- `/pt/webp-to-jpg`
- `/ja/image-compressor`

目标信号：

- 曝光不再只是单次冒头
- query 更集中
- 排名开始稳定改善

特别说明：

- `/fr/png-to-jpg` 是下一次复盘时必须优先看的页面
- 这页已经证明文案方向是对的，下一次重点不再是看“有没有命中 query”
- 而是看：
  - query 是否继续围绕 `png en jpg / png vers jpg / convertir png en jpg` 这组法语意图集中
  - 平均排名是否从 `80-90` 继续往 `70-80`、`60-70` 推进
  - 是否开始出现少量点击

### 4. 是否开始出现真实点击

当前阶段主要还是曝光增长。

下次要特别看：

- 是否出现更多有点击的 page
- 是否开始有少量稳定点击 query
- 点击是否开始集中到 apex canonical 页面，而不是 `http/www` 变体

## 7 天后建议导出或截图的数据

下次至少准备：

- `查询数.csv`
- `网页.csv`
- `图表.csv`
- `过滤器.csv`

截图建议准备：

- 最近 `7 天`
- 最近 `14 天`
- `最近 7 天 vs 前 7 天`
- `Pages` 报表里与 `http/www` 相关的页面
- `URL Inspection` 中代表性异常 URL 的结果

## 7 天后重点查询

优先检查这些 query 是否继续起量或改善：

- `heic to png`
- `avif to png`
- `convert avif to png`
- `jpg to webp`
- `heif to jpg`
- `webp to jpg`
- `avif to jpg`
- `webp to png`
- `redimensionner image`
- `redimensionner photo`
- `transformer png en jpg`
- `convertir webp a jpg`
- `convertir webp a png`
- `画像圧縮`
- `写真 圧縮`

## 7 天后如何判断“这轮有效”

如果下次看到下面这些信号，可以认为这轮改动开始起效：

- `http/www` 变体曝光开始下降
- apex canonical 页面曝光更集中
- 重点页平均排名继续往前推
- 多语言页不再只是零散曝光，而是开始稳定承接
- 出现少量真实点击

## 7 天后如何判断“还需要继续补”

如果下次看到这些情况，就说明还要继续迭代：

- `http/www` 变体仍高位出现，且不下降
- 重点页曝光有了，但排名停在 `70-90`
- query 继续很分散，无法集中到目标页
- 多语言页只有曝光，没有持续排名改善
- 点击仍然长期为零

## 下次和 AI 协作的推荐方式

下次可以直接这样说：

1. 先看 `docs/SEO-ITERATION-SUMMARY-2026-03-14.md`
2. 再看 `docs/SEO-GEO-REVIEW-2026-03-14.md`
3. 再看 `docs/GSC-QUERY-ACTION-MAP-2026-03-14.md`
4. 然后结合我这次新的 GSC 导出，判断这轮内容优化和 URL 归一是否开始转化为更好的排名与更集中的曝光

这样做的好处是：

- 不需要重新回忆这次到底改了哪些页
- 能把“技术修复”与“数据滞后”区分开
- 更容易判断下一轮到底该继续补内容，还是该停下来等收敛
