import React from "react";
import { Fragment } from "react";
import FormLabel from "@material-ui/core/FormLabel";
import { useStyles } from "./SelectForm_Styles";

function MainCatergoryHeading() {
  const classes = useStyles();
  return (
    <Fragment>
      <FormLabel component="legend" className={classes.formlabel}>
        Select your preffered catergory
      </FormLabel>
    </Fragment>
  );
}

export default MainCatergoryHeading;
