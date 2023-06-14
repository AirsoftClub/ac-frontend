import { Alert, AlertColor, Snackbar } from "@mui/material";

interface ToastProps {
  message: String;
  color: AlertColor;
  open: boolean;
  handleClose: () => void;
}

export const Toast = ({
  message,
  color,
  open,
  handleClose,
}: ToastProps): JSX.Element => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert severity={color}>{message}</Alert>
    </Snackbar>
  );
};
