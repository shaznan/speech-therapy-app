import Heading from "../Common_Layout/Typography/Heading";
import Paragraph from "../Common_Layout/Typography/Paragraph";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../../styles/global.styles";
import React from "react";

//aboutus component
function AboutusMainText() {
  const classes = useStyles();
  return (
    <Grid item lg={6} xs={12} className={classes.textcontainer}>
      <div>
        <Heading text="About Us" />
        <Paragraph
          text={[
            <p key="paragraph">
              {/*key prop required when iterating through array*/}
              We are a global organization on the lookout for people who are
              suffering from their day to day speech problems as a result of
              having
              <strong key="text bold"> Brain Fog.</strong>
            </p>,
            " Our goal is to help you identify your problems by performing our therapy tests and we will guide you through your journey on mastering your verbal fluency to be able to talk confidently without ever having to take a step back from participating on your next conversation.",
          ]}
        />
      </div>
    </Grid>
  );
}

export default AboutusMainText;

//our culture component
export const OurCultureText = () => {
  const classes = useStyles();

  return (
    <Grid item lg={12} className={classes.subtextcontainer}>
      <Heading text="Our Culture" />
      <Paragraph
        text="We are a group of ordinary tech geeks with the initiative
              to help people around the world where there are no actions given.
              Constantly learning and growing together is how we roll!
              Thinking out of the box is the only moto we know."
      />
    </Grid>
  );
};

//our founder component

export const OurFounderText = () => {
  const classes = useStyles();

  return (
    <Grid item lg={12} className={classes.subtextcontainer}>
      <Heading text="Our Founder" />
      <Paragraph
        text="Our CEO Shaznan Fairoze, started his mission to bring confidence
        to people who are suffering from the ability to convey their message to
        the crowd. He has always been on the lookout to find possibilities to 
        make tech a solution to all your problems."
      />
    </Grid>
  );
};
