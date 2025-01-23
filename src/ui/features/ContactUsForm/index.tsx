"use client";
import Input from "@/ui/shared/Input";
import { ContactUsFormVM } from "./contact_us.form.vm";
import Form from "@/ui/shared/Form";
import { Mail1SVG, PhoneCallSVG, Send3SVG } from "@public/vectors";
import Button from "@/ui/shared/Button";
import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum";
import Textarea from "@/ui/shared/Textarea";

const ContactUsForm = () => {
    const { methods, submitHandler } = ContactUsFormVM();

    return (
        <Form
            methods={methods}
            onSubmit={submitHandler}
            className="flex flex-col gap-y-6"
        >
            <Input name="fullName" placeholder="Ad, soyadınız" />
            <Input
                name="phoneNumber"
                placeholder="Telefon nömrəniz"
                trailing={
                    <div className="">
                        <PhoneCallSVG className="text-gray-500 size-5" />
                    </div>
                }
            />
            <Input
                name="email"
                placeholder="Email"
                trailing={
                    <div>
                        <Mail1SVG />
                    </div>
                }
            />
            <Textarea
                rows={7}
                name="message"
                placeholder="Mesajınızı daxil edin..."
            />
            <Button variant={ButtonVariantsEnum.BLACK} className="rounded-[28px] flex items-center gap-2.5">
                Göndər
                <Send3SVG />
            </Button>
        </Form>
    );
};

export default ContactUsForm;
