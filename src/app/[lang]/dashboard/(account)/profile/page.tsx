"use client";
import { useHeaderContent } from "@/core/hooks/userHeaderContent";
import InfoAlertBox from "@/ui/components/InfoAlertBox";
import TabBar from "@/ui/components/TabBar";
import IncreaseBalanceForm from "@/ui/features/IncreaseBalanceForm";
import {
    ArrowRightSVG,
    HeartSVG,
    LayersThreeSVG,
    LockSVG,
    SettingsSVG,
    User3SVG,
    WalletSVG,
} from "@public/vectors";
import Link from "next/link";
import BannerImage from "@public/images/Banner.jpg";
import Image from "next/image";
import CarCard from "@/ui/components/CarCard";

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

    const tabData = [
        { id: 1, name: "Dərc olunmuşlar", count: 7 },
        { id: 2, name: "Vaxtı bitmişlər", count: 7 },
        { id: 3, name: "Gözləmədə olanlar", count: 7 },
    ];

    const tabData2 = [
        { id: 1, name: "Bütün elanlar", count: 7 },
        { id: 2, name: "Barter", count: 7 },
        { id: 3, name: "Təcili satıram", count: 7 },
        { id: 4, name: "Təcili alıram", count: 7 },
        { id: 5, name: "Lizinq", count: 7 },
        { id: 6, name: "Adi elanlar", count: 7 },
    ];

    const isUser = false;

    return (
        <div className="w-full flex flex-col gap-y-8">
            <div className="border border-brand-25 bg-brand-25 rounded-2xl p-3 pl-5">
                <h1 className="text-brand-600 text-30px700">Şəxsi kabinet</h1>
            </div>
            <TabBar tabParam="statusId" tabData={tabData} />
            <div>
                <h2 className="text-gray-900 text-24px700">Dərc olunmuşlar</h2>
            </div>
            <InfoAlertBox description="Elanlar 48 saat sonra vaxtı bitmişlər bölməsinə keçir!" />
            <TabBar tabParam="tabId" tabData={tabData2} />
            <div className="grid grid-cols-3 gap-6">
                {Array.from({ length: 7 }, (_, i) => (
                    <CarCard />
                ))}
            </div>
        </div>
    );
};

export default Profile;
