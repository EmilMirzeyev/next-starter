import { StatusFilterTabType } from "./status_filter_tab.type";
import { Swiper, SwiperSlide } from "swiper/react";
import { StatusFilterTabVM } from "./status_filter_tab.vm";
import { RequestStateEnum } from "@/data/enum/request_state.enum";
import StatusFilterTabShimmer from "./status_filter_tabs.shimmer";
import "swiper/css";

const StatusFilterTab = ({
    data,
    keyParam,
    state = RequestStateEnum.SUCCESS,
}: StatusFilterTabType) => {
    const {
        searchParams,
        appealStatusId,
        activeSlideIndex,
        handleUpdateSwiperState,
    } = StatusFilterTabVM({
        data,
        keyParam,
    });

    return (
        <>
            {state === RequestStateEnum.LOADING && <StatusFilterTabShimmer />}
            {(state === RequestStateEnum.SUCCESS ||
                (searchParams.toString() && state !== RequestStateEnum.LOADING)) && (
                    <div className="w-full overflow-hidden">
                        <Swiper
                            key={activeSlideIndex}
                            initialSlide={activeSlideIndex}
                            slidesPerView="auto"
                            spaceBetween={40}
                        >
                            {data.map((swiper) => (
                                <SwiperSlide
                                    key={swiper.id}
                                    className={`w-fit py-3 px-6 flex gap-x-2 justify-center items-center rounded-lg 
                            ${appealStatusId === swiper.id && swiper.count
                                            ? "bg-teal-700 text-white hover:bg-teal-800 transition duration-150"
                                            : "text-gray-500"
                                        }
                                
                               ${swiper.count > 0
                                            ? "cursor-pointer"
                                            : "cursor-default border-none text-gray-200"
                                        } ${swiper.count > 0 && appealStatusId !== swiper.id
                                            ? "hover:text-gray-800"
                                            : ""
                                        } `}
                                    onClick={() =>
                                        swiper.count > 0 && handleUpdateSwiperState(Number(swiper.id))
                                    }
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="text-14px600">{swiper.name}</div>
                                        {swiper.count > 0 && (
                                            <div
                                                className={`${appealStatusId === swiper.id
                                                    ? "border-teal-200"
                                                    : "bg-gray-50 border-gray-100"
                                                    } px-2 py-[2px] rounded-full border-[1px] text-12px500`}
                                            >
                                                {swiper.count}
                                            </div>
                                        )}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}
        </>
    );
};

export default StatusFilterTab;
