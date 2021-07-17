import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { useStyles } from "./AdminToolbar_styles";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { useRouter } from "next/router";
import WIthAdminAuth from "./WIthAdminAuth";

export default function AdminToolbar() {
  const classes = useStyles();
  const router = useRouter();

  const redirectHandler = () => {
    router.push("/admin/articles", null, { shallow: true });
  };

  return (
    <div className={classes.root}>
      <WIthAdminAuth>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <Button
              onClick={redirectHandler}
              color="inherit"
              className={classes.button}>
              <SupervisorAccountIcon style={{ marginRight: "0.5rem" }} /> Admin
              Panel
            </Button>
          </Toolbar>
        </AppBar>
      </WIthAdminAuth>
    </div>
  );
}
