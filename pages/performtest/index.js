import React, { Fragment, useEffect } from "react";
import Navbar from "../../components/Common_Layout/Navbar/Navbar";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../../styles/global.styles";
import { performtestStyles } from "../../components/PerformTest_components/layout/PerformTest_Styles";
import Title from "../../components/PerformTest_components/layout/Title/Title.component";
import DisplayCurrentProgress from "../../components/PerformTest_components/layout/DisplayCurrentProgress/DisplayCurrentProgress";
import StartNowBtn from "../../components/PerformTest_components/layout/StartNowBtn";
import { useSelector, useDispatch } from "react-redux";
import DisplayInstructions from "../../components/PerformTest_components/layout/DisplayInstructions/DisplayInstructions";
import { testActions } from "../../store/performTestSlice";
import SelectCatergoryForm from "../../components/PerformTest_components/layout/SelectCatergory/SelectCatergoryForm";

function index() {
  const dispatch = useDispatch();
  const showStartBtn = useSelector((state) => state.performtest.showStartBtn);
  const classes = performtestStyles();
  const showInstructions = useSelector(
    (state) => state.performtest.showInstructions
  );

  const showCatergoryForm = useSelector(
    (state) => state.performtest.showCatergoryForm
  );

  useEffect(() => {
    !showStartBtn && dispatch(testActions.setShowInstructions(true));
  }, [showStartBtn]);

  useStyles(); //include global styles
  return (
    <Fragment>
      <div className={classes.performtestbgimage}>
        <Navbar />
        <Grid container spacing={0}>
          <Title />
          <DisplayCurrentProgress />
          {showStartBtn && <StartNowBtn />}
          {showInstructions && <DisplayInstructions />}
          {showCatergoryForm && <SelectCatergoryForm />}
        </Grid>
      </div>
    </Fragment>
  );
}

export default index;
