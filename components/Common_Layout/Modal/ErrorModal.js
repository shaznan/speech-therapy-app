import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const useStyles = makeStyles({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    backgroundColor: "white",
    border: "2px solid white",
    boxShadow: "2px 5px 39px rgba(0,0,0,0.2)",
    padding: "2rem",
  },
  erroricon: {
    fontSize: "2rem",
    color: "red",
    marginRight: "0.5rem",
  },
});

export default function ErrorModal({
  isError,
  errorMsg,
  dispatchFunc = () => {},
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    isError === true ? setOpen(true) : setOpen(false);
  }, [isError]);

  const handleClose = () => {
    setOpen(false);
    dispatchFunc();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        onClose={handleClose}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <div className={classes.background}>
            <ErrorOutlineIcon className={classes.erroricon} />
            <h2 id="transition-modal-title">Error: {errorMsg}</h2>
            <p id="transition-modal-description">
              Try closing the modal, if the problem persists, please try again
              later 😥
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
