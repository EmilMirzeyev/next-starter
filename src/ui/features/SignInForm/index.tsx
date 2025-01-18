"use client";
import Form from "@/ui/shared/Form";
import { SignInFormVM } from "./sign_in.form.vm";
import Input from "@/ui/shared/Input";
import { ArrowRight2SVG, EyeOffSVG, EyeSVG, Mail1SVG } from "@public/vectors";
import Checkbox from "@/ui/shared/Checkbox";
import Link from "next/link";
import Button from "@/ui/shared/Button";

const SignInForm = () => {
    const { methods, submitHandler, passwordType, setPasswordType } =
        SignInFormVM();

    return (
        <Form
            methods={methods}
            onSubmit={submitHandler}
            className="flex flex-col gap-y-8"
        >
            <div className="flex flex-col gap-y-4">
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
                    type={passwordType}
                    trailing={
                        <div
                            className="cursor-pointer"
                            onClick={() =>
                                setPasswordType((prev) =>
                                    prev === "text" ? "password" : "text"
                                )
                            }
                        >
                            {passwordType === "text" ? <EyeSVG /> : <EyeOffSVG />}
                        </div>
                    }
                />
            </div>
            <div className="flex justify-between items-center">
                <Checkbox
                    name="save"
                    label="Yadda saxla"
                    labelClassName="text-14px500"
                />
                <Link href={""} className="text-brand-500 text-14px500">
                    Şifrəni unutdun?
                </Link>
            </div>
            <Button type="submit" className="rounded-3xl flex gap-x-2.5 item-center">
                Daxil ol
                <ArrowRight2SVG className="mt-0.5" />
            </Button>
            <div className="flex justify-center gap-x-2">
                <h3 className="text-gray-800 text-14px500">Hesabınız yoxdur?</h3>
                <Link
                    href={""}
                    className="border-b border-brand-500 text-brand-500 leading-none mb-2 mt-0.5 text-14px500"
                >
                    Qeydiyyatdan keçin
                </Link>
            </div>
        </Form>
    );
};

export default SignInForm;
