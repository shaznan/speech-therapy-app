import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { testActions } from "../../../../store/performTestSlice";
import { useEffect } from "react";
import axios from "axios";

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

    console.log(totalWords);
    // Performs intersection operation
    const wordsMatch = CompareWordsRelatedToTopic(
      totalWords,
      catergoryItems
    ).length;

    const wordsUnRelated = totalWords.length - wordsMatch;

    const accuracy = Math.round((wordsMatch / totalWords.length) * 100);

    dispatch(
      testActions.setWordsCount({
        wordsMatch: wordsMatch,
        wordsUnRelated: wordsUnRelated,
        accuracyRate: accuracy,
      })
    );
    dispatch(testActions.setIsWordsCountReceived(true));
    dispatch(testActions.setIsAnalyzing(false));
  }, [catergoryItems]);

  useEffect(() => {
    if (!isWordsCountReceived) return;
    console.log(catergoryItems);
  }, [isWordsCountReceived]);
}

export default useTopicsValidator;

//FIXME: change wordmatch to lenght, create, wordsunrelated, accuracy rate - done
//states to redux store //TODO:
//push to wordsCount - done
//create more catergories - or else you will regret later //TODO:
//show data in displayresults modal - done
// Display result modal check and see if any problem coz when running alphabatical option the modal doesnt show - done
