import Link from "next/link";
import languageInstance from "@/core/lib/languageSingleton";
import { i18n } from "@/core/lib/i18n.config";
import { NextLinkType } from "./next_link.type";

const NextLink = ({
    href,
    query,
    hash,
    className,
    langParam = languageInstance.getLang(),
    children,
    ...props
}: NextLinkType) => {
    return (
        <Link
            href={{
                pathname: `${langParam === i18n.defaultLocale ? "" : `/${langParam}`}${href.startsWith("/") ? href : `/${href}`
                    }`,
                query,
                hash,
            }}
            className={className}
            prefetch={false}
            {...props}
        >
            {children}
        </Link>
    );
};

export default NextLink;
