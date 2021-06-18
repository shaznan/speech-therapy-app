import React, { Fragment } from "react";
import CloseWindowBtn from "../Button/CloseWindowBtn";
import classes from "./Navbar.module.css";

function DisplayUserDropdown({
  avatar,
  nickName,
  showDropdown,
  toggleDropdown,
}) {
  return (
    <Fragment>
      {showDropdown && (
        <div className={classes.dropdowncontainer}>
          <div className={classes.closebtn}>
            <CloseWindowBtn onClickHandler={toggleDropdown} />
          </div>
          <div className={classes.dropdownavatar_cont}>
            <img src={avatar} className={classes.dropdownavatar} />
          </div>
          <div className={classes.dropdownplaceholder}>{nickName}</div>
          <div className={classes.logouttext}>Logout</div>
        </div>
      )}
    </Fragment>
  );
}

export default DisplayUserDropdown;
