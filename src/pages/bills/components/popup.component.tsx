import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Divider } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
// import { useUserStore } from "state";

interface popupProps {
  open: boolean;
  onClose: () => void;
}

export const Popup = ({ open, onClose }: popupProps) => {
  // const { dispatch } = useUserStore();

  const { handleSubmit, control } = useForm({
    defaultValues: {
      referenceNumber: "",
    },
  });
  const onSubmit = (data: any) => {
    // dispatch({
    //   type: "addBill",
    //   payload: {
    //     referenceNumber: data.referenceNumber,
    //     amount: 1232513245,
    //     amountAfterDueDate: 34213,
    //     dueDate: new Date(),
    //     billType: "Water",
    //     paid: false,
    //   },
    // });
    console.log(data);
  };
  return (
    <div>
      <Dialog open={open} onClose={onClose} fullWidth>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Add Bill</DialogTitle>
          <Divider variant="middle" />
          <DialogContent>
            <DialogContentText>BILL REFERENCE NUMBER:</DialogContentText>
            <Controller
              name="referenceNumber"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  autoFocus
                  margin="normal"
                  id="referenceNumber"
                  label="Reference Number"
                  fullWidth
                  variant="outlined"
                />
              )}
            />
          </DialogContent>
          <DialogActions>
            <Button
              type="submit"
              fullWidth
              variant="contained"
            >
              Add Bill
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};
