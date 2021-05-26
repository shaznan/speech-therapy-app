import React from "react";
import { Fragment } from "react";
import SubCatergoryContent from "./SubCatergoryContent.component";
import { useSelector } from "react-redux";

function SubCatergory() {
  const isAlphabetChecked = useSelector(
    (state) => state.performtest.isAlphabetChecked
  );
  const isRandomChecked = useSelector(
    (state) => state.performtest.isRandomChecked
  );

  const conditionallyRenderProps = (alphabetProps, randomprops) => {
    if (isAlphabetChecked) {
      return alphabetProps;
    }
    if (isRandomChecked) {
      return randomprops;
    }
  };
  return (
    <Fragment>
      <SubCatergoryContent
        mainLabel={conditionallyRenderProps(
          "Select an alphabetical letter of your choice",
          "Select a topic of your choice"
        )}
        subLabel={conditionallyRenderProps("Letters", "Topics")}
      />
    </Fragment>
  );
}

export default SubCatergory;
