import React from "react";
import { useStyles } from "../../bookstore_styles";
import Grid from "@material-ui/core/Grid";
import { Fragment } from "react";

function ExpandedCatergory({
  catergoryItems,
  activeIndex,
  switchCatergoryHandler,
}) {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item md={5} className={classes.catergory}>
        {catergoryItems.map((catergory, i) => (
          <Grid
            item
            id={catergory.id}
            md={2}
            key={i}
            className={`${activeIndex === i && classes.catergory_active} ${
              classes.caterory_item
            }`}
            onClick={(e) => {
              switchCatergoryHandler(i, e);
            }}>
            {catergory.itemName}
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
}

export default ExpandedCatergory;
