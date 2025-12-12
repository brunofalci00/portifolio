import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['pt-BR', 'en'],

  // Used when no locale matches
  defaultLocale: 'pt-BR',

  // Pathnames configuration for translated URLs
  pathnames: {
    '/': '/',
    '/projetos': {
      'pt-BR': '/projetos',
      'en': '/projects'
    },
    '/projetos/[slug]': {
      'pt-BR': '/projetos/[slug]',
      'en': '/projects/[slug]'
    }
  }
});
