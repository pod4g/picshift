# PicShift 技术优化全解析

> 本文基于 PicShift 实际源码，详细拆解每一项优化的技术实现。

## 一、编码器架构：全链路 WASM 替代浏览器原生编码

PicShift 的核心策略是：**用专业级 WASM 编码器替代浏览器 Canvas 的 `convertToBlob()` 原生编码**，在压缩率和编码质量上获得显著提升，同时保留原生编码作为兜底方案。

每种格式的 WASM 编码器都采用**懒加载 + 单例初始化**模式：首次使用时通过 `dynamic import()` 加载 JS 胶水代码，再通过 `fetch()` 加载 `.wasm` 二进制文件并用 `WebAssembly.compile()` 编译，后续调用直接复用已初始化的实例。

```typescript
// 以 JPEG 编码器为例（convert-worker.ts）
let jpegInit: Promise<void> | null = null;

async function wasmEncodeJpeg(imageData: ImageData, quality: number): Promise<Blob | null> {
  const { init, default: encode } = await import('@jsquash/jpeg/encode');
  if (!jpegInit) {
    jpegInit = (async () => {
      const buf = await fetch('/wasm/mozjpeg_enc.wasm').then(r => r.arrayBuffer());
      const mod = await WebAssembly.compile(buf);
      await init(mod);
    })();
  }
  await jpegInit;
  const buffer = await encode(imageData, { quality });
  return new Blob([buffer], { type: 'image/jpeg' });
}
```

所有 WASM 编码器都运行在 Web Worker 中，编码失败时静默回退到浏览器原生 `canvas.convertToBlob()`：

```typescript
outputBlob =
  (await wasmEncodeJpeg(imageData, quality)) ??
  (await canvas.convertToBlob({ type: 'image/jpeg', quality: quality / 100 }));
```

---

## 二、各格式编码优化详解

### 2.1 JPEG — MozJPEG WASM 编码器

| 项目 | 详情 |
|------|------|
| 编码器 | MozJPEG（Mozilla 开发的 JPEG 编码器） |
| WASM 文件 | `mozjpeg_enc.wasm`（246 KB） |
| JS 胶水层 | `@jsquash/jpeg`（Squoosh 项目拆包） |
| 优化原理 | MozJPEG 使用 trellis quantization 等高级压缩算法，同等视觉质量下比标准 JPEG 编码器小 10-15% |
| 输入 | `ImageData`（RGBA 像素） |
| 质量参数 | 直接透传 UI 质量值（1-100） |

### 2.2 PNG — 三级优化管线（imagequant + OxiPNG）

PNG 优化是最复杂的一条管线，根据质量参数走不同路径：

**路径 A：高质量（quality ≥ 95）— 无损优化**
```
原始 ImageData → Canvas.convertToBlob('image/png') → OxiPNG 无损优化
```

**路径 B：中低质量（quality < 95）— 有损量化 + 无损优化**
```
原始 ImageData → imagequant 调色板量化 → 二次颜色缩减 → OxiPNG 优化
```

#### imagequant 量化（有损压缩）

| 项目 | 详情 |
|------|------|
| 编码器 | libimagequant（pngquant 的核心库）|
| WASM 文件 | `imagequant_bg.wasm`（165 KB） |
| JS 胶水层 | `@panda-ai/imagequant` |
| 优化原理 | 将 32 位真彩色（1600 万色）量化为 2-256 色调色板索引 PNG |

质量参数到调色板大小的映射采用**指数曲线**，确保滑块手感线性：

```typescript
const maxColors = quality >= 85
  ? 256  // 85-94：保持最大调色板，最高质量的量化
  : Math.max(2, Math.round(Math.pow(2, (quality / 84) * 8)));
  // 1-84：指数映射到 2-256 色
```

由于 imagequant WASM 绑定始终量化为 256 色（忽略 `max_colors` 参数），PicShift 实现了自己的**二次颜色缩减**算法：

1. 统计每个调色板索引的像素频率
2. 按频率降序排列，保留 top-N 颜色
3. 将被淘汰的颜色映射到最近的保留颜色（RGBA 欧几里得距离）
4. 重写所有像素的索引

