import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./home.styles";

function HomepageText() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h2" className={classes.mainheading}>
        Elevate Your Verbal <br className={classes.linebreak} />
        <span className={classes.textdecoration}>Fluency</span> With Us
      </Typography>
      <Typography variant="subtitle1" className={classes.subtitle}>
        Try out our verbal fluency tests in order to elevate{" "}
        <br className={classes.linebreak} /> your ability to retrieve specific
        information within your <br className={classes.linebreak} />
        brain's restricted search parameters.
      </Typography>
    </div>
  );
}

export default HomepageText;
