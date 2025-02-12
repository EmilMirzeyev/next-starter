import { getBrandsActions } from "@/core/entities/car/actions/getBrands.action";
import { getCarFiltersAction } from "@/core/entities/car/actions/getCarFilters.action";
import { getModelsAction } from "@/core/entities/car/actions/getModels.action";

export const DashboardVM = async () => {
    const brands = await getBrandsActions()
    const carFilters = await getCarFiltersAction();

    if (brands.isError) {
        return
    }

    if (carFilters.isError) {
        return
    }

    return { brands, carFilters };
};
