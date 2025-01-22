import IncreaseBalanceForm from "@/ui/features/IncreaseBalanceForm";
import Image from "next/image";
import BannerImage from "@public/images/Banner.jpg";
import {
    ArrowRightSVG,
    LayersThreeSVG,
} from "@public/vectors";
import Link from "next/link";
import SidebarMenu from "@/ui/components/SidebarMenu";

const Accountlayout = ({ children }: { children: React.ReactNode }) => {
    const isUser = false;

    return (
        <div className="container">
            <div className="mt-8 mb-10">
                {isUser ? (
                    <IncreaseBalanceForm />
                ) : (
                    <div className="relative">
                        <Image
                            src={BannerImage}
                            alt="banner"
                            className="rounded-3xl h-80 w-full"
                        />
                        <div className="absolute bottom-0 w-full p-6">
                            <IncreaseBalanceForm />
                        </div>
                    </div>
                )}
            </div>
            <div className="flex gap-x-6 relative">
                <div className="flex flex-col gap-y-5 sticky top-0 h-full">
                    <SidebarMenu />
                    <div className="border border-gray-200 rounded-[20px] p-3 w-[264px]">
                        <Link
                            href={""}
                            className="group p-3 flex justify-between rounded-xl items-center hover:bg-brand-50 hover:text-brand-600 transition-all ease-in-out"
                        >
                            <div className="flex items-center gap-x-3 text-16px500">
                                <LayersThreeSVG />
                                <p>Digər elanlara bax</p>
                            </div>
                            <ArrowRightSVG className="text-black group-hover:text-brand-600" />
                        </Link>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Accountlayout;
