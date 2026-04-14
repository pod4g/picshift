/**
 * 浏览器内唯一 id（用于转换队列行等）。
 * crypto.randomUUID 需安全上下文（HTTPS 或 localhost）；局域网 http://IP 下不可用。
 */
export function createClientId(): string {
  const c = globalThis.crypto;
  if (c && typeof c.randomUUID === 'function') {
    try {
      return c.randomUUID();
    } catch {
      /* 部分环境有 API 但仍会抛错 */
    }
  }
  return `id-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
}
