import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { testActions } from "../../../../store/performTestSlice";
import { useEffect } from "react";
import axios from "axios";
import { userSlice_Actions } from "../../../../store/userSlice";

function useTopicsValidator() {
  const [catergoryItems, setCatergoryItems] = useState(null);
  const isRandomChecked = useSelector(
    (state) => state.performtest.isRandomChecked
  );

  const selectedOptfromList = useSelector(
    (state) => state.performtest.selectedOptfromList
  );

  const transcript = useSelector((state) => state.performtest.transcript);

  const dispatch = useDispatch();

  //TODO:REMOVE
  const isWordsCountReceived = useSelector(
    (state) => state.performtest.isWordsCountReceived
  );

  //compare transcript words with words that belong to selected topic catergory
  const CompareWordsRelatedToTopic = useCallback(
    (transcriptWords, catergoryItems) => {
      var setA = new Set(transcriptWords);
      var setB = new Set(catergoryItems);
      var intersection = new Set([...setA].filter((x) => setB.has(x)));
      return Array.from(intersection);
    },
    []
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
        console.log(res);
        console.log(selectedOptfromList);
        setCatergoryItems(
          res.data[selectedOptfromList.toLowerCase()].list.map((word) => {
            //TODO: convert to function
            return word.toLowerCase();
          })
        );
      })
      .catch((err) => console.error(err));
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

    // Performs intersection operation
    const wordsMatch = CompareWordsRelatedToTopic(
      totalWords,
      catergoryItems
    ).length;

    const wordsUnRelated = totalWords.length - wordsMatch;

    const accuracy = Math.round((wordsMatch / totalWords.length) * 100);

    dispatch(
      userSlice_Actions.setWordsCount({
        wordsMatch: wordsMatch,
        wordsUnRelated: wordsUnRelated,
        accuracyRate: accuracy,
      })
    );
    dispatch(testActions.setIsWordsCountReceived(true));
    dispatch(testActions.setIsAnalyzing(false));
    dispatch(userSlice_Actions.setAverageScore());
    dispatch(userSlice_Actions.setScoreAvgeCriteria());
    dispatch(userSlice_Actions.setHighScore()); //FIXME: same code in useAlphabet validator (need to refactor)
    dispatch(userSlice_Actions.setChangeOverPrevScore());
  }, [catergoryItems]);

  useEffect(() => {
    if (!isWordsCountReceived) return;
    console.log(catergoryItems);
  }, [isWordsCountReceived]);
}

export default useTopicsValidator;
