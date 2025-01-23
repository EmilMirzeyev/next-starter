import { DashboardVM } from "./dashboard.vm"
import DashboardContainer from "@/ui/containers/DashboardContainer"

const Dashboard = () => {
    const { } = DashboardVM()
    return (
        <>
            <DashboardContainer />
        </>
    )
}

export default Dashboard  