import React from "react";
import { Fragment } from "react";
import { useStyles } from "./SelectForm_Styles";
import DynamicButton from "../../../Common_Layout/Button/Button";
import { useDispatch } from "react-redux";
import { testActions } from "../../../../store/performTestSlice";
import { useSelector } from "react-redux";

function PrevAndNextBtns() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isOptionSelected = useSelector(
    (state) => state.performtest.isOptionSelected
  );
  const backBtnHandler = () => {
    dispatch(testActions.setShowInstructions(true));
    dispatch(testActions.setShowCatergoryForm(false));
  };

  const startBtnHandler = () => {
    dispatch(testActions.setShowCatergoryForm(false));
    dispatch(testActions.setShowCountdown(true));
    dispatch(testActions.setShowRemainingTime(false));
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
            onClickHandler={startBtnHandler}
            type="next"
            text="Start"
            disabled={isOptionSelected ? false : true}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default PrevAndNextBtns;
