import React from "react";
import { Fragment } from "react";
import Box from "@material-ui/core/Box";
import { useStyles } from "./CountdownSpinner_Styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

function DisplayRemainingTime({
  value,
  Remainingtime,
  progressBar = "yellow",
}) {
  const classes = useStyles();
  //FIXME: Refactor the code

  return (
    <Fragment>
      <Box position="relative" display="inline-flex">
        <CircularProgress
          variant="determinate"
          value={value}
          className={`${classes.time} ${
            progressBar === "red" ? classes.redbar : classes.yellowbar
          }`}
        />
        <div className={classes.circularbg} />
        <Box top="-1rem" left="6rem" position="absolute">
          <Typography
            variant="h3"
            className={
              `${classes.countdownsec} ${
                Remainingtime > 99 && classes.threedigitcountdownsec
              }` //if num of seconds has to be increased to (3) digits in the future
            }
          >
            {/* show '0' in front if (1) digit */}
            {Remainingtime < 10 ? "0" + Remainingtime : Remainingtime}
          </Typography>
          <Typography variant="subtitle1" className={classes.countdownlabel}>
            seconds
          </Typography>
        </Box>
      </Box>
    </Fragment>
  );
}

export default DisplayRemainingTime;
