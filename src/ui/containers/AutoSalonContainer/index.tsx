import AutoSalonFilter from "./AutoSalonFilter"
import Image from "next/image";
import Profile4Image from '@public/images/profile4.png'
import MerchantImage from '@public/images/merchant.png'
import AutoSalonImage from '@public/images/autoSalon.png'
import { Eye2SVG, HashSVG } from "@public/vectors";

const AutoSalonContainer = () => {
    return (
        <div className="container mt-16 w-full">
            <div className='w-full'>
                <AutoSalonFilter />
            </div>
            <div>
                <div className="border rounded-3xl p-4 w-fit">
                    <div className="relative">
                        <Image alt="profile image" src={AutoSalonImage} />
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/12">
                            {/*border-[10px] border-white rounded-full : give above div */}
                            <Image
                                alt="profile image"
                                src={Profile4Image}
                                className="size-[96px] " />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <div className="flex flex-col items-center mt-11 gap-y-1">
                            <h3 className="text-gray-950 text-20px600">Cybrary Cars</h3>
                            <p className="text-brand-500 text-12px400">Avtosalon</p>
                        </div>
                        <div className="flex justify-center py-4">
                            <div className="flex gap-y-2 flex-col items-center w-1/2">
                                <div className="bg-gray-200 rounded-xl w-fit p-1">
                                    <HashSVG />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-gray-600 text-12px400">Elan sayı</h3>
                                    <p className="text-gray-800 text-14px500">67</p>
                                </div>
                            </div>
                            <div className="bg-gray-200 h-[70px] w-[1px]" />
                            <div className="flex  gap-y-2 flex-col items-center w-1/2">
                                <div className="bg-gray-200 rounded-xl w-fit p-1">
                                    <Eye2SVG />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-gray-600 text-12px400">Baxış sayı</h3>
                                    <p className="text-gray-800 text-14px500">74</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AutoSalonContainer