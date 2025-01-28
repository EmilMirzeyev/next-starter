"use client";
import { useAppDispatch, useAppSelector } from "@/core/hooks/useRedux";
import { setSignUpStep } from "@/core/store/auth/sign_steps.slice";
import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum";
import { SignUpStepsEnum } from "@/data/enum/sign_up_steps.enum";
import SignTab from "@/ui/components/SignTab";
import SignUpContainer from "@/ui/containers/SignUpContainer";
import Button from "@/ui/shared/Button";
import { ArrowRightSVG } from "@public/vectors";

const SignUp = () => {
    const { signUpStep } = useAppSelector((store) => store.signSteps)
    const dispatch = useAppDispatch()

    return (
        <>
            {
                signUpStep === SignUpStepsEnum.OTP ? (
                    <div className="flex flex-col gap-y-4">
                        <div className="flex justify-start w-full">
                            <Button
                                onClick={() => dispatch(setSignUpStep(SignUpStepsEnum.SIGNUP))}
                                variant={ButtonVariantsEnum.EMPTY} className="flex gap-x-1.5 px-4 items-center w-fit rounded-3xl h-11 w-fix">
                                <ArrowRightSVG className="text-black rotate-180" />
                                Geriyə qayıt
                            </Button>
                        </div>
                        <article className="flex flex-col gap-y-4">
                            <h2 className="text-brand-700 text-48px700">Qeydiyyatı tamamla</h2>
                            <p className="text-gray-800 text-16px400">
                                Qeydiyyatı tamamlamaq üçün emailinizə göndərilən 6 rəqəmli təsdiq kodunu daxil edin
                            </p>
                        </article>
                    </div>
                ) : (
                    <>
                        <article className="flex flex-col gap-y-4">
                            <h2 className="text-brand-700 text-48px700">
                                Xoş Gəlmisiniz!
                            </h2>
                            <p className="text-gray-800 text-16px400">
                                Signup - Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit
                            </p>
                        </article>
                        <SignTab />
                    </>
                )
            }
            <div className="w-full">
                <SignUpContainer />
            </div>
        </>
    )
}

export default SignUp