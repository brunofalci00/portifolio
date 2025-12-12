import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // requestLocale é uma Promise na v4
  let locale = await requestLocale;

  // Validar se o locale é suportado
  if (!locale || !routing.locales.includes(locale as 'pt-BR' | 'en')) {
    locale = routing.defaultLocale;
  }

  // Import all message files for the locale
  const [common, home] = await Promise.all([
    import(`../messages/${locale}/common.json`),
    import(`../messages/${locale}/home.json`)
  ]);

  return {
    locale,
    messages: {
      common: common.default,
      home: home.default
    }
  };
});
