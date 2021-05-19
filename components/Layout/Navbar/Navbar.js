import React, { useState } from "react";
import classes from "./Navbar.module.css";
import Grid from "@material-ui/core/Grid";
import NavbarLogo from "./NavbarComponents/NavbarLogo";
import NavbarItems from "./NavbarComponents/NavbarItems";
import NavMenuIcon from "./NavbarComponents/MenuIcon";

function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [menuItems, setMenuItems] = useState([
    "Home",
    "About us",
    "Articles",
    "Bookstore",
    "Contact us",
    // "perform test",
  ]);

  const formatItem = (item) => {
    let toLowerCase = item[0].toLowerCase() + item.slice(1);
    let removeSpacing = toLowerCase.replace(/\s+/g, "");
    return removeSpacing;
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className={classes.navbar}>
      <Grid container spacing={0}>
        <NavbarLogo />
        <NavbarItems
          menuItems={menuItems}
          isNavVisible={isNavVisible}
          formatItem={formatItem}
        />
        <NavMenuIcon
          onClickHandler={onClickHandler}
          isNavVisible={isNavVisible}
        />
      </Grid>
    </div>
  );
}

export default Navbar;
