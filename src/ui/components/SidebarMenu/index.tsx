"use client";
import { cn } from "@/core/utils/cn";
import {
    BellPlusSVG,
    HeartSVG,
    LockSVG,
    User3SVG,
    WalletSVG,
} from "@public/vectors";
import Link from "next/link";
import { SidebarVM } from "./sidebar_menu.vm";

// eslint-disable-next-line @next/next/no-async-client-component
const SidebarMenu = () => {
    const { isActive } = SidebarVM();

    const menuItems = [
        {
            href: "/dashboard/profile",
            label: "Şəxsi kabinet",
            icon: <User3SVG />,
            key: "profile",
        },
        {
            href: "/dashboard/favorites",
            label: "Seçilmişlər",
            icon: <HeartSVG />,
            key: "favorites",
        },
        {
            href: "/dashboard/balance",
            label: "Balans",
            icon: <WalletSVG />,
            key: "balance",
            balance: "0 AZN",
        },
        {
            href: "/dashboard/personal-info",
            label: "Şəxsi məlumatlar",
            icon: <LockSVG />,
            key: "personal-info",
        },
        {
            href: "/dashboard/notifications",
            label: "Bildirişlər",
            icon: <BellPlusSVG />,
            key: "notifications",
        },
    ];

    return (
        <div className="border border-gray-200 rounded-[20px] p-3 w-[264px]">
            <ul className="text-black text-16px500 flex flex-col gap-y-2">
                {menuItems.map(({ href, label, icon, key, balance }) => (
                    <Link
                        key={key}
                        href={href}
                        className={cn(
                            "group p-3 flex gap-x-3 rounded-xl transition-all ease-in-out",
                            isActive(key) ? "bg-brand-50 text-brand-600 cursor-auto" : "hover:bg-gray-100 hover:text-black"
                        )}
                    >
                        <div>{icon}</div>
                        <div className="flex w-full justify-between">
                            <h4>{label}</h4>
                            {balance && <p>{balance}</p>}
                        </div>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default SidebarMenu;
