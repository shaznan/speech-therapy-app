import React, { Fragment, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./Productpage_styles";
import Button from "../../Common_Layout/Button/Button";
import CartBtn from "../CartBtn.component";
import { useDispatch, useSelector } from "react-redux";
import { fetchCheckout } from "../../../store/bookstoreSlice";
import useAddItemToCheckout from "./useAddItemToCheckout";
import { bookstoreSlice_Actions } from "../../../store/bookstoreSlice";
import ErrorModal from "../../Common_Layout/Modal/ErrorModal";

function AddToCart_ViewCart_Btn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const checkout = useSelector((state) => state.bookstore.checkout);
  const [isError, newCheckoutState, addSelectedItem] = useAddItemToCheckout();

  const addItemsHandler = (e) => {
    e.preventDefault();
    addSelectedItem();
    // dispatch(bookstoreSlice_Actions.toggleOpenCart());
  };

  useEffect(() => {
    if (newCheckoutState !== null) {
      dispatch(bookstoreSlice_Actions.setCheckOut(newCheckoutState));
    }
    dispatch(fetchCheckout(checkout.id));
  }, [newCheckoutState]);

  return (
    <Fragment>
      <ErrorModal isError={isError} errorMsg="Couldn't add item to cart" />
      <Grid container spacing={1} className={classes.buttons_cont}>
        <Grid item md={12} className={classes.addtocartBtn}>
          <Button
            type="cart"
            text="Add to Cart"
            onClickHandler={addItemsHandler}
          />
        </Grid>
        <Grid item md={12} className={classes.viewcart_btn}>
          <CartBtn type="custom" />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default AddToCart_ViewCart_Btn;
