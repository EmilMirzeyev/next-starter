import { DashboardVM } from "./dashboard.vm";
import DashboardContainer from "@/ui/containers/DashboardContainer";

const Dashboard = async () => {
    const { brands, carFilters, carList } = await DashboardVM();

    return (
        <>
            <DashboardContainer
                brands={brands}
                carFilters={carFilters}
                carList={carList}
            />
        </>
    );
};

export default Dashboard;
