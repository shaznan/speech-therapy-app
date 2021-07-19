import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useEffect } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const useStyles = makeStyles(
  (theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    container: {
      backgroundColor: "white",
      boxShadow: "0px 3px 29px rgba(0,0,0,0.1)",
      padding: "3rem 2rem",
      borderRadius: "13px",
    },
    icon: {
      color: "green",
    },
  }),
  { index: 1 },
);

export default function DeleteSuccessModal({ loading }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    loading === "success" && setOpen(true);
  }, [loading]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <div className={classes.container}>
            <h2 id="transition-modal-title">
              <CheckCircleIcon className={classes.icon} /> Deleted Successfully!{" "}
            </h2>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
