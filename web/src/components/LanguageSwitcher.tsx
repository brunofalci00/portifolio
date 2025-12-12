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
      className="flex items-center gap-2 px-3 py-2 rounded-full
                 bg-muted/50 hover:bg-muted transition-all duration-300
                 border border-border/50 hover:border-border"
      title={t('toggle')}
      aria-label={t('toggle')}
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium uppercase">
        {locale === 'pt-BR' ? 'EN' : 'PT'}
      </span>
    </button>
  );
}
