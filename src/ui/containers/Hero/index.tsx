import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum";
import Button from "@/ui/shared/Button";
import {
    ArrowRightSVG,
    Awsome1SVG,
    Awsome2SVG,
    Awsome3SVG,
    HeroSVG,
    PhoneTabletSVG,
} from "@public/vectors";
import Link from "next/link";

const Hero = () => {
    return (
        <section
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
                    <Awsome1SVG className="absolute z-10 left-7" aria-hidden="true" />
                    <Awsome2SVG
                        className="absolute -top-[80px] z-10 left-80"
                        aria-hidden="true"
                    />
                    <Awsome3SVG
                        className="absolute -bottom-[120px] z-10 left-72"
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
{/* <section
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
</section> */}
