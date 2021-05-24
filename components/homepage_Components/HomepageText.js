import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../../styles/global.styles";
// import { useStyles } from "../../styles/global.styles";
import Paragraph from "../Common_Layout/Typography/Paragraph";

function HomepageText() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h2" className={classes.mainheading}>
        Elevate Your Verbal <br className={classes.linebreak} />
        <span className={classes.textdecoration}>Fluency</span> With Us
      </Typography>
      <Paragraph
        text="Try out our verbal fluency tests in order to elevate your ability to
        retrieve specific information within your brain's restricted search
        parameters."
      />
    </div>
  );
}

export default HomepageText;
