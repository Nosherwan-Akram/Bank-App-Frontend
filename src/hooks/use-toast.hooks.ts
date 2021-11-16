import { toastContext, ToastProps } from "context";
import { useContext } from "react";

export const useToast = (): ((props: ToastProps) => void) => {
  return useContext(toastContext);
};
