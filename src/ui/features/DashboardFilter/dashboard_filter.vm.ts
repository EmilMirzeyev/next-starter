import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

type DashboardFilterModel = {
    brand: number | null;
    model: number | null;
    banType: number | null;
    city: number | null;
    minYear: number | null;
    maxYear: number | null;
    minPrice: "";
    maxPrice: "";
    currency: number | null;
    credit: boolean;
    barter: boolean;
    status: number | null;
    color: number | null;
    fuelType: number | null;
    gear: number | null;
    gearbox: number | null;
    minCapacity: number | null;
    maxCapacity: number | null;
    minHorsePower: "";
    maxHorsePower: "";
    minMileage: "";
    maxMileage: "";
    seller: number | null;
    numberOfOwners: number | null;
    numberOfSeats: number | null;
    marketType: number | null;
    hasNoDamage: boolean;
    notRepainted: boolean;
    onlyAccidentCars: boolean;
    onlyByOrder: boolean;
};

export const DashboardFilterVM = () => {
    const [showMoreFilters, setShowMoreFilters] = useState(false);
    const methods = useForm<DashboardFilterModel>({
        defaultValues: {
            brand: null,
            model: null,
            banType: null,
            city: null,
            minYear: null,
            maxYear: null,
            minPrice: "",
            maxPrice: "",
            currency: null,
            credit: false,
            barter: false,
            status: null,
            color: null,
            fuelType: null,
            gear: null,
            gearbox: null,
            minCapacity: null,
            maxCapacity: null,
            minHorsePower: "",
            maxHorsePower: "",
            minMileage: "",
            maxMileage: "",
            seller: null,
            numberOfOwners: null,
            numberOfSeats: null,
            marketType: null,
            hasNoDamage: false,
            notRepainted: false,
            onlyAccidentCars: false,
            onlyByOrder: false,
        }
    });
    const { replace } = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);

    const updateQueryParams = (data: DashboardFilterModel) => {
        Object.entries(data).forEach(([key, value]) => {
            value ? params.set(key, value.toString()) : params.delete(key);
        });
    };

    const onSubmit = (data: DashboardFilterModel) => {
        updateQueryParams(data);
        replace(`${pathname}?${params.toString()}`);
        console.log('data', data)
    };

    const onError = (error: FieldErrors<DashboardFilterModel>) => {
        console.error("error", error);
    };

    const submitHandler = methods.handleSubmit(onSubmit, onError);

    const resetQueryParams = () => {
        replace(pathname)
        methods.reset()
    }

    return { showMoreFilters, setShowMoreFilters, methods, submitHandler, resetQueryParams };
};
