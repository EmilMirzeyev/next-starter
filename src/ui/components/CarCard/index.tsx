"use client";
import Image from "next/image";
import CarImage from "@public/images/car.png";
import { BarterSVG, HeartSVG, PercentageSVG } from "@public/vectors";
import { CarCardVM } from "./car_card.vm";
import { CarCardType } from "./car_card.type";

const CarCard = ({ car = {
    "id": 1,
    "created_at": "2025-02-06 12:21:14",
    "brand": "BMW",
    "model": "5",
    "credit": true,
    "barter": false,
    "price": "25000.00",
    "currency": "",
    "year": "2022",
    "engine_size": "2.0",
    "mileage": 15000,
    "images": []
}, }: CarCardType) => {
    const { liked, toggleFavorite } = CarCardVM();

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${day}.${month}.${year} / ${hours}:${minutes}`;
    };

    console.log('car card', car)
    return (
        <div className="w-fit group">
            <div className="rounded-t-2xl overflow-hidden relative">
                <Image
                    src={CarImage}
                    alt="car image"
                    className="group-hover:scale-125 transition-transform duration-300 "
                />
                <button
                    onClick={toggleFavorite}
                    className="absolute z-10 top-3.5 right-3 transition-all"
                >
                    <HeartSVG
                        fill={liked ? "#F04438" : "#000"}
                        className={liked ? "text-transparent" : "text-white"}
                    />
                </button>
            </div>
            <div className="px-4 py-3 flex flex-col gap-y-3 border border-t-0 border-gray-200 rounded-b-[20px] group-hover:border-brand-300 transition-all ease-in-out">
                <p className="text-gray-500 text-14px500">{formatDate(car.created_at)}</p>
                <div className="flex justify-between">
                    <p className="bg-gray-950 rounded-md text-12px500 text-white w-fit px-2 py-1">
                        Avtosalon
                    </p>
                    <div className="flex gap-x-1">
                        {car.barter && (
                            <BarterSVG />
                        )}
                        {car.credit && (
                            <PercentageSVG />
                        )}
                    </div>
                </div>
                <div>
                    <h4 className="text-gray-900 text-24px700">{car.price} AZN</h4>
                    <p className="text-gray-800 text-18px500 group-hover:text-brand-500 duration-300">
                        {car.brand} - {car.model}
                    </p>
                </div>
                <p className="text-gray-500 text-16px400">{car.year}, {car.engine_size} L, {car.mileage} km</p>
            </div>
        </div>
    );
};

export default CarCard;
