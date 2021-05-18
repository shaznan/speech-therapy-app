import React, { Fragment, useState } from "react";
import logoImage from "./images/logo.png";
import classes from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Grid from "@material-ui/core/Grid";
import MenuIcon from "@material-ui/icons/Menu";

function Navbar() {
  const router = useRouter();
  const [isNavVisible, setIsNavVisible] = useState(false);
  const menuItems = ["Home", "About us", "Articles", "Bookstore", "Contact us"];

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
  //find way to add two class names in jsx

  return (
    <Fragment>
      <div className={classes.navbar}>
        <Grid container spacing={0}>
          {" "}
          {/* Material Ui Grid layout */}
          <Grid item lg={3} xs={12}>
            <Link href="/">
              <img className={classes.navlogo} src={logoImage} />
            </Link>
          </Grid>
          <Grid item lg={6} xs={12}>
            <ul
              className={`${classes.navitems} ${
                isNavVisible ? classes.shownavitems : classes.hidenavitems
              }`}
            >
              <Grid container className="classes.container" spacing={0}>
                {/* create navbar items */}
                {menuItems.map((item, i) => (
                  <Grid key={i} item lg={2} xs={12}>
                    <li
                      className={
                        router.pathname === "/" && item === "Home" //if empty pathname, highlight home navitem
                          ? classes.active
                          : router.pathname === "/" + formatItem(item) //convert in order to match exact route names
                          ? classes.active
                          : ""
                      }
                    >
                      <Link
                        href={item == "Home" ? "/" : "/" + formatItem(item)}
                      >
                        {item}
                      </Link>
                    </li>
                  </Grid>
                ))}
              </Grid>
            </ul>
          </Grid>
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
