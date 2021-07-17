import React from "react";
import { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useStyles } from "./AdminDashboard_styles";

function CustomBtn({ text, onClick, lg = 1, md = 2, sm = 12 }) {
  const classes = useStyles();
  return (
    <Fragment>
      {/* <Grid item lg={9} md={9} sm={12}> */}
      <Grid item lg={lg} md={md} sm={sm}>
        <Button
          onClick={() => {
            onClick(text);
          }}
          color="inherit"
          className={classes.nav_btn}>
          {text}
        </Button>
      </Grid>
    </Fragment>
  );
}

export default CustomBtn;
