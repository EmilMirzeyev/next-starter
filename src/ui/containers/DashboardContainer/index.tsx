"use client";
import DashboardFilter from "@/ui/features/DashboardFilter";
import CarList from "./CarList";
import { useHeaderContent } from "@/core/hooks/userHeaderContent";
import { DashboardContainerType } from "./dashboard_container.type";

const DashboardContainer = ({ brands, models, carFilters }: DashboardContainerType) => {
    useHeaderContent({});
    return (
        <div>
            <DashboardFilter brands={brands} models={models} carFilters={carFilters} />
            <CarList />
        </div>
    );
};

export default DashboardContainer;
