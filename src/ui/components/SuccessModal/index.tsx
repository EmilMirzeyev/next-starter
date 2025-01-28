import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum";
import Button from "@/ui/shared/Button";
import Modal from "@/ui/shared/Modal";
import { ArrowRightSVG, SuccessModalSVG } from "@public/vectors";
import { SuccessModalType } from "./success_modal.type";
import Link from "next/link";

const SuccessModal = ({
    title,
    description,
    buttonText,
    link,
    action,
    visible,
    setVisible,
}: SuccessModalType) => {

    return (
        <Modal
            hasClose
            visible={visible}
            setVisible={setVisible}
            dialogClassName="max-w-[480px] p-8 pt-6"
        >
            <div className="flex justify-center -mt-20">
                <SuccessModalSVG />
            </div>
            <div className="flex flex-col gap-y-12 item-center -mt-7">
                <div className="flex flex-col gap-y-2 text-center">
                    <h3 className="text-24px600 text-gray-900">
                        {title}
                    </h3>
                    <p className="text-16px400 text-gray-500">
                        {description}
                    </p>
                </div>
                <Link href={link}>
                    <Button
                        onClick={action}
                        variant={ButtonVariantsEnum.BLACK}
                        className="flex gap-x-2.5 rounded-[28px] w-full"
                    >
                        {buttonText}
                        <ArrowRightSVG stroke="#fff" />
                    </Button>
                </Link>
            </div>
        </Modal>
    );
};

export default SuccessModal;