```typescript
// 二次颜色缩减核心逻辑
if (maxColors < 256) {
  const freq = new Uint32Array(256);
  for (let i = 0; i < indices.length; i++) freq[indices[i]]++;
  const ranked = Array.from({ length: 256 }, (_, i) => i);
  ranked.sort((a, b) => freq[b] - freq[a]);
  const kept = new Set(ranked.slice(0, maxColors));
  // 为每个被淘汰的颜色找到最近的保留颜色 (RGBA 欧几里得距离)
  // ... 然后重映射所有像素索引
}
```

#### OxiPNG 无损优化

| 项目 | 详情 |
|------|------|
| 编码器 | OxiPNG（Rust 编写的 PNG 优化器） |
| WASM 文件 | `squoosh_oxipng_bg.wasm`（160 KB） |
| JS 胶水层 | `@jsquash/oxipng` |
| 优化原理 | 尝试不同的 PNG 滤波器和压缩参数组合，找到最小输出 |

OxiPNG 应用在量化后的 PNG 上做二次优化，只在优化后更小时才采用：

```typescript
const optimizedBlob = new Blob([optimizedBuffer], { type: 'image/png' });
return optimizedBlob.size < nativePngBlob.size ? optimizedBlob : null;
```

### 2.3 WebP — libwebp WASM + SIMD 自动检测

| 项目 | 详情 |
|------|------|
| 编码器 | libwebp（Google 官方 WebP 编码器） |
| WASM 文件 | `webp_enc_simd.wasm`（337 KB）/ `webp_enc.wasm`（275 KB） |
| JS 胶水层 | `@jsquash/webp` |

WebP 编码器的特殊之处在于**运行时 SIMD 检测**，自动选择 SIMD 加速版或标准版：

```typescript
const hasSIMD = WebAssembly.validate(
  new Uint8Array([
    0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,
    3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11
  ]),
);
const wasmPath = hasSIMD ? '/wasm/webp_enc_simd.wasm' : '/wasm/webp_enc.wasm';
```

这段 SIMD 检测代码是一个极简的 WASM 模块（包含 `v128` 类型和 `i32x4.splat` 指令），通过 `WebAssembly.validate()` 验证浏览器是否支持 WASM SIMD。这比引入 `wasm-feature-detect` 库轻量得多。

### 2.4 AVIF — AV1 编码器 + 质量映射

| 项目 | 详情 |
|------|------|
| 编码器 | 基于 AV1 的 AVIF 编码器 |
| WASM 文件 | `avif_enc.wasm`（3.3 MB，最大的编码器） |
| JS 胶水层 | `@jsquash/avif` |
| 编码参数 | `speed: 6`（编码速度/质量权衡） |

AVIF 的质量刻度与 JPEG 不同（AVIF 50 ≈ JPEG 85 的视觉质量），PicShift 做了**质量映射**使 UI 滑块在不同格式间感受一致：

```typescript
const avifQuality = Math.max(1, Math.round(quality * 0.6));
```

---

## 三、HEIC 解码优化：双层降级策略

HEIC 是 Apple 设备的默认照片格式，浏览器原生支持有限。PicShift 实现了一个**双层降级策略**：

### 第一层：浏览器原生解码（Safari 17.6+）

```typescript
const bitmap = await createImageBitmap(file);
```

Safari 17.6+ 原生支持 HEIC 的 `createImageBitmap()`，实测比任何 JS/WASM 方案快 **17-39 倍**。通过 try/catch 检测浏览器能力，零成本探测。

### 第二层：libheif-js WASM 解码（Chrome/Firefox 等）

| 项目 | 详情 |
|------|------|
| 解码器 | libheif（H.265/HEVC 解码器）编译为 WASM |
| 库 | `libheif-js@1.19.8`（`libheif-wasm/libheif-bundle.mjs`） |
| 包体积 | 1.4 MB（WASM 二进制内嵌于 JS bundle 中） |

```typescript
async function decodeHeicWasm(file: File): Promise<ImageData> {
  const libheif = await initLibheif();
  const buffer = await file.arrayBuffer();
  const decoder = new libheif.HeifDecoder();
  const images = decoder.decode(new Uint8Array(buffer));
  const image = images[0];
  const width = image.get_width();
  const height = image.get_height();

  const canvas = new OffscreenCanvas(width, height);
  const ctx = canvas.getContext('2d')!;
  const imageData = ctx.createImageData(width, height);

  await new Promise<void>((resolve, reject) => {
    image.display(imageData, (displayData) => {
      if (!displayData) reject(new Error('HEIC display failed'));
      else resolve();
    });
  });
  return imageData;
}
```

