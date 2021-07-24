import React from "react";
import { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "../../../Common_Layout/Card/Card";
import MainCatergory from "./MainCatergorty.component";
import { useStyles } from "./SelectForm_Styles";
import SubCatergory from "./SubCatergory.component";
import PrevAndNextBtns from "./PrevAndNextBtns.component";
import { useDispatch } from "react-redux";
import { testActions } from "../../../../store/performTestSlice";
import CloseBtn from "./CloseBtn.component";
import Fade from "react-reveal/Fade";
import WithShowCatergory from "../Wrapper/WithShowCatergory";

function SelectCatergoryForm() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const onClickHandler = () => {
    dispatch(testActions.setShowCatergoryForm(false));
    dispatch(testActions.setShowStartBtn(true));
  };

  return (
    <WithShowCatergory>
      <Grid item lg={12} className={classes.container} style={{}}>
        <Fade duration={500} left>
          <Grid container spacing={0} className={classes.cardcontainer}>
            <Card>
              <CloseBtn onClickHandler={onClickHandler} />
              <MainCatergory />
              <SubCatergory />
              <PrevAndNextBtns />
            </Card>
          </Grid>
        </Fade>
      </Grid>
    </WithShowCatergory>
  );
}

export default SelectCatergoryForm;
