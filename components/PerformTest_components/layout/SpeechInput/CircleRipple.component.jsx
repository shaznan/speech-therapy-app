import React from "react";
import { Fragment } from "react";
import classes from "./circleRipple.module.css";

function CircleRipple() {
  return (
    <Fragment>
      <div className={classes.bg_lite}>
        <div className={classes.first} id="six">
          4
        </div>
        <div className={classes.second} id="five">
          3
        </div>
        <div className={classes.third} id="four">
          4
        </div>
        <div className={classes.fourth} id="three">
          <div className={classes.text}>Listening</div>
        </div>
      </div>
    </Fragment>
  );
}

export default CircleRipple;
