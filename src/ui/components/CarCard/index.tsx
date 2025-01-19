"use client";
import Image from "next/image";
import CarImage from "@public/images/car.png";
import { BarterSVG, HeartSVG, PercentageSVG } from "@public/vectors";
import { CarCardVM } from "./car_card.vm";

const CarCard = () => {
    const { liked, setLiked } = CarCardVM();

    return (
        <div className="w-fit group">
            <div className="rounded-t-2xl overflow-hidden relative">
                <Image
                    src={CarImage}
                    alt="car image"
                    className="group-hover:scale-125 transition-transform duration-300 "
                />
                <button
                    onClick={() => setLiked((prev) => !prev)}
                    className="absolute z-10 top-3.5 right-3 transition-all"
                >
                    <HeartSVG
                        fill={liked ? "#F04438" : "#000"}
                        className={liked ? "text-transparent" : "text-white"}
                    />
                </button>
            </div>
            <div className="px-4 py-3 flex flex-col gap-y-3 border border-t-0 border-gray-200 rounded-b-[20px] group-hover:border-brand-300 transition-all ease-in-out">
                <p className="text-gray-500 text-14px500">16.01.2024 / 17:06</p>
                <div className="flex justify-between">
                    <p className="bg-gray-950 rounded-md text-12px500 text-white w-fit px-2 py-1">
                        Avtosalon
                    </p>
                    <div className="flex gap-x-1">
                        <BarterSVG />
                        <PercentageSVG />
                    </div>
                </div>
                <div>
                    <h4 className="text-gray-900 text-24px700">26 500 AZN</h4>
                    <p className="text-gray-800 text-18px500 group-hover:text-brand-500 duration-300">
                        Ford - Fusion Titanium
                    </p>
                </div>
                <p className="text-gray-500 text-16px400">2020, 2.0 L, 99 000 km</p>
            </div>
        </div>
    );
};

export default CarCard;
