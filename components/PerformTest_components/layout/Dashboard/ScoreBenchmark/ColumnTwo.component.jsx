import React from "react";
import { Fragment } from "react";
import { useStyles } from "../Dashboard_Styles";
import { useSelector } from "react-redux";

function ColumnTwo({ subheadingTwo, data }) {
  const classes = useStyles();
  const nickName = useSelector((state) => state.user.entities[0].nickName);
  return (
    <Fragment>
      <div className={classes.subheading}>{subheadingTwo}</div>
      {data.map((item, i) => {
        return (
          <div
            key={i}
            className={`${
              item.name === nickName
                ? classes.highlightitem
                : classes.scoreitems
            } ${classes.scoreitems_two}`}
          >
            {item.score}
          </div>
        );
      })}
    </Fragment>
  );
}

export default ColumnTwo;
