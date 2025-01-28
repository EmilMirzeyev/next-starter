import type { NextRequest } from "next/server";
import { i18n } from "./core/lib/i18n.config";
import createMiddleware from "next-intl/middleware";

export function middleware(request: NextRequest) {
  // const pathname = request.nextUrl.pathname;
  // const pathnameIsMissingLocale = i18n.locales.every(
  //   (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  // );

  // const response = NextResponse.next();
  // response.headers.set(
  //   "x-path",
  //   pathname);

  const nextIntlMiddleware = createMiddleware({
    locales: i18n.locales,
    defaultLocale: i18n.defaultLocale,
    localeDetection: true,
  });
  const response = nextIntlMiddleware(request);
  response.headers.set("x-path", request.nextUrl.pathname);

  return response;

  // Redirect if there is no locale
  // if (pathnameIsMissingLocale) {
  //   const locale = i18n.locales.includes(pathname.split("/")[1] as LocaleType)
  //     ? pathname.split("/")[1]
  //     : i18n.defaultLocale;
  //   if (locale === i18n.defaultLocale) {
  //     return NextResponse.rewrite(
  //       new URL(
  //         `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
  //         request.url
  //       ),
  //       response
  //     );
  //   }
  // } else {
  //   const locale = i18n.locales.includes(pathname.split("/")[1] as LocaleType)
  //     ? pathname.split("/")[1]
  //     : i18n.defaultLocale;
  //   if (locale === i18n.defaultLocale) {
  //     return NextResponse.redirect(
  //       new URL(
  //         `${pathname.split("/").slice(2).join("/").startsWith("/") ? "" : "/"
  //         }${pathname.split("/").slice(2).join("/")}`,
  //         request.url
  //       )
  //     );
  //   }
  // }
  // return response;
}

export const config = {
  // Matcher ignoring /_next/ and /api/
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/([\\w-]+)?/users/(.+)",
  ],
};
