import type { AllAnnouncementModel } from "@/core/entities/announcement/models/get_all_announcement.model";
import { BrandsModel } from "@/core/entities/car/models/get_brands.model";
import type { CarFiltersModel } from "@/core/entities/car/models/get_car_filters.model";

export type DashboardContainerType = {
    brands: { data: BrandsModel | null };
    carFilters: { data: CarFiltersModel | null };
    carList: { data: AllAnnouncementModel | null };
};
