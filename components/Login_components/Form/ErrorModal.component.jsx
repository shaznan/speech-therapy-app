import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useStyles } from "../loginStyles";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { useDispatch, useSelector } from "react-redux";
import { login_signup_Actions } from "../../../store/login_signupSlice";

const ErrorModal = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const emailErrorMsg = useSelector(
    (state) => state.login_signup.emailErrorMsg
  );
  const isEmailError = useSelector((state) => state.login_signup.isEmailError);

  useEffect(() => {
    isEmailError && setOpen(true);
  }, [isEmailError]);

  const handleClose = () => {
    setOpen(false);
  };

  const navToSignInHandler = () => {
    dispatch(login_signup_Actions.toggleBtnActiveStatus());
    dispatch(login_signup_Actions.setIsEmailError(false));
    setOpen(false);
  };

  return (
    <div>
      <Modal
        className={classes.errormodal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.errormodalpaper}>
            <h2 id="transition-modal-title">
              <ErrorOutlineIcon className={classes.erroricon} />
              Error:
              {emailErrorMsg === "EMAIL_EXISTS" && "Email already exists!"}
            </h2>
            <p id="transition-modal-description">
              If you are already an existing user, please{" "}
              <span
                onClick={navToSignInHandler}
                className={classes.navtosignin}
              >
                Sign In
              </span>{" "}
              instead, or else try again
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default ErrorModal;
//TODO: when trying to signup again after modal, doesn't work
