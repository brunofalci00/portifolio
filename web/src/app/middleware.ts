import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - api (API routes)
  // - _next/static (static files)
  // - _next/image (image optimization files)
  // - favicon.ico (favicon file)
  // - sitemap.xml (sitemap file)
  // - robots.txt (robots file)
  matcher: ['/', '/(pt-BR|en)/:path*']
};
