"use client";
import { SwipperType } from "./swipper.type";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
import Image from "next/image";

const Swipper = ({
    data,
}: SwipperType) => {
    return (
        <>
            <div className="w-full overflow-hidden">
                <Swiper
                    key={0}
                    initialSlide={0}
                    slidesPerView={8}
                    spaceBetween={50}
                    slidesOffsetBefore={300}
                    slidesOffsetAfter={300}
                    freeMode={true}
                    modules={[FreeMode]}
                >
                    {data.map((swiper, index) => (
                        <SwiperSlide
                            key={index}
                            className="w-fit py-3 px-6 flex gap-x-2 justify-center items-center rounded-lg"
                        >
                            <div className="flex items-center gap-3">
                                {/* <div className="text-14px600">{swiper.icon}</div> */}
                                <Image
                                    quality={100}
                                    className="min-w-[182px] min-h-[100px]"
                                    width={182}
                                    height={100}
                                    alt="Partner"
                                    src={swiper.url}
                                />
                            </div >
                        </SwiperSlide >
                    ))}
                </Swiper >
            </div >
        </>
    );
};

export default Swipper;
