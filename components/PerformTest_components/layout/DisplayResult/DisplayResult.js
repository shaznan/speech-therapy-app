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
  const [open, setOpen] = React.useState(false);
  const isTranscriptReceived = useSelector(
    (state) => state.performtest.isTranscriptReceived
  );

  const handleClose = () => {
    setOpen(false);
  };

  const tryAgain = () => {
    dispatch(restartTest());
    setOpen(false);
  };

  useEffect(() => {
    isTranscriptReceived && setOpen(true);
  }, [isTranscriptReceived]);

  // const test = () => {
  //   setOpen(true);
  // };
  //FIXME: remove button;
  return (
    <div>
      {/* <button onClick={test}>Open</button> */}
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
            <CloseBtn onCloseHandler={tryAgain} />
            <ResultBody />
            <div>
              <Buttons tryAgainHandler={tryAgain} />
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}