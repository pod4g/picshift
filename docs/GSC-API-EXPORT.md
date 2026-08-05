# Search Console 联合维度导出

`scripts/gsc-export.mjs` 用 Search Console API 导出 `页面 × 查询词 × 国家 × 设备` 联合维度，补足网页界面各 CSV 无法直接关联查询和落地页的问题。

## 使用方式

推荐使用独立的 GCP quota project。先在 Google Cloud Console 创建 Desktop 类型 OAuth Client ID 并下载 client JSON；Google Cloud 之外的 Search Console scope 需要自有 OAuth client。随后启用 Search Console API，并在 ADC 登录时显式授予只读 scope：

```bash
gcloud services enable searchconsole.googleapis.com --project="<quota-project-id>"
gcloud auth application-default login \
  --client-id-file="/path/to/client_secret.json" \
  --scopes="https://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/webmasters.readonly"
export GOOGLE_CLOUD_QUOTA_PROJECT="<quota-project-id>"
pnpm gsc:export
```

也可以不设置环境变量，运行时传入 `--quota-project <quota-project-id>`。

也可以直接提供已有的只读临时 token：

```bash
export GSC_ACCESS_TOKEN="<temporary-access-token>"
export GOOGLE_CLOUD_QUOTA_PROJECT="<quota-project-id>"
pnpm gsc:export
```

默认生成约 24 小时、7 天、28 天和 3 个日历月四个窗口，写入被 Git 忽略的 `.local-data/gsc-api-export/<timestamp>/`，避免页面与查询级数据被误提交。需要另存时可显式传入 `--output <directory>`；已有历史导出不会被移动或删除。

约 24 小时窗口使用 `hourly_all`。Search Console 的 `hour` 维度只返回整点桶，因此它不是精确到当前分钟的 true rolling 24h：导出器会取“导出时刻所在整点”及之前连续 23 个整点，共 24 个请求桶。例如在 `12:30` 导出，请求范围是前一天 `13:00` 至当天 `12:00`。API 可能因为延迟、零数据或隐私省略而没有返回全部 24 个桶；`manifest.json` 和窗口内的 `metadata.json` 会记录请求桶、实际返回的首尾桶与数量，以及 Google 返回的 `first_incomplete_hour` 和是否包含仍可能变化的数据。字段语义以 [Google Search Analytics Query 官方文档](https://developers.google.com/webmaster-tools/v1/searchanalytics/query) 为准。

其余窗口会先用 `dataState=all + date` 探测 Google 返回的 `first_incomplete_date`，再把前一天作为共同的最近完整日，并用 `dataState=final` 导出。这样“7 天”始终表示 7 个完整日，不会因为 Search Console 延迟而只包含 5 至 6 个有数据日。需要复现特定快照时使用 `--end-date`；只有明确需要 fresh data 时才使用 `--data-state all`。

每个窗口保存两份独立基准：一份使用 `auto` 聚合的整体汇总，用于核对 Search Console 总点击和总展示；另一份使用与联合明细相同的 `byPage` 聚合，但不输出页面、查询、国家和设备维度，用于计算可比较的联合维度覆盖率。覆盖率基准只有单行、按日或按小时结果，不会再次受到顶部维度行截断影响。

CSV 对可能被 Excel 或 Sheets 当作公式的查询词增加安全前缀；未经改写的原始维度值保存在同目录的 `search-analytics.json`。

导出期间 `manifest.json` 的 `status` 为 `incomplete`；只有全部窗口成功后才会原子更新为 `complete`。约 24 小时窗口的 `hourlyBuckets` 同时保存 `requestedFirstBucket`、`requestedLastBucket`、实际 `firstBucket`、`lastBucket`、`returnedCount` 与 `freshData`；其中 `requestedRangeIncludesIncompleteData` 表示请求范围触及未完成小时，`partialDataIncluded` 表示实际返回行中包含仍可能变化的小时。网络异常、429 和 5xx 会进行有上限的超时重试，403 等永久权限错误不会重试。分析前必须先确认 manifest 状态和小时桶边界。

精确过滤单页：

```bash
pnpm gsc:export -- --page https://picshift.app/png-to-jpg
```

只检查请求而不联网或写文件：

```bash
pnpm gsc:export -- --dry-run
```

`--dry-run` 不进行完整日探测，因此未显式传入 `--end-date` 时，只会临时显示太平洋时间的昨天；正式导出会在认证后自动解析最近完整日。

当前 `--type` 只接受 `web`、`image`、`video` 和 `news`。Discover 与 Google News 报告没有本工具承诺的查询词联合维度，因此不会伪装成同一种导出格式。

## 数据边界

- “24h”是与整点对齐的约 24 小时窗口，不是精确到导出分钟的滚动窗口；分析时必须使用 manifest 中的实际首尾桶与 `first_incomplete_hour`；
- 每次请求使用 API 允许的 25,000 行上限，并通过 `startRow` 自动翻页；
- 7 天、28 天和 3 个月窗口按天请求后在本地聚合，避免跨日期范围只得到顶部结果；
- Search Console 每个日期、每种搜索类型最多暴露 50,000 行；命中上限的日期会写入 `potentiallyTruncated` 与 `cappedSlices`，不得当作完整数据；
- 即使完整翻页，Google 仍可能隐藏匿名或隐私查询，因此导出结果不能宣称覆盖全部真实查询；
- 页面、查询、国家和设备联合维度用于归因诊断，总点击和展示使用整体汇总核对，覆盖率只与同为 `byPage` 的无维度基准比较。
