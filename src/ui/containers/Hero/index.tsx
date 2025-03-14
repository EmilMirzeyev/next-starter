import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum";
import Button from "@/ui/shared/Button";
import {
    ArrowRightSVG,
    Awsome1SVG,
    Awsome2SVG,
    Awsome3SVG,
    HeroBgSVG,
    HeroSVG,
    MobileTabletSVG,
    PhoneTabletSVG,
    TabletPhoneSVG,
} from "@public/vectors";
import Link from "next/link";

const Hero = () => {
    console.log("hero");

    return (
        <section
            id="hero"
            className="relative"
        // className="bg-brand-900 bg-[linear-gradient(to_right,_#2D0002_1%,_#59070B_30%,_#2D0002_60%,_#59070B_90%)]"
        >
            <div className="absolute -left-[240px] -top-[554px] -z-10">
                <HeroBgSVG />
            </div>
            <div className="container text-white py-[300px] flex laptop:pb-0 laptop:pt-40 tablet:pt-40 tablet:pb-0 mobile:pb-0 mobile:-mb-4 mobile:pt-36">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col gap-y-12">
                        <div className="flex flex-col gap-y-4 laptop:px-8 tablet:px-8">
                            <div
                                aria-label="Highlighted text"
                                className="border border-gray-200 text-black rounded-[53px] px-4 py-2 w-fit bg-gray-50"
                            >
                                <h2 className="text-14px600">
                                    “Car Buy” B2B avtomobil alış-satış sistemi
                                </h2>
                            </div>
                            <h1 className="text-72px700 text-brand-700 mobile:text-48px700">
                                Sürətli və rahat interfeys
                            </h1>
                            <p className="text-16px400 text-gray-800 mobile:text-14px400 tablet:pr-2 mobile:pr-6">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                                amet sint. Velit officia consequat duis enim velit mollit.
                                Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                        <div className="hidden tablet:block mb-8 flex-shrink-0 max-w-full">
                            <TabletPhoneSVG aria-hidden="true" className="w-full" />
                        </div>
                        <div className="hidden mobile:flex mb-8 justify-center ">
                            <MobileTabletSVG aria-hidden="true" />
                        </div>
                        <div className="flex gap-x-4 tablet:px-12 mobile:justify-center mobile:px-6">
                            <Link href="/signin" className="relative laptop:w-full tablet:w-full mobile:w-full">
                                <HeroSVG className="absolute -left-8 -top-8 text-brand-500 mobile:-top-7" />
                                <Button
                                    aria-label="Log in"
                                    className="rounded-[28px] flex items-center gap-2.5 whitespace-nowrap
                                   laptop:w-full tablet:w-full tablet:h-12 tablet:gap-x-1.5 tablet:text-16px600 mobile:text-16px600 mobile:w-full mobile:gap-x-1.5 mobile:px-[18px] mobile:h-12"
                                >
                                    Daxil ol
                                    <div>
                                        <ArrowRightSVG className="tablet:size-5 mobile:size-5" />
                                    </div>
                                </Button>
                            </Link>
                            <Link href="#about" className="laptop:w-full tablet:w-full mobile:w-full">
                                <Button
                                    aria-label="Learn more about us"
                                    variant={ButtonVariantsEnum.EMPTY}
                                    className="rounded-[28px] bg-gray-100 flex items-center gap-2.5 
                                   laptop:w-full tablet:w-full tablet:h-12 tablet:gap-x-1.5 tablet:text-16px600 mobile:text-16px600 mobile:w-full mobile:h-12 mobile:gap-1.5 mobile:px-[18px]"
                                >
                                    Haqqımızda
                                    <div>
                                        <ArrowRightSVG
                                            stroke="#fff"
                                            className="rotate-90 tablet:size-5 mobile:size-5"
                                        />
                                    </div>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex relative -right-[60px] tablet:hidden">
                    <Awsome1SVG
                        className="absolute z-10 left-7 text-black"
                        aria-hidden="true"
                    />
                    <Awsome2SVG
                        className="absolute -top-[80px] z-10 left-80 text-black"
                        aria-hidden="true"
                    />
                    <Awsome3SVG
                        className="absolute -bottom-[120px] z-10 left-72 text-black"
                        aria-hidden="true"
                    />
                    <PhoneTabletSVG className="absolute -top-[95px]" aria-hidden="true" />
                </div>
            </div>
        </section>
    );
};

export default Hero;

//first version
{
    /* <section
    id="hero"
    className="bg-brand-900 bg-[linear-gradient(to_right,_#2D0002_1%,_#59070B_30%,_#2D0002_60%,_#59070B_90%)]"
    >
    <div className="container text-white py-[220px] flex">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-8 lg:gap-12">
                <div className="flex flex-col gap-4 ">
                    <div
                        aria-label="Highlighted text"
                        className="border border-[rgba(255,255,255,0.09)] rounded-[53px] px-4 py-2 w-fit bg-[rgba(255,255,255,0.09)]"
                    >
                        <h2 className="lg:text-14px600 text-12px400 text-white">
                            “Car Buy” B2B avtomobil alış-satış sistemi
                        </h2>
                    </div>
                    <h1 className="lg:text-72px700 text-36px700">
                        Sürətli və rahat interfeys
                    </h1>
                    <p className="text-16px400">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                        amet sint. Velit officia consequat duis enim velit mollit.
                        Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
                <div className="relative flex gap-4">
                    <HeroSVG className="absolute -left-8 -top-8" />
                    <Button
                        variant={ButtonVariantsEnum.EMPTY}
                        aria-label="Log in"
                        className="rounded-[28px] flex items-center gap-2.5 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] duration-300"
                    >
                        Daxil ol
                        <ArrowRightSVG stroke="#000" />
                    </Button>
                    <Link href="#about">
                        <Button
                            variant={ButtonVariantsEnum.OUTLINED}
                            aria-label="Learn more about us"
                            className="text-white rounded-[28px] flex items-center gap-2.5 duration-300"
                        >
                            Haqqımızda
                            <ArrowRightSVG stroke="#fff" className="rotate-90" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
        <div className="flex relative -right-[56px]">
            <Awsome1SVG className="absolute z-20 left-7" aria-hidden="true" />
            <Awsome2SVG
                className="absolute -top-[80px] z-20 left-80"
                aria-hidden="true"
            />
            <Awsome3SVG
                className="absolute -bottom-[120px] z-20 left-72"
                aria-hidden="true"
            />
            <PhoneTabletSVG className="absolute -top-[95px]" aria-hidden="true" />
        </div>
    </div>
    </section> */
}
