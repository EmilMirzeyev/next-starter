import type { LocaleType } from "@/core/lib/i18n.config";
import type { LinkProps } from "next/link";
import type { PropsWithChildren } from "react";

export type NextLinkType = PropsWithChildren &
    LinkProps & {
        href: string;
        className?: string;
        query?: Record<string, string>;
        hash?: string;
        langParam?: LocaleType
    };
