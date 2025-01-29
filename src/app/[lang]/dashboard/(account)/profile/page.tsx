"use client";
import { useHeaderContent } from "@/core/hooks/userHeaderContent";
import InfoAlertBox from "@/ui/components/InfoAlertBox";
import TabBar from "@/ui/components/TabBar";
import CarCard from "@/ui/components/CarCard";
import { useSearchParams } from "next/navigation";

const Profile = () => {
    const searchParams = useSearchParams();
    const statusId = searchParams.get("statusId")

    const tabData = [
        { id: 1, name: "Dərc olunmuşlar", count: 7 },
        { id: 2, name: "Vaxtı bitmişlər", count: 7 },
        { id: 3, name: "Gözləmədə olanlar", count: 7 },
    ];

    const currentTab = tabData.find((tab) => tab.id === Number(statusId))?.name || tabData[0].name;

    useHeaderContent({
        breadcrumbs: [  
            {
                id: 1,
                name: "Şəxsi kabinet",
                link: "",
            },
            {
                id: 2,
                name: currentTab,
                link: "",
            },
        ],
        deps: statusId
    });


    const tabData2 = [
        { id: 1, name: "Bütün elanlar", count: 7 },
        { id: 2, name: "Barter", count: 7 },
        { id: 3, name: "Təcili satıram", count: 7 },
        { id: 4, name: "Təcili alıram", count: 7 },
        { id: 5, name: "Lizinq", count: 7 },
        { id: 6, name: "Adi elanlar", count: 7 },
    ];

    // const isUser = false;

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
                    <CarCard key={i} />
                ))}
            </div>
        </div>
    );
};

export default Profile;
