import Button from "@/ui/shared/Button";
import { ArrowRightSVG, TabpanelSVG } from "@public/vectors";

const AdvantagesFactory = ({ activeTab }: { activeTab: number }) => {
    const enum AdvantagesEnum {
        PARTNERSHIP = 1,
        EASYCONNECTION,
    }

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
                            <li className="flex gap-4 items-center">
                                <p className="size-2.5 bg-brand-700 rounded-full" />
                                Automated renewal tracking and reminders
                            </li>
                            <li className="flex gap-4 items-center">
                                <p className="size-2.5 bg-brand-700 rounded-full" />
                                Powerful filters and search to access information quickly
                            </li>
                            <li className="flex gap-4 items-center">
                                <p className="size-2.5 bg-brand-700 rounded-full" />
                                Folder structure to stay organized
                            </li>
                        </ul>
                        <Button className="rounded-[28px] mt-8 flex gap-x-2.5 items-center duration-300">
                            Daxil ol
                            <ArrowRightSVG stroke="#fff" />
                        </Button>
                    </div>
                    <div className="w-1/2">
                        <TabpanelSVG />
                    </div>
                </>
            ),
            [AdvantagesEnum.EASYCONNECTION]: <h1>Asan əlaqə</h1>,
        };
        return renderAdvantagesTab[
            (activeTab as AdvantagesEnum) || AdvantagesEnum.PARTNERSHIP
        ];
    };

    return { handleAdvantagesTab };
};

export default AdvantagesFactory;
