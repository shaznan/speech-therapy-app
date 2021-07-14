import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../bookstore_styles";
import Heading from "../../Common_Layout/Typography/Heading";
import Button from "@material-ui/core/Button";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// import CartBtn from "./CartBtn.component";

function MainHeading() {
  const classes = useStyles();
  return (
    <Fragment>
      {/* <CartBtn /> */}
      <Grid item md={12} className={classes.mainheading}>
        <Heading text="- The more you read, the more you grow -" />
      </Grid>
    </Fragment>
  );
}

export default MainHeading;
