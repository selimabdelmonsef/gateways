import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";

export default function GatewaysDialog({
  title,
  children,
  openDialog,
  onClose,
  submit,
}) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    onClose(false);
  };
  const onSubmit = (event) => {
    submit(event);
    handleClose();
  };

  useEffect(() => {
    setOpen(openDialog);
  }, [openDialog]);

  return (
    <div>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle
          style={{ alignSelf: "center", display: "flex", marginTop: "10px" }}
        >
          {title}
        </DialogTitle>
        <div>{children}</div>
        <DialogActions>
          <Button onClick={handleClose}>CANCEL</Button>
          <Button onClick={onSubmit}>SUBMIT</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
