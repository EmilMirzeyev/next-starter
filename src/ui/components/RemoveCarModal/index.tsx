import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum";
import Button from "@/ui/shared/Button";
import Modal from "@/ui/shared/Modal";
import { ExclamationBGSVG, ExclamationSVG } from "@public/vectors";
import { RemoveCarModalType } from "./remove_car_modal.type";

const RemoveCarModal = ({ visible, setVisible }: RemoveCarModalType) => {
    return (
        <Modal
            hasClose
            visible={visible}
            setVisible={setVisible}
            dialogClassName="p-8 pt-6 max-w-[480px] "
        >
            <div className="flex flex-col items-center justify-center">
                <div className="relative -top-[63px]">
                    <ExclamationBGSVG />
                    <div className="absolute transform -translate-y-64">
                        <ExclamationSVG />
                    </div>
                </div>
                <div className="flex flex-col gap-y-2 text-center -top-[70px] relative z-20">
                    <h2 className="text-gray-900 text-24px600">Avtomobili sil</h2>
                    <p className="text-gray-500 text-16px400 px-10">
                        Bildirişini almaq istədiyiniz avtomobili silmək istədiyinizə
                        əminsiniz?
                    </p>
                </div>
                <div className="flex gap-x-3 w-full -mt-7">
                    <Button
                        type="button"
                        variant={ButtonVariantsEnum.EMPTY}
                        className="bg-gray-100 rounded-[28px] w-full"
                        onClick={() => setVisible(false)}
                    >
                        Bağla
                    </Button>
                    <Button
                        type="button"
                        variant={ButtonVariantsEnum.FILLED}
                        className="bg-brand-600 text-white rounded-[28px] w-full"
                    >
                        Sil
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default RemoveCarModal;
