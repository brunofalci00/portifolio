import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  const effectiveLocale = locale || routing.defaultLocale;

  // Import all message files for the locale
  const [common, home] = await Promise.all([
    import(`../messages/${effectiveLocale}/common.json`),
    import(`../messages/${effectiveLocale}/home.json`)
  ]);

  return {
    locale: effectiveLocale,
    messages: {
      common: common.default,
      home: home.default
    }
  };
});
