import Modal from "@/ui/shared/Modal";
import InfoAlertBox from "../InfoAlertBox";
import AddCarModalForm from "@/ui/features/AddCarModalForm";
import { CalloutSVG } from "@public/vectors";
import { AddCarModalType } from "./add_car_modal.type";

const AddCarModal = ({ visible, setVisible }: AddCarModalType) => {
    return (
        <Modal
            hasClose
            visible={visible}
            setVisible={setVisible}
            title={
                <div className="flex items-center gap-x-3">
                    <CalloutSVG />
                    <h3 className="text-gray-900 text-24px600">Avtomobil əlavə et</h3>
                </div>
            }
            dialogClassName="p-8 pt-6 max-w-[480px]"
        >
            <div className="flex flex-col gap-y-4 mt-12">
                <h2 className="text-gray-500 text-16px400">
                    Bildirişini almaq istədiyiniz avtomobilləri əlavə edin.
                </h2>
                <InfoAlertBox
                    description="Əlavə etdiyiniz abtomobilin olduğu elan yerləşdirilərsə “WhatApp” üzərində sizə mesaj göndəriləcək." />
                <AddCarModalForm setVisible={setVisible}/>
            </div>
        </Modal>
    );
};

export default AddCarModal;
