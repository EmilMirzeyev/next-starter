import Link from "next/link";
import AutoSalonCard from "./AutoSalonCard";
import AutoSalonFilter from "./AutoSalonFilter";

const AutoSalonContainer = () => {
    const autoSalonData = [
        {
            id: 1,
            name: "Cybrary Cars",
            hasAutoSalon: true,
            announcementCount: 67,
            viewCount: 74,
        },
        {
            id: 2,
            name: "Alverçi",
            hasAutoSalon: false,
            announcementCount: 67,
            viewCount: 74,
        },
        {
            id: 3,
            name: "Cybrary Cars",
            hasAutoSalon: true,
            announcementCount: 67,
            viewCount: 74,
        },
        {
            id: 4,
            name: "Alverçi",
            hasAutoSalon: false,
            announcementCount: 67,
            viewCount: 74,
        },
        {
            id: 5,
            name: "Cybrary Cars",
            hasAutoSalon: true,
            announcementCount: 67,
            viewCount: 74,
        },
        {
            id: 6,
            name: "Alverçi",
            hasAutoSalon: false,
            announcementCount: 67,
            viewCount: 74,
        },
        {
            id: 7,
            name: "Cybrary Cars",
            hasAutoSalon: true,
            announcementCount: 67,
            viewCount: 74,
        },
    ];

    return (
        <div className="container mt-16 w-full flex flex-col gap-y-12">
            <AutoSalonFilter />
            <div className="grid grid-cols-4 gap-6">
                {autoSalonData.map((autoSalon) => (
                    <Link key={autoSalon.id} href={`/dashboard/profile/${autoSalon.id}`}>
                        <AutoSalonCard autoSalon={autoSalon} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AutoSalonContainer;
