"use client";
import Link from "next/link";
import languageInstance from "@/core/lib/languageSingleton";
import { i18n } from "@/core/lib/i18n.config";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { ActiveLinkType } from "./active_link.type";

const ActiveLink = ({
    href,
    query,
    hash,
    className,
    activeClassName,
    langParams,
    children,
    ...props
}: ActiveLinkType) => {
    const pathname = usePathname();
    const regexPattern = new RegExp(i18n.locales.map((l) => "/" + l).join("|"));

    const removeLocaleFromPath = (path: string) => {
        const matches = path.match(regexPattern);
        const newPathname = path.replace(matches?.[0] || "", "");
        return newPathname.startsWith("/") ? newPathname : "/" + newPathname;
    };

    return (
        <Link
            href={{
                pathname: `${langParams === i18n.defaultLocale
                    ? ""
                    : `/${langParams}`
                    }${href.startsWith("/") ? href : `/${href}`}`,
                query,
                hash,
            }}
            className={twMerge(
                className,
                removeLocaleFromPath(pathname) === href ? activeClassName : ""
            )}
            prefetch={false}
            {...props}
        >
            {children}
        </Link>
    );
};

export default ActiveLink;
