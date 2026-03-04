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

## 当前映射（英文主站）

| slug | 主意图桶 | 主关键词 | 次关键词 |
| --- | --- | --- | --- |
| `heic-to-jpg` | compatibility | iPhone HEIC to JPG | Windows, upload, websites |
| `heic-to-png` | lossless-editing | HEIC lossless PNG export | editing, design handoff |
| `heic-to-webp` | compression-speed | HEIC smaller web images | faster page delivery |
| `heic-to-avif` | compression-speed | HEIC modern compression | AV1, delivery pipeline |
| `heif-to-jpg` | compatibility | HEIF legacy compatibility | universal device support |
| `heif-to-png` | lossless-editing | preserve HEIF detail | archive, production output |
| `heif-to-webp` | compression-speed | HEIF web delivery | smaller payloads |
| `heif-to-avif` | compression-speed | HEIF compression upgrade | AV1-based gains |
| `webp-to-jpg` | compatibility | WebP open anywhere | email, social uploads |
| `webp-to-png` | transparency | lossless transparency | pixel-stable output |
| `png-to-jpg` | compression-speed | reduce PNG size | faster upload, sharing |
| `png-to-webp` | transparency | transparent web images | smaller transfer size |
| `jpg-to-png` | lossless-editing | editing and re-export | avoid extra lossy pass |
| `jpg-to-webp` | compression-speed | faster page load | smaller web images |
| `jpg-to-avif` | compression-speed | AVIF for web delivery | stronger compression |
| `png-to-avif` | transparency | smaller transparent images | keep transparency |
| `webp-to-avif` | compression-speed | higher compression | AVIF-ready environments |
| `avif-to-jpg` | compatibility | legacy app support | unsupported AVIF endpoints |
| `avif-to-webp` | compatibility | broader support | modern compression |
| `avif-to-png` | lossless-editing | lossless workflow | editing pipeline stability |
| `image-compressor` | general | compress images | quality-size balance |
| `image-resizer` | general | resize images | dimensions, presets |

## 发布前检查

- 运行 `npm run seo:audit`，确保：
  - 无重复 title
  - 无重复 description
  - 无高相似 title（Jaccard >= 0.75）
- 如果有告警，先改文案再发布。
