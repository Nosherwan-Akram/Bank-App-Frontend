import { createContext } from "react";
import { AlertProps } from "@material-ui/lab/Alert";
import { SnackbarProps } from "@material-ui/core";

export interface ToastProps {
  severity: AlertProps["severity"];
  toastContext: AlertProps["children"];
  position?: SnackbarProps["anchorOrigin"];
}

export const toastContext = createContext((props: ToastProps): void => {
  console.log(`you are at top level toast context with these props ${props}`);
});

export default toastContext;
