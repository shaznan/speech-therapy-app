import React from "react";
import classes from "./Navbar.module.css";
import Grid from "@material-ui/core/Grid";
import NavbarLogo from "./NavbarComponents/NavbarLogo";
import NavbarItems from "./NavbarComponents/NavbarItems";
import NavMenuIcon from "./NavbarComponents/MenuIcon";
import { useSelector, useDispatch } from "react-redux";
import { navActions } from "../../../store/navSlice";
import LoginRegisterbtn from "./NavbarComponents/Login_RegisterBtn";
import DisplayUser from "./DisplayUser.component";

function Navbar() {
  const dispatch = useDispatch();
  const isNavVisible = useSelector((state) => {
    return state.navigation.isNavVisible;
  });

  const menuItems = useSelector((state) => {
    return state.navigation.menuItems;
  });

  const isLoggedIn = useSelector((state) => state.login_signup.isLoggedIn);

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(navActions.setIsNavVisible());
  };

  return (
    <div className={classes.navbar}>
      <Grid container spacing={0}>
        <NavbarLogo />
        <NavbarItems menuItems={menuItems} isNavVisible={isNavVisible} />
        <NavMenuIcon
          onClickHandler={onClickHandler}
          isNavVisible={isNavVisible}
        />
        {!isLoggedIn && <LoginRegisterbtn />}
        <DisplayUser />
      </Grid>
    </div>
  );
}

export default Navbar;
