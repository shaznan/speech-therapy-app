import React from "react";
import { Fragment } from "react";
import Button from "@material-ui/core/Button";
import { useStyles } from "./displayResult_styles";
import CloseWindowBtn from "../../../Common_Layout/Button/CloseWindowBtn";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import DashboardIcon from "@material-ui/icons/Dashboard";

function Buttons() {
  const classes = useStyles();
  return (
    <Fragment>
      <Button className={`${classes.tryagainbtn} ${classes.btn}`}>
        <RotateLeftIcon style={{ marginRight: "0.2rem" }} /> Try Again
      </Button>
      <Button className={`${classes.dashboardbtn} ${classes.btn}`}>
        <DashboardIcon style={{ marginRight: "0.2rem" }} /> Dashboard
      </Button>
    </Fragment>
  );
}

export default Buttons;

export const CloseBtn = () => {
  const classes = useStyles();
  return (
    <div className={classes.closebtn}>
      <CloseWindowBtn />
    </div>
  );
};
