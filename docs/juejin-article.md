# 我用 6 个 WASM 编码器干掉了 Canvas.toBlob()，图片压缩率直接提升 15%

> 前端做图片转换，99% 的人还在用 `canvas.toBlob()`。这篇文章告诉你为什么这是错的，以及如何用 WebAssembly 把浏览器变成一个专业级图片处理工具。所有代码来自我的开源项目 [PicShift](https://picshift.app) 的生产源码，不是 demo，不是玩具。

---

## 先说痛点：Canvas 编码到底差在哪？

前端处理图片，标准做法是画到 `<canvas>` 上，然后调 `canvas.toBlob('image/jpeg', 0.85)` 导出。

**问题是：浏览器内置的 JPEG 编码器很拉。**

Chrome 用的是 libjpeg-turbo 的默认配置，没有 trellis quantization，没有渐进式扫描优化，就是最朴素的 baseline JPEG。同样画质下，输出文件比 MozJPEG 大 10-15%。

你可能觉得 10% 无所谓。但当你一次处理 200 张图片的时候，这 10-15% 就是上百 MB 的流量和存储差异。

PNG 更离谱——Canvas 导出的 PNG 完全没有量化压缩，32 位真彩色直出，一张 12MP 的照片导出来轻松 30MB+。

**所以核心思路很简单：用 C/C++/Rust 写的专业编码器，通过 WebAssembly 搬到浏览器里跑。**

---

## 架构总览：6 个 WASM 编码器 + 双层降级

先上全局图：

```
用户拖入图片
    ↓
HEIC？──是──→ createImageBitmap (Safari原生) → 失败 → libheif-js WASM 解码
    │
    否
    ↓
createImageBitmap → OffscreenCanvas → getImageData
    ↓
┌──────────────────────────────────────────────────┐
│  WASM 编码（主路径）      Canvas 编码（兜底）    │
│  ├─ JPEG → MozJPEG        canvas.convertToBlob() │
│  ├─ PNG  → imagequant+OxiPNG                     │
│  ├─ WebP → libwebp (SIMD自动检测)               │
│  └─ AVIF → AV1 编码器                           │
└──────────────────────────────────────────────────┘
    ↓
Worker Pool (最多4线程) → 流式 ZIP 打包 → 下载
```

每个 WASM 编码器都遵循一个模式：**懒加载 + 单例 + 静默降级**。

```typescript
// 以 JPEG 为例：首次调用才加载，加载失败返回 null 走 Canvas 兜底
let jpegInit: Promise<void> | null = null;

async function wasmEncodeJpeg(imageData: ImageData, quality: number): Promise<Blob | null> {
  try {
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
  } catch {
    return null; // WASM 炸了？没事，回退 Canvas
  }
}

// 调用侧：一行搞定优雅降级
outputBlob =
  (await wasmEncodeJpeg(imageData, quality)) ??
  (await canvas.convertToBlob({ type: 'image/jpeg', quality: quality / 100 }));
```

这个 `??` 是整个架构的精髓——WASM 是增强，不是依赖。任何一个 WASM 编码器挂了，用户体验不受影响，只是压缩率回到浏览器默认水平。

---

## JPEG：MozJPEG，Mozilla 出品的压缩怪兽

| 项 | 值 |
|---|---|
| WASM 文件 | `mozjpeg_enc.wasm`（246 KB） |
| JS 胶水层 | `@jsquash/jpeg`（Squoosh 项目拆包） |
| 提升 | 同等视觉质量下体积减小 10-15% |

MozJPEG 是 Mozilla 专门为 Web 优化的 JPEG 编码器，核心优势是 **trellis quantization**——在量化阶段用动态规划搜索最优量化系数，而不是浏览器那样直接套公式。

质量参数直接透传 UI 滑块值（1-100），不需要额外映射。

---

## PNG：三级管线，这是最复杂的一条

PNG 压缩是真正考验功力的地方。Canvas 导出的 PNG 是未经任何优化的 32 位真彩色，文件巨大。我设计了一条三级管线：

### quality ≥ 95 走无损优化路径

```
ImageData → canvas.convertToBlob('image/png') → OxiPNG 无损压缩
```

OxiPNG 是 Rust 写的 PNG 优化器（`squoosh_oxipng_bg.wasm`，160 KB），它会尝试不同的滤波器和压缩参数组合，找到最小输出。而且只在优化后更小时才采用：

```typescript
const optimizedBlob = new Blob([optimizedBuffer], { type: 'image/png' });
return optimizedBlob.size < nativePngBlob.size ? optimizedBlob : null;
```

### quality < 95 走有损量化路径

```
ImageData → imagequant 调色板量化 → 二次颜色缩减 → OxiPNG 优化
```

imagequant 就是 pngquant 的核心库（`imagequant_bg.wasm`，165 KB），把 1600 万色量化为 2-256 色调色板索引 PNG。这里有个坑——**imagequant 的 WASM 绑定会忽略 `max_colors` 参数**，始终输出 256 色。

所以我手写了一个**二次颜色缩减**算法：

```typescript
// 用户想要 64 色，但 imagequant 固定输出 256 色
// 我们自己做 256 → 64 的降维
if (maxColors < 256) {
  // 1. 统计每个调色板颜色的像素频率
  const freq = new Uint32Array(256);
  for (let i = 0; i < indices.length; i++) freq[indices[i]]++;

  // 2. 频率降序排列，保留 top-N
  const ranked = Array.from({ length: 256 }, (_, i) => i);
  ranked.sort((a, b) => freq[b] - freq[a]);
  const kept = new Set(ranked.slice(0, maxColors));

  // 3. 被淘汰的颜色 → 找最近的保留颜色（RGBA 欧几里得距离）
  const remap = new Uint8Array(256);
  for (let i = 0; i < 256; i++) {
    if (kept.has(i)) { remap[i] = i; continue; }
    let bestDist = Infinity, bestIdx = ranked[0];
    const r1 = palette[i*4], g1 = palette[i*4+1],
          b1 = palette[i*4+2], a1 = palette[i*4+3];
    for (const k of kept) {
      const dr = r1 - palette[k*4], dg = g1 - palette[k*4+1],
            db = b1 - palette[k*4+2], da = a1 - palette[k*4+3];
      const dist = dr*dr + dg*dg + db*db + da*da;
      if (dist < bestDist) { bestDist = dist; bestIdx = k; }
    }
    remap[i] = bestIdx;
  }

  // 4. 重映射所有像素索引
  for (let i = 0; i < indices.length; i++) indices[i] = remap[indices[i]];
}
```

另外，质量滑块到调色板大小的映射用的是**指数曲线**，让滑块手感线性（不然用户拖到 50% 的时候颜色已经少到看不了了）：

```typescript
const maxColors = quality >= 85
  ? 256  // 85-94：保持 256 色全调色板
  : Math.max(2, Math.round(Math.pow(2, (quality / 84) * 8)));
  // 1-84：指数映射到 2-256 色
```

---

## WebP：SIMD 自动检测，15 字节搞定

WebP 编码器有两个版本：标准版 275 KB，SIMD 加速版 337 KB。问题是怎么检测浏览器支不支持 WASM SIMD？

引 `wasm-feature-detect` 太重了。实际上只需要 **validate 一个包含 v128 指令的极简 WASM 模块**：

```typescript
const hasSIMD = WebAssembly.validate(
  new Uint8Array([
    0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,
    3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11
  ]),
);
const wasmPath = hasSIMD ? '/wasm/webp_enc_simd.wasm' : '/wasm/webp_enc.wasm';
```

这段 28 字节的二进制是一个合法的 WASM 模块，包含一个返回 `v128` 类型的函数（`i32x4.splat(0)`）。如果浏览器的 WASM 引擎支持 SIMD，`WebAssembly.validate()` 返回 `true`。

零依赖，同步调用，比引一个库优雅太多。

---

## AVIF：质量映射的坑

AVIF 用的是 AV1 编码器（`avif_enc.wasm`，3.3 MB，是最大的一个编码器）。

这里有个很多人踩的坑：**AVIF 的质量刻度跟 JPEG 完全不一样**。AVIF quality=50 的视觉质量大约相当于 JPEG quality=85。如果你直接把 UI 上的 quality=85 透传给 AVIF 编码器，出来的文件反而比 JPEG 还大。

所以需要做质量映射：

```typescript
const avifQuality = Math.max(1, Math.round(quality * 0.6));
```

乘以 0.6 是经过大量对比测试后找到的系数，让用户在 UI 上拖质量滑块时，JPEG/WebP/AVIF 各格式的输出体积和视觉质量基本对齐。

---

## HEIC 解码：前端最痛的格式

HEIC 是 iOS 默认照片格式。用户从 iPhone 拖图片到你的网页——Chrome 不认识、Firefox 不认识，甚至 `<img>` 标签都显示不了。

### 旧方案的灾难

以前用 heic2any，它的管线是这样的：

```
HEIC → libheif(asm.js, 纯JS编译) → 解码 → 编码成JPEG Blob → createImageBitmap 再解码一次
```

三步管线。asm.js 比 WASM 慢一大截，中间还要编码成 JPEG 再解码回来，既慢又有质量损失（JPEG 0.95 的有损中间步骤）。

### 新方案：双层降级

**第一层：浏览器原生（Safari 17.6+）**

```typescript
try {
  const bitmap = await createImageBitmap(file);
  // Safari 认识 HEIC，直接解码，快 17-39 倍
} catch {
  // Chrome/Firefox 走 WASM 路径
}
```

Safari 17.6+ 原生支持 HEIC 的 `createImageBitmap()`。Benchmark 实测比任何 JS/WASM 方案快 **17-39 倍**。用 try/catch 探测浏览器能力，零成本。

**第二层：libheif-js WASM（Chrome/Firefox）**

```typescript
async function decodeHeicWasm(file: File): Promise<ImageData> {
  const libheif = await initLibheif();
  const buffer = await file.arrayBuffer();
  const decoder = new libheif.HeifDecoder();
  const images = decoder.decode(new Uint8Array(buffer));
  const image = images[0];
  const width = image.get_width();
  const height = image.get_height();

  // 关键：用 OffscreenCanvas 创建 ImageData，而不是自己 new
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

**一步到位，直接输出 RGBA 像素。** 跳过了 heic2any 那个 `HEIC→JPEG→再解码` 的荒谬管线。Chrome 上实测 **快 2-3 倍**，且零质量损失。

### Emscripten 工厂函数的坑

libheif-js 的 ESM 导出是一个 Emscripten 工厂函数，不是模块本身。而且可能是同步的也可能是异步的，取决于版本：

```typescript
let libheifModule: any = null;

async function initLibheif() {
  if (libheifModule) return libheifModule;
  const mod = await import('libheif-js/libheif-wasm/libheif-bundle.mjs');
  const factory = mod.default;
  // 可能是同步工厂，可能是异步工厂，两种都要处理
  if (typeof factory === 'function') {
    const result = factory();
    libheifModule = result && typeof result.then === 'function'
      ? await result  // 异步
      : result;       // 同步
  } else {
    libheifModule = factory; // 直接就是模块
  }
  return libheifModule;
}
```

如果你直接 `new mod.default.HeifDecoder()` 会得到 `HeifDecoder is not a constructor`。这个坑我踩了好久。

---

## Worker Pool：不是 new Worker() 就完事了

用 Web Worker 跑 WASM 编码是常识。但大多数人的做法是 `new Worker()` → 用完 → 不管了。

这会导致两个问题：
1. 反复创建销毁 Worker 开销大（每次都要重新编译 WASM）
2. WASM 堆内存永远不释放（Worker 活着，WASM 堆就在）

### 动态伸缩的 Worker 池

```typescript
const MAX_WORKERS = Math.min(navigator.hardwareConcurrency || 2, 4);
```

上限是 CPU 核心数和 4 的较小值。为什么不超过 4？因为 WASM 编码本身已经很吃内存了，4 个 Worker 同时跑，每个 Worker 一个 WASM 堆，内存压力已经不小。

Worker 用完不销毁，放回空闲池：

```typescript
const getWorker = (): Worker => {
  if (idleWorkersRef.current.length > 0) {
    return idleWorkersRef.current.pop()!; // 复用
  }
  const w = new Worker(
    new URL('../workers/convert-worker.ts', import.meta.url),
    { type: 'module' },
  );
  workerPoolRef.current.push(w);
  return w; // 新建
};
```

### 任务队列 + 流水线

文件进入 `queueRef` 队列，`processQueue` 不停地从队列取任务分发给空闲 Worker：

```typescript
const processQueue = useCallback(() => {
  while (activeCountRef.current < MAX_WORKERS && queueRef.current.length > 0) {
    const file = queueRef.current.shift()!;
    activeCountRef.current++;
    const worker = getWorker();
    // ... 分发任务
  }
}, [...]);
```

Worker 完成任务后归还池，立刻处理下一个排队文件：

```typescript
worker.onmessage = async (e) => {
  // ... 处理结果
  releaseWorker(worker);  // 归还空闲池
  activeCountRef.current--;
  if (queueRef.current.length > 0) {
    processQueue();  // 继续下一个
  } else if (activeCountRef.current === 0) {
    // 批次全部完成 → 终止所有 Worker，释放 WASM 堆
    idleWorkersRef.current.forEach(w => w.terminate());
    idleWorkersRef.current = [];
    workerPoolRef.current = [];
  }
};
```

**关键设计：批次完成后才终止 Worker。** 不是每个文件处理完就杀 Worker，而是等整批文件都做完了，一次性终止所有 Worker，把 WASM 堆内存彻底还给操作系统。下次用户再丢文件进来，重新创建 Worker 和初始化 WASM。

### 崩溃恢复

如果某个 Worker 挂了（`onerror`），杀掉它，从池里移除，不影响其他 Worker 继续工作：

```typescript
worker.onerror = (err) => {
  worker.terminate();
  workerPoolRef.current = workerPoolRef.current.filter(w => w !== worker);
  activeCountRef.current--;
  if (queueRef.current.length > 0) processQueue(); // 队列不停
};
```

---

## 内存管理：前端最容易忽略的事

浏览器处理图片极其吃内存。一张 12MP 的照片，`ImageData` 就是 `4000×3000×4 = 48MB`。同时处理 4 张就是 192MB。如果不主动释放，Tab 页分分钟崩溃。

### ImageData 用完立即置 null

```typescript
let imageData: ImageData | null = ctx.getImageData(0, 0, width, height);
// ... WASM 编码
imageData = null; // 立即释放 48MB
```

### ImageBitmap.close() 必须调

`createImageBitmap()` 创建的位图占用 GPU 内存，不调 `close()` 不会释放：

```typescript
const bitmap = await createImageBitmap(file);
ctx.drawImage(bitmap, 0, 0);
bitmap.close(); // 不调这个就是内存泄漏
```

### URL.revokeObjectURL 生命周期管理

每个 `URL.createObjectURL()` 都持有一个 Blob 的强引用。缩略图更新时要释放旧的：

```typescript
if (patch.thumbnailUrl && f.thumbnailUrl && patch.thumbnailUrl !== f.thumbnailUrl) {
  URL.revokeObjectURL(f.thumbnailUrl);
}
```

### Compare 视图用 LRU 缓存

用户点击对比视图时需要创建原图和转换后的预览 URL。不缓存的话每次都要重新生成；无限缓存又会内存爆炸。所以上了个 LRU（最大 10 条）：

```typescript
const MAX_COMPARE_CACHE = 10;

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

---

## 流式 ZIP：边转换边打包

常规做法是等所有文件转换完，再一个个塞进 ZIP。问题是如果有 200 个文件，所有 outputBlob 都要同时存在内存里。

PicShift 用 `fflate` 实现**流式构建**——每个文件转换完立即写入 ZIP 流：

```typescript
// 每个文件转换完就写入
await zipRef.current.addFile(baseName, outputBlob);
```

而且用 **STORE 模式**（零压缩），因为 JPEG/PNG/WebP/AVIF 本身已经是压缩格式，对它们做 ZIP deflate 完全没意义，还浪费 CPU：

```typescript
const entry = new ZipPassThrough(filename); // STORE 模式，不做二次压缩
this.zip.add(entry);
entry.push(buffer, true);
```

下载后释放 chunk 数组：

```typescript
download(filename: string): void {
  this.finalize();
  const blob = new Blob(this.chunks as BlobPart[], { type: 'application/zip' });
  triggerDownload(blob, filename);
  this.chunks = [];  // 释放
  this.totalSize = 0;
}
```

---

## keepSmaller：一个容易被忽略的细节

用户拖了一张已经高度优化过的 JPEG 进来"压缩"，WASM 编码后文件反而变大了——因为 MozJPEG 换了量化表和霍夫曼树，相当于重新编码了一遍。

解决方案很简单但很重要：

```typescript
const sameFormat = !isHeic(file) && getInputMime(file) === outputFormat;
if ((keepSmaller || sameFormat) && outputBlob.size >= file.size) {
  finalBlob = file;      // 直接用原文件
  keptOriginal = true;   // 标记
}
```

压缩器模式或同格式转换时，**编码后更大就保留原文件**。听起来理所当然，但你去看市面上大部分在线图片压缩工具，很多都没做这个。

---

## 进度条：4 个检查点怎么做出丝滑动画

Worker 只在 4 个离散点（10%、50%、80%、100%）上报进度。直接用这 4 个点做进度条？用户会看到进度跳来跳去。

### requestAnimationFrame + 直接操作 DOM

绕过 React 的 setState/re-render 循环，用 ref 直接改 style：

```typescript
const barRef = useRef<HTMLDivElement>(null);
const tick = () => {
  if (barRef.current) {
    barRef.current.style.width = `${currentRef.current}%`;
  }
  rafRef.current = requestAnimationFrame(tick);
};
```

### 两阶段插值

```typescript
if (current < target - 0.3) {
  // 阶段 1：快速逼近真实检查点（缓动追赶）
  const step = Math.max(0.2, (target - current) * 0.05);
  currentRef.current = Math.min(current + step, target);
} else if (current < 95) {
  // 阶段 2：乐观推进（慢速越过检查点，假装还在干活）
  const overshoot = Math.max(0, current - target);
  const creepRate = Math.max(0.005, 0.06 * creepFactor / (1 + overshoot * 0.12));
  currentRef.current = Math.min(current + creepRate, 95);
}
```

阶段 1 用缓动函数快速追赶到 Worker 报告的真实进度；阶段 2 进入"乐观模式"，以指数衰减的速度缓慢推进，给用户"还在跑"的感觉，但永远不会超过 95%（避免 100% 了还没完成的尴尬）。

### 每个文件不同的推进速度

```typescript
const creepFactorRef = useRef(0.6 + (file.size % 100) / 100 * 0.8); // 0.6–1.4
```

基于文件大小取模生成一个 0.6-1.4 的系数。这样多个文件同时处理时，进度条不会在完全相同的位置停顿。

---

## HEIC 早期缩略图：用户体验的最后一公里

HEIC 在 Chrome 上解码可能要 2-3 秒。这段时间用户只能看着空白缩略图等。

解决方案：**WASM 解码完成后、WASM 编码开始前，先发一个低质量预览**：

```typescript
// WASM 解码完成，但编码还没开始
originalPreviewBlob = await canvas.convertToBlob({ type: 'image/jpeg', quality: 0.9 });

// 生成 200px 宽的缩略图，发给主线程
const earlyBitmap = await createImageBitmap(originalPreviewBlob, {
  resizeWidth: 200,
  resizeQuality: 'medium',
});
const earlyCanvas = new OffscreenCanvas(earlyBitmap.width, earlyBitmap.height);
const earlyCtx = earlyCanvas.getContext('2d')!;
earlyCtx.drawImage(earlyBitmap, 0, 0);
earlyBitmap.close();
const earlyThumb = await earlyCanvas.convertToBlob({ type: 'image/jpeg', quality: 0.6 });

// 通过 progress 消息附带缩略图
self.postMessage({ id, status: 'progress', progress: 10, thumbnail: earlyThumb });
```

用户在解码完成后就能看到图片预览，而不用等编码也完成。感知等待时间减少一半以上。

---

## 构建优化：4.5 MB 的 WASM 不能一把梭

6 个 WASM 文件加起来约 4.5 MB。全塞进主 bundle？首屏加载直接劝退。

### manualChunks 代码分割

```javascript
// astro.config.mjs
manualChunks: {
  heic: ['libheif-js'],   // 1.4 MB，只有处理 HEIC 文件时才加载
  zip: ['fflate'],
}
```

所有 WASM 编码器本身就通过 `dynamic import()` 按需加载——用户只转 JPEG，就只加载 MozJPEG 那 246 KB。

### WASM 文件静态托管 + HTTP 缓存

6 个 `.wasm` 文件放在 `public/wasm/` 下作为静态资源，通过 `fetch()` 按需加载。浏览器会做 HTTP 缓存（强缓存 + immutable），第二次访问直接从磁盘缓存读取，零网络请求。

| WASM 文件 | 大小 | 编码器 |
|-----------|------|--------|
| `mozjpeg_enc.wasm` | 246 KB | MozJPEG (JPEG) |
| `imagequant_bg.wasm` | 165 KB | libimagequant (PNG 量化) |
| `squoosh_oxipng_bg.wasm` | 160 KB | OxiPNG (PNG 优化) |
| `webp_enc.wasm` | 275 KB | libwebp (WebP) |
| `webp_enc_simd.wasm` | 337 KB | libwebp SIMD (WebP 加速) |
| `avif_enc.wasm` | 3.3 MB | AV1 (AVIF) |

---

## 总结

| 优化点 | 方案 | 效果 |
|--------|------|------|
| JPEG 压缩率 | MozJPEG WASM | 同质量体积小 10-15% |
| PNG 有损压缩 | imagequant 量化 + 二次颜色缩减 + OxiPNG | 支持 2-256 色可调 |
| WebP 编码速度 | libwebp WASM + 运行时 SIMD 检测 | SIMD 设备自动加速 |
| AVIF 压缩 | AV1 WASM + 质量映射 (×0.6) | 跨格式滑块体验一致 |
| HEIC 解码 | Safari 原生 + libheif-js WASM | Safari 快 17-39x，Chrome 快 2-3x |
| 并行处理 | 动态 Worker Pool (最多 4 线程) | 充分利用多核 |
| ZIP 打包 | fflate 流式 STORE 模式 | 边转换边打包，不二次压缩 |
| 内存 | ImageData 置 null + bitmap.close() + URL.revoke + Worker 终止释放 WASM 堆 + LRU 缓存 | 200 张图不崩 |
| 加载 | WASM 懒加载单例 + manualChunks + dynamic import | 首屏零 WASM 开销 |

所有代码来自 [PicShift](https://picshift.app) 的生产代码，纯前端、零上传、零服务器。

如果你也在做浏览器端图片处理，希望这篇文章能帮你少踩一些坑。

---

*如果觉得有帮助，欢迎点赞收藏。有问题欢迎评论区交流。*
