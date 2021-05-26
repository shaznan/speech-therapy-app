import React from "react";
import { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "../../../Common_Layout/Card/Card";
import MainCatergory from "./MainCatergorty.component";
import { useStyles } from "./SelectForm_Styles";
import SubCatergory from "./SubCatergory.component";
import Button from "../../../Common_Layout/Button/Button";
import { useSelector } from "react-redux";

//FIXME:
//if one of checkbox is clicked, set false other check box - done
//show subcatergory only for alphabet - done
//show random catergory only for random topics
//create close button
//create back button
//find way to generate alphabet from A-z using Js

function SelectCatergoryForm() {
  const classes = useStyles();
  const isAlphabetChecked = useSelector(
    (state) => state.performtest.isAlphabetChecked
  );
  const isRandomChecked = useSelector(
    (state) => state.performtest.isRandomChecked
  );
  return (
    <Fragment>
      <Grid item lg={12} className={classes.container} style={{}}>
        <Grid container spacing={0} className={classes.cardcontainer}>
          <Card>
            <MainCatergory />
            <SubCatergory />
            <div className={classes.button}>
              <Button type="primarywitharrow" text="Start" />
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default SelectCatergoryForm;
