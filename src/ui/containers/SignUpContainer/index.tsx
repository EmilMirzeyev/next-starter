"use client";
import SignUpContainerFactory from './sign_up_container.factory'

const SignUpContainer = () => {
    const { handleSignUpSteps } = SignUpContainerFactory()
    
    return (
        <div>
            {handleSignUpSteps()}
        </div>
    )
}

export default SignUpContainer