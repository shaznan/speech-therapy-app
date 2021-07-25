import React, { useEffect } from "react";
import { Fragment } from "react";
import SubCatergoryContent from "./SubCatergoryContent.component";
import { useSelector, useDispatch } from "react-redux";
import { retrieveTopicNames } from "../../../../store/performTestSlice";

function SubCatergory() {
  const dispatch = useDispatch();
  const isAlphabetChecked = useSelector(
    (state) => state.performtest.isAlphabetChecked,
  );
  const storeGitStatus = useSelector(
    (state) => state.adminDashboard.storeGitStatus,
  );
  const isRandomChecked = useSelector(
    (state) => state.performtest.isRandomChecked,
  );

  //get updated topic names if admin adds new topic to db
  useEffect(() => {
    dispatch(retrieveTopicNames());
  }, [storeGitStatus]);

  const listOfAlphabets = useSelector((state) =>
    state.performtest.listOfAlphabets.toUpperCase().split(""),
  );

  const topicsToChooseFrom = useSelector(
    (state) => state.performtest.topicsToChooseFrom,
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
          "* An Alphabet letter will be randomly chosen for you",
          "Select a topic of your choice",
        )}
        subLabel={conditionallyRenderProps("alphabet", "Topics")}
        optionsList={isAlphabetChecked ? listOfAlphabets : topicsToChooseFrom}
      />
    </Fragment>
  );
}

export default SubCatergory;
