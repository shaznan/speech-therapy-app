import React, { Fragment } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import classes from "../Navbar.module.css";
//send props

function NavMenuIcon({ onClickHandler, isNavVisible }) {
  return (
    <Fragment>
      <Grid onClick={onClickHandler} item lg={3} xs={12}>
        <MenuIcon
          fontSize="large"
          className={`${classes.menuIcon} ${
            isNavVisible ? classes.highlightmenuicon : ""
          }`}
        />
      </Grid>
    </Fragment>
  );
}

export default NavMenuIcon;
