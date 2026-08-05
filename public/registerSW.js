if ('serviceWorker' in navigator) {
  const PAGE_WARM_HEADER = 'X-PicShift-Cache-Warm';
  const pendingRuntimeAssets = new Set();
  const warmedRuntimeAssets = new Set();
  const runtimeAssetAttempts = new Map();
  const controlledAtLoad = Boolean(navigator.serviceWorker.controller);
  let controlled = controlledAtLoad;
  let flushing = false;

  const runtimeAssetUrl = (value) => {
    try {
      const url = new URL(value, window.location.href);
      if (
        url.origin === window.location.origin &&
        (url.pathname.startsWith('/_astro/') || url.pathname.startsWith('/wasm/'))
      ) {
        return url.href;
      }
    } catch {
      // Ignore malformed performance entries or component attributes.
    }
    return null;
  };

  const flushRuntimeAssets = async () => {
    if (!controlled || flushing) return;
    flushing = true;
    try {
      while (pendingRuntimeAssets.size > 0) {
        const [url] = pendingRuntimeAssets;
        pendingRuntimeAssets.delete(url);
        if (warmedRuntimeAssets.has(url)) continue;
        try {
          // Re-request already loaded app modules through the now-controlling
          // worker. This closes the first-visit race without adding JS/WASM to
          // the install precache; Workbox stores the response in its runtime cache.
          const response = await fetch(url, { credentials: 'same-origin' });
          if (!response.ok) throw new Error(`Cache warm failed with HTTP ${response.status}`);
          warmedRuntimeAssets.add(url);
          runtimeAssetAttempts.delete(url);
        } catch {
          // Retry a transient first-control failure without blocking rendering
          // or spinning while the network is unavailable.
          const attempts = (runtimeAssetAttempts.get(url) ?? 0) + 1;
          runtimeAssetAttempts.set(url, attempts);
          if (attempts < 3) {
            window.setTimeout(() => {
              if (!warmedRuntimeAssets.has(url)) {
                pendingRuntimeAssets.add(url);
                void flushRuntimeAssets();
              }
            }, attempts * 1000);
          }
        }
      }
    } finally {
      flushing = false;
    }
  };

  const queueRuntimeAsset = (value) => {
    // If this document was controlled from its first byte, every same-origin
    // module/codec request already passed through Workbox. Replaying it would
    // be redundant and is particularly expensive for NetworkFirst WASM files.
    if (controlledAtLoad) return;
    const url = runtimeAssetUrl(value);
    if (!url || warmedRuntimeAssets.has(url)) return;
    pendingRuntimeAssets.add(url);
    void flushRuntimeAssets();
  };

  const warmCurrentPage = async () => {
    try {
      // A first navigation can finish before the new worker claims the page.
      // Replay only the current canonical path with an explicit marker so the
      // Workbox page route can store it without broadening normal fetch rules.
      await fetch(window.location.pathname, {
        credentials: 'same-origin',
        headers: { [PAGE_WARM_HEADER]: 'page' },
      });
    } catch {
      // The page remains usable online even when cache warming is unavailable.
    }
  };

  window.addEventListener('picshift:runtime-assets', (event) => {
    const assets = event instanceof CustomEvent ? event.detail : null;
    if (!Array.isArray(assets)) return;
    for (const asset of assets) queueRuntimeAsset(asset);
  });
  // The script is async so it cannot delay page rendering. A conversion can
  // therefore finish before this listener exists; drain the durable handoff
  // populated by useConverter before marking the live event sink ready.
  const earlyRuntimeAssets = Array.isArray(window.__picshiftRuntimeAssets)
    ? window.__picshiftRuntimeAssets
    : [];
  window.__picshiftRuntimeAssets = [];
  window.__picshiftRuntimeAssetSinkReady = true;
  for (const asset of earlyRuntimeAssets) queueRuntimeAsset(asset);

  const captureIslandModules = () => {
    for (const island of document.querySelectorAll('astro-island')) {
      queueRuntimeAsset(island.getAttribute('component-url'));
      queueRuntimeAsset(island.getAttribute('renderer-url'));
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', captureIslandModules, { once: true });
  } else {
    captureIslandModules();
  }

  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) queueRuntimeAsset(entry.name);
    });
    observer.observe({ type: 'resource', buffered: true });
  } catch {
    // The island attributes above still cover the hydration app shell.
  }

  // Start during <head> parsing. Once Workbox claims the first page, replay any
  // app-shell requests that raced ahead of activation through its runtime cache.
  navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(async () => {
    await navigator.serviceWorker.ready;
    if (!navigator.serviceWorker.controller) {
      await new Promise((resolve) => {
        navigator.serviceWorker.addEventListener('controllerchange', resolve, { once: true });
      });
    }
    controlled = true;
    captureIslandModules();
    await Promise.all([
      controlledAtLoad ? Promise.resolve() : warmCurrentPage(),
      flushRuntimeAssets(),
    ]);
  }).catch(() => {
    // Conversion remains available online when Service Workers are blocked.
  });
}
