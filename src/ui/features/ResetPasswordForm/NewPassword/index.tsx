import Form from "@/ui/shared/Form";
import Input from "@/ui/shared/Input";
import { EyeOffSVG, EyeSVG } from "@public/vectors";
import React from "react";
import { NewPasswordVM } from "./new_password.vm";
import Button from "@/ui/shared/Button";
import SuccessModal from "@/ui/components/SuccessModal";

const NewPassword = () => {
    const {
        inputType,
        methods,
        successModalVisible,
        setSuccessModalVisible,
        submitHandler,
        togglePasswordVisibility,
    } = NewPasswordVM();

    return (
        <>
            <Form methods={methods} onSubmit={submitHandler} className="flex flex-col gap-y-8">
                <div className="flex flex-col gap-y-5">
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
                                {inputType.confirmPassword === "text" ? <EyeSVG /> : <EyeOffSVG />}
                            </div>
                        }
                    />
                </div>
                <Button
                    type="submit"
                    className="rounded-[28px] flex gap-x-2.5"
                >
                    Təsdiq et
                </Button>
            </Form>
            <SuccessModal
                link="/"
                buttonText="Sistemə giriş et"
                title="Şifrə yeniləmə tamamlandı"
                description="Yeni təyin etdiyiniz şifrə ilə aşağıdakı linkdən sistemə daxil ola bilərsiniz"
                visible={successModalVisible}
                setVisible={setSuccessModalVisible}
            />
        </>
    );
};

export default NewPassword;
