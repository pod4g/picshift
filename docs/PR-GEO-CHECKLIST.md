# GEO/SEO PR 检查清单

> 官方边界（复核于 2026-08-04）：[Google Search 明确忽略 `llms.txt`，且不要求 GEO 专用 Schema](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)。`llms.txt` 是 PicShift 的辅助实验，不是 Google 排名条件；PR 不得仅因没有修改该文件而被阻断。

## 1) 本次事实变更
- [ ] 本次是否修改产品事实（如本地处理、支持格式、账号要求）
- [ ] 本次是否新增或修改 FAQ 结论
- [ ] 本次是否变更引用优先级（Preferred citations）

事实变更摘要（必填）：
- 变更点 1：
- 变更点 2：
- 变更点 3：

---

## 2) 需同步的页面和文件

### 页面内容层
- [ ] `src/pages/docs/index.astro`
- [ ] `src/pages/docs/privacy-local-processing.astro`
- [ ] `src/pages/docs/format-compatibility.astro`
- [ ] `src/pages/docs/image-quality-vs-file-size.astro`
- [ ] `src/pages/[lang]/docs/*`（如涉及多语言）
- [ ] `src/pages/[lang]/[slug].astro`（如涉及工具页 title/meta）
- [ ] `src/i18n/toolMeta.ts`（如涉及 fallback 标题模板）
- [ ] `src/i18n/translations/*`（如涉及显式翻译覆盖）

### 结构化数据层
- [ ] `BreadcrumbList` 与可见面包屑一致
- [ ] `ItemList` 与页面列表一致
- [ ] 如使用 `FAQPage`，其内容与可见 FAQ 一致，且未把它当作 GEO 专用标记
- [ ] `TechArticle/CollectionPage` 日期和字段已更新

### AI 抓取与辅助摘要层（仅在相关事实或策略变化时）
- [ ] 如 ChatGPT 搜索可见性策略变化，已核对 `OAI-SearchBot`；它控制 ChatGPT 搜索摘要与片段
- [ ] 如模型训练授权策略变化，已分别核对 `GPTBot` 与 `Google-Extended`；两者不等同于搜索收录开关
- [ ] 如核心产品事实或证据 URL 变化，已评估是否同步可选的 `public/llms.txt` 与 `public/llms-full.txt`
- [ ] 如 crawler policy 变化，已同步 `public/robots.txt` 注释和规则，并保留官方来源
- [ ] `public/robots.txt` 不含全站 `Disallow: /`，且核心搜索、用户触发与 AI 爬虫对首页、docs 与 llms 资源的有效规则均为允许

---

## 3) 版本与日期
- [ ] 发生实质内容变化的页面 `Last updated` 已更新；未变化页面没有被构建日期批量标新
- [ ] 如本次选择更新 `llms.txt`，以下字段一致：
  - [ ] `Last updated`
  - [ ] `Version`
  - [ ] `Lifecycle (Supersedes/Deprecates)`
- [ ] 如本次选择更新 `llms-full.txt`，以下字段一致：
  - [ ] `Last updated`
  - [ ] `Version`
  - [ ] `Lifecycle (Supersedes/Deprecates)`

版本记录：
- short: `yyyy-mm-dd.x`
- full: `yyyy-mm-dd.x`

---

## 4) 引用与证据
- [ ] 如维护辅助 llms 文件，`Preferred citations` 已覆盖本次新结论
- [ ] 每条关键结论都有证据 URL（docs/privacy）
- [ ] 定量结论已提供样本、codec / 参数、测试环境与日期；没有可复现实验时未给出固定百分比
- [ ] 如维护辅助 llms 文件，`Do not cite for` 已检查并按需补充

---

## 5) 发布前验证
- [ ] `pnpm seo:audit` 通过（硬错误为 0；title / description 长度提示按实际页面判断）
- [ ] `pnpm geo:audit` 通过（包含 robots 有效规则、llms 事实与引用路由审计）
- [ ] `pnpm run build` 通过
- [ ] 结构化数据校验通过（至少抽查 docs index + 2 个 docs 详情 + 1 个工具页）
- [ ] 多语言抽查通过（至少 2 个语言）
- [ ] 链接抽查通过（无 404 或错误 locale 跳转）

### 多语言标题风格校验（框架统一，措辞本地化）
- [ ] 标题结构一致：`核心动作/类型 - 核心卖点 | PicShift`
- [ ] 不强行同词直译：允许各语言使用本地常见说法（非机械对齐）
- [ ] 中文避免“转换器”硬名词化，优先动作表达（如 `WebP 转 PNG`）
- [ ] 日/韩/阿卖点词已做母语化（如 `プライバシー保護 / 개인정보 보호 / يحافظ على الخصوصية`）
- [ ] 显式翻译与 fallback 模板风格一致（避免同语言内两套话术）

抽查 URL（填写）：
- 
- 
- 
- 
- 

---

## 6) 风险与回滚
潜在风险：
- 
- 

回滚方案：
- 恢复文件：
- 恢复版本：

---

## 7) 事实核查关卡（涉及 blog / docs / 任何对外事实陈述时必过）

> 详细规则见 [docs/SEO-PLAYBOOK.md §事实核查硬性约束](./SEO-PLAYBOOK.md#事实核查硬性约束写-blog-前必读)。本节是**发布前最后一道闸**。任何一项不通过都不可发。

- [ ] 文章 / 文档中**每一个**版本号、日期、百分比、license 声明、用户行为断言，都已**就近**挂上 markdown 链接到 S/A 级来源
- [ ] 没有出现 "据说 / 业内普遍认为 / 通常 / 最近 / 前段时间" 这类无依据语
- [ ] 没有未经核实的绝对句（"总是 / 从不 / 任何 X 都 / 默认"）
- [ ] 涉及"在某浏览器 / 某 OS / 某软件中如何如何"的描述：能本地实测的，**已实测过至少一次**
- [ ] 引用日期精确到年月，引用百分比标注样本与环境
- [ ] 已扫一眼 SEO-PLAYBOOK 末尾"事故记录"表，确认本次没有重蹈同类错误
- [ ] 如果本次发现了新的事实错误（review 中或上线前发现），已**追加到事故记录表**作为反面教材

事实声明逐条核查表（关键事实声明，每条一行）：

| 事实声明 | 来源等级（S/A/B） | 来源链接 | 已就近挂链接 |
| --- | --- | --- | --- |
|  |  |  | [ ] |
|  |  |  | [ ] |
|  |  |  | [ ] |
