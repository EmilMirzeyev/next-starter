import { getAllAnnouncement } from "@/core/entities/announcement/actions/getAllAnnouncement.action";
import { getBrandsActions } from "@/core/entities/car/actions/getBrands.action";
import { getCarFiltersAction } from "@/core/entities/car/actions/getCarFilters.action";

export const DashboardVM = async () => {
    const [brands, carFilters, carList] = await Promise.allSettled([
        getBrandsActions(),
        getCarFiltersAction(),
        getAllAnnouncement(),
    ]);
    
    console.log('carList', carList)
    const formatResult = <T>(
        result: PromiseSettledResult<{ isError: boolean; data?: T }>
    ): { data: T | null } => {
        return result.status === "fulfilled" && !result.value.isError
            ? { data: result.value.data! }
            : { data: null };
    };

    return {
        brands: formatResult(brands),
        carFilters: formatResult(carFilters),
        carList: formatResult(carList),
    };
};
