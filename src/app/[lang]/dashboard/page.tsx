import { DashboardVM } from "./dashboard.vm";
import DashboardContainer from "@/ui/containers/DashboardContainer";

const Dashboard = async () => {
    const { brands, models, carFilters } = await DashboardVM();

    return (
        <>
            <DashboardContainer
                brands={brands}
                models={models}
                carFilters={carFilters}
            />
        </>
    );
};

export default Dashboard;
