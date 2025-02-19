import { Eye2SVG, HashSVG } from "@public/vectors";
import Image from "next/image";
import Profile4Image from "@public/images/profile4.png";
import MerchantImage from "@public/images/merchant.png";
import AutoSalonImage from "@public/images/autoSalon.png";

type AutoSalonCardType = {
    autoSalon: {
        id: number;
        name: string;
        hasAutoSalon: boolean;
        announcementCount: number;
        viewCount: number;
    };
};

const AutoSalonCard = ({ autoSalon }: AutoSalonCardType) => {
    return (
        <div className="border rounded-3xl p-4 w-fit hover:border-brand-300 transition-all ease-in-out duration-300 cursor-pointer">
            <div className="relative">
                <Image
                    alt="profile image"
                    src={autoSalon.hasAutoSalon ? AutoSalonImage : MerchantImage}
                    className="h-[96px]"
                />
                <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/12">
                    {/*border-[10px] border-white rounded-full : give above div */}
                    <Image
                        alt="profile image"
                        src={Profile4Image}
                        className="size-[72px]"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-y-4">
                <div className="flex flex-col items-center mt-11 gap-y-1">
                    <h3 className="text-gray-950 text-20px600">{autoSalon.name}</h3>
                    <p className="text-brand-500 text-12px400">
                        {autoSalon.hasAutoSalon ? "Avtosalon" : "Alverçi"}
                    </p>
                </div>
                <div className="flex justify-center py-4">
                    <div className="flex gap-y-2 flex-col items-center w-1/2">
                        <div className="bg-gray-200 rounded-xl w-fit p-1">
                            <HashSVG />
                        </div>
                        <div className="text-center">
                            <h3 className="text-gray-600 text-12px400">Elan sayı</h3>
                            <p className="text-gray-800 text-14px500">
                                {autoSalon.announcementCount}
                            </p>
                        </div>
                    </div>
                    <div className="bg-gray-200 h-[70px] w-[1px]" />
                    <div className="flex  gap-y-2 flex-col items-center w-1/2">
                        <div className="bg-gray-200 rounded-xl w-fit p-1">
                            <Eye2SVG />
                        </div>
                        <div className="text-center">
                            <h3 className="text-gray-600 text-12px400">Baxış sayı</h3>
                            <p className="text-gray-800 text-14px500">
                                {autoSalon.viewCount}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AutoSalonCard;
