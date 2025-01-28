import { useAppSelector } from "@/core/hooks/useRedux";
import { SignUpStepsEnum } from "@/data/enum/sign_up_steps.enum"
import SignUpForm from "@/ui/features/SignUpForm"
import OTPSignUpForm from "@/ui/features/SignUpForm/OTPSignUp";

const SignUpContainerFactory = () => {
    const { signUpStep } = useAppSelector((store) => store.signSteps)

    const handleSignUpSteps = () => {
        const renderStepComponent = {
            [SignUpStepsEnum.SIGNUP]: <SignUpForm />,
            [SignUpStepsEnum.OTP]: <OTPSignUpForm />,
        };
        return renderStepComponent[signUpStep];
    };

    return { handleSignUpSteps };
};

export default SignUpContainerFactory;
