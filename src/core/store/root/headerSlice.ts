import { BreadCrumbType } from "@/ui/shared/Breadcrumbs/breadcrumbs.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DependencyList } from "react";

export type HeaderSliceType = {
    title?: string | null;
    breadcrumbs?: BreadCrumbType[] | null
    deps?: string | null | DependencyList
}

const initialState: HeaderSliceType = {
    title: null,
    breadcrumbs: null
}

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setHeaderContent: (state, action: PayloadAction<HeaderSliceType>) => {
            state.title = action.payload.title || null
            state.breadcrumbs = action.payload.breadcrumbs || null
        }
    },
})

export const { setHeaderContent } = headerSlice.actions

export default headerSlice.reducer