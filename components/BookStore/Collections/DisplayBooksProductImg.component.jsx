import React, { Fragment } from "react";
import { useStyles } from "../bookstore_styles";
import Button from "../../Common_Layout/Button/Button";
import Link from "next/link";
import Router from "next/router";

function DisplayBooksProductImg({ product }) {
  const classes = useStyles();
  const goToProductPageHandler = (event, productHandle) => {
    event.preventDefault();
    Router.push(`/bookstore/${productHandle}`);
  };

  return (
    <Fragment>
      <div className={classes.book_imgcont}>
        <img className={classes.book_img} src={product.images[0].src} />
        <div className={classes.img_overlay}></div>
        <div className={classes.addtocart_btn}>
          <Button
            onClickHandler={(event) => {
              goToProductPageHandler(event, product.handle);
            }}
            type="primary"
            text={"View"}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default DisplayBooksProductImg;
