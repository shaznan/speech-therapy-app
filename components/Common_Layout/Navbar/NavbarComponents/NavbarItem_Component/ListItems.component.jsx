import { Fragment } from "react";
import { useRouter } from "next/router";
import classes from "../../Navbar.module.css";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import React from "react";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { navActions } from "../../../../../store/navSlice";

function RenderListItems({ menuItems, emptyPathname }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const formatItem = (item) => {
    //format items to match page names
    let toLowerCase = item[0].toLowerCase() + item.slice(1);
    let removeSpacing = toLowerCase.replace(/\s+/g, "");
    return removeSpacing;
  };

  const redirectHandler = (item) => {
    router.push(item == "Home" ? "/" : "/" + formatItem(item), null, {
      shallow: true,
    });
    dispatch(navActions.setIsNavVisible(false));
  };

  //FIXME: WORK ON THE THROTTLING ISSUE

  return (
    <Fragment>
      {menuItems.map((item, i) => (
        <Grid key={i} item lg={2} xs={12}>
          <li
            className={
              emptyPathname && item === "Home" //if empty pathname, highlight home navitem
                ? classes.active
                : router.pathname === "/" + formatItem(item) //format in order to match exact route names
                ? classes.active
                : ""
            }>
            <span
              className={classes.navMenuItems}
              onClick={() => {
                redirectHandler(item);
              }}>
              {item}
            </span>
          </li>
        </Grid>
      ))}
    </Fragment>
  );
}

export default RenderListItems;
