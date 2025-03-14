"use client";
import Form from "@/ui/shared/Form";
import React from "react";
import { SubscribeFormVM } from "./subscribe.form.vm";
import Input from "@/ui/shared/Input";
import { ArrowRightSVG, MailSVG } from "@public/vectors";
import Button from "@/ui/shared/Button";

const SubscribeForm = () => {
    const { methods, submitHandler } = SubscribeFormVM();
    return (
        <Form methods={methods} onSubmit={submitHandler}>
            <Input
                name="email"
                className="rounded-[32px] h-16 gap-x-2 mobile:h-14"
                inputClassName="placeholder:text-16px400"
                placeholder="olivia@untitledui.com"
                leading={
                    <div className="mt-0.5">
                        <MailSVG />
                    </div>
                }
                trailing={
                    <Button
                        type="submit"
                        className="rounded-3xl shrink-0 flex items-center gap-1.5 text-16px600 h-12 -mr-2
                       laptop:w-[133px] laptop:px-4 tablet:w-[133px] tablet:px-4 mobile:size-10 mobile:p-0"
                    >
                        <p className="mobile:hidden">Abonə ol</p>
                        <div>
                            <ArrowRightSVG className="text-white laptop:size-5 tablet:size-5 mobile:size-5" />
                        </div>
                    </Button>
                }
            />
        </Form>
    );
};

export default SubscribeForm;
