import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../bookstore_styles";

function Catergories({ catergoryItems }) {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState();

  return (
    <Fragment>
      <Grid container className={classes.catergories_cont} spacing={0}>
        <Grid item md={5} className={classes.catergory}>
          {catergoryItems.map((catergory, i) => (
            <Grid
              item
              md={2}
              key={i}
              className={`${activeIndex === i && classes.catergory_active} ${
                classes.caterory_item
              }`}
              onClick={() => {
                setActiveIndex(i);
              }}>
              {catergory}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Catergories;
