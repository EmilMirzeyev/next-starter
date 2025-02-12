"use client"
import Profile3Image from "@public/images/profile3.png";
import Image from "next/image";
import BannerImage from "@public/images/Banner.jpg";
import Button from "@/ui/shared/Button";
import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum";
import {
    ClockSVG,
    FacebookSVG,
    InstagramSVG,
    LocationSVG,
    PhoneCallSVG,
    ShareSVG,
    TelegramSVG,
    TikTokSVG,
    TwitterSVG,
    YoutubeSVG,
} from "@public/vectors";
import TabBar from "@/ui/components/TabBar";
import Link from "next/link";
import CarCard from "@/ui/components/CarCard";
import { useHeaderContent } from "@/core/hooks/userHeaderContent";

const Profile = () => {
    useHeaderContent({
        breadcrumbs: [
            {
                id: 1,
                name: "Şəxsi kabinet",
                link: "",
            },
            {
                id: 2,
                name: "Dərc olunmuşlar",
                link: "",
            },
        ],
    });
    const socialIcons = [
        { Icon: FacebookSVG, href: "/", label: "Facebook" },
        { Icon: TelegramSVG, href: "/", label: "Telegram" },
        { Icon: TwitterSVG, href: "/", label: "Twitter" },
        { Icon: InstagramSVG, href: "/", label: "Instagram" },
        { Icon: TikTokSVG, href: "/", label: "TikTok" },
        { Icon: YoutubeSVG, href: "/", label: "YouTube" },
    ];

    const tabData2 = [
        { id: 1, name: "Bütün elanlar", count: 7 },
        { id: 2, name: "Barter", count: 7 },
        { id: 3, name: "Təcili satıram", count: 7 },
        { id: 4, name: "Təcili alıram", count: 7 },
        { id: 5, name: "Lizinq", count: 7 },
        { id: 6, name: "Adi elanlar", count: 7 },
    ];

    const isDealer = true

    return (
        <div className="container flex flex-col gap-y-10">
            {
                isDealer ? (
                    <>
                        <div className="mt-8">
                            <div className="relative">
                                <Image
                                    src={BannerImage}
                                    alt="banner"
                                    className="rounded-3xl h-80 w-full"
                                />
                                <div className="absolute bottom-0 w-full p-6">
                                    <div className="border border-gray-200 flex justify-between p-3 rounded-[40px] bg-white h-20">
                                        <div className="flex gap-x-3 items-center">
                                            <Image alt="profile image" src={Profile3Image} />
                                            <div className="flex flex-col gap-y-1">
                                                <h2 className="text-gray-900 text-20px600">Cybrary Cars</h2>
                                                <p className="text-gray-500 text-12px400">Alverçi</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-x-4 items-center">
                                            <Button
                                                variant={ButtonVariantsEnum.EMPTY}
                                                className="rounded-3xl flex gap-x-1.5 items-center h-12"
                                            >
                                                Paylaş
                                                <ShareSVG />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-x-20 items-center border border-gray-200 rounded-3xl p-6">
                            <div className="flex flex-col gap-y-6">
                                <div className="flex flex-col gap-y-2">
                                    <div className="flex flex-col gap-y-1">
                                        <h3 className="text-gray-900 text-20px600">Cybrary Cars</h3>
                                        <h5 className="text-gray-500 text-12px400">Avtosalon</h5>
                                    </div>
                                    <p className="text-gray-700 text-14px400">
                                        There are many variations of passages of Lorem Ipsum available,
                                        but the majority have suffered alteration in some form, by
                                        injected humour, or randomised words which don't look even
                                        slightly believable. If you are going to use a passage of Lorem
                                        Ipsum, you need to be sure there isn't anything
                                    </p>
                                </div>
                                <div className="bg-brand-25 rounded-[8px] py-2 pl-3 pr-4 w-fit">
                                    <p className="text-brand-600 text-14px500 flex items-center gap-x-1 underline underline-offset-[3px]">
                                        <LocationSVG />
                                        Bakı ş., Nəsimi r., Ü.Hacıbəyli küç. 57
                                    </p>
                                </div>
                            </div>
                            <div className="min-w-[360px] flex flex-col gap-y-2">
                                <div className="flex rounded-xl bg-gray-50 py-3 px-4">
                                    <div className="w-3/5 flex items-center gap-x-3">
                                        <ClockSVG />
                                        <div>
                                            <h4 className="text-gray-500 text-14px400">Həftə içi:</h4>
                                            <p className="text-gray-800 text-14px600">09:00-18:00</p>
                                        </div>
                                    </div>
                                    <div className="h-10 w-[1px] bg-gray-300 mx-3" />
                                    <div className="w-2/5">
                                        <h4 className="text-gray-500 text-14px400">Həftə içi:</h4>
                                        <p className="text-gray-800 text-14px600">09:00-18:00</p>
                                    </div>
                                </div>
                                <div className="flex rounded-xl bg-gray-50 py-3 px-4">
                                    <div className="w-3/5 flex items-center gap-x-3">
                                        <PhoneCallSVG />
                                        <div>
                                            <h4 className="text-gray-500 text-14px400">Telefon:</h4>
                                            <p className="text-gray-800 text-14px600">+994 12 345 67 89</p>
                                        </div>
                                    </div>
                                    <div className="h-10 w-[1px] bg-gray-300 mx-3" />
                                    <div className="w-2/5">
                                        <h4 className="text-gray-500 text-14px400">WhatsApp:</h4>
                                        <p className="text-gray-800 text-14px600">+994 12 345 67 89</p>
                                    </div>
                                </div>
                                <ul className="flex justify-center items-center gap-x-2">
                                    {socialIcons.map(({ Icon, label, href }) => (
                                        <li
                                            key={label}
                                            className="group p-2 rounded-xl hover:bg-brand-50 size-12 flex items-center justify-center duration-200 cursor-pointer"
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
                            </div>
                        </div>

                    </>
                ) : (
                    <div className="w-full mt-8">
                        <div className="border border-gray-200 flex justify-between p-3 rounded-[40px] bg-white h-20">
                            <div className="flex gap-x-3 items-center">
                                <Image alt="profile image" src={Profile3Image} />
                                <div className="flex flex-col gap-y-1">
                                    <h2 className="text-gray-900 text-20px600">Cybrary Cars</h2>
                                    <p className="text-gray-500 text-12px400">Alverçi</p>
                                </div>
                            </div>
                            <div className="flex gap-x-4 items-center">
                                <Button
                                    variant={ButtonVariantsEnum.EMPTY}
                                    className="rounded-3xl flex gap-x-1.5 items-center h-12"
                                >
                                    Paylaş
                                    <ShareSVG />
                                </Button>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className="flex flex-col gap-y-8">
                <div className="border border-brand-25 bg-brand-25 rounded-2xl p-3 pl-5">
                    <h1 className="text-brand-600 text-30px700">Dərc olunmuş elanları</h1>
                </div>
                <TabBar tabParam="tabId" tabData={tabData2} />
                <h2 className="text-gray-900 text-24px700">Bütün elanlar</h2>
                <div className="grid grid-cols-4 gap-6">
                    {Array.from({ length: 7 }, (_, i) => (
                        <Link key={i} href={'/dashboard/1'}>
                            <CarCard />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;
