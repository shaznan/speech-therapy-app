import React, { Fragment } from "react";
import CloseWindowBtn from "../../Button/CloseWindowBtn";
import classes from "../Navbar.module.css";
import Fade from "@material-ui/core/Fade";
import { useDispatch } from "react-redux";
import { userSlice_Actions } from "../../../../store/userSlice";
import { bookstoreSlice_Actions } from "../../../../store/bookstoreSlice";

function DisplayUserDropdown({
  avatar,
  nickName,
  showDropdown,
  toggleDropdown,
}) {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(userSlice_Actions.logoutHandler());
    dispatch(bookstoreSlice_Actions.resetState());
    localStorage.removeItem("state");
  };

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
            <div className={classes.logouttext} onClick={logoutHandler}>
              Logout
            </div>
          </div>
        </Fade>
      )}
    </Fragment>
  );
}

export default DisplayUserDropdown;
