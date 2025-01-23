import {
    FacebookSVG,
    InstagramSVG,
    LogoV1SVG,
    TelegramSVG,
    TikTokSVG,
} from "@public/vectors";
import ScrollToTopButton from "../scroll_to_top_button";
import Contact from "../../Contact";
import Link from "next/link";

const DashboardFooter = () => {
    return (
        <div className='flex flex-col gap-y-16 mt-[120px]'>
            <Contact />
            <div className="container flex flex-col gap-y-10">
                <div className="flex items-center justify-between relative">
                    <Link href='/dashboard'>
                        <LogoV1SVG aria-hidden="true" />
                    </Link>
                    <div className="border border-gray-200 bg-gray-50 rounded-[53px] py-2 px-4 w-fit">
                        <h3 className="text-black text-14px600">
                            “Car Buy” B2B avtomobil alış-satış sistemi
                        </h3>
                    </div>
                    <ul className="flex items-center gap-x-2">
                        <li className="group p-2 rounded-xl hover:bg-brand-50 size-12 flex items-center justify-center duration-200 cursor-pointer">
                            <FacebookSVG className="fill-[#667085] group-hover:fill-[#EC1C24]" />
                        </li>
                        <li className="group p-2 rounded-xl hover:bg-brand-50 size-12 flex items-center justify-center duration-200 cursor-pointer">
                            <TelegramSVG className="fill-[#667085] group-hover:fill-[#EC1C24]" />
                        </li>
                        <li className="group p-2 rounded-xl hover:bg-brand-50 size-12 flex items-center justify-center duration-200 cursor-pointer">
                            <InstagramSVG className="fill-[#667085] group-hover:fill-[#EC1C24]" />
                        </li>
                        <li className="group p-2 rounded-xl hover:bg-brand-50 size-12 flex items-center justify-center duration-200 cursor-pointer">
                            <TikTokSVG className="fill-[#667085] group-hover:fill-[#EC1C24]" />
                        </li>
                    </ul>
                    <div className="absolute -right-28"><ScrollToTopButton /></div>
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
