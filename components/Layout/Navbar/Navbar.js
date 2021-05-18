import React, { Fragment, useState } from "react";
import classes from "./Navbar.module.css";
// import Link from "next/link";
import { useRouter } from "next/router";
import Grid from "@material-ui/core/Grid";
import MenuIcon from "@material-ui/icons/Menu";
import NavbarLogo from "./NavbarComponents/NavbarLogo";
import NavbarItems from "./NavbarComponents/NavbarItems";

function Navbar() {
  const router = useRouter();
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

  // FIXME:
  //fix the css issue
  //change names when sending props to make sure component is reusable

  return (
    <Fragment>
      <div className={classes.navbar}>
        {/* Material Ui Grid layout */}
        <Grid container spacing={0}>
          <NavbarLogo />
          <NavbarItems
            menuItems={menuItems}
            router={router}
            isNavVisible={isNavVisible}
            formatItem={formatItem}
          />
          <Grid onClick={onClickHandler} item lg={3} xs={12}>
            {/* <p className={classes.test}>hey</p> */}
            <MenuIcon
              fontSize="large"
              className={`${classes.menuIcon} ${
                isNavVisible ? classes.highlightmenuicon : ""
              }`}
            />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}

export default Navbar;
