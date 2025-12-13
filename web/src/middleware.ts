import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for static files
  matcher: ['/((?!_next|api|favicon.ico|sitemap.xml|robots.txt|media).*)']
};
