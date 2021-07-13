import React, { Fragment } from "react";
import { useStyles } from "../bookstore_styles";
import Grid from "@material-ui/core/Grid";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Button from "@material-ui/core/Button";
import useRemoveItem from "./useRemoveItem";
import { useDispatch } from "react-redux";
import { bookstoreSlice_Actions } from "../../../store/bookstoreSlice";

function LineItem({ itemId, img, title, price, qty }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isError, removeItemCheckout, removeItemFromCart] = useRemoveItem();

  const removeItemHandler = (e) => {
    e.preventDefault();
    removeItemFromCart(itemId);
    removeItemCheckout &&
      dispatch(bookstoreSlice_Actions.setCheckOut(removeItemCheckout));
  };

  return (
    <Fragment>
      <Grid container className={classes.cartItem_main_cont}>
        <Grid item md={12}>
          <Grid container spacing={0} className={classes.cartItem_cont}>
            <Grid item md={2} className={classes.closeBtn_cont}>
              <Button onClick={removeItemHandler}>
                <HighlightOffIcon className={classes.cartitem_closeBtn} />
              </Button>
            </Grid>
            <Grid item md={1} className={classes.itemQty}>
              <strong>{`x${qty}`}</strong>
            </Grid>
            <Grid item md={2} className={classes.cartitem_img_cont}>
              <img src={img} className={classes.cartitem_img} />
            </Grid>
            <Grid item md={5} className={classes.cartitem_title_cont}>
              <span className={classes.cartitem_title}>{`${title.slice(
                0,
                30,
              )}...`}</span>
            </Grid>
            <Grid item md={2} className={classes.cartitem_price}>
              <strong>{`LKR ${price}`}</strong>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default LineItem;