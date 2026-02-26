import { createContext, useContext } from 'react';
import type { Locale } from './config';

const LangContext = createContext<Locale>('en');

export const LangProvider = LangContext.Provider;

export function useLang(): Locale {
  return useContext(LangContext);
}
