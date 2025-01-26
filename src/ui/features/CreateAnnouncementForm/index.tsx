"use client";
import Select from "@/ui/shared/Select";
import { CreateAnnouncementFormVM } from "./create_announcement.form.vm";
import Form from "@/ui/shared/Form";
import Input from "@/ui/shared/Input";
import CheckboxButton from "@/ui/shared/CheckboxButton";
import Textarea from "@/ui/shared/Textarea";
import Button from "@/ui/shared/Button";
import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum";
import { ArrowRightSVG, CheckSVG } from "@public/vectors";

const CreateAnnouncementForm = () => {
    const { router,methods, submitHandler } = CreateAnnouncementFormVM();
    return (
        <Form
            methods={methods}
            onSubmit={submitHandler}
            className="flex flex-col gap-y-8 mt-8"
        >
            <div className="flex flex-col gap-y-5">
                <h2 className="text-gray-800 text-18px600">
                    Abtomobil haqqında məlumatlar
                </h2>
                <div className="flex gap-x-5">
                    <div className="w-1/2 flex flex-col gap-y-5">
                        <Select
                            name="brand"
                            data={[{ id: 1, name: "Ford" }]}
                            defaultText="Marka"
                        />
                        <Select name="banType" data={[]} defaultText="Ban növü" />
                        <Select name="year" data={[]} defaultText="İli" />
                        <Select name="price" data={[]} defaultText="Qiyməti" />
                        <Select name="color" data={[]} defaultText="Rəngi" />
                        <Select name="gear" data={[]} defaultText="Ötürücü" />
                        <Select name="capacity" data={[]} defaultText="Həcm (sm3)" />
                        <Select name="mileage" data={[]} defaultText="Yürüş" />
                        <Select
                            name="numberOfOwners"
                            data={[]}
                            defaultText="Sahiblərinin sayı"
                        />
                        <Select
                            name="marketType"
                            data={[]}
                            defaultText="Hansı bazar üçün yığılıb"
                        />
                    </div>
                    <div className="w-1/2 flex flex-col gap-y-5">
                        <Select
                            name="model"
                            data={[{ id: 1, name: "Ford" }]}
                            defaultText="Model"
                        />
                        <Select
                            name="city"
                            data={[{ id: 1, name: "Ford" }]}
                            defaultText="Şəhər"
                        />
                        <Select
                            name="status"
                            defaultText="Vəziyyəti"
                            data={[
                                {
                                    id: 1,
                                    name: "Satisda",
                                },
                            ]}
                        />
                        <div className="flex gap-x-5">
                            <Select
                                name="currency"
                                defaultText="AZN"
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
                            <CheckboxButton name="barter" text="Barter" className="h-14" />
                            <CheckboxButton name="credit" text="Kredit" className="h-14" />
                        </div>
                        <Select name="fuelType" data={[]} defaultText="Yanacaq növü" />
                        <Select
                            name="gearbox"
                            defaultText="Sürətlər qutusu"
                            data={[
                                {
                                    id: 1,
                                    name: "Red",
                                },
                            ]}
                        />
                        <Input name="horsePower" placeholder="Güc(a.g.)" />
                        <div className="flex gap-x-5">
                            <CheckboxButton
                                name="notRepainted"
                                text="Rənglənməyib"
                                className="h-14"
                            />
                            <CheckboxButton
                                name="hasNoDamage"
                                text="Vuruğu yoxdur"
                                className="h-14"
                            />
                        </div>
                        <Select
                            defaultText="Yerlərin sayı"
                            name="numberOfSeats"
                            data={[]}
                        />
                        <div className="flex gap-x-5">
                            <CheckboxButton
                                name="onSale"
                                text="Satışdadır"
                                className="h-14"
                            />
                            <CheckboxButton
                                name="byOrder"
                                text="Sifarişlə"
                                className="h-14"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-y-5">
                <h2 className="text-gray-800 text-18px600">Avtomobilin təchizatı</h2>
                <div className="flex flex-wrap gap-5">
                    <CheckboxButton
                        name="alloyWheels"
                        text="Yüngül lehimli disklər"
                        className="h-14 px-5"
                        fieldClassName="w-fit"
                    />
                    <CheckboxButton
                        name="abs"
                        text="ABS"
                        className="h-14 px-5"
                        fieldClassName="w-fit"
                    />
                    <CheckboxButton
                        name="sunRoof"
                        text="Lyuk"
                        className="h-14 px-5"
                        fieldClassName="w-fit"
                    />
                    <CheckboxButton
                        name="centralLockingSystem"
                        text="Mərkəzi qapanma"
                        className="h-14 px-5"
                        fieldClassName="w-fit"
                    />
                    <CheckboxButton
                        name="xenonLamps"
                        text="Ksenon lampalar"
                        className="h-14 px-5"
                        fieldClassName="w-fit"
                    />
                    <CheckboxButton
                        name="rainSensor"
                        text="Yağış sensoru"
                        className="h-14 px-5"
                        fieldClassName="w-fit"
                    />
                    <CheckboxButton
                        name="sideCurtains"
                        text="Yan pərdələr"
                        className="h-14 px-5"
                        fieldClassName="w-fit"
                    />
                    <CheckboxButton
                        name="leatherInterior"
                        text="Dəri salon"
                        className="h-14 px-5"
                        fieldClassName="w-fit"
                    />
                    <CheckboxButton
                        name="parkingRadar"
                        text="Park radarı"
                        className="h-14 px-5"
                        fieldClassName="w-fit"
                    />
                    <CheckboxButton
                        name="rearCamera"
                        text="Arxa görüntü kamerası"
                        className="h-14 px-5"
                        fieldClassName="w-fit"
                    />
                    <CheckboxButton
                        name="seatVentilation"
                        text="Oturacaqların ventilyasiyası"
                        className="h-14 px-5"
                        fieldClassName="w-fit"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-y-5">
                <h2 className="text-gray-800 text-18px600">Əlavə məlumatlar</h2>
                <Textarea rows={7} name="additionalInfo" placeholder="Daxil edin..." />
            </div>
            <div className="flex items-center w-full gap-x-5">
                <Button
                    type="button"
                    onClick={()=>router.push('/dashboard')}
                    variant={ButtonVariantsEnum.OUTLINED}
                    className="border border-gray-200 rounded-[28px] text-18px600 flex items-center gap-x-2.5 w-1/3"
                >
                    <ArrowRightSVG className="rotate-180" />
                    Geriyə qayıt
                </Button>
                <Button
                    type="button"
                    variant={ButtonVariantsEnum.EMPTY}
                    className="w-1/3 bg-gray-100 rounded-[28px]"
                >
                    Yadda saxla
                </Button>
                <Button
                    type="submit"
                    className="w-1/3 rounded-[28px] flex gap-x-2.5 items-center"
                >
                    Elanı yerləşdir
                    <CheckSVG />
                </Button>
            </div>
        </Form>
    );
};

export default CreateAnnouncementForm;
