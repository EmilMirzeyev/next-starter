import { useClickOutside } from "@/core/hooks/useClickOutside"
import { i18n } from "@/core/lib/i18n.config"
import { useParams, usePathname, useSearchParams } from "next/navigation"
import { useMemo, useRef, useState } from "react"

export const ChangeLanguageVM = () => {
    const collapse = useRef(null)
    const { lang } = useParams()
    const currentLanguage = lang || i18n.defaultLocale
    const [isOpen, setIsOpen] = useState(false)
    const [locales] = useState([
        currentLanguage as string,
        ...i18n.locales.filter((l) => l !== currentLanguage)
    ])
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const regexPattern = useMemo(() => {
        return new RegExp(i18n.locales.map((l) => "/" + l).join("|"));
    }, []);

    const removeLocaleFromPath = useMemo(() => {
        return (path: string) => {
            const matches = path.match(regexPattern);
            const newPathname = path.replace(matches?.[0] || "", "");
            return newPathname.startsWith("/") ? newPathname : "/" + newPathname;
        };
    }, [regexPattern]);

    useClickOutside(collapse.current, () => setIsOpen(false));

    const handleLanguageClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        locale: string
    ) => {
        if (locale === currentLanguage) {
            e.preventDefault();
        }
    };


    return {
        collapse,
        isOpen,
        setIsOpen,
        locales,
        removeLocaleFromPath,
        handleLanguageClick,
        lang,
        pathname,
        searchParams: new URLSearchParams(searchParams).toString(),
    };

}
