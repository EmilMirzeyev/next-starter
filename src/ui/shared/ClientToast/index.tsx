"use client";
import { snackbar } from "../Sanckbar";
import { useUpdateEffect } from "@/core/hooks/useUpdateEffect";
import { ClientToastType } from "./ClientToast.type";

const ClientToast = ({ error }: ClientToastType) => {
  useUpdateEffect(() => {
    snackbar("error", error);
  }, []);

  return <></>;
};

export default ClientToast;
