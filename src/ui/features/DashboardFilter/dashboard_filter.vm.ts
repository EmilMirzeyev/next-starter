import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FieldErrors, useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { getModelsAction } from "@/core/entities/car/actions/getModels.action";
import { ModelsModel } from "@/core/entities/car/models/get_models.model";

type DashboardFilterModel = {
    brand_id: number | null;
    model_ids: number | null;
    body_type_ids: number | null;
    city_ids: number | null;
    year_min: number | null;
    year_max: number | null;
    price_min: "";
    price_max: "";
    currency_ids: number | null;
    credit: boolean;
    barter: boolean;
    status: number | null;
    color: number | null;
    fuel_type_ids: number | null;
    drivetrain_ids: number | null;
    gearbox_ids: number | null;
    engine_size_min: number | null;
    engine_size_max: number | null;
    engine_power_min: "";
    engine_power_max: "";
    mileage_min: "";
    mileage_max: "";
    seller_ids: number | null;
    // ! make name as back
    numberOfOwners: number | null;
    seats_count: number | null;
    market_ids: number | null;
    has_no_damage: boolean;
    is_original_paint: boolean;
    only_crashed: boolean;
    // ! correct below naming
    onlyByOrder: boolean;
    alloyWheels: boolean;
    abs: boolean;
    sunRoof: boolean;
    centralLockingSystem: boolean;
    xenonLamps: boolean;
    rainSensor: boolean;
    sideCurtains: boolean;
    leatherInterior: boolean;
    parkingRadar: boolean;
    rearCamera: boolean;
    seatVentilation: boolean;
};

export const DashboardFilterVM = () => {
    const [showMoreFilters, setShowMoreFilters] = useState(false);
    const [brandTypeId, setBrandTypeId] = useState<number | null>(null)
    const [, startTransition] = useTransition()
    const [models, setModels] = useState<ModelsModel | null>(null)
    const methods = useForm<DashboardFilterModel>({
        defaultValues: {
            brand_id: null,
            model_ids: null,
            body_type_ids: null,
            city_ids: null,
            year_min: null,
            year_max: null,
            price_min: "",
            price_max: "",
            currency_ids: null,
            credit: false,
            barter: false,
            status: null,
            color: null,
            fuel_type_ids: null,
            drivetrain_ids: null,
            gearbox_ids: null,
            engine_size_min: null,
            engine_size_max: null,
            engine_power_min: "",
            engine_power_max: "",
            mileage_min: "",
            mileage_max: "",
            seller_ids: null,
            numberOfOwners: null,
            seats_count: null,
            market_ids: null,
            has_no_damage: false,
            is_original_paint: false,
            only_crashed: false,
            onlyByOrder: false,
            alloyWheels: false,
            abs: false,
            sunRoof: false,
            centralLockingSystem: false,
            xenonLamps: false,
            rainSensor: false,
            sideCurtains: false,
            leatherInterior: false,
            parkingRadar: false,
            rearCamera: false,
            seatVentilation: false,
        },
    });
    const { replace } = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);

    const updateQueryParams = (data: DashboardFilterModel) => {
        Object.entries(data).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                params.delete(`${key}[]`);
                value.forEach(val => {
                    const existingValues = Array.from(params.getAll(`${key}[]`));
                    if (!existingValues.includes(val.toString())) {
                        params.append(`${key}[]`, val.toString());
                    }
                });
            } else if (value) {
                params.set(key, value.toString());
            } else {
                params.delete(key);
            }
        });
    };


    const onSubmit = (data: DashboardFilterModel) => {
        updateQueryParams(data);
        replace(`${pathname}?${params.toString()}`, { scroll: false });
        console.log("data", data);
    };

    const onError = (error: FieldErrors<DashboardFilterModel>) => {
        console.error("error", error);
    };

    const submitHandler = methods.handleSubmit(onSubmit, onError);

    const resetQueryParams = () => {
        replace(pathname);
        methods.reset();
    };
    const handleChangeBrandTypeId = (id: number | null) => {
        methods.setValue("model_ids", null);
        setBrandTypeId(id)
        startTransition(async () => {
            const res = await getModelsAction(Number(id));
            if (res.isError) {
                return
            }
            setModels(res.data)
        })
    };

    return {
        showMoreFilters,
        setShowMoreFilters,
        methods,
        models,
        submitHandler,
        resetQueryParams,
        brandTypeId,
        handleChangeBrandTypeId,
    };
};
