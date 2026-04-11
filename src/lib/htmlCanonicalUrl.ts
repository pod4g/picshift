const SITE_ORIGIN = 'https://picshift.app';

/**
 * 与 Astro `trailingSlash: 'always'` 及 Cloudflare 目录型 HTML URL 对齐：
 * 为「无扩展名的页面路径」补全尾斜杠；不改动静态资源 URL（末段含 `.`）。
 */
export function htmlCanonicalUrl(url: string): string {
  if (!url.startsWith('http')) return url;
  try {
    const u = new URL(url);
    if (u.origin !== SITE_ORIGIN) return url;
    if (u.search !== '' || u.hash !== '') return url;
    const p = u.pathname;
    if (p.endsWith('/')) return url;
    const lastSeg = p.split('/').filter(Boolean).pop() ?? '';
    if (lastSeg.includes('.')) return url;
    return `${u.origin}${p}/`;
  } catch {
    return url;
  }
}
