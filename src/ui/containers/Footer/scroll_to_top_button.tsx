"use client";
import { scrollToTop } from "@/core/utils/scrollToTop";
import { ArrowRightSVG } from "@public/vectors";

const ScrollToTopButton = () => {
    return (
        <div
            onClick={scrollToTop}
            className="size-12 border-2 rounded-full bg-brand-600  hover:brightness-125 hover:cursor-pointer flex justify-center items-center border-brand-600 transition-all duration-200"
        >
            <ArrowRightSVG className="-rotate-90 text-white" />
        </div>
    );
};

export default ScrollToTopButton;
