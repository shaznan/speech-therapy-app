import React from "react";
import CloseWindowBtn from "../../../Common_Layout/Button/CloseWindowBtn";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    position: "relative",
  },
  btncont: {
    position: "absolute",
    right: "1rem",
    ["@media (max-width:960px)"]: {
      right: "3rem",
      //   right: "4rem",
    },
  },
});

function CloseBtn({ onClickHandler }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.btncont}>
        <CloseWindowBtn onClickHandler={onClickHandler} />
      </div>
    </div>
  );
}

export default CloseBtn;
