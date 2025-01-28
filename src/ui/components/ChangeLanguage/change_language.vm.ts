import { useClickOutside } from "@/core/hooks/useClickOutside";
import { useRouter } from "@/i18n/routing";
import { useParams, usePathname } from "next/navigation";
import {  useRef, useState } from "react";
import { i18n } from "@/core/lib/i18n.config";

export const ChangeLanguageVM = () => {
  const collapse = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const currentLanguage = lang || i18n.defaultLocale;
  const [locales] = useState(i18n.locales.filter((l) => l !== currentLanguage));

  const changeLanguage = (locale: string) => {
    const newPath = `/${locale}${pathname.replace(/^\/(az|en|ru)/, "")}`;
    router.push(newPath);
  };

  const hrefs = locales.map(
    (locale) => `/${locale}${pathname.replace(/^\/(az|en|ru)/, "")}`
  );

  useClickOutside(collapse.current, () => setIsOpen(false));
  return {
    collapse,
    isOpen,
    setIsOpen,
    lang,
    hrefs,
    locales,
    changeLanguage,
  };
};
