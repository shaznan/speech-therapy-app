import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../../components/homepage_Components/homepage_styles";
// import { useStyles } from "../../styles/global.styles";
import Paragraph from "../Common_Layout/Typography/Paragraph";
import Slide from "react-reveal/Slide";

function HomepageText() {
  const classes = useStyles();

  return (
    <div>
      <Slide duration={700} bottom>
        <h1 data-testid="heading">test</h1>
        <Typography variant="h3" className={classes.mainheading}>
          Get Rid of BrainFog <br className={classes.linebreak} />
          And Elevate Your
          <br />
          Verbal
          <span className={classes.textdecoration}> Fluency</span>
        </Typography>
      </Slide>
      <Slide duration={1400} bottom>
        <Paragraph
          text="Try out our tests in order to discover if you are
                a victim of brain fog, and join our community
                to fight BrainFog together! "
        />
      </Slide>
    </div>
  );
}

export default HomepageText;
