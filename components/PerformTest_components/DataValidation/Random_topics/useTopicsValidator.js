import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { testActions } from "../../../../store/performTestSlice";
import { useEffect } from "react";
import axios from "axios";
import usePopulateScores from "../usePopulateScores";

function useTopicsValidator() {
  const dispatch = useDispatch();
  const [catergoryItems, setCatergoryItems] = useState(null);
  const isRandomChecked = useSelector(
    (state) => state.performtest.isRandomChecked,
  );

  const currentTestDuration = useSelector(
    (state) => state.performtest.currentTestDuration,
  );
  const selectedOptfromList = useSelector(
    (state) => state.performtest.selectedOptfromList,
  );
  const transcript = useSelector((state) => state.performtest.transcript);
  const { updateUserScores, updateUserWordCount } = usePopulateScores();

  //compare transcript words with words that belong to selected topic catergory
  const CompareWordsRelatedToTopic = useCallback(
    (transcriptWords, catergoryItems) => {
      var setA = new Set(transcriptWords);
      var setB = new Set(catergoryItems);
      var intersection = new Set([...setA].filter((x) => setB.has(x)));
      return Array.from(intersection);
    },
    [],
  );

  //get list of items in catergory
  useEffect(() => {
    if (!isRandomChecked) return;
    if (transcript === null) return;

    axios
      .get("/api/ListOfItems", {
        params: {
          topic: selectedOptfromList.toLowerCase(),
        },
      })
      .then((res) => {
        setCatergoryItems(
          res.data[selectedOptfromList.toLowerCase()].list.map((word) => {
            //TODO: convert to function
            return word.toLowerCase();
          }),
        );
      })
      .catch((err) => {
        dispatch(testActions.setIsPerformTestError(true));
        dispatch(
          testActions.setErrorMsg(
            "There was an error while Analyzing your speech, please try again later",
          ),
        );
      });
  }, [isRandomChecked, transcript]);

  //create wordsMatch, wordsUnmated, accuracyrate
  useEffect(() => {
    if (catergoryItems === null) return;

    const wordsBreakDown = transcript.split(" ").map((word) => {
      return word.toLowerCase();
    });

    //if user repeated same words, remove them
    const removeDuplicates = new Set(wordsBreakDown);

    const totalWords = [...removeDuplicates];

    //if you wish to change the duration of the test, then multiply result as a factor of 60s to get results Per Min

    const testDuration = 60;
    const factor = testDuration / currentTestDuration;

    // // dispatch wordscount to state
    const wordsMatch =
      CompareWordsRelatedToTopic(totalWords, catergoryItems).length * factor;

    const wordsUnRelated = totalWords.length - wordsMatch * factor;

    const totalWordCountLength = totalWords.length * factor;

    const accuracy = Math.round((wordsMatch / totalWordCountLength) * 100);

    updateUserWordCount(wordsMatch, wordsUnRelated, accuracy);
    dispatch(testActions.setIsWordsCountReceived(true));
    dispatch(testActions.setIsAnalyzing(false));
    updateUserScores();
  }, [catergoryItems]);
}

export default useTopicsValidator;
