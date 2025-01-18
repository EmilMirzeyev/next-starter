"use client";
import Form from "@/ui/shared/Form";
import React from "react";
import Input from "@/ui/shared/Input";
import { ArrowRightSVG, Mail1SVG } from "@public/vectors";
import Button from "@/ui/shared/Button";
import { EmailConfirmVM } from "./email_confirm.vm";

const EmailConfirm = ({setResetPasswordStep}) => {
    const { emailValue, setEmailValue, methods, submitHandler } =
        EmailConfirmVM({setResetPasswordStep});

    return (
        <Form methods={methods} onSubmit={submitHandler} className="flex flex-col gap-y-8">
            <Input
                name="email"
                placeholder="Email"
                onChange={(val) => setEmailValue(val.trim())}
                trailing={
                    <div>
                        <Mail1SVG />
                    </div>
                }
            />
            <Button
                disabled={!emailValue}
                type="submit"
                className="rounded-[28px] flex gap-x-2.5 item-center w-full"
            >
                Daxil ol
                <ArrowRightSVG
                    className="mt-0.5"
                    stroke={emailValue ? "#fff" : "#475467"}
                />
            </Button>
        </Form>
    );
};

export default EmailConfirm;
