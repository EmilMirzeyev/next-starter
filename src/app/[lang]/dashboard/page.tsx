import { DashboardVM } from "./dashboard.vm";
import DashboardContainer from "@/ui/containers/DashboardContainer";

const Dashboard = async () => {
    const { brands, carFilters } = await DashboardVM();

    return (
        <>
            <DashboardContainer
                brands={brands}
                carFilters={carFilters}
            />
        </>
    );
};

export default Dashboard;
