import React, { useEffect } from "react";
import { Fragment } from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./SelectForm_Styles";
import { useSelector, useDispatch } from "react-redux";
import { testActions } from "../../../../store/performTestSlice";
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
          <FormLabel component="legend" className={classes.formlabel}>
            Select your preffered catergory
          </FormLabel>

          <FormGroup className={classes.formgroup}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isAlphabetChecked}
                  onChange={handleChange}
                  name="alphabet"
                  color="default"
                />
              }
              label="Alphabet letters"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isRandomChecked}
                  onChange={handleChange}
                  name="random"
                  color="default"
                />
              }
              label="Random Topics"
            />
          </FormGroup>
        </FormControl>
      </Grid>
    </Fragment>
  );
}

export default MainCatergorty;
