# SEO 迭代总结（2026-04-18）

本文件固定 `2026-04-18` 这一轮落地改动，并给 **约 7 天后（建议 2026-04-25）** 的复盘提供统一入口。  
更底层的规则、经验教训与 URL 规范化原则见：

- `docs/SEO-PLAYBOOK.md` → **「### 尾斜杠与规范 URL（2026-04-18 更新）」**
- `docs/SEO-PLAYBOOK.md` → **「### 2026-04-18 迭代记录」**

## 本轮做了什么

### 1. URL 规范化：全站切到不带尾斜杠

- **`astro.config.mjs`**：站点路由切到 **`trailingSlash: 'never'`**。
- **`wrangler.jsonc`**：Cloudflare Workers 静态资源使用 **`assets.html_handling = 'drop-trailing-slash'`**。
- **`public/_redirects`**：带尾斜杠页面统一 **`308`** 到不带尾斜杠版本。
- **`src/lib/htmlCanonicalUrl.ts`**、**`src/i18n/index.ts`**、**`src/layouts/Layout.astro`**：`canonical`、`hreflang`、`og:url`、站内路径生成全部改为不带尾斜杠。
- **页面与资料同步**：工具页、blog、docs、多语言路径、JSON-LD、`llms.txt`、`llms-full.txt`、sitemap 统一为不带尾斜杠。

### 2. 修了 URL 迁移带来的回归问题

- **`src/components/layout/Header.astro`**：为英文-only 页面增加语言切换回退逻辑。  
  blog 和 `404` 不再生成 `/zh/blog`、`/zh/404` 这类不存在路径，而是回到对应语言首页。
- **`src/pages/[slug].astro`**：清理英文工具页残留的带尾斜杠相关工具 / docs 内链。
- **`src/pages/[lang]/[slug].astro`** 与 **`src/pages/[lang]/docs/*.astro`**：多语言页面包屑首页统一改成不带尾斜杠的 `localePath('/', lang)`。
- **`tests/e2e/seo-geo.spec.ts`**：补了 E2E，覆盖英文-only 页面语言切换和页面型内部链接不保留尾斜杠。

### 3. 基于本次 GSC 优先级完成了剩余 2 个 P1 和 2 个 P2

#### P1-1：`heif-to-jpg` 法语 / 俄语本地化

- 新增或补强：
  - `fr/heif-to-jpg`
  - `ru/heif-to-jpg`
- 改动内容：
  - `title`
  - `description`
  - `H1`
  - 首屏 `intro`
  - FAQ
  - search-intent 解释卡片

#### P1-2：法语近赢页精修

- 精修页面：
  - `fr/image-resizer`
  - `fr/png-to-jpg`
- 改动方向：
  - 更贴近 `redimensionner image en ligne`
  - 更贴近 `convertisseur png jpg en ligne`
  - 让标题、描述、首屏文案与 FAQ 更像真实搜索表达，而不是通用模板

#### P2-1：俄语压缩页强化

- 精修页面：
  - `ru/image-compressor`
- 改动方向：
  - 更贴近 `сжать фото`
  - 更贴近 `уменьшить размер фото`
  - 强化“在线压缩 / 本地处理 / 不上传 / 先比较再下载”的落地表达

#### P2-2：葡语第二波改写

- 精修页面：
  - `pt/jpg-to-png`
  - `pt/image-resizer`
- 改动方向：
  - 更贴近 `converter jpg para png`
  - 更贴近 `redimensionar imagem online`
  - 更贴近巴西葡语真实场景表达（上传、表单、社媒、编辑、二次导出）

### 4. 本轮验证

- `npm run build`
- `npm run seo:audit`
- `npm run e2e -- tests/e2e/seo-geo.spec.ts`
- 线上 Cloudflare 验证：
  - 不带尾斜杠页面返回 `200`
  - 带尾斜杠页面单跳 `308` 到不带尾斜杠
  - query string 保留
  - 静态资源不误伤

## 上次读取的 GSC 数据是什么

本轮优化基于 **2026-04-18 导出的 GSC 数据**，并与 **2026-04-11 上一轮记录**对比。

### 总体基线

| 指标 | 2026-04-11 | 2026-04-18 | 说明 |
|---|---:|---:|---|
| 28 天展示 | 7717 | 8733 | 站点整体可见度继续增长 |
| 28 天点击 | 13 | 15 | 点击开始跟上，但仍偏少 |
| 28 天平均排名 | 62.6 | 58.1 | 整体位置在前移 |
| 重复 URL 数 | 33 | 44 | 尾斜杠问题扩大 |
| 重复 URL 展示 | 1952 | 2868 | URL 规范化已经开始干扰主力页 |

