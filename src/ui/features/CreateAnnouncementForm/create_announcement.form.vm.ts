"use client";
import type { CreateAnnouncementFormModel } from "@/core/entities/announcement/models/create_announcement_form.model";
import { createAnnouncementSchema } from "@/core/entities/announcement/schemas/formValidations/create_announcement_form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FieldErrors, useForm } from "react-hook-form";

export const CreateAnnouncementFormVM = () => {
    const router = useRouter()
    const methods = useForm<CreateAnnouncementFormModel>({
        resolver: zodResolver(createAnnouncementSchema),
        defaultValues: {
            brand: null,
            banType: null,
            year: null,
            price: null,
            color: null,
            gear: null,
            capacity: null,
            mileage: null,
            numberOfOwners: null,
            marketType: null,
            model: null,
            city: null,
            status: null,
            currency: null,
            barter: false,
            credit: false,
            fuelType: null,
            gearbox: null,
            horsePower: "",
            notRepainted: false,
            hasNoDamage: false,
            numberOfSeats: null,
            onSale: false,
            byOrder: false,
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
            additionalInfo: "",
            carPhotos: [],
        },
    });

    const onSubmit = (data: CreateAnnouncementFormModel) => {
        console.log("data", data);
    };

    const onError = (error: FieldErrors<CreateAnnouncementFormModel>) => {
        console.error("error", error);
    };

    const submitHandler = methods.handleSubmit(onSubmit, onError);

    return { router, methods, submitHandler };
};
