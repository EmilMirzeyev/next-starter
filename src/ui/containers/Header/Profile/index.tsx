import Popover from "@/ui/shared/Popover";
import { PopoverButton } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import ProfileImage from "@public/images/profile.png";
import Profile2Image from "@public/images/profile2.png";
import {
    ArrowRightSVG,
    DownChevronSVG,
    LayersThreeSVG,
    LockSVG,
    LogOutSVG,
    PlusCircleSVG,
    SettingsSVG,
    User3SVG,
    WalletSVG,
} from "@public/vectors";

const HeaderProfile = () => {
    return (
        <div>
            <Popover
                popoverClassName="w-full z-30"
                panelClassName="w-full rounded-3xl top-14"
                button={
                    <div className="hidden md:inline-block border rounded-3xl min-w-[187px] h-12 whitespace-nowrap">
                        <div className="flex items-center gap-x-2 truncate p-3 h-full">
                            <Image src={ProfileImage} alt="Profile image" />
                            <p className="text-16px600 text-black">Cybrary Cars</p>
                            <DownChevronSVG />
                        </div>
                    </div>
                }
            >
                <div className="border rounded-2xl p-3 min-w-[264px] bg-white">
                    <div className="flex flex-col gap-2">
                        <div className="bg-gray-100 rounded-xl px-3 py-4 flex items-center gap-x-3">
                            <Image src={Profile2Image} alt="Profile image" className="size-10" />
                            <div>
                                <h3 className="text-gray-900 text-20px600">Cybrary Cars</h3>
                                <p className="text-gray-500 text-12px400">Avtosalon</p>
                            </div>
                        </div>
                        <PopoverButton
                            as={Link}
                            href='/dashboard/profile'
                            className="flex gap-x-3 p-2.5 bg-brand-600 text-white rounded-xl justify-between pl-3 hover:bg-brand-500 transition-all ease-in-out"
                        >
                            <h3 className="text-16px500">Yeni elan yerləştir</h3>
                            <div>
                                <PlusCircleSVG />
                            </div>
                        </PopoverButton>
                        <PopoverButton
                            as={Link}
                            href='/dashboard/profile'
                            className="flex justify-between rounded-xl gap-x-3 p-2.5 hover:bg-gray-100 transition-all ease-in-out"
                        >
                            <div className="flex items-center gap-x-3">
                                <LayersThreeSVG />
                                <h3 className="text-16px500">Digər elanlara bax</h3>
                            </div>
                            <ArrowRightSVG className="text-black" />
                        </PopoverButton>
                        <PopoverButton
                            as={Link}
                            href='/dashboard/profile'
                            className="flex gap-x-3 p-2.5 hover:bg-gray-100 rounded-xl transition-all ease-in-out"
                        >
                            <div>
                                <User3SVG />
                            </div>
                            <h3 className="text-16px500">Şəxsi kabinet</h3>
                        </PopoverButton>
                        <PopoverButton
                            as={Link}
                            href='/dashboard/profile'
                            className="flex justify-between items-center p-2.5 hover:bg-gray-100 rounded-xl transition-all ease-in-out"
                        >
                            <div className="flex gap-x-3">
                                <WalletSVG />
                                <h3 className="text-16px500">Balans</h3>
                            </div>
                            <p className="text-16px500 text-black">0 AZN</p>
                        </PopoverButton>
                        <PopoverButton
                            as={Link}
                            href='/dashboard/personal-info'
                            className="flex gap-x-3 p-2.5 hover:bg-gray-100 rounded-xl transition-all ease-in-out"
                        >
                            <div>
                                <LockSVG />
                            </div>
                            <h3 className="text-16px500">Şəxsi məlumatlar</h3>
                        </PopoverButton>
                        <PopoverButton
                            as={Link}
                            href='/dashboard/profile'
                            className="flex gap-x-3 p-2.5 hover:bg-gray-100 rounded-xl transition-all ease-in-out"
                        >
                            <div>
                                <SettingsSVG />
                            </div>
                            <h3 className="text-16px500">Tənzimləmələr</h3>
                        </PopoverButton>
                        <PopoverButton
                            as={Link}
                            href='/dashboard/profile'
                            className="flex gap-x-3 p-2.5 hover:bg-brand-50 rounded-xl transition-all ease-in-out"
                        >
                            <div>
                                <LogOutSVG className="text-brand-600" />
                            </div>
                            <h3 className="text-16px500 text-brand-600">Hesabdan çıxış</h3>
                        </PopoverButton>
                    </div>
                </div>
            </Popover>
        </div>
    );
};

export default HeaderProfile;
