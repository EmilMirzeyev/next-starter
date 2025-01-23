import AnnouncementTitle from "@/ui/components/AnnouncementTitle";
import CarCard from "@/ui/components/CarCard";
import Link from "next/link";

const CarList = () => {
    return (
        <div className="container">
            <div className="flex gap-x-6 my-12">
                <h2 className="text-gray-900 text-30px700">Ən son elanlar</h2>
                <div className="flex text-16px500 border border-brand-200 py-2 px-3 rounded-[32px]">
                    Son 24 saatda
                    <span className="text-brand-600 text-16px600 mx-1">1324</span>
                    yeni elan yerləşdirilib
                </div>
            </div>
            <div className="flex flex-col gap-y-6">
                <AnnouncementTitle title="Təcili alıram elanları" count={24} />
                <div className="grid grid-cols-4 gap-6">
                    {Array.from({ length: 9 }, (_, i) => (
                        <Link key={i} href={'/dashboard/1'}>
                            <CarCard />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarList;
