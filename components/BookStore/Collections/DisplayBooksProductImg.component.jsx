import React, { Fragment } from "react";
import { useStyles } from "../bookstore_styles";
import Button from "../../Common_Layout/Button/Button";

function DisplayBooksProductImg({ product }) {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.book_imgcont}>
        <img className={classes.book_img} src={product.images[0].src} />
        <div className={classes.img_overlay}></div>
        <div className={classes.addtocart_btn}>
          <Button type="cart" text={"Add to cart"} />
        </div>
      </div>
    </Fragment>
  );
}

export default DisplayBooksProductImg;
