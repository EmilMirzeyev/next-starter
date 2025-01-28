"use client";
import Form from "@/ui/shared/Form";
import { SignUpFormVM } from "./sign_up.form.vm";
import Select from "@/ui/shared/Select";
import Button from "@/ui/shared/Button";
import {
    ArrowRightSVG,
    ChatSVG,
    EyeOffSVG,
    EyeSVG,
    Mail1SVG,
    MinusSVG,
    PlusSVG,
} from "@public/vectors";
import Link from "next/link";
import Input from "@/ui/shared/Input";
import { cn } from "@/core/utils/cn";

const SignUpForm = () => {
    const {
        methods,
        submitHandler,
        fields,
        appendPhoneNumber,
        remove,
        userType,
        setUserType,
        inputType,
        togglePasswordVisibility
    } = SignUpFormVM();

    return (
        <>
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
                                <Select name="month" data={[
                                    {
                                        id: 1,
                                        name: "March",
                                    },
                                ]} placeholder="Ay" />
                                <Select name="year" data={[
                                    {
                                        id: 1,
                                        name: "2019",
                                    },
                                ]} placeholder="İl" />
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
                                        onClick={() => togglePasswordVisibility("password")
                                        }
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
                <Button
                    disabled={!userType}
                    className="rounded-[28px] flex items-center gap-x-2.5 w-full"
                >
                    Qeydiyyatdan keç
                    <ArrowRightSVG stroke={userType ? "#fff" : "#475467"} />
                </Button>
                <div className="flex justify-center gap-x-2">
                    <h3 className="text-gray-800 text-14px500">Artıq hesabınız var?</h3>
                    <Link
                        href="/signin"
                        className="border-b border-brand-500 text-brand-500 leading-none mb-2 mt-0.5 text-14px500"
                    >
                        Daxil olun
                    </Link>
                </div>
            </Form>
        </>
    );
};

export default SignUpForm;
