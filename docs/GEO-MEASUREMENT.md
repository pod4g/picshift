# PicShift GEO 监测与验收

本文件定义生成式搜索与 AI 引荐的可观测口径。它只用于趋势分析，不把爬取次数、引用次数或引荐访问单独解释为排名提升。

## 指标分层

| 层级 | 指标 | 数据源 | 解释边界 |
|---|---|---|---|
| 发现 | AI crawler 请求、状态码、路径 | Cloudflare AI Crawl Control | 证明抓取发生，不代表已被引用 |
| 引用 | 被引用页面、引用次数、grounding query | Bing Webmaster Tools AI Performance；Google Search Console Generative AI 报表（开放后） | 证明进入支持范围内的 AI 答案，不代表点击或转化 |
| 引荐 | `ai_referral` 事件、landing URL、provider | Umami | 证明 AI 渠道带来访问，不记录完整 referrer 或用户问题 |
| 使用 | `file_add`、`convert_complete`、`download_single`、`metadata_download` | Umami | 用于判断 AI 引荐是否完成核心工具任务 |

## Umami 事件口径

页面会根据官方 UTM source 或浏览器 referrer 识别以下规范化渠道：

- `chatgpt`
- `perplexity`
- `claude`
- `copilot`
- `gemini`
- `you`
- `phind`
- `meta_ai`
- `poe`

每个落地会话最多记录一次 `ai_referral`。自定义数据只包含 `provider`；事件 URL 被强制规范为不带 query/hash 的 pathname，referrer 字段会被移除，因此 UTM campaign、完整引荐地址和用户问题不会进入该事件 payload。

建议漏斗：

1. `ai_referral`
2. `file_add` 或 `metadata_scan`
3. `convert_complete` 或 `metadata_clean`
4. `download_single`、`download_zip` 或 `metadata_download`

## Cloudflare 验收

每次发布后检查 AI Crawl Control → Metrics：

- `OAI-SearchBot` 的 2xx/3xx 是否持续出现
- 403、429、5xx 是否由 WAF、挑战或限流产生
- 404 是否只来自不存在或探测型路径
- `/robots.txt`、`/sitemap-index.xml`、核心 docs 和工具页是否可访问

不要仅凭 User-Agent 判断请求一定来自官方服务。对异常请求应结合 Cloudflare verified bot 识别或厂商公布的 IP 范围核验。

## Google 与 Bing

Google Search Console 的 Generative AI 控制和性能报表为分批开放功能。资源出现入口后：

1. 确认顶级域名属性处于 Include
2. 按页面、国家和设备导出基线
3. 使用 28 天对比 28 天，避免用短期波动下结论

Bing Webmaster Tools 完成站点验证后，导出 AI Performance 中的 cited pages、citations 和 grounding queries。未登录或未验证时，不以第三方估算替代官方基线。

## 2026-08-04 基线快照

| 检查项 | 结果 |
|---|---|
| Cloudflare `OAI-SearchBot`，过去 24 小时 | 33 次请求；29 次 2xx/3xx；4 次 404；0 次 403 |
| 4 个 404 路径 | `/.env.old`、`/terraform.tfstate`、`/netlify.toml`、`/awsconfiguration.json`，均为探测型不存在路径 |
| Cloudflare Block AI bots | Off |
| Google Search Console 生成式 AI 专属入口 | 当前资源尚未显示 |
| Bing Webmaster Tools | 当前浏览器未登录，尚无官方 AI Performance 基线 |

该快照不是长期事实。后续检查应新增带日期的记录，不覆盖历史值。

## 发布验收

- `pnpm geo:audit`
- `pnpm test:unit`
- `pnpm e2e:prod`
- Cloudflare 中 OAI-SearchBot 无新增 403、429 或 5xx
- Umami 中测试会话只产生一次 `ai_referral`，且 payload 不含完整查询参数
