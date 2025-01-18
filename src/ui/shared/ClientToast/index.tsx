"use client";
import { useUpdateEffect } from "@/core/hooks/useUpdateEffect";
import { SnackbarStatusEnum } from "@/data/enum/snackbar_status.enum";
import { ClientToastType } from "./client_toast.type";
import { snackbar } from './../Sanckbar/index';

const ClientToast = ({ error }: ClientToastType) => {
  useUpdateEffect(() => {
    snackbar(SnackbarStatusEnum.ERROR, error);
  }, []);

  return <></>;
};

export default ClientToast;
