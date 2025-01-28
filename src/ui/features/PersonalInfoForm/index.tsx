"use client";
import Form from "@/ui/shared/Form";
import { PersonalInfoFormVM } from "./personfal_info.form.vm";
import Select from "@/ui/shared/Select";
import Input from "@/ui/shared/Input";
import {
    ChatSVG,
    EyeOffSVG,
    EyeSVG,
    Mail1SVG,
    MinusSVG,
    PhoneCallSVG,
    PlusSVG,
} from "@public/vectors";
import { cn } from "@/core/utils/cn";
import Button from "@/ui/shared/Button";
import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum";

const PersonalInfoForm = () => {
    const {
        router,
        methods,
        userType,
        setUserType,
        inputType,
        submitHandler,
        fields,
        remove,
        appendPhoneNumber,
        togglePasswordVisibility,
    } = PersonalInfoFormVM();

    return (
        <Form
            methods={methods}
            onSubmit={submitHandler}
            className="flex flex-col gap-y-8"
        >
            <div className="flex flex-col gap-y-5">
                <Select
                    hasReset={false}
                    name="userType"
                    data={[{ id: 1, name: "Alverçi" }]}
                    onChange={(val) => setUserType(val.id)}
                    placeholder="İstifadəçi tipini seçin"
                />
                {userType === 1 && (
                    <>
                        <div className="flex gap-x-5">
                            <Input name="name" placeholder="Ad" />
                            <Input name="surname" placeholder="Soyad" />
                        </div>
                        <Input
                            name="whatsappNumber"
                            placeholder="WhatsApp nömrəniz"
                            trailing={
                                <div>
                                    <ChatSVG />
                                </div>
                            }
                        />
                        {fields.map((field, index) => (
                            <div key={field.id} className="flex items-center gap-x-5">
                                <Input
                                    name={`phoneNumberList.${index}.phoneNumber`}
                                    placeholder="Telefon nömrəniz"
                                    trailing={
                                        <div>
                                            <PhoneCallSVG className="size-5 text-gray-400" />
                                        </div>
                                    }
                                />
                                <div className="flex gap-x-2">
                                    {fields.length > 1 ? (
                                        <>
                                            <button
                                                type="button"
                                                onClick={() => remove(index)}
                                                className={cn(
                                                    "bg-gray-50 rounded-[20px] p-2.5",
                                                    fields.length === 1 && "invisible"
                                                )}
                                            >
                                                <MinusSVG />
                                            </button>
                                            <button
                                                type="button"
                                                className={cn(
                                                    "bg-gray-50 rounded-[20px] p-2.5",
                                                    fields.length - 1 === index ? "visible" : "invisible"
                                                )}
                                                onClick={appendPhoneNumber}
                                            >
                                                <PlusSVG />
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                type="button"
                                                className="bg-gray-50 rounded-[20px] p-2.5"
                                                onClick={appendPhoneNumber}
                                            >
                                                <PlusSVG />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => remove(index)}
                                                className={cn(
                                                    "bg-gray-50 rounded-[20px] p-2.5 invisible"
                                                )}
                                            >
                                                <MinusSVG />
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                        <div className="flex gap-x-5">
                            <Select
                                name="day"
                                data={[
                                    {
                                        id: 1,
                                        name: "Monday",
                                    },
                                ]}
                                placeholder="Gün"
                            />
                            <Select
                                name="month"
                                data={[
                                    {
                                        id: 1,
                                        name: "March",
                                    },
                                ]}
                                placeholder="Ay"
                            />
                            <Select
                                name="year"
                                data={[
                                    {
                                        id: 1,
                                        name: "2019",
                                    },
                                ]}
                                placeholder="İl"
                            />
                        </div>
                        <Input name="address" placeholder="Yaşayış ünvanı" />
                        <Input
                            name="email"
                            placeholder="Email"
                            trailing={
                                <div>
                                    <Mail1SVG />
                                </div>
                            }
                        />
                        <Input
                            name="password"
                            placeholder="Şifrə"
                            type={inputType.password}
                            trailing={
                                <div
                                    className="cursor-pointer"
                                    onClick={() => togglePasswordVisibility("password")}
                                >
                                    {inputType.password === "text" ? <EyeSVG /> : <EyeOffSVG />}
                                </div>
                            }
                        />
                        <Input
                            name="confirmPassword"
                            placeholder="Təkrar daxil edin"
                            type={inputType.confirmPassword}
                            trailing={
                                <div
                                    className="cursor-pointer"
                                    onClick={() => togglePasswordVisibility("confirmPassword")}
                                >
                                    {inputType.confirmPassword === "text" ? (
                                        <EyeSVG />
                                    ) : (
                                        <EyeOffSVG />
                                    )}
                                </div>
                            }
                        />
                    </>
                )}
            </div>
            <div className="flex gap-x-5">
                <Button
                onClick={()=>router.push('/dashboard')}
                    type="button"
                    variant={ButtonVariantsEnum.EMPTY}
                    className="rounded-[28px] flex items-center gap-x-2.5 w-full bg-gray-100"
                >
                    İmtina et
                </Button>
                <Button
                    type="submit"
                    disabled={!userType}
                    variant={ButtonVariantsEnum.BLACK}
                    className="rounded-[28px] flex items-center gap-x-2.5 w-full"
                >
                    Yadda saxla
                </Button>
            </div>
        </Form>
    );
};

export default PersonalInfoForm;
