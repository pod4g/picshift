import type { UserPreferences } from '../types';

const STORAGE_KEY = 'picshift_prefs';

const DEFAULT_PREFERENCES: UserPreferences = {
  outputFormat: 'jpg',
  quality: 85,
};

/**
 * Load user preferences from localStorage.
 * Returns defaults if localStorage is unavailable or data is corrupt.
 */
export function loadPreferences(): UserPreferences {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_PREFERENCES };

    const parsed = JSON.parse(raw) as Partial<UserPreferences>;

    return {
      outputFormat: parsed.outputFormat ?? DEFAULT_PREFERENCES.outputFormat,
      quality: parsed.quality ?? DEFAULT_PREFERENCES.quality,
    };
  } catch {
    return { ...DEFAULT_PREFERENCES };
  }
}

/**
 * Save user preferences to localStorage.
 * Silently fails if localStorage is unavailable.
 */
export function savePreferences(prefs: UserPreferences): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    // Silently ignore — localStorage may be full or unavailable.
  }
}
