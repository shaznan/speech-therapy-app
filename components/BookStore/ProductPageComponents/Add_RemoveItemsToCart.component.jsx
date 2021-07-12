import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./Productpage_styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { useSelector, useDispatch } from "react-redux";
import { bookstoreSlice_Actions } from "../../../store/bookstoreSlice";

function Add_RemoveItemsToCart() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selectedProductQty = useSelector(
    (state) => state.bookstore.selectedProductQty,
  );

  const isCounterExceed = useSelector(
    (state) => state.bookstore.isCounterExceed,
  );

  const incrementHandler = () => {
    dispatch(bookstoreSlice_Actions.incrementSelectedProductQty());
  };

  const decrementHandler = () => {
    dispatch(bookstoreSlice_Actions.decrementSelectedProductQty());
  };

  return (
    <Fragment>
      <Grid item md={12}>
        <Grid container className={classes.additems_cont}>
          <Grid item md={12} className={classes.additems_cont}>
            <Button onClick={decrementHandler}>
              <RemoveCircleOutlineIcon />
            </Button>
            <span className={classes.counter}>{selectedProductQty}</span>
            <Button onClick={incrementHandler}>
              <AddCircleOutlineIcon />
            </Button>
            {isCounterExceed && (
              <span className={classes.error_message}>
                <ErrorOutlineIcon
                  style={{ marginRight: "0.5rem", color: "red" }}
                />
                Only 5 items allowed!
              </span>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Add_RemoveItemsToCart;
