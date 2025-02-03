"use client"
import { useHeaderContent } from "@/core/hooks/userHeaderContent";
import ContactUsForm from "@/ui/features/ContactUsForm";
import MapImage from '@public/images/map.png'
import { FacebookSVG, InstagramSVG, TelegramSVG, TikTokSVG } from "@public/vectors";
import Image from "next/image";
import Link from "next/link";

const ContactUs = () => {
    useHeaderContent({
        breadcrumbs: [
            {
                id: 1,
                name: "Əlaqə",
                link: "",
            },
        ],
    });
    // store.dispatch(setHeaderContent({
    //     breadcrumbs: [
    //         {
    //             id: 1,
    //             name: "Əlaqə",
    //             link: "",
    //         },
    //     ],
    // }));
    const socialIcons = [
        { Icon: FacebookSVG, href: "/", label: "Facebook" },
        { Icon: TelegramSVG, href: "/", label: "Telegram" },
        { Icon: InstagramSVG, href: "/", label: "Instagram" },
        { Icon: TikTokSVG, href: "/", label: "TikTok" },
    ];
    return (
        <div className="container">
            <div className="my-8">
                <h1 className="text-brand-600 text-30px700 p-3 pl-5 rounded-2xl bg-brand-25 h-[62px] border border-brand-25">
                    Bizimlə əlaqə
                </h1>
            </div>
            <div className="flex gap-x-6">
                <div className="w-1/2">
                    <ContactUsForm />
                </div>
                <div className="w-1/2 p-8 border border-gray-200 rounded-[20px] flex flex-col gap-y-5">
                    <div className="flex items-center gap-x-5">
                        <div className="p-4 rounded-xl bg-gray-100 w-full flex flex-col gap-y-1">
                            <h3 className="text-gray-500 text-14px400">Telefon nömrəmiz</h3>
                            <p className="text-gray-800 text-16px500">+994 12 345 67 89</p>
                        </div>
                        <div className="p-4 rounded-xl bg-gray-100 w-full flex flex-col gap-y-1">
                            <h3 className="text-gray-500 text-14px400">Emailimiz</h3>
                            <p className="text-gray-800 text-16px500">info@carbuy.az</p>
                        </div>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-100 w-full flex flex-col gap-y-1">
                        <h3 className="text-gray-500 text-14px400">Adresimiz</h3>
                        <p className="text-gray-800 text-16px500">82 Amerige St. Poughkeepsie, NY 12603</p>
                    </div>
                    <div>
                        <Image src={MapImage} alt="Mah" />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <h3 className="text-gray-500 text-14px400">Sosial media hesablarımız</h3>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
