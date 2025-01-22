import Shimmer from "@/ui/shared/Skeleton";
import { Swiper, SwiperSlide } from "swiper/react";

const StatusFilterTabShimmer = () => {
    return (
        <div className="w-full overflow-hidden">
            <Swiper
                slidesPerView="auto"
                spaceBetween={40}
                className="mt-10 mb-8 border-b"
            >
                {Array.from({ length: 20 }, (_, i) => (
                    <SwiperSlide
                        key={i}
                        className={`w-fit py-2 px-3 flex gap-x-2 justify-center items-center`}
                    >
                        <Shimmer className="h-5 w-40" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default StatusFilterTabShimmer;
