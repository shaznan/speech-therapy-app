import React from "react";
import { Fragment } from "react";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./SelectForm_Styles";
import { useSelector, useDispatch } from "react-redux";
import { testActions } from "../../../../store/performTestSlice";
import MainCatergoryHeading from "./MainCatergoryHeading.component";
import MainCatergoryCheckbox from "./MainCatergoryCheckbox.component";

// import toggleIsAlphabetChecked from "../../../../store/performTestSlice";

function MainCatergorty() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isAlphabetChecked = useSelector(
    (state) => state.performtest.isAlphabetChecked
  );
  const isRandomChecked = useSelector(
    (state) => state.performtest.isRandomChecked
  );

  const handleChange = (e) => {
    //When either of the checkbox is clicked, the other should turn false
    if (isAlphabetChecked) {
      dispatch(testActions.toggleCheckbox("alphabet"));
    }
    if (isRandomChecked) {
      dispatch(testActions.toggleCheckbox("random"));
    }
    dispatch(testActions.toggleCheckbox(e.target.name));
  };

  return (
    <Fragment>
      <Grid item lg={12}>
        <FormControl component="fieldset">
          <MainCatergoryHeading />
          <FormGroup className={classes.formgroup}>
            <MainCatergoryCheckbox
              isAlphabetChecked={isAlphabetChecked}
              isRandomChecked={isRandomChecked}
              handleChange={handleChange}
            />
          </FormGroup>
        </FormControl>
      </Grid>
    </Fragment>
  );
}

export default MainCatergorty;
