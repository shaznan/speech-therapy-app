import React, { Fragment } from "react";
import { useStyles } from "../bookstore_styles";
import Grid from "@material-ui/core/Grid";
import Paragraph from "../../Common_Layout/Typography/Paragraph";
import { useSelector, useDispatch } from "react-redux";

function Cart_Items() {
  const classes = useStyles();
  const checkout = useSelector((state) => state.bookstore.checkout);

  return (
    <Fragment>
      <Grid item md={12} className={classes.cart_items}>
        <Grid container className={classes.cart_items_cont}>
          {!checkout.lineItems && (
            <div className={classes.emptymessage_cont}>
              <Paragraph text="Your Cart is empty!" />
            </div>
          )}
          {checkout.lineItems &&
            checkout.lineItems.map((item) => (
              <div>
                <image src={item.variant.image.src} />
                <span>{item.title}</span>
                <span> {item.variant.price}</span>
              </div>
            ))}
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Cart_Items;
