import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'he'],
  defaultLocale: 'en',
  alternateLinks: false
});

export type Locale = (typeof routing.locales)[number];
