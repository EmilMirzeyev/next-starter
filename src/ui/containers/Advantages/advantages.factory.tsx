import type { AdvantagesFactoryType } from "./advantages.type";
import Button from "@/ui/shared/Button";
import { ArrowRightSVG } from "@public/vectors";
import AdvantagesImage from "@public/images/advantages.png";
import Image from "next/image";

const enum AdvantagesEnum {
    PARTNERSHIP = 1,
    EASYCONNECTION,
}

const AdvantagesFactory = ({ activeTab }: AdvantagesFactoryType) => {
    const handleAdvantagesTab = () => {
        const renderAdvantagesTab = {
            [AdvantagesEnum.PARTNERSHIP]: (
                <div className="flex laptop:flex-col-reverse tablet:flex-col-reverse mobile:flex-col-reverse">
                    <div className="w-1/2 laptop:w-full laptop:mt-10  tablet:w-full tablet:mt-10 mobile:w-full mobile:px-2 mobile:pr-4 mobile:mt-8">
                        <h2 className="text-brand-700 text-36px700 laptop:text-30px700 tablet:text-30px700 mobile:text-30px700 smallMobile:text-24px700">
                            Digər satıcılarla tərəfdaşlıq qurun
                        </h2>
                        <p className="text-18px500 py-4 laptop:text-16px500 mobile:text-16px500">
                            Centralize all your contracts on a secure platform and improve
                            your follow-up with our automatic reminders.
                        </p>
                        <ul className="flex flex-col gap-2">
                            {[
                                "Automated renewal tracking and reminders",
                                "Powerful filters and search to access information quickly",
                                "Folder structure to stay organized",
                            ].map((text, index) => (
                                <li key={index} className="flex items-center gap-4 text-16px500 laptop:text-14px500 tablet:text-14px500 mobile:text-14px500">
                                    <p className="size-2.5 bg-brand-700 rounded-full flex-shrink-0"></p>
                                    <div>{text}</div>
                                </li>
                            ))}
                        </ul>
                        <Button className="rounded-[28px] mt-8 flex gap-x-2.5 items-center laptop:w-full tablet:mt-10 tablet:w-full mobile:w-full">
                            Daxil ol
                            <ArrowRightSVG stroke="#fff" />
                        </Button>
                    </div>
                    <div className="w-1/2 laptop:w-full laptop:flex laptop:justify-center tablet:w-full tablet:flex tablet:justify-center mobile:w-full">
                        <Image
                            quality={100}
                            src={AdvantagesImage}
                            alt="Üstünlüklərimiz - Tərəfdaşlıq"
                        />
                    </div>
                </div>
            ),
            [AdvantagesEnum.EASYCONNECTION]: <h3>Asan əlaqə</h3>,
        };
        return renderAdvantagesTab[
            (activeTab as AdvantagesEnum) || AdvantagesEnum.PARTNERSHIP
        ];
    };

    return { handleAdvantagesTab };
};

export default AdvantagesFactory;
