import { Toast } from "@/components/toasts/Toast";
import { AlertColor } from "@mui/material";
import { createContext, useState } from "react";

type ToastContextType = {
  pushToast: (message: string, color: AlertColor) => void;
};

export const ToastContext = createContext<ToastContextType>(
  {} as ToastContextType
);

export const ToastProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [toast, setToast] = useState<String>("");
  const [color, setColor] = useState<AlertColor>("success");
  const [open, setOpen] = useState<boolean>(false);

  const pushToast = (message: String, color: AlertColor = "success") => {
    if (message.length > 1)
      message = message[0].toUpperCase() + message.slice(1);
    setToast(message);
    setColor(color);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ToastContext.Provider value={{ pushToast }}>
      {children}
      <Toast
        message={toast}
        color={color}
        open={open}
        handleClose={handleClose}
      />
    </ToastContext.Provider>
  );
};
