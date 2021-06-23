import React from "react";
import { Fragment } from "react";
import { useStyles } from "../Dashboard_Styles";

function ColumnTwo({ subheadingTwo, data }) {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.subheading}>{subheadingTwo}</div>
      {data.map((item, i) => {
        return (
          <div
            key={i}
            className={`${classes.scoreitems} ${classes.scoreitems_two}`}
          >
            {item.score}
          </div>
        );
      })}
    </Fragment>
  );
}

export default ColumnTwo;
