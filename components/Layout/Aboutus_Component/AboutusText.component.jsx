import React from "react";
import Heading from "../Typography/Heading";
import Paragraph from "../Typography/Paragraph";

function AboutusMainText() {
  return (
    <div>
      <Heading text="About Us" />
      <Paragraph
        text={[
          <p key="paragraph">
            {" "}
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
  );
}

export default AboutusMainText;
