import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./bookstore_styles";
import Button from "@material-ui/core/Button";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useDispatch } from "react-redux";
import { bookstoreSlice_Actions } from "../../store/bookstoreSlice";

const CartBtn = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(bookstoreSlice_Actions.toggleOpenCart());
  };

  return (
    <Fragment>
      <div className={classes.viewcart_container}>
        <Button
          onClick={onClickHandler}
          variant="outlined"
          className={classes.header_viewcartbtn}>
          <ShoppingBasketIcon className={classes.header_viewcartIcon} />
          View Cart
        </Button>
      </div>
    </Fragment>
  );
};

export default CartBtn;
