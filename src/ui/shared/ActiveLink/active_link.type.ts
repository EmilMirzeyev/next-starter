import { LocaleType } from "@/core/lib/i18n.config";
import type { LinkProps } from "next/link";
import type { PropsWithChildren } from "react";

export type ActiveLinkType = PropsWithChildren &
    LinkProps & {
        href: string;
        className?: string;
        activeClassName?: string;
        langParams: LocaleType;
        query?: Record<string, string>;
        hash?: string;
    };
