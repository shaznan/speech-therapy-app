import React from "react";
import { Fragment } from "react";
import Button from "@material-ui/core/Button";
import { useStyles } from "./displayResult_styles";
import CloseWindowBtn from "../../../Common_Layout/Button/CloseWindowBtn";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import DashboardBtn from "../DashboardBtn";
import { useSelector } from "react-redux";

function Buttons({ tryAgainHandler }) {
  const classes = useStyles();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <Fragment>
      <Button
        onClick={tryAgainHandler}
        className={`${classes.tryagainbtn} ${classes.btn}`}
        style={{ borderRadius: isLoggedIn ? "7px 0px 0px 7px" : "7px" }}
      >
        <RotateLeftIcon style={{ marginRight: "0.2rem" }} /> Try Again
      </Button>
      {isLoggedIn && <DashboardBtn tryAgainHandler={tryAgainHandler} />}
    </Fragment>
  );
}

export default Buttons;

export const CloseBtn = ({ onCloseHandler }) => {
  const classes = useStyles();
  return (
    <div className={classes.closebtn}>
      <CloseWindowBtn onClickHandler={onCloseHandler} />
    </div>
  );
};
