import React from "react";
import { Fragment } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

function MainCatergoryCheckbox({
  isAlphabetChecked,
  isRandomChecked,
  handleChange,
}) {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default MainCatergoryCheckbox;
