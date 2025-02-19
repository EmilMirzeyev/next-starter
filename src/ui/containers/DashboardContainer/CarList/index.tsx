import { SelectOptionVariantEnum } from "@/data/enum/select_option_variant.enum";
import AnnouncementTitle from "@/ui/components/AnnouncementTitle";
import CarCard from "@/ui/components/CarCard";
import Select from "@/ui/shared/Select";
import Link from "next/link";
import { CarListVM } from "./car_list.vm";
import { CarListType } from "./car_list.type";

const CarList = ({ carList }: CarListType) => {
    const { sortByValue, handleSearchParams } = CarListVM();
    console.log('carList', carList)
    
    return (
        <div className="container">
            <div className="flex my-12 items-center justify-between">
                <div className="flex gap-x-6 h-fit items-center">
                    <h2 className="text-gray-900 text-30px700">Ən son elanlar</h2>
                    <div className="flex text-16px500 border border-brand-200 py-2 px-3 rounded-[32px]">
                        Son 24 saatda
                        <span className="text-brand-600 text-16px600 mx-1">1324</span>
                        yeni elan yerləşdirilib
                    </div>
                </div>
                <div>
                    <Select
                        variant={SelectOptionVariantEnum.RADIO}
                        resetType="none"
                        value={sortByValue}
                        name="sortBy"
                        defaultText="Tarixə görə"
                        onChange={handleSearchParams}
                        data={[
                            {
                                id: 1,
                                name: "Tarixə görə",
                            },
                            {
                                id: 2,
                                name: "Əvvəlcə ucuz",
                            },
                            {
                                id: 3,
                                name: "Əvvəlcə bahalı",
                            },
                            {
                                id: 4,
                                name: "Yürüş",
                            },
                            {
                                id: 5,
                                name: "Buraxılış ili",
                            },
                        ]}
                        className="w-[196px]"
                        buttonClassName="h-12 rounded-3xl bg-gray-100 px-[18px] border-none"
                        labelClassName="text-gray-950 text-16px600"
                        listboxOptionsClassName="rounded-[20px] text-16px500 flex flex-col gap-y-1"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-y-6">
                <AnnouncementTitle title="Təcili alıram elanları" count={24} />
                <div className="grid grid-cols-4 gap-6">
                    {carList?.data?.data.map((car) => (
                        <Link key={car.id} href={"/dashboard/1"}>
                            <CarCard car={car} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarList;
