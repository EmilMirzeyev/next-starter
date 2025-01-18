"use client";
import { SwipperType } from "./swipper.type";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';

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
                    {data.map((swiper) => (
                        <SwiperSlide
                            key={swiper.id}
                            className="w-fit py-3 px-6 flex gap-x-2 justify-center items-center rounded-lg"
                        >
                            <div className="flex items-center gap-3">
                                <div className="text-14px600">{swiper.icon}</div>
                            </div >
                        </SwiperSlide >
                    ))}
                </Swiper >
            </div >
        </>
    );
};

export default Swipper;
