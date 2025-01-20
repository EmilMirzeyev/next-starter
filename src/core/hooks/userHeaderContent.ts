"use client";
import { useLayoutEffect } from "react";
import { useAppDispatch } from "./useRedux";
import { HeaderSliceType, setHeaderContent } from "../store/root/headerSlice";

export function useHeaderContent({ title, breadcrumbs }: HeaderSliceType) {
    const dispatch = useAppDispatch();

    useLayoutEffect(() => {
        dispatch(setHeaderContent({ title, breadcrumbs }));
    }, []);
}
