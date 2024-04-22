import { toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const handleToast = (
  status: string,
  message: string,
  options?: Record<string, ToastOptions<unknown>>
) => {
  const statusToast = {
    success: () => toast.success(message, options),
    error: () => toast.error(message, options),
    warning: () => toast.warning(message, options),
    info: () => toast.info(message, options),
  };
  return statusToast[status as keyof typeof statusToast]();
  // switch (status) {
  //   case "success":
  //     return toast.success(message, options);
  //   case "error":
  //     return toast.error(message, options);
  //   case "warning":
  //     return toast.warning(message, options);
  //   case "info":
  //     return toast.info(message, options);
  //   default:
  //     break;
  // }
};

export const snackbar = (
  status: string,
  message: string,
  options?: Record<string, any>
) => {
  return handleToast(status, message, options);
};
