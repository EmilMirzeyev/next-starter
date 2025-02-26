"use client";
import Button from "@/ui/shared/Button";
import "./globals.css";
import { HomeSVG, NotFoundSVG, User3SVG } from "@public/vectors";
import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <NotFoundSVG />
            <div className="flex flex-col gap-y-12">
                <div className="flex flex-col gap-y-8 items-center max-w-[533px] justify-center ">
                    <div>
                        <h1 className="text-140px700 text-brand-600">404</h1>
                        <h4 className="text-30px500 text-gray-800">Page Not Found</h4>
                    </div>
                    <p className="text-gray-500 text-16px400 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper
                        convallis euismod vestibulum in pharetra.
                    </p>
                </div>
                <div className="flex gap-x-4">
                    <Button
                        type="button"
                        onClick={() => (window.location.href = "/")}
                        variant={ButtonVariantsEnum.EMPTY}
                        className="bg-gray-100 rounded-[28px] flex gap-x-2.5 items-center min-w-[234px]"
                    >
                        Əsas səhifə
                        <div>
                            <HomeSVG />
                        </div>
                    </Button>
                    <Button
                        type="button"
                        variant={ButtonVariantsEnum.BLACK}
                        className="rounded-[28px] flex gap-x-2.5 min-w-[234px]"
                    >
                        Şəxsi kabinet
                        <div>
                            <User3SVG />
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
