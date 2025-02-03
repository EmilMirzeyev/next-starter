import { BaseModel } from "@/core/entities/general/models/base.model";

// export type CarFiltersModel = Partial<
//     Record<"gearboxes" | "body_types" | "fuel_types" | "markets", BaseModel[]>
// >;

export type CarFiltersModel = {
    gearboxes: BaseModel[],
    body_types: BaseModel[],
    fuel_types: BaseModel[],
    markets: BaseModel[],
};