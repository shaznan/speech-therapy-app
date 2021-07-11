import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./Productpage_styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

function Add_RemoveItemsToCart() {
  const classes = useStyles();
  const [isErrorMessage, setIsErrorMessage] = useState(false);
  const [itemCounter, setItemCounter] = useState(1);
  const addHandler = () => {
    if (itemCounter > 4) {
      setIsErrorMessage(true);
    } else {
      setIsErrorMessage(false);
      setItemCounter((prev) => prev + 1);
    }
  };

  const RemoveHandler = () => {
    if (itemCounter < 1) return;
    setItemCounter((prev) => prev - 1);
    setIsErrorMessage(false);
  };

  return (
    <Fragment>
      <Grid item md={12}>
        <Grid container className={classes.additems_cont}>
          <Grid item md={12} className={classes.additems_cont}>
            <Button onClick={RemoveHandler}>
              <RemoveCircleOutlineIcon />
            </Button>
            <span className={classes.counter}>{itemCounter}</span>
            <Button onClick={addHandler}>
              <AddCircleOutlineIcon />
            </Button>
            {isErrorMessage && (
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
