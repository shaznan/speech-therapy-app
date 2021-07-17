import React, { useEffect } from "react";
import { Fragment } from "react";
import useVerifyUserAdmin from "../../components/AdminDashboard/useVerifyUserAdmin";
import Navigation from "../../components/AdminDashboard/Navigation.component";
import { useSelector } from "react-redux";
import AddCatergory from "../../components/AdminDashboard/Admin_PerformTest/AddCatergory.component";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../../components/AdminDashboard/AdminDashboard_styles";

function performtest() {
  const [isAdmin, verifyAdmin] = useVerifyUserAdmin();
  const userRole = useSelector((state) => state.user.entities[0].userRole);
  const classes = useStyles();

  useEffect(() => {
    verifyAdmin();
  }, [userRole]);

  return (
    <div>
      {isAdmin && (
        <Grid container className={classes.mainContainer}>
          <Navigation />
          <Grid item md={12} className={classes.admin_body}>
            <AddCatergory />
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default performtest;
