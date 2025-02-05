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
                <>
                    <div className="w-1/2">
                        <h2 className="text-brand-700 text-36px700">
                            Digər satıcılarla tərəfdaşlıq qurun
                        </h2>
                        <p className="text-18px500 py-4">
                            Centralize all your contracts on a secure platform and improve
                            your follow-up with our automatic reminders.
                        </p>
                        <ul className="flex flex-col gap-2">
                            {[
                                "Automated renewal tracking and reminders",
                                "Powerful filters and search to access information quickly",
                                "Folder structure to stay organized",
                            ].map((text, index) => (
                                <li key={index} className="flex items-center gap-4">
                                    <span className="size-2.5 bg-brand-700 rounded-full" />
                                    {text}
                                </li>
                            ))}
                        </ul>
                        <Button className="rounded-[28px] mt-8 flex gap-x-2.5 items-center">
                            Daxil ol
                            <ArrowRightSVG stroke="#fff" />
                        </Button>
                    </div>
                    <div className="w-1/2">
                        <Image
                            quality={100}
                            src={AdvantagesImage}
                            alt="Üstünlüklərimiz - Tərəfdaşlıq"
                        />
                    </div>
                </>
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
