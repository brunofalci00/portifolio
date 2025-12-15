'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname as useNextPathname } from 'next/navigation';
import { useRouter } from '@/i18n/navigation';
import { Globe } from 'lucide-react';
import { routing } from '@/i18n/routing';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const fullPathname = useNextPathname();
  const t = useTranslations('common.language');

  const switchLanguage = () => {
    const nextLocale = locale === 'pt-BR' ? 'en' : 'pt-BR';

    // Remove o prefixo do locale atual do pathname
    let pathWithoutLocale = fullPathname;
    for (const loc of routing.locales) {
      if (fullPathname.startsWith(`/${loc}/`)) {
        pathWithoutLocale = fullPathname.slice(`/${loc}`.length);
        break;
      } else if (fullPathname === `/${loc}`) {
        pathWithoutLocale = '/';
        break;
      }
    }

    // Navega para o mesmo path com o novo locale
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    router.replace(pathWithoutLocale as any, { locale: nextLocale });
  };

  return (
    <button
      onClick={switchLanguage}
      className="group flex items-center gap-2 text-sm font-medium transition-all duration-300"
      title={t('toggle')}
      aria-label={t('toggle')}
    >
      <Globe className="h-4 w-4 text-neutral-500 group-hover:text-emerald-400 transition-colors duration-300" />
      <span className="text-neutral-500 group-hover:text-white transition-colors duration-300 uppercase tracking-wide">
        {locale === 'pt-BR' ? 'EN' : 'PT'}
      </span>
    </button>
  );
}
