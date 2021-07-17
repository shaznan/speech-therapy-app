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

  const redirectHandler = (text) => {
    if (text === "Go back") {
      router.push("/", null, { shallow: true });
    }
    if (text === "Bookstore") {
      router.push(
        "https://speechtherapy-bookstore.myshopify.com/admin/products?selectedView=all",
        null,
        { shallow: true },
      );
    }
    if (text !== "go back" || text !== "Bookstore") {
      router.push("/admin/" + formatText(text), null, { shallow: true });
    }
  };

  return (
    <Fragment>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Grid container spacing={0} className={classes.button_container}>
            <CustomBtn onClick={redirectHandler} text="Go back" lg={9} md={9} />
            <CustomBtn onClick={redirectHandler} text="Performtest" />
            <CustomBtn onClick={redirectHandler} text="Articles" />
            <CustomBtn onClick={redirectHandler} text="Bookstore" />
          </Grid>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

export default Navigation;
