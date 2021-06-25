import React, { Fragment } from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { dashBoardSlice_Actions } from "../../../store/dashBoardSlice";

function DashboardBtn({ styles, tryAgainHandler = () => {} }) {
  const useStyles = makeStyles({
    dashboardbtn: {
      backgroundColor: "rgb(20,146,230)",
      borderRadius: "0px 7px 7px 0px",
      "&:hover": {
        backgroundColor: "rgb(7,130,212)",
      },
    },
    btn: {
      transition: "0.3s ease-in-out",
      marginTop: "1rem",
      padding: "0.3rem 1.1rem",
      fontWeight: "bold",
      color: "white",
      textTransform: "capitalize",
      ["@media (max-width:1280px)"]: {
        fontSize: "1.5rem",
      },
    },
  });

  const classes = useStyles();
  const dispatch = useDispatch();

  const dashboardHandler = () => {
    dispatch(dashBoardSlice_Actions.setShowDashboard());
  };

  const onClickHandler = () => {
    dashboardHandler();
    tryAgainHandler();
  };

  return (
    <Fragment>
      <Button
        className={`${classes.dashboardbtn} ${classes.btn}`}
        style={styles}
        onClick={onClickHandler}
      >
        <DashboardIcon style={{ marginRight: "0.2rem" }} /> Dashboard
      </Button>
    </Fragment>
  );
}

export default DashboardBtn;
