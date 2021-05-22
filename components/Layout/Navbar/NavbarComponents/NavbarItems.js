import React, { Fragment, useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import classes from "../Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function NavbarItems({ menuItems, isNavVisible }) {
  const router = useRouter();

  const formatItem = (item) => {
    let toLowerCase = item[0].toLowerCase() + item.slice(1);
    let removeSpacing = toLowerCase.replace(/\s+/g, "");
    return removeSpacing;
  };

  const [isHomePage, setIsHomePage] = useState(false);

  const emptyDirectory = router.pathname === "/";

  //FIXME: Change name - done
  useEffect(() => {
    emptyDirectory ? setIsHomePage(true) : setIsHomePage(false);
  }, [router.pathname]);

  //FIXME: if item === perform test then render button element
  //show button element if router !== homepage or '/'

  return (
    <Fragment>
      <Grid item lg={6} xs={12}>
        <ul
          className={`${classes.navitems} ${
            isNavVisible ? classes.shownavitems : classes.hidenavitems
          }`}
        >
          {/* create navbar items */}
          <Grid container className="classes.container" spacing={0}>
            {menuItems.map((item, i) => (
              <Grid key={i} item lg={2} xs={12}>
                <li
                  className={
                    emptyDirectory && item === "Home" //if empty pathname, highlight home navitem
                      ? classes.active
                      : router.pathname === "/" + formatItem(item) //format in order to match exact route names
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
            <Grid item lg={2} xs={12} className={classes.custombtncontainer}>
              {!isHomePage ? ( //don't show PT button on homepage
                <li
                  className={
                    router.pathname === "/" + "performtest"
                      ? classes.active
                      : classes.custombutton
                  }
                >
                  <Link href="/performtest">Perform Test</Link>
                </li>
              ) : (
                ""
              )}
            </Grid>
          </Grid>
        </ul>
      </Grid>
    </Fragment>
  );
}

export default NavbarItems;
