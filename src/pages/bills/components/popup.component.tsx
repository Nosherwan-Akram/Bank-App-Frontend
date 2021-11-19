import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Divider } from "@mui/material";

interface popupProps {
  open: boolean;
  onClose: () => void;
}

export const Popup = ({ open, onClose }: popupProps) => {
  return (
    <div>
      <Dialog open={open} onClose={onClose} fullWidth>
        <DialogTitle>Add Bill</DialogTitle>
        <Divider variant="middle" />
        <DialogContent>
          <DialogContentText>BILL REFERENCE NUMBER:</DialogContentText>
          <TextField
            autoFocus
            margin="normal"
            id="referenceNumber"
            label="Reference Number"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button fullWidth variant="contained" onClick={onClose}>
            Add Bill
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
