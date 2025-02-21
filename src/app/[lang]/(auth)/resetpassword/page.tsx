"use client";
import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum";
import { ResetPasswordEnum } from "@/data/enum/reset_password.enum";
import ResetPasswordForm from "@/ui/features/ResetPasswordForm";
import Button from "@/ui/shared/Button";
import { ArrowRightSVG } from "@public/vectors";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ResetPassword = () => {
    const router = useRouter();
    const [resetPasswordStep, setResetPasswordStep] = useState(
        ResetPasswordEnum.EMAILCONFIRM
    );
    const stepText = {
        [ResetPasswordEnum.EMAILCONFIRM]: {
            title: "Şifrəni yenilə",
            description:
                "Şifrəni yeniləmək üçün emailizi daxil edin. Emailinizə gələn 6 rəqəmli kodu daxil etdikdən sonra yeni şifrə təyin edəcəksiniz.",
        },
        [ResetPasswordEnum.OTPCONFIRM]: {
            title: "Şifrəni yenilə",
            description:
                "Qeydiyyatı tamamlamaq üçün emailinizə göndərilən 6 rəqəmli təsdiq kodunu daxil edin",
        },
        [ResetPasswordEnum.NEWPASSWORD]: {
            title: "Yeni şifrə təyin et",
            description:
                "Yeni şifrəni təyin etdikdən sonra sistemə təkrar giriş etməlisiniz",
        },
    };

    const { title, description } = stepText[resetPasswordStep];

    return (
        <div className="flex flex-col gap-y-4">
            <div className="flex justify-start w-full">
                <Button
                    onClick={() => router.push("/signin")}
                    variant={ButtonVariantsEnum.EMPTY}
                    className="flex gap-x-1.5 px-4 items-center w-fit rounded-3xl h-11 w-fix"
                >
                    <ArrowRightSVG className="text-black rotate-180" />
                    Geriyə qayıt
                </Button>
            </div>
            <div className="flex flex-col gap-y-[72px] mobile:gap-y-12">
                <article className="flex flex-col gap-y-4">
                    <h2 className="text-brand-700 text-48px700 mobile:text-36px700">
                        {title}
                    </h2>
                    <p className="text-gray-800 text-16px400">{description}</p>
                </article>
                <ResetPasswordForm
                    resetPasswordStep={resetPasswordStep}
                    setResetPasswordStep={setResetPasswordStep}
                />
            </div>
        </div>
    );
};

export default ResetPassword;
