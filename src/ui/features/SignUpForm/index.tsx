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
import { Controller } from "react-hook-form";
import ListFileUpload from "@/ui/shared/ListFileUpload";

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
        togglePasswordVisibility,
        isPending,
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
                        resetType="none"
                        name="role"
                        data={[{ id: 1, name: "Alverçi" }]}
                        onChange={(val) => setUserType(val.id)}
                        placeholder="İstifadəçi tipini seçin"
                    />
                    {userType === 1 && (
                        <>
                            <div className="flex gap-x-5">
                                <Input name="first_name" placeholder="Ad" />
                                <Input name="last_name" placeholder="Soyad" />
                            </div>
                            <Input
                                name="whatsapp_number"
                                placeholder="WhatsApp nömrəniz"
                                trailing={
                                    <div>
                                        <ChatSVG />
                                    </div>
                                }
                            />
                            {fields.map((field, index) => (
                                <div key={field.id} className="flex items-start gap-x-5">
                                    <Input
                                        name={`phone_numbers.${index}.phone_number`}
                                        placeholder="Telefon nömrəniz"
                                    />
                                    <div className="flex gap-x-2 mt-2">
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
                                                        fields.length - 1 === index
                                                            ? "visible"
                                                            : "invisible"
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
                            <div className="grid grid-cols-3 gap-x-5">
                                <Select
                                    name="day"
                                    resetType="inner"
                                    valueType="object"
                                    data={[
                                        {
                                            id: 1,
                                            name: "01",
                                        },
                                        {
                                            id: 2,
                                            name: "02",
                                        },
                                    ]}
                                    placeholder="Gün"
                                />
                                <Select
                                    name="month"
                                    resetType="inner"
                                    valueType="object"
                                    data={[
                                        {
                                            id: 1,
                                            name: "01",
                                        },
                                        {
                                            id: 2,
                                            name: "02",
                                        },
                                        {
                                            id: 3,
                                            name: "03",
                                        },
                                    ]}
                                    placeholder="Ay"
                                />
                                <Select
                                    name="year"
                                    resetType="inner"
                                    valueType="object"
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
                            <div className="flex flex-col gap-y-2">
                                <h3 className="text-gray-700 text-14px500">ŞV-nin arxa və qabaq şəkilləri</h3>
                                <div>
                                    <Controller
                                        control={methods.control}
                                        name="identity_images"
                                        render={({ field: { onChange } }) => (
                                            <ListFileUpload
                                                disabled={methods.getValues("identity_images").length >= 2}
                                                multiple
                                                name="identity_images"
                                                onChange={onChange}
                                                accept=".jpg, .jpeg, .png"
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <h3 className="text-gray-700 text-14px500">Profil şəkli</h3>
                                <div>
                                    <Controller
                                        control={methods.control}
                                        name="profile_image"
                                        render={({ field: { onChange } }) => (
                                            <ListFileUpload
                                                name="profile_image"
                                                onChange={onChange}
                                                accept=".jpg, .jpeg, .png"
                                            />
                                        )}
                                    />
                                </div>
                            </div>
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
                                name="password_confirmation"
                                placeholder="Təkrar daxil edin"
                                type={inputType.password_confirmation}
                                trailing={
                                    <div
                                        className="cursor-pointer"
                                        onClick={() =>
                                            togglePasswordVisibility("password_confirmation")
                                        }
                                    >
                                        {inputType.password_confirmation === "text" ? (
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
                    isLoading={isPending}
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