**关键优化点：直接输出 RGBA 像素。** libheif-js WASM 直接解码到 `ImageData`，跳过了旧方案（heic2any）中的「HEIC → JS 解码 → JPEG/PNG 中间 Blob → `createImageBitmap` 再次解码」的冗余管线。

| 对比 | heic2any（旧方案） | libheif-js WASM（新方案） |
|------|------------------|----------------------|
| 解码器 | libheif 编译为纯 JS (asm.js) | libheif 编译为 WASM |
| 管线 | HEIC → JS 解码 → JPEG 编码 → JPEG 再解码 (3 步) | HEIC → WASM 解码 (1 步) |
| Chrome 速度 | 基准 | **快 2-3 倍** |
| 质量损失 | 有（JPEG 0.95 中间编码） | 无（直接 RGBA 像素） |
| 内存峰值 | 较高（中间 Blob + 二次解码） | 较低（仅 RGBA 像素数据） |

WASM 模块同样采用懒加载单例模式，同时兼容同步和异步的 Emscripten 工厂函数：

```typescript
let libheifModule: any = null;

async function initLibheif() {
  if (libheifModule) return libheifModule;
  const mod = await import('libheif-js/libheif-wasm/libheif-bundle.mjs');
  const factory = mod.default;
  if (typeof factory === 'function') {
    const result = factory();
    libheifModule = result && typeof result.then === 'function' ? await result : result;
  } else {
    libheifModule = factory;
  }
  return libheifModule;
}
```

---

## 四、Worker Pool：多核并行转换

### 4.1 动态伸缩的 Worker 池

PicShift 不使用固定数量的 Worker，而是按需创建、用完回收的**动态 Worker Pool**：

```typescript
const MAX_WORKERS = Math.min(navigator.hardwareConcurrency || 2, 4);
```

- 上限取 `navigator.hardwareConcurrency`（CPU 逻辑核心数）和 4 的较小值
- 空闲 Worker 放入 `idleWorkersRef` 池中复用，避免反复创建/销毁的开销
- 批次全部完成后，**终止所有 Worker 释放 WASM 堆内存**

```typescript
// 批次完成时释放
if (activeCountRef.current === 0) {
  idleWorkersRef.current.forEach(w => w.terminate());
  idleWorkersRef.current = [];
  workerPoolRef.current = [];
}
```

### 4.2 任务队列调度

文件以 `queueRef` 队列管理。`processQueue()` 循环检查空闲 Worker 并分发任务：

```typescript
const processQueue = useCallback(() => {
  while (activeCountRef.current < MAX_WORKERS && queueRef.current.length > 0) {
    const file = queueRef.current.shift()!;
    activeCountRef.current++;
    const worker = getWorker(); // 从 idle 池取或新建
    // ... 发送任务给 worker
  }
}, [...]);
```

Worker 完成任务后归还池中，立即处理下一个排队文件，实现了**流水线式并行**：

```typescript
worker.onmessage = async (e) => {
  // ... 处理结果
  releaseWorker(worker);  // 归还到 idle 池
  activeCountRef.current--;
  if (queueRef.current.length > 0) {
    processQueue();  // 继续处理下一个
  }
};
```

### 4.3 Worker 错误恢复

如果 Worker 崩溃（`onerror`），会被终止并从池中移除，不影响其他 Worker 继续工作：

```typescript
worker.onerror = (err) => {
  worker.terminate();
  workerPoolRef.current = workerPoolRef.current.filter(w => w !== worker);
  activeCountRef.current--;
  if (queueRef.current.length > 0) processQueue();
};
```

---

## 五、流式 ZIP 打包

### 5.1 流式写入，边转换边打包

PicShift 使用 `fflate` 库实现流式 ZIP 构建。每个文件转换完成后**立即写入 ZIP 流**，而不是等所有文件转换完再打包：

```typescript
// convert完成时立即写入 ZIP
await zipRef.current.addFile(baseName, outputBlob);
```

### 5.2 STORE 模式（零压缩）

由于图片本身已经是压缩格式（JPEG/PNG/WebP/AVIF），ZIP 内部使用 `ZipPassThrough`（STORE 模式，无额外压缩），避免对已压缩数据做无意义的二次压缩：

```typescript
const entry = new ZipPassThrough(filename); // STORE 模式，不压缩
this.zip.add(entry);
entry.push(buffer, true);
```

