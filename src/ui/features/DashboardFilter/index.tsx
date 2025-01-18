"use client";
import Form from "@/ui/shared/Form";
import Select from "@/ui/shared/Select";
import { DashboardFilterVM } from "./dashboard_filter.vm";
import Input from "@/ui/shared/Input";
import Button from "@/ui/shared/Button";
import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum";
import { PlusSVG } from "@public/vectors";
import CheckboxButton from "@/ui/shared/CheckboxButton";

const DashboardFilter = () => {
    const { methods, submitHandler } = DashboardFilterVM();

    return (
        <div className="container my-8 flex flex-col gap-y-6">
            <h1 className="text-30px700 text-gray-900">Axarış üzrə filtrlər</h1>
            <Form
                methods={methods}
                onSubmit={submitHandler}
                className="flex flex-col gap-y-5"
            >
                <div className="flex gap-x-5">
                    <Select
                        buttonClassName="h-11"
                        defaultText="Marka"
                        name="brand"
                        data={[
                            {
                                id: 1,
                                name: "Ford",
                            },
                        ]}
                    />
                    <Select
                        buttonClassName="h-11"
                        defaultText="Model"
                        name="model"
                        data={[
                            {
                                id: 1,
                                name: "Fusion",
                            },
                        ]}
                    />
                    <Select
                        buttonClassName="h-11"
                        defaultText="Ban növü"
                        name="banType"
                        data={[
                            {
                                id: 1,
                                name: "Satisda",
                            },
                        ]}
                    />
                    <Select
                        buttonClassName="h-11"
                        defaultText="Şəhər"
                        name="city"
                        data={[
                            {
                                id: 1,
                                name: "Satisda",
                            },
                        ]}
                    />
                </div>
                <div className="flex gap-x-5">
                    <div className="flex w-1/4">
                        <Select
                            defaultText="İl min."
                            name="minYear"
                            buttonClassName="rounded-r-none h-11"
                            data={[
                                {
                                    id: 1,
                                    name: "1990",
                                },
                            ]}
                        />
                        <Select
                            defaultText="max."
                            name="maxYear."
                            buttonClassName="border-l-0 rounded-l-none h-11"
                            data={[
                                {
                                    id: 1,
                                    name: "2025",
                                },
                            ]}
                        />
                    </div>
                    <div className="flex w-1/4">
                        <Input
                            name="maxPrice"
                            className="rounded-r-none h-11"
                            placeholder="Qiymət min."
                        />
                        <Input
                            name="minPrice"
                            className="rounded-l-none border-l-0 h-11"
                            placeholder="max."
                        />
                    </div>
                    <div className="flex w-1/4 gap-x-5">
                        <Select
                            buttonClassName="h-11"
                            className="w-full"
                            defaultText="AZN"
                            name="currency"
                            data={[
                                {
                                    id: 1,
                                    name: "AZN",
                                },
                                {
                                    id: 2,
                                    name: "USD",
                                },
                                {
                                    id: 3,
                                    name: "EUR",
                                },
                            ]}
                        />
                        <CheckboxButton name="credit" text="Kredit" />
                    </div>
                    <div className="flex gap-x-5 w-1/4">
                        <CheckboxButton name="barter" text="Barter" />
                        <Select
                            buttonClassName="h-11"
                            className="w-1/2"
                            defaultText="Vəziyyəti"
                            name="status"
                            data={[
                                {
                                    id: 1,
                                    name: "Satisda",
                                },
                            ]}
                        />
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default DashboardFilter;
