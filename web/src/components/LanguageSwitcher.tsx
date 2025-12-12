'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('common.language');

  const switchLanguage = () => {
    const nextLocale = locale === 'pt-BR' ? 'en' : 'pt-BR';

    // Remove current locale from pathname and add new one
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    const newPath = `/${nextLocale}${pathWithoutLocale || '/'}`;

    router.push(newPath);
  };

  return (
    <button
      onClick={switchLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent transition-colors"
      title={t('toggle')}
      aria-label={t('toggle')}
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">
        {locale === 'pt-BR' ? t('en') : t('pt')}
      </span>
    </button>
  );
}
