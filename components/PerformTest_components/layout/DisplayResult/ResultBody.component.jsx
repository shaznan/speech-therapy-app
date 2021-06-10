import React from "react";
// import { useStyles } from "./displayResult_styles";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./displayResult_styles";
import infoIcon from "../../../../assets/images/warning_icon.png";

function ResultBody() {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <Typography
        className={`${classes.typography} ${classes.maintext} ${classes.score}`}
      >
        You managed to score
        <span className={classes.highlight}> 27 WPM</span>, Your accuracy was
        <span className={classes.accuracyrate}> 92%</span>
      </Typography>
      <Typography
        className={`${classes.typography} ${classes.maintext} ${classes.score}`}
      ></Typography>
      <Typography className={`${classes.typography} ${classes.maintext}`}>
        You are now an Expert in verbal fluency!
      </Typography>
      <Typography className={`${classes.typography} ${classes.maintext}`}>
        In order to perform even better, we would recommend to go through our
        Article section to find relative reading materials.
      </Typography>
      <Typography className={`${classes.typography} ${classes.alerttext}`}>
        <img
          src={infoIcon}
          width="20px"
          height="20px"
          className={classes.icon}
        />{" "}
        Login to save progress and get access to your history dashboard
      </Typography>
      {/* <Typography className={`${classes.typography} ${classes.captiontext}`}>
        You can view your performance history by visiting your dashboard
      </Typography> */}
      <Typography className={`${classes.typography} ${classes.maintext}`}>
        Keep practicing!
      </Typography>
    </div>
  );
}

export default ResultBody;
