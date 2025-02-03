import { DashboardVM } from "./dashboard.vm"
import DashboardContainer from "@/ui/containers/DashboardContainer"

const Dashboard = async () => {
    const { carFilters } = await DashboardVM()
    
    return (
        <>
            <DashboardContainer carFilters={carFilters} />
        </>
    )
}

export default Dashboard  