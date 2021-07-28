import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { useStyles } from "./AdminDashboard_styles";
import Grid from "@material-ui/core/Grid";
import CustomBtn from "./CustomBtn.component";
import { useRouter } from "next/router";

function Navigation() {
  const classes = useStyles();
  const router = useRouter();

  const formatText = (text) => {
    return text.toLowerCase().replace(/\s/g, "");
  };

  const routeHandler = (text) => {
    //route back to homepage
    if (text === "goback") {
      router.push("/", null, { shallow: true });
    }

    //route to shopify admin GUI
    if (text === "Bookstore") {
      router.push(
        "https://speechtherapy-bookstore.myshopify.com/admin/products?selectedView=all",
        null,
        { shallow: true },
      );
    }
    //route to selected catergory page
    if (text !== "goback" && text !== "Bookstore") {
      router.push("/admin/" + formatText(text), null, { shallow: true });
    }
  };

  return (
    <Fragment>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Grid container spacing={0} className={classes.button_container}>
            <CustomBtn onClick={routeHandler} text="goback" lg={9} md={9} />
            <CustomBtn onClick={routeHandler} text="Performtest" />
            <CustomBtn onClick={routeHandler} text="Articles" />
            <CustomBtn onClick={routeHandler} text="Bookstore" />
          </Grid>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

export default Navigation;