### 5.3 下载后释放内存

ZIP 下载完成后，释放中间 chunk 数组的引用，让 GC 回收：

```typescript
download(filename: string): void {
  this.finalize();
  const blob = new Blob(this.chunks as BlobPart[], { type: 'application/zip' });
  triggerDownload(blob, filename);
  this.chunks = [];  // 释放 chunk 内存
  this.totalSize = 0;
}
```

---

## 六、内存管理策略

### 6.1 文件数量和大小限制

```typescript
export const MAX_FILE_COUNT = 200;      // 单次最多 200 个文件
export const MAX_FILE_SIZE = 50 * 1024 * 1024;  // 单文件最大 50 MB
export const MAX_TOTAL_SIZE = 1024 * 1024 * 1024; // 总批量最大 1 GB
```

文件添加时同时检查数量上限和总大小上限，超出时通过 toast 通知用户。

### 6.2 ImageData 主动释放

转换完成后，立即将 `imageData` 设为 `null`，提前释放 `width × height × 4` 字节的像素数据（一张 12MP 照片约 48 MB）：

```typescript
// 编码完成后立即释放
imageData = null;
```

### 6.3 ImageBitmap 及时关闭

每个 `createImageBitmap()` 创建的位图在使用后立即调用 `bitmap.close()` 释放 GPU/内存资源：

```typescript
const bitmap = await createImageBitmap(file);
ctx.drawImage(bitmap, 0, 0);
bitmap.close();  // 立即释放
```

### 6.4 URL.revokeObjectURL 生命周期管理

所有通过 `URL.createObjectURL()` 创建的 URL 都在不再需要时主动释放：

- 缩略图更新时释放旧的 URL
- 文件移除时释放对应 URL
- `clearAll` 时批量释放所有 URL

```typescript
// 缩略图更新时释放旧 URL
if (patch.thumbnailUrl && f.thumbnailUrl && patch.thumbnailUrl !== f.thumbnailUrl) {
  URL.revokeObjectURL(f.thumbnailUrl);
}
```

### 6.5 Compare 视图 LRU 缓存

原始/转换后的预览 URL 使用 **LRU 缓存**（最大 10 条），避免重复创建大尺寸预览 Blob，同时防止缓存无限增长：

```typescript
const MAX_COMPARE_CACHE = 10;

// LRU 淘汰逻辑
while (order.length > MAX_COMPARE_CACHE) {
  const evictId = order.shift()!;
  const evicted = compareCacheRef.current.get(evictId);
  if (evicted) {
    URL.revokeObjectURL(evicted.originalUrl);
    URL.revokeObjectURL(evicted.convertedUrl);
    compareCacheRef.current.delete(evictId);
  }
}
```

### 6.6 Worker WASM 堆内存回收

批次完成后终止所有 Worker，连同每个 Worker 中初始化的 WASM 模块堆内存一起释放。下次转换时重新创建 Worker 和初始化 WASM 模块。

---

## 七、keepSmaller 智能保留策略

在压缩模式或同格式转换时，如果 WASM 编码后的文件反而比原文件更大，PicShift 会**保留原文件**：

```typescript
const sameFormat = !isHeic(file) && getInputMime(file) === outputFormat;
if ((keepSmaller || sameFormat) && outputBlob.size >= file.size) {
  finalBlob = file;      // 使用原文件
  keptOriginal = true;   // 标记已保留
}
```

这避免了用户在已经高度优化的图片上执行"压缩"时文件反而变大的问题。

---

## 八、进度条平滑动画

Worker 只在 4 个离散检查点（10%、50%、80%、100%）上报进度，但 UI 上的进度条是**平滑连续**的。

### 8.1 requestAnimationFrame 驱动

使用 `requestAnimationFrame` 循环直接操作 DOM ref，避免 React re-render：

```typescript
const barRef = useRef<HTMLDivElement>(null);
const tick = () => {
  // ... 更新 currentRef.current
  if (barRef.current) {
    barRef.current.style.width = `${currentRef.current}%`;
  }
  rafRef.current = requestAnimationFrame(tick);
};
```

### 8.2 两阶段插值 + 乐观推进

