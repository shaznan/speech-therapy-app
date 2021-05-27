import React from "react";
import { Fragment } from "react";
import DynamicButton from "../../Common_Layout/Button/Button";
import Grid from "@material-ui/core/Grid";
import { performtestStyles } from "./PerformTest_Styles";
import { useDispatch } from "react-redux";
import { testActions } from "../../../store/performTestSlice";

function StartNowBtn() {
  const dispatch = useDispatch();
  const classes = performtestStyles();

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(testActions.setShowStartBtn(false));
    dispatch(testActions.setShowInstructions(true));
  };

  return (
    <Fragment>
      <Grid item lg={12}>
        <div className={classes.startnowcontainer}>
          <DynamicButton
            onClickHandler={onClickHandler}
            type="primary"
            text="Start Now!"
          />
        </div>
      </Grid>
    </Fragment>
  );
}

export default StartNowBtn;
