import Form from "@/ui/shared/Form";
import Select from "@/ui/shared/Select";
import { DashboardFilterVM } from "./dashboard_filter.vm";
import Input from "@/ui/shared/Input";
import Button from "@/ui/shared/Button";
import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum";
import { DownChevronSVG, RefreshSVG } from "@public/vectors";
import CheckboxButton from "@/ui/shared/CheckboxButton";
import { cn } from "@/core/utils/cn";
import { DashboardFilterType } from "./dashboard_filter.type";
import { SelectOptionVariantEnum } from "@/data/enum/select_option_variant.enum";

const DashboardFilter = ({
    brands,
    carFilters,
}: DashboardFilterType) => {
    const {
        methods,
        submitHandler,
        showMoreFilters,
        setShowMoreFilters,
        resetQueryParams,
        models,
        brandTypeId,
        handleChangeBrandTypeId,
    } = DashboardFilterVM();

    return (
        <>
            <div className="container my-8 flex flex-col gap-y-6">
                <h1 className="text-30px700 text-gray-900">Axarış üzrə filtrlər</h1>
                <Form
                    methods={methods}
                    onSubmit={submitHandler}
                    className="flex flex-col gap-y-5"
                >
                    <div className="grid grid-cols-4 gap-x-5">
                        <Select
                            resetType="inner"
                            buttonClassName="h-11"
                            defaultText="Marka"
                            name="brand_id"
                            data={brands?.data?.data || []}
                            onChange={(val) => handleChangeBrandTypeId(val.id)}
                        />
                        <Select
                            disabled={!brandTypeId}
                            buttonClassName="h-11"
                            defaultText="Model"
                            name="model_ids"
                            data={models?.data || []}
                        />
                        <Select
                            buttonClassName="h-11"
                            defaultText="Ban növü"
                            name="body_type_ids"
                            data={[
                                {
                                    id: 1,
                                    name: "Satisda",
                                },
                            ]}
                        />
                        <Select
                            resetType="inner"
                            multiple
                            variant={SelectOptionVariantEnum.CHECKABLE}
                            buttonClassName="h-11"
                            defaultText="Şəhər"
                            name="city_ids"
                            data={[
                                {
                                    id: 1,
                                    name: "Baku",
                                },
                                {
                                    id: 2,
                                    name: "Shamkir",
                                },
                            ]}
                        />
                    </div>
                    <div className="grid grid-cols-8 gap-x-5">
                        <div className="flex col-span-2">
                            <Select
                                defaultText="İl min."
                                name="year_min"
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
                                name="year_max."
                                buttonClassName="border-l-0 rounded-l-none h-11"
                                data={[
                                    {
                                        id: 1,
                                        name: "2025",
                                    },
                                ]}
                            />
                        </div>
                        <div className="flex col-span-2">
                            <Input
                                name="price_min"
                                className="rounded-r-none h-11"
                                placeholder="Qiymət min."
                            />
                            <Input
                                name="price_max"
                                className="rounded-l-none border-l-0 h-11"
                                placeholder="max."
                            />
                        </div>
                        <Select
                            resetType="none"
                            buttonClassName="h-11"
                            defaultText="AZN"
                            name="currency_ids"
                            multiple
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
                        <CheckboxButton name="barter" text="Barter" />
                        <Select
                            resetType="inner"
                            buttonClassName="h-11"
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
                    <div
                        className={cn(
                            "flex flex-col gap-y-6 overflow-hidden transition-all duration-300 ease-in-out",
                            showMoreFilters
                                ? "max-h-[500px] opacity-100"
                                : "max-h-0 opacity-0"
                        )}
                    >
                        <div className="flex flex-col gap-y-5">
                            <div className="flex gap-x-5">
                                <div className="flex w-1/4">
                                    <Select
                                        defaultText="Rəngi"
                                        name="color"
                                        buttonClassName="h-11"
                                        data={[
                                            {
                                                id: 1,
                                                name: "Red",
                                            },
                                        ]}
                                    />
                                </div>
                                <div className="flex w-1/4">
                                    <Select
                                        defaultText="Yanacaq növü"
                                        name="fuel_type_ids"
                                        buttonClassName="h-11"
                                        data={carFilters?.data?.fuel_types || []}
                                    />
                                </div>
                                <div className="flex w-1/4">
                                    <Select
                                        defaultText="Ötürücü"
                                        name="drivetrain_ids"
                                        buttonClassName="h-11"
                                        data={[
                                            {
                                                id: 1,
                                                name: "Red",
                                            },
                                        ]}
                                    />
                                </div>
                                <div className="flex w-1/4">
                                    <Select
                                        defaultText="Sürətlər qutusu"
                                        name="gearbox_ids"
                                        buttonClassName="h-11"
                                        data={carFilters?.data?.gearboxes || []}
                                    />
                                </div>
                            </div>
                            <div className="flex gap-x-5">
                                <div className="flex w-1/3">
                                    <Select
                                        defaultText="Həcm (sm3) min."
                                        name="engine_size_min"
                                        buttonClassName="rounded-r-none h-11"
                                        data={[
                                            {
                                                id: 1,
                                                name: "100",
                                            },
                                        ]}
                                    />
                                    <Select
                                        defaultText="max."
                                        name="engine_size_max."
                                        buttonClassName="border-l-0 rounded-l-none h-11"
                                        data={[
                                            {
                                                id: 1,
                                                name: "1000",
                                            },
                                        ]}
                                    />
                                </div>
                                <div className="flex w-1/3">
                                    <Input
                                        name="engine_power_min"
                                        className="rounded-r-none h-11"
                                        placeholder="Güc(a.g.) min."
                                    />
                                    <Input
                                        name="engine_power_max"
                                        className="rounded-l-none border-l-0 h-11"
                                        placeholder="max."
                                    />
                                </div>
                                <div className="flex w-1/3">
                                    <Input
                                        name="mileage_min"
                                        className="rounded-r-none h-11"
                                        placeholder="Yürüş (km) min."
                                    />
                                    <Input
                                        name="mileage_max"
                                        className="rounded-l-none border-l-0 h-11"
                                        placeholder="max."
                                    />
                                </div>
                            </div>
                            <div className="flex gap-x-5">
                                <div className="flex w-1/4">
                                    <Select
                                        defaultText="Satıcı"
                                        name="seller_ids"
                                        buttonClassName="h-11"
                                        data={[
                                            {
                                                id: 1,
                                                name: "Red",
                                            },
                                        ]}
                                    />
                                </div>
                                <div className="flex w-1/4">
                                    <Select
                                        defaultText="Sahiblərinin sayı"
                                        name="numberOfOwners"
                                        buttonClassName="h-11"
                                        data={[
                                            {
                                                id: 1,
                                                name: "Red",
                                            },
                                        ]}
                                    />
                                </div>
                                <div className="flex w-1/4">
                                    <Select
                                        defaultText="Yerlərin sayı"
                                        name="seats_count"
                                        buttonClassName="h-11"
                                        data={[
                                            {
                                                id: 1,
                                                name: "Red",
                                            },
                                        ]}
                                    />
                                </div>
                                <div className="flex w-1/4">
                                    <Select
                                        defaultText="Hansı bazar üçün yığılıb"
                                        name="market_ids"
                                        buttonClassName="h-11"
                                        data={carFilters?.data?.markets || []}
                                    />
                                </div>
                            </div>
                            <div className="flex gap-x-5">
                                <CheckboxButton
                                    name="has_no_damage"
                                    text="Vuruğu yoxdur"
                                    fieldClassName="w-fit"
                                />
                                <CheckboxButton
                                    name="is_original_paint"
                                    text="Rənglənməyib"
                                    fieldClassName="w-fit"
                                />
                                <CheckboxButton
                                    name="only_crashed"
                                    text="Yalnız qəzalı avtomobillər"
                                    fieldClassName="w-fit"
                                />
                                <CheckboxButton
                                    name="onlyByOrder"
                                    text="Yalnız sifarişlə"
                                    fieldClassName="w-fit"
                                />
                            </div>
                        </div>
                        <div className="h-[1px] bg-gray-200 w-full" />
                        <div className="flex flex-col gap-y-6">
                            <h3 className="text-black text-18px600">Avtomobilin təchizatı</h3>
                            <div className="flex flex-wrap gap-5">
                                <CheckboxButton
                                    name="alloyWheels"
                                    text="Yüngül lehimli disklər"
                                    fieldClassName="w-fit"
                                />
                                <CheckboxButton name="abs" text="ABS" fieldClassName="w-fit" />
                                <CheckboxButton
                                    name="sunRoof"
                                    text="Lyuk"
                                    fieldClassName="w-fit"
                                />
                                <CheckboxButton
                                    name="rainSensor"
                                    text="Yağış sensoru"
                                    fieldClassName="w-fit"
                                />
                                <CheckboxButton
                                    name="centralLockingSystem"
                                    text="Mərkəzi qapanma"
                                    fieldClassName="w-fit"
                                />
                                <CheckboxButton
                                    name="sideCurtains"
                                    text="Yan pərdələr"
                                    fieldClassName="w-fit"
                                />
                                <CheckboxButton
                                    name="parkingRadar"
                                    text="Park radarı"
                                    fieldClassName="w-fit"
                                />
                                <CheckboxButton
                                    name="leatherInterior"
                                    text="Dəri salon"
                                    fieldClassName="w-fit"
                                />
                                <CheckboxButton
                                    name="xenonLamps"
                                    text="Ksenon lampalar"
                                    fieldClassName="w-fit"
                                />
                                <CheckboxButton
                                    name="rearCamera"
                                    text="Arxa görüntü kamerası"
                                    fieldClassName="w-fit"
                                />
                                <CheckboxButton
                                    name="seatVentilation"
                                    text="Oturacaqların ventilyasiyası"
                                    fieldClassName="w-fit"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-x-5 items-center justify-center mt-5">
                        <Button
                            type="button"
                            onClick={resetQueryParams}
                            variant={ButtonVariantsEnum.EMPTY}
                            className="rounded-3xl h-12 bg-gray-50 flex gap-x-1.5 items-center"
                        >
                            Sıfırla
                            <RefreshSVG />
                        </Button>
                        <Button
                            type="button"
                            onClick={() => setShowMoreFilters((prev) => !prev)}
                            variant={ButtonVariantsEnum.EMPTY}
                            className="rounded-3xl text-brand-600 h-12 flex gap-x-1.5 items-center hover:bg-brand-50 duration-300 "
                        >
                            {showMoreFilters ? "Daha az göstər" : "Daha çox filtr"}
                            <DownChevronSVG
                                className={cn(
                                    "text-brand-600 transition-all ease-in-out duration-200",
                                    showMoreFilters && "rotate-180 "
                                )}
                            />
                        </Button>
                        <Button type="submit" className="rounded-3xl h-12">
                            Elanları göstər
                        </Button>
                    </div>
                </Form>
            </div>
            <div className="bg-gray-200 w-full h-[1px]"></div>
        </>
    );
};

export default DashboardFilter;