```typescript
if (current < target - 0.3) {
  // 阶段 1：快速逼近真实检查点
  const step = Math.max(0.2, (target - current) * 0.05);
  currentRef.current = Math.min(current + step, target);
} else if (current < 95) {
  // 阶段 2：乐观推进（慢速越过检查点，速率指数衰减）
  const overshoot = Math.max(0, current - target);
  const creepRate = Math.max(0.005, 0.06 * creepFactor / (1 + overshoot * 0.12));
  currentRef.current = Math.min(current + creepRate, 95);
}
```

### 8.3 Per-file 变异

基于文件大小生成不同的推进因子，避免多个文件的进度条在完全相同的位置停滞：

```typescript
const creepFactorRef = useRef(0.6 + (file.size % 100) / 100 * 0.8); // 0.6–1.4
```

---

## 九、HEIC 早期缩略图

HEIC 文件解码耗时较长（Chrome 上可达数秒），PicShift 在 WASM 解码完成后、WASM 编码开始前，**先发送一个低质量缩略图**到主线程，让用户尽早看到预览：

```typescript
// WASM 解码完成后，立即生成预览
originalPreviewBlob = await canvas.convertToBlob({ type: 'image/jpeg', quality: 0.9 });

// 生成 200px 宽的缩略图
const earlyBitmap = await createImageBitmap(originalPreviewBlob, {
  resizeWidth: 200,
  resizeQuality: 'medium',
});
// ... 渲染缩略图并发送
const earlyMsg: WorkerResponse = {
  id, status: 'progress', progress: 10, thumbnail: earlyThumb
};
self.postMessage(earlyMsg);
```

---

## 十、构建优化

### 10.1 代码分割

通过 Rollup `manualChunks` 将大型依赖分离为独立 chunk，避免主 bundle 过大：

```javascript
// astro.config.mjs
manualChunks: {
  heic: ['libheif-js'],  // 1.4 MB，仅 HEIC 文件触发加载
  zip: ['fflate'],        // ZIP 库
}
```

所有 WASM 编码器也通过 `dynamic import()` 实现代码分割，只有实际需要某种格式编码时才加载对应的 JS 胶水 + WASM 二进制。

### 10.2 WASM 文件静态托管

6 个 WASM 文件（总计约 4.5 MB）放在 `public/wasm/` 目录下作为静态资源，通过 `fetch()` 按需加载。浏览器会对这些文件做 HTTP 缓存（通常是强缓存 + immutable），二次访问时直接从缓存读取。

| WASM 文件 | 大小 | 对应编码器 |
|-----------|------|-----------|
| `mozjpeg_enc.wasm` | 246 KB | MozJPEG（JPEG） |
| `imagequant_bg.wasm` | 165 KB | libimagequant（PNG 量化） |
| `squoosh_oxipng_bg.wasm` | 160 KB | OxiPNG（PNG 优化） |
| `webp_enc.wasm` | 275 KB | libwebp（WebP） |
| `webp_enc_simd.wasm` | 337 KB | libwebp SIMD（WebP 加速） |
| `avif_enc.wasm` | 3.3 MB | AV1（AVIF） |

---

## 总结

PicShift 的核心技术选择是**将专业级 C/C++/Rust 编码器通过 WebAssembly 带入浏览器**，配合 Worker Pool 并行调度和精细的内存管理，实现了接近原生应用的图片处理性能，同时保持了纯前端、零上传的隐私保障。

| 优化维度 | 技术手段 |
|---------|---------|
| JPEG 压缩率 | MozJPEG WASM（比标准编码器小 10-15%） |
| PNG 有损压缩 | imagequant WASM 调色板量化 + 二次颜色缩减 + OxiPNG 无损优化 |
| WebP 编码速度 | libwebp WASM + 运行时 SIMD 自动检测 |
| AVIF 压缩效率 | AV1 WASM 编码器 + 质量映射 |
| HEIC 解码速度 | 浏览器原生 `createImageBitmap`（Safari 快 17-39 倍）+ libheif-js WASM（Chrome 快 2-3 倍） |
| 并行处理 | 动态 Worker Pool（最多 4 线程），任务队列 + 自动伸缩 |
| ZIP 打包 | fflate 流式 STORE 模式（跳过二次压缩），边转换边打包 |
| 内存控制 | ImageData 主动释放、ImageBitmap.close()、URL.revokeObjectURL、Worker 终止释放 WASM 堆、Compare LRU 缓存 |
| 代码加载 | WASM 懒加载单例、manualChunks 代码分割、dynamic import 按需加载 |
