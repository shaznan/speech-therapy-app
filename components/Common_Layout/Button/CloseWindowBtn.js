import React from "react";
import { Fragment } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";
// import { useStyles } from "../../PerformTest_components/layout/SelectCatergory/SelectForm_Styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  {
    closebtn: {
      position: "absolute",
      right: -50,
      top: 0,
      color: "gray",
    },
    closebtncontainer: {
      position: "relative",
    },
  },
  { index: 1 },
);

function CloseWindowBtn({ onClickHandler }) {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.closebtncontainer}>
        <IconButton onClick={onClickHandler} className={classes.closebtn}>
          <CloseIcon />
        </IconButton>
      </div>
    </Fragment>
  );
}

export default CloseWindowBtn;
