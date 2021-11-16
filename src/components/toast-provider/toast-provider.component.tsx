import { Snackbar, SnackbarProps } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { toastContext, ToastProps } from "context";
import React, { useCallback, useState } from "react";

const { Provider } = toastContext;

export const ToastProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [alertProps, setAlertProps] = useState<AlertProps>();
  const [snackBarConfig, setSnackBarConfig] = useState<SnackbarProps>({
    open: false,
  });
  const handleClose = () => {
    setSnackBarConfig({ ...snackBarConfig, open: false });
  };
  const toast = useCallback((toastProps: ToastProps) => {
    setAlertProps({
      severity: toastProps.severity,
      children: toastProps.toastContext,
    });
    setSnackBarConfig({
      open: true,
      anchorOrigin: toastProps.position ?? {
        horizontal: "right",
        vertical: "bottom",
      },
      autoHideDuration: 3000,
    });
  }, []);
  return (
    <Provider value={toast}>
      {children}
      <Snackbar {...{ ...snackBarConfig, onClose: handleClose }}>
        <MuiAlert
          {...{
            ...alertProps,
            elevation: 6,
            variant: "filled",
            onClose: handleClose,
          }}
        />
      </Snackbar>
    </Provider>
  );
};
