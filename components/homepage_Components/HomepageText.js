import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../../components/homepage_Components/homepage_styles";
// import { useStyles } from "../../styles/global.styles";
import Paragraph from "../Common_Layout/Typography/Paragraph";

function HomepageText() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3" className={classes.mainheading}>
        Get Rid of BrainFog <br className={classes.linebreak} />
        And Elevate Your
        <br />
        Verbal
        <span className={classes.textdecoration}> Fluency</span>
      </Typography>
      <Paragraph
        text="Try out our tests in order to discover if you are
a victim of brain fog, and join our community
to fight BrainFog together! "
      />
    </div>
  );
}

export default HomepageText;
