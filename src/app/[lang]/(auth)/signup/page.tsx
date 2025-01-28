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
    return (
        <>
            <div className="w-full">
                <SignUpContainer />
            </div>
        </>
    )
}

export default SignUp