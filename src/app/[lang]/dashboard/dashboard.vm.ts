import { getCarFilters } from "@/core/entities/car/actions/getCarFilters"

export const DashboardVM = async () => {
    const carFilters = await getCarFilters()
    return { carFilters }
}
