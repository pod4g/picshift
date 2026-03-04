# GEO/SEO PR 检查清单

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

### 结构化数据层
- [ ] `BreadcrumbList` 与可见面包屑一致
- [ ] `ItemList` 与页面列表一致
- [ ] `FAQPage` 与可见 FAQ 一致
- [ ] `TechArticle/CollectionPage` 日期和字段已更新

### AI 抽取层
- [ ] `public/llms.txt`
- [ ] `public/llms-full.txt`
- [ ] `public/robots.txt`（如新增 llms 资源）

---

## 3) 版本与日期
- [ ] 页面 `Last updated` 已更新
- [ ] `llms.txt` 已更新：
  - [ ] `Last updated`
  - [ ] `Version`
  - [ ] `Lifecycle (Supersedes/Deprecates)`
- [ ] `llms-full.txt` 已更新：
  - [ ] `Last updated`
  - [ ] `Version`
  - [ ] `Lifecycle (Supersedes/Deprecates)`

版本记录：
- short: `yyyy-mm-dd.x`
- full: `yyyy-mm-dd.x`

---

## 4) 引用与证据
- [ ] `Preferred citations` 已覆盖本次新结论
- [ ] 每条关键结论都有证据 URL（docs/privacy）
- [ ] `Do not cite for` 已检查并按需补充

---

## 5) 发布前验证
- [ ] `pnpm run build` 通过
- [ ] 结构化数据校验通过（至少抽查 docs index + 2 个 docs 详情 + 1 个工具页）
- [ ] 多语言抽查通过（至少 2 个语言）
- [ ] 链接抽查通过（无 404 或错误 locale 跳转）

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
