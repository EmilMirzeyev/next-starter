"use client";
import Image from "next/image";
import PhoneTablet from "@public/images/phoneTablet.png";
import { LogoV1SVG } from "@public/vectors";
import { Link } from "@/i18n/routing";
import { useState } from "react";
import { cn } from "@/core/utils/cn";
import { useAppSelector } from "@/core/hooks/useRedux";
import { SignUpStepsEnum } from "@/data/enum/sign_up_steps.enum";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    const [activeTab, setActiveTab] = useState("signin");
    const { signUpStep } = useAppSelector((store) => store.signup);
    return (
        <div className="flex">
            <section className="w-1/2 p-20 bg-brand-25 bg-gradient-to-r from-white via-white-500 to-brand-25 flex flex-col justify-around gap-y-10 min-h-screen">
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
            <section className="w-1/2 py-20 px-40 flex">
                <div className="flex flex-col gap-y-[72px] items-center">
                    <LogoV1SVG className="max-w-24" />
                    <article className="flex flex-col gap-y-4">
                        <h2 className="text-brand-700 text-48px700">
                            {signUpStep === SignUpStepsEnum.SIGNUP
                                ? "Xoş Gəlmisiniz!"
                                : "Qeydiyyatı tamamla"}
                        </h2>
                        <p className="text-gray-800 text-16px400">
                            {signUpStep === SignUpStepsEnum.SIGNUP
                                ? "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit"
                                : "Qeydiyyatı tamamlamaq üçün emailinizə göndərilən 6 rəqəmli təsdiq kodunu daxil edin"}
                        </p>
                    </article>
                    {signUpStep === SignUpStepsEnum.SIGNUP && (
                        <nav className="relative w-1/2">
                            <div className="flex">
                                <Link
                                    href="/signin"
                                    onClick={() => setActiveTab("signin")}
                                    className="w-1/2 text-center py-3 text-gray-500 text-14px500 relative z-10"
                                >
                                    Daxil ol
                                </Link>
                                <Link
                                    href="/signup"
                                    onClick={() => setActiveTab("signup")}
                                    className="w-1/2 text-center py-3 text-gray-500 text-14px500 relative z-10"
                                >
                                    Qeydiyyatdan keç
                                </Link>
                            </div>
                            <div
                                className={cn(
                                    "absolute bottom-0 h-0.5 bg-red-500 transition-all duration-300 ease-in-out",
                                    activeTab === "signin" ? "left-0 w-1/2 " : "left-1/2 w-1/2"
                                )}
                            ></div>
                        </nav>
                    )}
                    {children}
                </div>
            </section>
        </div>
    );
};

export default AuthLayout;
