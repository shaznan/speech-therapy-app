import React, { Fragment } from "react";
import classes from "../Navbar.module.css";

function DisplayUser_WelcomTxt({ avatar, nickName }) {
  return (
    <Fragment>
      <div className={classes.avatarcontainer}>
        <img src={avatar} className={classes.avatar} />
      </div>
      <span className={classes.userdetail}>
        Welcome, <span className={classes.placeholder}>{nickName}</span>{" "}
      </span>
    </Fragment>
  );
}

export default DisplayUser_WelcomTxt;
