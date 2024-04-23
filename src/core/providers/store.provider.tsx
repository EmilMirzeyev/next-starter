"use client";
import { ReactNode } from "react";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/core/store";

type Props = { children: ReactNode };

export const StoreProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};
