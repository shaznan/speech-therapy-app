import React, { Fragment } from "react";
import { useStyles } from "../bookstore_styles";
import Grid from "@material-ui/core/Grid";
import Heading from "../../Common_Layout/Typography/Heading";
import Button from "@material-ui/core/Button";
import PaymentIcon from "@material-ui/icons/Payment";
import CloseWindowBtn from "../../Common_Layout/Button/CloseWindowBtn";
import { useDispatch } from "react-redux";
import { bookstoreSlice_Actions } from "../../../store/bookstoreSlice";
import Cart_Items from "./Cart_Items.component";

function Cart() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const onCloseHandler = () => {
    dispatch(bookstoreSlice_Actions.toggleOpenCart());
  };

  return (
    <Fragment>
      <Grid container className={classes.cart_cont}>
        <Grid item className={classes.cart_closeWindowBtn}>
          <CloseWindowBtn onClickHandler={onCloseHandler} />
        </Grid>
        <Grid item md={12} className={classes.cart_heading}>
          <Heading text="Shopping Cart" fontsize="3.5rem" />
        </Grid>
        <Cart_Items />
        <Grid item md={12} className={classes.checkout_btn_cont}>
          <Button className={classes.checkout_btn}>
            <PaymentIcon style={{ marginRight: "0.5rem" }} /> Checkout
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Cart;