### 本轮锁定的重点页面 / 查询词

| 优先级 | 页面 / 查询 | 数据点 | 为什么这次做 |
|---|---|---|---|
| P1 | `/fr/heif-to-jpg` | 约 105 展示，平均排名约 14.5 | 已进入近赢区，但之前还在走通用模板 |
| P1 | `/ru/heif-to-jpg` | 约 78 展示，平均排名约 11.0 | 已接近首页，适合强化本地化表达 |
| P1 | `redimensionner image en ligne` | 约 52 展示，平均排名约 26.2 | 明确对应 `fr/image-resizer` 的法语近赢词 |
| P1 | `convertisseur png jpg en ligne` | 约 43 展示，平均排名约 24.3 | 明确对应 `fr/png-to-jpg` 的法语近赢词 |
| P2 | `/ru/image-compressor` | 28 天约 324 展示，平均排名约 42.7；最近 7 天继续上升 | 俄语压缩页在往前走，值得补意图词 |
| P2 | 巴西 / 葡语盘 | 巴西约 2641 展示、0 点击、平均排名约 67.8 | 量最大，但仍缺更贴近查询词的文案 |
| P2 | `converter jpg para png` / `redimensionar imagem` | 葡语高意图词仍有展示但点击弱 | 对应 `pt/jpg-to-png` 和 `pt/image-resizer` |

## 7 天后下次重点关注什么

建议在 **2026-04-25 左右** 打开 GSC，优先看下面这些点。

### P0：先看 URL 归一化是否真的收口

- `page` 维度里是否仍有一批带尾斜杠 URL 吃展示
- `Google 选择的规范网址` 是否仍与预期不同
- `重复网页`、`备用网页（带正确 canonical）` 是否下降
- 重点看：
  - `/blog` / `/blog/`
  - `/docs` / `/docs/`
  - `/pt/jpg-to-png` / `/pt/jpg-to-png/`
  - `/ru/image-compressor` / `/ru/image-compressor/`

### P1：看 `fr/ru/heif-to-jpg` 有没有往点击区继续前进

- 页面：
  - `/fr/heif-to-jpg`
  - `/ru/heif-to-jpg`
- 重点观察：
  - 展示是否继续增长
  - 平均排名是否继续向前（尤其是否逼近前 10）
  - CTR 是否从 0 开始松动
- 重点 query：
  - `heif to jpg`
  - `convert heif to jpg`
  - `heif to jpg converter`
  - 各语言下对应的本地化变体

### P1：看法语近赢页有没有被新文案顶起来

- 页面：
  - `/fr/image-resizer`
  - `/fr/png-to-jpg`
- 重点 query：
  - `redimensionner image en ligne`
  - `convertisseur png jpg en ligne`
  - `convertisseur png vers jpg`
- 重点观察：
  - 排名是否向前 5-10 位
  - 是否开始拿到首批点击
  - title / description 首句是否更贴近真实 query

### P2：看俄语压缩页的意图词有没有更集中

- 页面：
  - `/ru/image-compressor`
- 重点 query：
  - `сжать фото`
  - `сжать изображение`
  - `уменьшить размер фото`
  - `сжать фото без потери качества`
  - `сжать фото онлайн`
- 重点观察：
  - 7 天平均排名是否继续改善
  - 展示是否继续聚焦到“压缩 / 减小大小”这一类 query

### P2：看葡语第二波改写有没有先带来排名改善

- 页面：
  - `/pt/jpg-to-png`
  - `/pt/image-resizer`
- 重点 query：
  - `converter jpg para png`
  - `como converter jpg para png`
  - `redimensionar imagem`
  - `redimensionar imagem online`
- 重点观察：
  - 是否先出现排名改善，再出现点击
  - 巴西市场是否仍然高展示零点击

## 如果 7 天后看到这些结果，下一步怎么做

| 现象 | 下轮动作 |
|---|---|
| `fr/ru/heif-to-jpg` 排名继续前移，但 CTR 仍低 | 微调标题前 50 字与 description 首句，加入更强的兼容性场景词 |
| `fr/image-resizer` / `fr/png-to-jpg` 进入更稳定的前 20 | 继续加法语 FAQ / 相关页内链，扩大近赢池 |
| `ru/image-compressor` query 开始聚焦“сжать фото”类词 | 继续补相邻俄语工具页，形成语义簇 |
| 葡语页仍高展示零点击 | 第三波改写可继续推进到 `/pt/png-to-jpg`、`/pt/image-compressor` |
| URL 重复问题仍未明显收口 | 重点排查外链、旧 sitemap、以及站外缓存的旧 URL 形态 |
