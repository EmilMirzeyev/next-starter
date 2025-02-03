import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { MediaSliceType, SignUpActionModel } from "./media_slice.type"

const initialState: MediaSliceType = {
    signup: {
        id_card_media_ids: [],
        profile_media_id: null,
    }
}

export const mediaSlice = createSlice({
    name: 'media',
    initialState,
    reducers: {
        setUploadMedia: (state, action: PayloadAction<SignUpActionModel>) => {
            console.log('action.payload', action.payload)
            const { name } = action.payload
            if (name === 'profile_image') {
                state.signup.profile_media_id = action.payload.media_id
            } else {
                state.signup.id_card_media_ids.push(action.payload.media_id)
            }
        }
    }
})

export const { setUploadMedia } = mediaSlice.actions
export default mediaSlice.reducer