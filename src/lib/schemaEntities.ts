export const PICSHIFT_WEBSITE_ID = 'https://picshift.app/#website';
export const PICSHIFT_WEB_APPLICATION_ID = 'https://picshift.app/#web-application';

/**
 * Canonical entity used anywhere PicShift is the author or publisher.
 * The stable @id connects separate page-level schemas to the same organization
 * without inventing a person identity.
 */
export const PICSHIFT_ORGANIZATION = {
  '@type': 'Organization',
  '@id': 'https://picshift.app/#organization',
  name: 'PicShift',
  url: 'https://picshift.app',
} as const;

export const PICSHIFT_WEBSITE_REFERENCE = {
  '@id': PICSHIFT_WEBSITE_ID,
} as const;
