import Image from "next/image";
import PhoneTablet from "@public/images/phoneTablet.png";
import { LogoV1SVG } from "@public/vectors";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
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
                    {children}
                </div>
            </section>
        </div>
    );
};

export default AuthLayout;
