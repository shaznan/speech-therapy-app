import React, { Fragment } from "react";
import useWindowDimensions from "../../../useWindowDimension";
import classes from "../Navbar.module.css";

function DisplayUser_WelcomTxt({ avatar, nickName }) {
  const { screenWidth } = useWindowDimensions();

  return (
    <Fragment>
      <div className={classes.avatarcontainer}>
        <img src={avatar} className={classes.avatar} />
      </div>
      {screenWidth > 800 ? (
        <span className={classes.userdetail}>
          Welcome, <span className={classes.placeholder}>{nickName}</span>{" "}
        </span>
      ) : null}
    </Fragment>
  );
}

export default DisplayUser_WelcomTxt;
