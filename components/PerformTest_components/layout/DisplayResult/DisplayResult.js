import React, { useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useSelector, useDispatch } from "react-redux";
import { restartTest } from "../../../../store/actions/performTest/performtestNavigation/navigation-actions";
import { useStyles } from "./displayResult_styles";
import Typography from "@material-ui/core/Typography";
import ResultBody from "./ResultBody.component";
import Buttons from "./Buttons.component";
import { CloseBtn } from "./Buttons.component";

export default function DisplayResult() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const isTranscriptError = useSelector(
    (state) => state.performtest.isTranscriptError
  );

  const handleClose = () => {
    setOpen(false);
  };

  // const onClickHandler = () => {
  //   dispatch(restartTest());
  //   setOpen(false);
  // };

  // useEffect(() => {
  //   isTranscriptError && setOpen(true);
  // }, [isTranscriptError]);

  const test = () => {
    setOpen(true);
  };
  //FIXME: remove button;
  return (
    <div>
      <button onClick={test}>Open</button>
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
            <CloseBtn />
            <Typography variant="h5">
              <strong>Congratulations! You did great!</strong>
            </Typography>
            <ResultBody />
            <div>
              <Buttons />
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
