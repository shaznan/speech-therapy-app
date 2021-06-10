// import React, { useEffect } from "react";
// import Modal from "@material-ui/core/Modal";
// import Backdrop from "@material-ui/core/Backdrop";
// import Fade from "@material-ui/core/Fade";
// import MicrophoneAnimation from "./MicrophoneAnimation.component";
// import Message from "./Message.component";
// import DynamicButton from "../../../Common_Layout/Button/Button";
// import { useSelector, useDispatch } from "react-redux";
// import { restartTest } from "../../../../store/actions/performTest/performtestNavigation/navigation-actions";
// import { useStyles } from "./transcriptErrorStyles";

// export default function TranscriptErrorModal() {
//   const dispatch = useDispatch();
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);
//   const isTranscriptError = useSelector(
//     (state) => state.performtest.isTranscriptError
//   );

//   const handleClose = () => {
//     setOpen(false);
//     dispatch(restartTest());
//   };

//   const onClickHandler = () => {
//     dispatch(restartTest());
//     setOpen(false);
//   };

//   useEffect(() => {
//     isTranscriptError && setOpen(true);
//   }, [isTranscriptError]);

//   return (
//     <div>
//       <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         className={classes.modal}
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         BackdropComponent={Backdrop}
//         BackdropProps={{
//           timeout: 500,
//         }}
//       >
//         <Fade in={open}>
//           <div className={classes.paper}>
//             <Message />
//             <MicrophoneAnimation />
//             <DynamicButton text="Try Again" onClickHandler={onClickHandler} />
//           </div>
//         </Fade>
//       </Modal>
//     </div>
//   );
// }
