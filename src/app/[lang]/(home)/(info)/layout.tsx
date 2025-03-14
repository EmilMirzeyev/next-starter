"use client";
import { useHeaderContent } from "@/core/hooks/userHeaderContent";
import DashboardBreadcumbs from "@/ui/components/DashboardBreadcrumbs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const InfoLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    const otherPages = [
        {
            id: 1,
            name: "Məxfilik siyasəti",
            href: "/privacy-policy",
        },
        {
            id: 2,
            name: "Qaydalar və şərtlər",
            href: "/terms-conditions",
        },
    ];

    const pageSlug = pathname.split("/").pop();
    const PAGE_TITLES = {
        "privacy-policy": "Məxfilik siyasəti",
        "terms-conditions": "Qaydalar və şərtlər",
    };
    const currentPage = PAGE_TITLES[pageSlug as keyof typeof PAGE_TITLES];

    useHeaderContent({
        breadcrumbs: [
            {
                id: 1,
                name: currentPage,
                link: "",
            },
        ],
        deps: currentPage
    });

    return (
        <div className="pt-28">
            <DashboardBreadcumbs homeLink="/" />
            <div className="container">
                <div className="my-8">
                    <h1 className="text-brand-600 text-30px700 p-3 pl-5 rounded-2xl bg-brand-25 h-[62px] border border-brand-25 mobile:text-24px700">
                        {currentPage}
                    </h1>
                </div>
                <div className="flex gap-x-6 gap-y-8 desktopSm:flex-col laptop:flex-col tablet:flex-col mobile:flex-col">
                    <div>{children}</div>
                    <div className="min-w-[330px] border border-gray-200 p-6 rounded-[20px] flex flex-col gap-y-5 h-full sticky top-0 desktopSm:static mobile:static mobile:min-w-fit">
                        <h3 className="text-gray-900 text-24px700">Digər səhifələr</h3>
                        <div className="flex flex-col gap-y-2">
                            {otherPages.map(({ id, name, href }) => (
                                <Link
                                    href={href}
                                    key={id}
                                    className="text-black text-16px500 bg-gray-100 rounded-xl p-3 hover:brightness-95 cursor-pointer transition-all ease-in-out"
                                >
                                    {name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoLayout;
