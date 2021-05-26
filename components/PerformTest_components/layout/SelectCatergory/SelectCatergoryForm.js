import React from "react";
import { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "../../../Common_Layout/Card/Card";
import MainCatergory from "./MainCatergorty.component";
import { useStyles } from "./SelectForm_Styles";
import SubCatergory from "./SubCatergory.component";
import PrevAndNextBtns from "./PrevAndNextBtns.component";
import CloseWindowBtn from "../../../Common_Layout/Button/CloseWindowBtn";
import { useDispatch } from "react-redux";
import { testActions } from "../../../../store/performTestSlice";

//FIXME:
//if one of checkbox is clicked, set false other check box - done
//show subcatergory only for alphabet - done
//show random catergory only for random topics - done
//find way to generate alphabet from A-z using Js - done
//generate a-z letters - done
//create close button
//create back button

function SelectCatergoryForm() {
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(testActions.setShowCatergoryForm(false));
    dispatch(testActions.setShowStartBtn(true));
  };

  const classes = useStyles();
  return (
    <Fragment>
      <Grid item lg={12} className={classes.container} style={{}}>
        <Grid container spacing={0} className={classes.cardcontainer}>
          <Card>
            <CloseWindowBtn onClickHandler={onClickHandler} />
            <MainCatergory />
            <SubCatergory />
            <PrevAndNextBtns />
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default SelectCatergoryForm;
