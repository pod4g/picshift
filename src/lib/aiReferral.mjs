const AI_PROVIDERS = [
  { provider: 'chatgpt', hosts: ['chatgpt.com', 'chat.openai.com'] },
  { provider: 'perplexity', hosts: ['perplexity.ai'] },
  { provider: 'claude', hosts: ['claude.ai'] },
  { provider: 'copilot', hosts: ['copilot.microsoft.com'] },
  { provider: 'gemini', hosts: ['gemini.google.com'] },
  { provider: 'you', hosts: ['you.com'] },
  { provider: 'phind', hosts: ['phind.com'] },
  { provider: 'meta_ai', hosts: ['meta.ai'] },
  { provider: 'poe', hosts: ['poe.com'] },
];

function normalizeHost(value) {
  if (!value) return '';

  const raw = value.trim().toLowerCase();
  if (!raw) return '';

  try {
    return new URL(raw.includes('://') ? raw : `https://${raw}`).hostname
      .replace(/^www\./, '');
  } catch {
    return raw.replace(/^www\./, '').split('/')[0] ?? '';
  }
}

function providerForHost(host) {
  if (!host) return null;

  for (const entry of AI_PROVIDERS) {
    if (entry.hosts.some((candidate) => host === candidate || host.endsWith(`.${candidate}`))) {
      return entry.provider;
    }
  }

  return null;
}

/**
 * Detect a known AI referral without recording the full referrer or query.
 * UTM source wins because ChatGPT Search appends utm_source=chatgpt.com.
 *
 * @param {string} pageUrl
 * @param {string} referrer
 * @returns {string | null}
 */
export function detectAiReferral(pageUrl, referrer) {
  let source = '';

  try {
    const url = new URL(pageUrl);
    source = url.searchParams.get('utm_source') ?? url.searchParams.get('source') ?? '';
  } catch {
    // Invalid URLs are treated as having no campaign source.
  }

  return providerForHost(normalizeHost(source))
    ?? providerForHost(normalizeHost(referrer));
}

/**
 * Build an AI referral event without retaining the source query or referrer.
 *
 * @param {Record<string, unknown>} props
 * @param {{ provider: string, pathname: string, timestamp: number }} event
 * @returns {Record<string, unknown>}
 */
export function buildAiReferralPayload(props, { provider, pathname, timestamp }) {
  const safeProps = { ...props };
  delete safeProps.referrer;

  return {
    ...safeProps,
    name: 'ai_referral',
    url: pathname,
    timestamp,
    data: { provider },
  };
}

export { AI_PROVIDERS };
