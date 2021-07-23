import React, { Fragment } from "react";
import { useStyles } from "../bookstore_styles";
import Grid from "@material-ui/core/Grid";
import Heading from "../../Common_Layout/Typography/Heading";
import CloseWindowBtn from "../../Common_Layout/Button/CloseWindowBtn";
import { useDispatch } from "react-redux";
import { bookstoreSlice_Actions } from "../../../store/bookstoreSlice";
import Cart_Items from "./Cart_Items.component";
import Checkout_Button from "./Checkout_Button.component";
import Slide from "react-reveal/Slide";

function Cart() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const onCloseHandler = () => {
    dispatch(bookstoreSlice_Actions.toggleOpenCart());
  };

  return (
    <Fragment>
      <Slide duration={700} right>
        <Grid container className={classes.cart_cont}>
          <Grid item className={classes.cart_closeWindowBtn}>
            <CloseWindowBtn onClickHandler={onCloseHandler} />
          </Grid>
          <Grid item md={12} className={classes.cart_heading}>
            <Heading text="Shopping Cart" fontsize="3.5rem" />
          </Grid>
          <Cart_Items />
          <Checkout_Button />
        </Grid>
      </Slide>
    </Fragment>
  );
}

export default Cart;
