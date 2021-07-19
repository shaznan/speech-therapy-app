import CircularProgress from "@material-ui/core/CircularProgress";
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useSelector } from "react-redux";
import { Player } from "@lottiefiles/react-lottie-player";

const useStyles = makeStyles(
  {
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    background: {
      backgroundColor: "white",
      border: "none !important",
      outline: "none !important",
      padding: "2rem 4rem",
      borderRadius: "1rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
  },
  { index: 1 },
);

export default function LoadSpinner({ loading }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    loading === "loading" && setOpen(true);
    loading === "success" && setOpen(false);
  }, [loading]);

  return (
    <div style={{ outline: "none" }}>
      <Modal
        className={classes.modal}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}>
        <Fade in={open}>
          <div className={classes.background}>
            <h2>Loading..</h2>
            <div>
              <Player
                autoplay={true}
                loop={true}
                controls={false}
                src="https://assets8.lottiefiles.com/private_files/lf30_x8dH5W.json"
                style={{ height: "150px", width: "150x" }}></Player>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
