"use client";
import Image from "next/image";
import PhoneTablet from "@public/images/phoneTablet.png";
import { ArrowRightSVG, LogoV1SVG } from "@public/vectors";
import { useAppDispatch, useAppSelector } from "@/core/hooks/useRedux";
import Button from "@/ui/shared/Button";
import { SignUpStepsEnum } from "@/data/enum/sign_up_steps.enum";
import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum";
import { setSignUpStep } from "@/core/store/auth/sign_steps.slice";
import SignTab from "@/ui/components/SignTab";
import { usePathname } from "next/navigation";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    const { signUpStep } = useAppSelector((store) => store.signSteps);
    const dispatch = useAppDispatch();
    const pathname = usePathname();
    const currentPathname = pathname?.split("/").pop() || '';

    return (
        <div className="flex h-screen">
            <section className="fixed top-0 left-0 w-1/2 p-20 bg-brand-25 bg-gradient-to-r from-white via-white-500 to-brand-25 flex flex-col justify-around gap-y-10 min-h-screen">
                <div className="flex flex-col gap-y-4">
                    <p className="text-brand-600 text-14px600 border border-brand-200 bg-brand-25 rounded-[53px] w-fit py-2 px-4">
                        “Car Buy” B2B avtomobil alış-satış sistemi
                    </p>
                    <h1 className="text-brand-700 text-72px700">
                        Sürətli və rahat interfeys
                    </h1>
                </div>
                <Image src={PhoneTablet} alt="phone_tablet" />
                <div className="text-14px500 text-gray-500 flex justify-between items-center">
                    <p>&copy; 2025 All rights reserved</p>
                    <p>Məxfilik siyasəti</p>
                </div>
            </section>
            <section className="ml-[50%] w-[50%] py-20 px-40 flex justify-center overflow-y-auto">
                <div className="flex flex-col gap-y-[72px] items-center max-w-[480px]">
                    <LogoV1SVG className="max-w-24" />
                      {["signup", "signin"].includes(currentPathname) &&
                        signUpStep !== SignUpStepsEnum.OTP && (
                            <>
                                <article className="flex flex-col gap-y-4">
                                    <h2 className="text-brand-700 text-48px700">
                                        Xoş Gəlmisiniz!
                                    </h2>
                                    <p className="text-gray-800 text-16px400">
                                        {currentPathname === "signup"
                                            ? "  Signup - Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit"
                                            : "  Signin - Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit"}
                                    </p>
                                </article>
                                <SignTab />
                            </>
                        )}
                    {currentPathname === "signup" &&
                        signUpStep === SignUpStepsEnum.OTP && (
                            <div className="flex flex-col gap-y-4">
                                <div className="flex justify-start w-full">
                                    <Button
                                        onClick={() =>
                                            dispatch(setSignUpStep(SignUpStepsEnum.SIGNUP))
                                        }
                                        variant={ButtonVariantsEnum.EMPTY}
                                        className="flex gap-x-1.5 px-4 items-center w-fit rounded-3xl h-11 w-fix"
                                    >
                                        <ArrowRightSVG className="text-black rotate-180" />
                                        Geriyə qayıt
                                    </Button>
                                </div>
                                <article className="flex flex-col gap-y-4">
                                    <h2 className="text-brand-700 text-48px700">
                                        Qeydiyyatı tamamla
                                    </h2>
                                    <p className="text-gray-800 text-16px400">
                                        Qeydiyyatı tamamlamaq üçün emailinizə göndərilən 6 rəqəmli
                                        təsdiq kodunu daxil edin
                                    </p>
                                </article>
                            </div>
                        )}
                    {children}
                </div>
            </section>
        </div>
    );
};

export default AuthLayout;
