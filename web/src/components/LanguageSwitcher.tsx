'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('common.language');

  const switchLanguage = () => {
    const nextLocale = locale === 'pt-BR' ? 'en' : 'pt-BR';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    router.replace(pathname as any, { locale: nextLocale });
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
