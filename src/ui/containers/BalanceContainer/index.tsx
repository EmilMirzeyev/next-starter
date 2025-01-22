import { cn } from "@/core/utils/cn";
import { RequestStateEnum } from "@/data/enum/request_state.enum";
import { TableContainer } from "@/ui/shared/Table/table_container";
import { DoubleDownSVG } from "@public/vectors";
import React from "react";

const BalansContainer = () => {
    const headData: any[] = [
        {
            id: 1,
            name: <p className="text-14px700 text-brand-600">#</p>,
            width: "52px",
            render: (row: any) => (
                <p className="text-gray-900 text-16px500">{row.id}</p>
            ),
        },
        {
            id: 2,
            name: <p className="text-14px700 text-brand-600">Xidmətin adı</p>,
            width: "150px",
            render: (row: any) => (
                <p className="text-gray-900 text-16px500">{row.serviceName}</p>
            ),
        },
        {
            id: 3,
            name: "",
            width: "223px",
            render: (row: any) => (
                <p className="text-gray-900 text-16px500 truncate">{row.text}</p>
            ),
        },
        {
            id: 4,
            name: <p className="text-14px700 text-brand-600">Əvvəlki balans</p>,
            width: "132px",
            render: (row: any) => (
                <p className="text-gray-900 text-16px500">{row.previousBalance}</p>
            ),
        },
        {
            id: 5,
            name: <p className="text-14px700 text-brand-600">Ödəniş miqdarı</p>,
            width: "136px",
            render: (row: any) => (
                <div className="flex items-center gap-x-3">
                    <DoubleDownSVG
                        className={
                            row.isIncrease ? "text-success-600 rotate-180" : "text-error-600"
                        }
                    />
                    <p
                        className={cn(
                            " text-16px500",
                            row.isIncrease ? "text-success-600" : "text-error-600"
                        )}
                    >
                        {row.paymentAmount}
                    </p>
                </div>
            ),
        },
        {
            id: 6,
            name: <p className="text-14px700 text-brand-600">Son balans</p>,
            width: "115px",
            render: (row: any) => (
                <p className="text-gray-900 text-16px500">{row.currentBalance}</p>
            ),
        },
    ];

    const bodyData = [
        {
            id: 1,
            serviceName: "İrəli çək - 7 gün",
            text: "Samsung Galaxy S24 Onyx Black 128GB/8GB",
            previousBalance: "100 AZN",
            paymentAmount: "100 AZN",
            currentBalance: "100 AZN",
            isIncrease: false,
        },
        {
            id: 2,
            serviceName: "İrəli çək - 7 gün",
            text: "Samsung Galaxy S24 Onyx Black 128GB/8GB",
            previousBalance: "100 AZN",
            paymentAmount: "100 AZN",
            currentBalance: "100 AZN",
            isIncrease: false,
        },
        {
            id: 3,
            serviceName: "Balans artımı",
            previousBalance: "100 AZN",
            paymentAmount: "100 AZN",
            currentBalance: "100 AZN",
            isIncrease: true,
        },
    ];

    return (
        <div className="">
            <TableContainer
                headData={headData}
                bodyData={bodyData}
                title={<h2 className="text-gray-900 text-24px700">Balans tarixçəsi</h2>}
                thClassName="bg-brand-25 first:rounded-l-[10px] last:rounded-r-[10px]"
                state={RequestStateEnum.SUCCESS}
                pagination={{
                    total: bodyData.length,
                    perPage: bodyData.length / 5,
                }}
            />
        </div>
    );
};

export default BalansContainer;
