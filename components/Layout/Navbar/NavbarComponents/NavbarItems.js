import React, { Fragment, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import classes from "../Navbar.module.css";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { navActions } from "../../../../store/navSlice";
import RenderListItems from "./NavbarItem_Component/ListItems.component";
import NavPerformTestBtn from "./NavbarItem_Component/NavPerformTestBtn.component";

function NavbarItems({ menuItems, isNavVisible }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const emptyPathname = router.pathname === "/";

  const isHomePageActive = useSelector((state) => {
    return state.navigation.isHomePageActive;
  });

  const setIsHomePageActive = (payload) => {
    dispatch(navActions.setIsHomePageActive(payload));
  };

  useEffect(() => {
    emptyPathname ? setIsHomePageActive(true) : setIsHomePageActive(false);
  }, [router.pathname]);

  return (
    <Fragment>
      <Grid item lg={6} xs={1}>
        <ul //show hide nav for mobile view
          className={`${classes.navitems} ${
            isNavVisible ? classes.shownavitems : classes.hidenavitems
          }`}
        >
          <Grid container className="classes.container" spacing={0}>
            <RenderListItems
              menuItems={menuItems} //allow prop drilling for component re-usability
              emptyPathname={emptyPathname}
            />
            <Grid item lg={2} xs={12} className={classes.custombtncontainer}>
              <NavPerformTestBtn isHomePageActive={isHomePageActive} />
            </Grid>
          </Grid>
        </ul>
      </Grid>
    </Fragment>
  );
}

export default NavbarItems;
