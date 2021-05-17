import React, { Fragment } from "react";
import logoImage from "./images/logo.png";
import classes from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Grid from "@material-ui/core/Grid";

function Navbar() {
  const router = useRouter();
  const menuItems = [
    "Home",
    "About-us",
    "Articles",
    "Book-store",
    "Contact-us",
  ];

  const toLowerCase = (item) => {
    return item[0].toLowerCase() + item.slice(1);
  };

  //   const styles = (theme) => ({
  //     root: {
  //       padding: theme.spacing.unit,
  //       [`${theme.breakpoints.up("md")} and (orientation: portrait)`]: {
  //         flexDirection: "row",
  //       },
  //     },
  //   });

  return (
    <Fragment>
      <div className={classes.navbar}>
        <Grid container spacing={0}>
          {" "}
          {/* Material Ui Grid layout */}
          <Grid item xl={3} xs={12}>
            <img className={classes.navlogo} src={logoImage} />
          </Grid>
          <Grid item xl={9} xs={12}>
            <ul className={classes.navitems}>
              <Grid container spacing={0}>
                {/* create navbar items */}
                {menuItems.map((item) => (
                  <Grid item xs={1.5}>
                    <li
                      className={
                        router.pathname === "/" + toLowerCase(item) //convert in order to match exact route names
                          ? classes.active
                          : ""
                      }
                    >
                      <Link href={"/" + toLowerCase(item)}>{item}</Link>
                    </li>
                  </Grid>
                ))}
              </Grid>
            </ul>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}

export default Navbar;
