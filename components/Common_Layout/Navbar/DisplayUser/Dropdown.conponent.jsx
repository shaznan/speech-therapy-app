import React, { Fragment } from "react";
import CloseWindowBtn from "../../Button/CloseWindowBtn";
import classes from "../Navbar.module.css";
import Fade from "@material-ui/core/Fade";
import { useDispatch } from "react-redux";
import { login_signup_Actions } from "../../../../store/login_signupSlice";

function DisplayUserDropdown({
  avatar,
  nickName,
  showDropdown,
  toggleDropdown,
}) {
  const dispatch = useDispatch();
  return (
    <Fragment>
      {showDropdown && (
        <Fade in={showDropdown}>
          <div className={classes.dropdowncontainer}>
            <div className={classes.closebtn}>
              <CloseWindowBtn onClickHandler={toggleDropdown} />
            </div>
            <div className={classes.dropdownavatar_cont}>
              <img src={avatar} className={classes.dropdownavatar} />
            </div>
            <div className={classes.dropdownplaceholder}>{nickName}</div>
            <div
              className={classes.logouttext}
              onClick={() => dispatch(login_signup_Actions.logoutHandler())}
            >
              Logout
            </div>
          </div>
        </Fade>
      )}
    </Fragment>
  );
}

export default DisplayUserDropdown;
