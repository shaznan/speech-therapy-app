import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../bookstore_styles";
import Button from "@material-ui/core/Button";
import PaymentIcon from "@material-ui/icons/Payment";
import Link from "next/link";
import { useSelector } from "react-redux";

function Checkout_Button() {
  const classes = useStyles();
  const checkout = useSelector((state) => state.bookstore.checkout);
  //   const checkoutHandler = ()=>{
  //     <Link> </Link>
  //   }

  return (
    <Fragment>
      <Grid item md={12} className={classes.checkout_btn_cont}>
        <Button className={classes.checkout_btn}>
          <PaymentIcon style={{ marginRight: "0.5rem" }} />
          <Link href={checkout.webUrl}>Checkout</Link>
        </Button>
      </Grid>
    </Fragment>
  );
}

export default Checkout_Button;
