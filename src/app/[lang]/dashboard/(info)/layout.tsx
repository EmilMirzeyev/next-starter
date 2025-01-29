"use client";
import { useHeaderContent } from '@/core/hooks/userHeaderContent';
import OtherPagesBar from '@/ui/components/OtherPagesBar'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

const InfoLayout = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname()
    const pageSlug = pathname.split('/').pop();
    const PAGE_TITLES = {
        "faq": "Tez-tez verilən suallar",
        "privacy-policy": "Məxfilik siyasəti",
        "terms-conditions": "Qaydalar və şərtlər"
    };
    const currentPage = PAGE_TITLES[pageSlug as keyof typeof PAGE_TITLES]

    useHeaderContent({
        breadcrumbs: [
            {
                id: 1,
                name: currentPage,
                link: "",
            },
        ],
        deps:currentPage
    });

    return (
        <div className="container">
            <div className="my-8">
                <h1 className="text-brand-600 text-30px700 p-3 pl-5 rounded-2xl bg-brand-25 h-[62px] border border-brand-25">
                    {currentPage}
                </h1>
            </div>
            <div className="flex gap-x-6 relative">
                {children}
                <OtherPagesBar />
            </div>
        </div>
    )
}

export default InfoLayout