const SITE_ORIGIN = 'https://picshift.app';

/**
 * 与 Astro `trailingSlash: 'never'` 对齐：
 * 对页面型 URL 去掉尾斜杠；根路径保留为站点 origin；静态资源 URL（末段含 `.`）不改动。
 */
export function htmlCanonicalUrl(url: string): string {
  if (!url.startsWith('http')) return url;
  try {
    const u = new URL(url);
    if (u.origin !== SITE_ORIGIN) return url;
    if (u.search !== '' || u.hash !== '') return url;
    if (u.pathname === '/') return u.origin;
    const normalizedPath = u.pathname.replace(/\/+$/, '');
    const lastSeg = normalizedPath.split('/').filter(Boolean).pop() ?? '';
    if (lastSeg.includes('.')) return `${u.origin}${u.pathname}`;
    return `${u.origin}${normalizedPath}`;
  } catch {
    return url;
  }
}
