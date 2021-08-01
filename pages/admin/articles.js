import Grid from "@material-ui/core/Grid";
import { useStyles } from "../../components/AdminDashboard/AdminDashboard_styles";
import React, { useEffect } from "react";
import Navigation from "../../components/AdminDashboard/Navigation.component";
import AdminArticles from "../../components/AdminDashboard/Admin_Articles/AdminArticles";
import { useSelector } from "react-redux";
import useVerifyUserAdmin from "../../components/AdminDashboard/useVerifyUserAdmin";

function HomePage() {
  const classes = useStyles();
  const [isAdmin, verifyAdmin] = useVerifyUserAdmin();
  const userRole = useSelector((state) => state.user.entities[0].userRole);

  useEffect(() => {
    verifyAdmin();
  }, [userRole]);

  return (
    <div>
      {isAdmin && (
        <Grid container className={classes.mainContainer}>
          <Navigation />
          <Grid container className={classes.admin_body}>
            <AdminArticles />
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default HomePage;
