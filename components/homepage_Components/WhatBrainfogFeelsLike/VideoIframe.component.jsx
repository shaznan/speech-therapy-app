// function VideoIframe() {

//   return (
//     <div>

//     </div>
//   );
// }

// export default VideoIframe;

import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "white",
    border: "none",
  },
  iframe: {
    width: "80vw",
    height: "90vh",
    ["@media (max-width:800px)"]: {
      width: "80vw",
      height: "35vh",
    },
  },
});

export default function VideoIframe({ play, setPlayHandler }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const url = play
    ? `https://www.youtube.com/embed/cJZpvwUsQYY?controls=0?autoplay=1`
    : `https://www.youtube.com/embed/cJZpvwUsQYY?controls=0`;

  const handleClose = () => {
    setOpen(false);
    setPlayHandler(false);
  };

  useEffect(() => {
    play && setOpen(true);
  }, [play]);

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
            <iframe
              //   width="560"
              //   height="315"
              className={classes.iframe}
              src={url}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
