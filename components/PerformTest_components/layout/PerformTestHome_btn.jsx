import React, { Fragment } from "react";
import StartNowBtn from "./StartNowBtn";
import DashboardBtn from "./DashboardBtn";
import Grid from "@material-ui/core/Grid";
import { performtestStyles } from "./PerformTest_Styles";
import { useSelector } from "react-redux";

function PerformTestHome_Btn() {
  const classes = performtestStyles();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <Fragment>
      <Grid container spacing={2} className={classes.performtesthome_btncont}>
        <Grid
          item
          md={isLoggedIn ? 6 : 12}
          style={{
            display: "flex",
            justifyContent: isLoggedIn ? "flex-end" : "center",
          }}>
          <StartNowBtn />
        </Grid>
        <Grid item md={6}>
          {isLoggedIn && (
            <DashboardBtn
              className={classes.dashboardBtn}
              styles={{
                marginTop: "0rem",
                borderRadius: "7px",
                padding: "0.3rem 0.9rem",
              }}
            />
          )}
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default PerformTestHome_Btn;
