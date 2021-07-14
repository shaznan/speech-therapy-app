import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./Productpage_styles";
import { useSelector } from "react-redux";

function ItemPrice({ props }) {
  const classes = useStyles();
  const selectedProductQty = useSelector(
    (state) => state.bookstore.selectedProductQty,
  );
  const price = props.variants[0].price;

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Fragment>
      <Grid item md={12} className={classes.price}>
        Price Per Item: <strong>{`LKR ${numberWithCommas(price)}`}</strong>
      </Grid>
      <Grid item md={12} className={classes.price}>
        Total Price:{" "}
        <strong>{`LKR ${numberWithCommas(price * selectedProductQty)}`}</strong>
      </Grid>
    </Fragment>
  );
}

export default ItemPrice;
