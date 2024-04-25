"use client";
import { i18n } from "@/core/lib/i18n.config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ChangeLanguage = () => {
  const pathname = usePathname();
  function removeLocaleFromPath(pathname: string) {
    const localeRegex = new RegExp(`^\\/(${i18n.locales.join("|")})\\/`);
    const newPathname = pathname.replace(localeRegex, "");

    return newPathname.startsWith("/") ? newPathname : "/" + newPathname;
  }

  return (
    <div className="flex gap-4">
      {i18n.locales.map((locale) => (
        <Link key={locale} href={`/${locale + removeLocaleFromPath(pathname)}`}>
          {locale}
        </Link>
      ))}
    </div>
  );
};

export default ChangeLanguage;
