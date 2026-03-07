# Tool Pages SEO 关键词分区基线

本文件用于固定每个工具页的主意图，减少站内关键词互抢（keyword cannibalization）。

## 使用规则

- 每个工具页只绑定一个主意图桶。
- `title` 优先体现“格式词 + 场景词”。
- `description` 强化同一场景，不跨桶混写。
- 新增工具页前先运行 `npm run seo:audit`。

## 多语言标题规范（框架统一，措辞本地化）

- 统一的是结构，不统一字面词：`核心动作/类型 - 核心卖点 | PicShift`。
- 中文优先用动作表达（如 `WebP 转 PNG`），避免生硬名词化（如“转换器”）。
- 日/韩/阿等语言使用当地自然表达，不强行直译英文 `Converter`。
- 英文及部分欧洲语言可保留 `Converter/Convertidor/...`，但以当地常见搜索表达为准。
- 卖点短语可按语言习惯变化（如“保护隐私 / プライバシー保護 / 개인정보 보호”），不做机械同词对齐。

## 意图桶定义

- `compatibility`：兼容性、旧系统、通用打开、上传兼容。
- `compression-speed`：压缩率、文件体积、加载速度、Web 传输。
- `lossless-editing`：无损、编辑、重导出、生产流程稳定。
- `transparency`：透明通道、透明背景工作流。
- `general`：非转换类总工具页（如压缩器、尺寸调整）。

## 2026-03-07 SEO 冲刺优先级

本轮（2026-03-07）只优先强化英文主站的核心页，不平均用力。

### A 层：2026-03-07 必须强化

- `image-compressor`
- `image-resizer`
- `heic-to-jpg`
- `heic-to-webp`
- `heic-to-png`
- `png-to-webp`
- `png-to-jpg`
- `webp-to-jpg`
- `jpg-to-avif`
- `avif-to-jpg`

### B 层：本周继续观察

- `jpg-to-webp`
- `png-to-avif`
- `webp-to-avif`
- `avif-to-webp`
- `heic-to-avif`
- `heif-to-jpg`

### C 层：暂不主动推进

- 其余低曝光、低差异或暂未进入重点查询池的工具页

## 当前映射（英文主站）

| slug | 主意图桶 | 主关键词 | 次关键词 | 本周是否优先 | 目标查询 | 本次改动重点 |
| --- | --- | --- | --- | --- | --- | --- |
| `heic-to-jpg` | compatibility | iPhone HEIC to JPG | Windows, upload, websites | A | heic to jpg, heic to jpg windows | 标题强化兼容场景，FAQ 补 Windows/质量/隐私 |
| `heic-to-png` | lossless-editing | HEIC lossless PNG export | editing, design handoff | A | heic to png, heic to png lossless | 首段强调编辑/设计交付场景 |
| `heic-to-webp` | compression-speed | HEIC smaller web images | faster page delivery | A | heic to webp, heic to webp for web | 强化网页体积与交付速度表达 |
| `heic-to-avif` | compression-speed | HEIC modern compression | AV1, delivery pipeline | B | heic to avif | 保持技术压缩定位，暂不优先 |
| `heif-to-jpg` | compatibility | HEIF legacy compatibility | universal device support | B | heif to jpg | 补兼容性说明即可 |
| `heif-to-png` | lossless-editing | preserve HEIF detail | archive, production output | C | heif to png | 暂缓深改 |
| `heif-to-webp` | compression-speed | HEIF web delivery | smaller payloads | C | heif to webp | 暂缓深改 |
| `heif-to-avif` | compression-speed | HEIF compression upgrade | AV1-based gains | C | heif to avif | 暂缓深改 |
| `webp-to-jpg` | compatibility | WebP open anywhere | email, social uploads | A | webp to jpg, webp to jpg compatibility | 强化旧软件/上传/社媒兼容意图 |
| `webp-to-png` | transparency | lossless transparency | pixel-stable output | C | webp to png | 暂缓深改 |
| `png-to-jpg` | compression-speed | reduce PNG size | faster upload, sharing | A | png to jpg, reduce png size | 强化体积缩小和无透明场景 |
| `png-to-webp` | transparency | transparent web images | smaller transfer size | A | png to webp, png to webp transparent | 强化透明背景与网页体积 |
| `jpg-to-png` | lossless-editing | editing and re-export | avoid extra lossy pass | C | jpg to png | 暂缓深改 |
| `jpg-to-webp` | compression-speed | faster page load | smaller web images | B | jpg to webp | 后续补网页性能角度 |
| `jpg-to-avif` | compression-speed | AVIF for web delivery | stronger compression | A | jpg to avif, jpg to avif compression | 强化现代交付与压缩率 |
| `png-to-avif` | transparency | smaller transparent images | keep transparency | B | png to avif | 后续补透明 + 更小体积 |
| `webp-to-avif` | compression-speed | higher compression | AVIF-ready environments | B | webp to avif | 后续补对比意图 |
| `avif-to-jpg` | compatibility | legacy app support | unsupported AVIF endpoints | A | avif to jpg, avif not supported | 强化不兼容应用/上传端点解释 |
| `avif-to-webp` | compatibility | broader support | modern compression | B | avif to webp | 后续补广泛支持角度 |
| `avif-to-png` | lossless-editing | lossless workflow | editing pipeline stability | C | avif to png | 暂缓深改 |
| `image-compressor` | general | compress images | quality-size balance | A | compress images, reduce image size | 强化体积、质量、批量和 keep smaller |
| `image-resizer` | general | resize images | dimensions, presets | A | resize images, resize image dimensions | 强化尺寸、预设、同时转换格式 |

## 发布前检查

- 运行 `npm run seo:audit`，确保：
  - 无重复 title
  - 无重复 description
  - 无高相似 title（Jaccard >= 0.75）
- 如果有告警，先改文案再发布。
