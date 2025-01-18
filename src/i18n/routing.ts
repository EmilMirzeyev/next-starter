import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
    locales: ["az", "en", "ru"],
    defaultLocale: "az",
    localePrefix: {
        mode: "never",
    }
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);
