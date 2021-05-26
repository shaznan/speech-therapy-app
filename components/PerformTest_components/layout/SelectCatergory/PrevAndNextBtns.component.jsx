import React from "react";
import { Fragment } from "react";
import { useStyles } from "./SelectForm_Styles";
import DynamicButton from "../../../Common_Layout/Button/Button";
import { useDispatch } from "react-redux";
import { testActions } from "../../../../store/performTestSlice";

function PrevAndNextBtns() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const backBtnHandler = () => {
    dispatch(testActions.setShowInstructions(true));
    dispatch(testActions.setShowCatergoryForm(false));
  };

  return (
    <Fragment>
      <div className={classes.buttoncontainer}>
        <div className={classes.button}>
          <DynamicButton
            onClickHandler={backBtnHandler}
            type="back"
            text="Back"
          />
          <DynamicButton
            // onClickHandler={startBtnHandler}
            type="next"
            text="Start"
          />
        </div>
      </div>
    </Fragment>
  );
}
import { formatMs } from "@material-ui/core";

export default PrevAndNextBtns;

{
  /* <Fragment>
      <div className={classes.buttoncontainer}>
        <div className={classes.backbutton}>
          <DynamicButton type="back" text="Back" />
        </div>
        <div className={classes.startbutton}>
          <DynamicButton type="next" text="Start" />
        </div>
      </div>
    </Fragment> */
}
