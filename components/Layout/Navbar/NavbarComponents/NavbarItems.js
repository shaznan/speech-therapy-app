import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import classes from "../Navbar.module.css";
import Link from "next/link";

function NavbarItems({ menuItems, router, isNavVisible, formatItem }) {
  return (
    <Fragment>
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
                  <Link href={item == "Home" ? "/" : "/" + formatItem(item)}>
                    {item}
                  </Link>
                </li>
              </Grid>
            ))}
          </Grid>
        </ul>
      </Grid>
    </Fragment>
  );
}

export default NavbarItems;
