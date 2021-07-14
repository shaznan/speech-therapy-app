import React, { Fragment, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./Productpage_styles";
import Button from "../../Common_Layout/Button/Button";
import CartBtn from "../CartBtn.component";
import { useDispatch, useSelector } from "react-redux";
import { fetchCheckout } from "../../../store/bookstoreSlice";
import useAddItemToCheckout from "./useAddItemToCheckout";
import { bookstoreSlice_Actions } from "../../../store/bookstoreSlice";

function AddToCart_ViewCart_Btn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const checkout = useSelector((state) => state.bookstore.checkout);
  const [isError, newCheckout, addSelectedItem] = useAddItemToCheckout();

  const addItemsHandler = (e) => {
    e.preventDefault();
    addSelectedItem();
    // dispatch(bookstoreSlice_Actions.toggleOpenCart());
  };

  useEffect(() => {
    if (newCheckout !== null) {
      dispatch(bookstoreSlice_Actions.setCheckOut(newCheckout));
    }
    dispatch(fetchCheckout(checkout.id));
  }, [newCheckout]);

  return (
    <Fragment>
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
