import { buildAiReferralPayload, detectAiReferral } from './aiReferral.mjs';

const MAX_ATTEMPTS = 20;
const RETRY_DELAY_MS = 250;

/**
 * Record one privacy-minimal event for an AI-referred landing session.
 * Umami already associates the event with its landing URL, so only the
 * normalized provider name is sent; the full referrer and query are omitted.
 */
export function trackAiReferral(): void {
  const provider = detectAiReferral(window.location.href, document.referrer);
  if (!provider) return;

  const storageKey = `picshift_ai_referral:${provider}`;

  try {
    if (window.sessionStorage.getItem(storageKey)) return;
  } catch {
    // Storage may be unavailable in hardened privacy modes; tracking remains optional.
  }

  let attempts = 0;
  const send = () => {
    attempts += 1;

    if (window.umami?.track) {
      const timestamp = Math.floor(Date.now() / 1000);
      window.umami.track((props: Record<string, unknown>) => buildAiReferralPayload(props, {
        provider,
        pathname: window.location.pathname,
        timestamp,
      }));
      try {
        window.sessionStorage.setItem(storageKey, '1');
      } catch {
        // The event can still be sent when sessionStorage is unavailable.
      }
      return;
    }

    if (attempts < MAX_ATTEMPTS) {
      window.setTimeout(send, RETRY_DELAY_MS);
    }
  };

  send();
}
