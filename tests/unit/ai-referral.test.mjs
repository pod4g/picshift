import assert from 'node:assert/strict';
import test from 'node:test';
import { buildAiReferralPayload, detectAiReferral } from '../../src/lib/aiReferral.mjs';

test('detects ChatGPT Search from its documented UTM source', () => {
  assert.equal(
    detectAiReferral('https://picshift.app/png-to-jpg?utm_source=chatgpt.com', ''),
    'chatgpt',
  );
});

test('detects supported AI referral hosts and subdomains', () => {
  assert.equal(
    detectAiReferral('https://picshift.app/', 'https://www.perplexity.ai/search/example'),
    'perplexity',
  );
  assert.equal(
    detectAiReferral('https://picshift.app/', 'https://gemini.google.com/app/example'),
    'gemini',
  );
  assert.equal(
    detectAiReferral('https://picshift.app/', 'https://copilot.microsoft.com/chats/example'),
    'copilot',
  );
});

test('does not misclassify ordinary search or malformed input', () => {
  assert.equal(detectAiReferral('https://picshift.app/?utm_source=newsletter', 'https://google.com/'), null);
  assert.equal(detectAiReferral('https://picshift.app/', 'https://openai.com/research/'), null);
  assert.equal(detectAiReferral('not a url', 'not a referrer'), null);
});

test('a recognized UTM source takes precedence over the referrer', () => {
  assert.equal(
    detectAiReferral(
      'https://picshift.app/?utm_source=chatgpt.com',
      'https://www.perplexity.ai/search/example',
    ),
    'chatgpt',
  );
});

test('builds a minimal event without query strings or full referrers', () => {
  const payload = buildAiReferralPayload(
    {
      url: '/png-to-jpg?utm_source=chatgpt.com&utm_campaign=private-query',
      referrer: 'https://chatgpt.com/c/private-conversation?query=secret',
      website: 'picshift',
    },
    { provider: 'chatgpt', pathname: '/png-to-jpg', timestamp: 1_786_000_000 },
  );

  assert.deepEqual(payload, {
    url: '/png-to-jpg',
    website: 'picshift',
    name: 'ai_referral',
    timestamp: 1_786_000_000,
    data: { provider: 'chatgpt' },
  });
});
