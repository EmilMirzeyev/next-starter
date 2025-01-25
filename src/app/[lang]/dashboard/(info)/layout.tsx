"use client";
import OtherPagesBar from '@/ui/components/OtherPagesBar'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

const InfoLayout = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname()
    const PAGE_TITLES = {
        "faq": "Tez-tez verilən suallar",
        "privacy-policy": "Məxfilik siyasəti"
    };
    const pageSlug = pathname.split('/').pop();

    return (
        <div className="container">
            <div className="my-8">
                <h1 className="text-brand-600 text-30px700 p-3 pl-5 rounded-2xl bg-brand-25 h-[62px] border border-brand-25">
                    {PAGE_TITLES[pageSlug as keyof typeof PAGE_TITLES]}
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