import {
    FacebookSVG,
    InstagramSVG,
    LogoV1SVG,
    TelegramSVG,
    TikTokSVG,
} from "@public/vectors";
import ScrollToTopButton from "../scroll_to_top_button";
import Link from "next/link";
import Contact from '@/ui/containers/Contact';

const DashboardFooter = () => {
    const socialIcons = [
        { Icon: FacebookSVG, href: "/", label: "Facebook" },
        { Icon: TelegramSVG, href: "/", label: "Telegram" },
        { Icon: InstagramSVG, href: "/", label: "Instagram" },
        { Icon: TikTokSVG, href: "/", label: "TikTok" },
    ];

    return (
        <div className="flex flex-col gap-y-16 mt-[120px]">
            <Contact />
            <div className="container flex flex-col gap-y-10">
                <div className="flex items-center justify-between relative">
                    <Link href="/dashboard">
                        <LogoV1SVG aria-hidden="true" />
                    </Link>
                    <div className="border border-gray-200 bg-gray-50 rounded-[53px] py-2 px-4 w-fit">
                        <h3 className="text-black text-14px600">
                            “Car Buy” B2B avtomobil alış-satış sistemi
                        </h3>
                    </div>
                    <ul className="flex items-center gap-x-2">
                        {socialIcons.map(({ Icon, label, href }) => (
                            <li
                                key={label}
                                className="group p-2 rounded-xl hover:bg-brand-50 flex items-center justify-center duration-200 cursor-pointer"
                            >
                                <Link href={href}>
                                    <Icon
                                        aria-label={label}
                                        className="fill-[#667085] group-hover:fill-[#EC1C24]"
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="absolute -right-28">
                        <ScrollToTopButton />
                    </div>
                </div>
                <div className="h-[1px] w-full bg-gray-200" />
                <div className="flex justify-between text-14px500 text-[rgba(127,127,127)] mb-10">
                    <p>&copy; 2025 All rights reserved</p>
                    <p>Məxfilik siyasəti</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardFooter;
