import { toast, ToastOptions } from "react-toastify";

const handleSnackbar = (
  status: "success" | "error" | "warning" | "info",
  message: string,
  options?: Record<string, ToastOptions<unknown>>
) => {
  const statusSnackbar = {
    success: () => toast.success(message, options),
    error: () => toast.error(message, options),
    warning: () => toast.warning(message, options),
    info: () => toast.info(message, options),
  };

  return statusSnackbar[status as keyof typeof statusSnackbar]();
};

export const snackbar = (
  status: "success" | "error" | "warning" | "info",
  message: string,
  options?: Record<string, any>
) => {
  return handleSnackbar(status, message, options);
};
