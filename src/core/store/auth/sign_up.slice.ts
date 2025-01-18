import { SignUpStepsEnum } from "@/data/enum/sign_up_steps.enum";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    signUpStep: SignUpStepsEnum.SIGNUP
}

export const signUpSlice = createSlice({
    name: "signup",
    initialState,
    reducers: {
        setSignUpStep: (state, action: PayloadAction<SignUpStepsEnum>) => {
            console.log('action.payload', action.payload)
            state.signUpStep = action.payload
        }
    }
})

export const { setSignUpStep } = signUpSlice.actions
export default signUpSlice.reducer