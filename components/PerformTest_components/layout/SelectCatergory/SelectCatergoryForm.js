import React from "react";
import { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "../../../Common_Layout/Card/Card";
import MainCatergory from "./MainCatergorty.component";
import { useStyles } from "./SelectForm_Styles";
import SubCatergory from "./SubCatergory.component";
import Button from "../../../Common_Layout/Button/Button";

function SelectCatergoryForm() {
  const classes = useStyles();
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
