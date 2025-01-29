import { ButtonVariantsEnum } from '@/data/enum/button_variants.enum';
import Button from '@/ui/shared/Button';
import { PlusSVG } from '@public/vectors';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const DashboardHeader = () => {
    const t = useTranslations("Dashboard")
    const navItems = [
        { href: "/", label: t("navigation.search") },
        { href: "", label: t("navigation.carDealerships") },
        { href: "/dashboard/terms-conditions", label: t("navigation.termsConditions") },
        { href: "/dashboard/faq", label: t("navigation.faq") },
        { href: "/dashboard/contact", label: t("navigation.contact") },
    ];
    return (
        <div className="bg-gray-100 py-3">
            <nav className="flex items-center justify-between container text-14px500">
                <ul className="flex items-center gap-x-8">
                    {navItems.map(({ href, label }, idx) => (
                        <li key={idx} className="group">
                            <Link href={href} className="relative">
                                {label}
                                <span className="absolute left-0 -bottom-[2.5px] w-full h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className="flex items-center gap-x-4">
                    <li className="group">
                        <Link href={""} className="relative">
                            <Button
                                variant={ButtonVariantsEnum.EMPTY}
                                className="h-9 rounded-[18px] text-14px600 px-4 text-gray-950 hover:brightness-[0.97]"
                            >
                                Barter et
                            </Button>
                        </Link>
                    </li>
                    <li className="group">
                        <Link href={""} className="relative">
                            <Button
                                variant={ButtonVariantsEnum.BLACK}
                                className="h-9 rounded-[18px] text-14px600 px-4"
                            >
                                Təcili al / sat
                            </Button>
                        </Link>
                    </li>
                    <li className="group">
                        <Link href="/dashboard/create" className="relative">
                            <Button className="flex gap-x-1.5 items-center h-9 rounded-[18px] text-14px600 px-4">
                                Yeni elan
                                <PlusSVG />
                            </Button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default DashboardHeader