"use client";
import { RequestStateEnum } from "@/data/enum/request_state.enum";
import AddCarModal from "@/ui/components/AddCarModal";
import InfoAlertBox from "@/ui/components/InfoAlertBox";
import Button from "@/ui/shared/Button";
import { TableContainer } from "@/ui/shared/Table/table_container";
import { Edit3SVG, PlusSVG, TrashSVG } from "@public/vectors";
import { NotificationContainerVM } from "./notification_container.vm";

const NotificationContainer = () => {
    const { addCarModalVisible, setAddCarModalVisible } = NotificationContainerVM()

    const headData: any[] = [
        {
            id: 1,
            width: "45px",
            name: <p className="text-14px700 text-brand-600">#</p>,
            render: (row: any) => (
                <p className="text-gray-900 text-16px500">{row.id}</p>
            ),
        },
        {
            id: 2,
            width: "164px",
            name: <p className="text-14px700 text-brand-600">Marka</p>,
            render: (row: any) => (
                <p className="text-gray-900 text-16px500">{row.brand}</p>
            ),
        },
        {
            id: 3,
            width: "164px",
            name: <p className="text-14px700 text-brand-600">Model</p>,
            render: (row: any) => (
                <p className="text-gray-900 text-16px500">{row.model}</p>
            ),
        },
        {
            id: 4,
            width: "164px",
            name: <p className="text-14px700 text-brand-600">Buraxılış ili</p>,
            render: (row: any) => (
                <p className="text-gray-900 text-16px500">{row.releaseYear}</p>
            ),
        },
        {
            id: 5,
            width: "125px",
            name: <p className="text-14px700 text-brand-600">Şəhər</p>,
            render: (row: any) => (
                <p className="text-gray-900 text-16px500">{row.city}</p>
            ),
        },
        {
            id: 6,
            name: "",
            width: "114px",
            render: () => (
                <div className="flex items-center gap-x-2.5 transition-all ease-in-out">
                    <button className="bg-gray-100 rounded-full p-2 hover:brightness-95">
                        <Edit3SVG />
                    </button>
                    <button className="bg-brand-25 rounded-full p-2 hover:bg-brand-50">
                        <TrashSVG />
                    </button>
                </div>
            ),
        },
    ];

    const bodyData = [
        {
            id: 1,
            brand: "Ford",
            model: "Fusion",
            releaseYear: "2018-2022",
            city: "Bakı",
        },
        {
            id: 2,
            brand: "Ford",
            model: "Fusion",
            releaseYear: "2018-2022",
            city: "Bakı",
        },
        {
            id: 3,
            brand: "Ford",
            model: "Fusion",
            releaseYear: "2018-2022",
            city: "Bakı",
        },
        {
            id: 4,
            brand: "Ford",
            model: "Fusion",
            releaseYear: "2018-2022",
            city: "Bakı",
        },
    ];

    return (
        <div className="flex flex-col gap-y-8">
            <div className="flex items-center justify-between border border-brand-25 bg-brand-25 rounded-2xl p-3 pl-5">
                <h1 className="text-brand-600 text-30px700">Bildirişlər</h1>
                <Button
                    type="button"
                    onClick={() => setAddCarModalVisible(true)}
                    className="rounded-[18px] h-9 px-3 text-14px600 py-2 flex gap-x-1 items-center max-w-[177px]"
                >
                    Avtomobil əlavə et
                    <PlusSVG />
                </Button>
            </div>
            <InfoAlertBox description="Bildirişini almaq istədiyiniz avtomobilləri əlavə edin!" />
            <TableContainer
                headData={headData}
                bodyData={bodyData}
                title={<h2 className="text-gray-900 text-24px700">Avtomobillər</h2>}
                thClassName="bg-brand-25 first:rounded-l-[10px] last:rounded-r-[10px]"
                state={RequestStateEnum.SUCCESS}
                pagination={{
                    total: bodyData.length,
                    perPage: bodyData.length / 5,
                }}
            />
            <AddCarModal visible={addCarModalVisible} setVisible={setAddCarModalVisible} />
        </div>
    );
};

export default NotificationContainer;
