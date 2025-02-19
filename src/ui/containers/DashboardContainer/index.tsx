"use client";
import DashboardFilter from "@/ui/features/DashboardFilter";
import CarList from "./CarList";
import { useHeaderContent } from "@/core/hooks/userHeaderContent";
import { DashboardContainerType } from "./dashboard_container.type";

const DashboardContainer = ({
    brands,
    carFilters,
    carList,
}: DashboardContainerType) => {
    useHeaderContent({});
    return (
        <div>
            <DashboardFilter brands={brands} carFilters={carFilters} />
            <CarList carList={carList} />
        </div>
    );
};

export default DashboardContainer;
