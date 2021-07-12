import React from "react";
import Button from "../../Common_Layout/Button/Button";
import { useStyles } from "./Productpage_styles";
import Router from "next/router";

function BackBtn() {
  const classes = useStyles();
  const backHandler = (e) => {
    e.preventDefault();
    Router.push("/bookstore");
  };

  return (
    <div>
      <div className={classes.back_btn}>
        <Button type="back" text="back" onClickHandler={backHandler} />
      </div>
    </div>
  );
}

export default BackBtn;
