import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./Productpage_styles";
import Button from "../../Common_Layout/Button/Button";
import CartBtn from "../CartBtn.component";

function AddToCart_ViewCart_Btn() {
  const classes = useStyles();
  return (
    <Fragment>
      {/* <Grid item md={12} className={classes.buttons_cont}> */}
      <Grid container spacing={1} className={classes.buttons_cont}>
        <Grid item md={12} className={classes.addtocartBtn}>
          {/* Dynamically render onClick */}
          <Button type="cart" text="Add to Cart" />
        </Grid>
        <Grid item md={12} className={classes.viewcart_btn}>
          <CartBtn type="custom" />
        </Grid>
      </Grid>
      {/* </Grid> */}
    </Fragment>
  );
}

export default AddToCart_ViewCart_Btn;
