import { SignUpStepsEnum } from "@/data/enum/sign_up_steps.enum";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { SignStepsSliceType } from "./auth_slice.type";

const initialState: SignStepsSliceType = {
    signUpStep: SignUpStepsEnum.SIGNUP
}

export const signStepsSlice = createSlice({
    name: "sign",
    initialState,
    reducers: {
        setSignUpStep: (state, action: PayloadAction<SignUpStepsEnum>) => {
            state.signUpStep = action.payload
        },
    }
})

export const { setSignUpStep } = signStepsSlice.actions
export default signStepsSlice.reducer