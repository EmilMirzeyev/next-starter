"use client";
import { SwipperType } from "./swipper.type";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import Image from "next/image";
import { useEffect, useState } from "react";

const Swipper = ({ data }: SwipperType) => {
    const [offsetBefore, setOffsetBefore] = useState(300);
    const [offsetAfter, setOffsetAfter] = useState(300);
    const [spaceBetween, setSpaceBetween] = useState(50)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768 && window.innerWidth > 376) {
                setOffsetBefore(100);
                setOffsetAfter(250);
                setSpaceBetween(80)
            } else if (window.innerWidth <= 376 && window.innerWidth > 350) {
                setOffsetBefore(60);
                setOffsetAfter(1005);
                setSpaceBetween(100)
            } else if (window.innerWidth <= 376) {
                setOffsetBefore(60);
                setOffsetAfter(2000);
                setSpaceBetween(50)
            } else {
                setOffsetBefore(300);
                setOffsetAfter(300);
                setSpaceBetween(50)
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div className="w-full overflow-hidden">
                <Swiper
                    key={0}
                    initialSlide={0}
                    slidesPerView={8}
                    spaceBetween={spaceBetween}
                    slidesOffsetBefore={offsetBefore}
                    slidesOffsetAfter={offsetAfter}
                    freeMode={true}
                    modules={[FreeMode]}
                >
                    {data.map((swiper, index) => (
                        <SwiperSlide
                            key={index}
                            className="w-fit py-3 px-6 flex gap-x-2 justify-center items-center rounded-lg"
                        >
                            <div className="flex items-center gap-3">
                                <div className="text-14px600">{swiper.icon}</div>
                                {/* <Image
                                    quality={100}
                                    className="min-w-[182px] min-h-[100px]"
                                    width={182}
                                    height={100}
                                    alt="Partner"
                                    src={swiper.url}
                                /> */}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default Swipper;
