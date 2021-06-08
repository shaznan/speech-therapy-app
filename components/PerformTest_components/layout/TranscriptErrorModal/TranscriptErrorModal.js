import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import MicrophoneAnimation from "./MicrophoneAnimation.component";
import Message from "./Message.component";
import DynamicButton from "../../../Common_Layout/Button/Button";
import { useDispatch } from "react-redux";
import { testActions } from "../../../../store/performTestSlice";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "white",
    boxShadow: "rgba(0, 0, 0, 0.4)",
    padding: "2rem 5rem",
    borderRadius: "5px",
    textAlign: "center",
    width: "35rem",
  },
}));

export default function TranscriptErrorModal() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onClickHandler = () => {
    dispatch(testActions.NavigateToStart());
    dispatch(testActions.setShowStartBtn(true));
    dispatch(testActions.setShowRemainingTime(true));
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
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
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Message />
            <MicrophoneAnimation />
            <DynamicButton text="Try Again" onClickHandler={onClickHandler} />
            <div onClick={onClickHandler}>click me</div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
