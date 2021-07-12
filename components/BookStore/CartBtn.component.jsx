import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./bookstore_styles";
import Button from "@material-ui/core/Button";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useDispatch, useSelector } from "react-redux";
import { bookstoreSlice_Actions } from "../../store/bookstoreSlice";
import Badge from "@material-ui/core/Badge";

const CartBtn = ({ type = "default", style }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(bookstoreSlice_Actions.toggleOpenCart());
  };
  const checkout = useSelector((state) => state.bookstore.checkout);

  const badgeCounter = () => {
    if (!checkout.lineItems) return;
    return checkout.lineItems.length;
  };

  return (
    <Fragment>
      <div
        className={
          type === "default" ? classes.viewcart_container : classes.customstyle
        }>
        <Button
          onClick={onClickHandler}
          variant="outlined"
          className={classes.header_viewcartbtn}>
          {/* <Badge badgeContent={badgeCount} color="secondary"> */}
          <Badge badgeContent={badgeCounter()} color="secondary">
            <ShoppingBasketIcon className={classes.header_viewcartIcon} />
          </Badge>
          <span style={{ marginLeft: "0.5rem" }}>View Cart</span>
        </Button>
      </div>
    </Fragment>
  );
};

export default CartBtn;
