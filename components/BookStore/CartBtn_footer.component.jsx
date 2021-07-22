import React from "react";
import { Fragment } from "react";
import { useStyles } from "./bookstore_styles";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { bookstoreSlice_Actions } from "../../store/bookstoreSlice";
import Badge from "@material-ui/core/Badge";

function CartBtn_footer() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const checkout = useSelector((state) => state.bookstore.checkout);

  const badgeCounter = () => {
    if (!checkout.lineItems) return;
    return checkout.lineItems.length;
  };

  const isCartOpen = useSelector((state) => state.bookstore.isCartOpen);
  return (
    <Fragment>
      {!isCartOpen && (
        <div className={classes.viewCartfooter_container}>
          <Button
            onClick={() => dispatch(bookstoreSlice_Actions.toggleOpenCart())}>
            <Badge badgeContent={badgeCounter()} color="secondary">
              <ShoppingBasketIcon />
            </Badge>
            <span className={classes.viewCartfooter_txt}>View Cart</span>
          </Button>
        </div>
      )}
    </Fragment>
  );
}

export default CartBtn_footer;
