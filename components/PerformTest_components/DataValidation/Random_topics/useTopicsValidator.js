import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { testActions } from "../../../../store/performTestSlice";
import { useEffect } from "react";
import axios from "axios";

function useTopicsValidator() {
  const [catergoryItems, setCatergoryItems] = useState(null);
  const [transcriptWords, setTranscriptWords] = useState(null);
  const isRandomChecked = useSelector(
    (state) => state.performtest.isRandomChecked
  );

  const selectedOptfromList = useSelector(
    (state) => state.performtest.selectedOptfromList
  );

  const transcript = useSelector((state) => state.performtest.transcript);

  const isTranscriptReceived = useSelector(
    (state) => state.performtest.isTranscriptReceived
  );

  const dispatch = useDispatch();

  //compare transcript words with words that belong to selected topic catergory
  const GetWordsRelatedToTopic = useCallback(
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
        setCatergoryItems(res.data[selectedOptfromList.toLowerCase()].list);
      })
      .catch((err) => console.error(err));
  }, [isRandomChecked, transcript]);

  //return wordsMatch, wordsUnmated, accuracyrate
  useEffect(() => {
    if (catergoryItems === null) return;

    const wordsBreakDown = transcript.split(" ");

    const wordsFirstLetterCaps = wordsBreakDown.map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    });

    //if user repeated same words, remove them
    const removeDuplicates = new Set(wordsFirstLetterCaps);

    const totalWordsCount = [...removeDuplicates];
    // setTranscriptWords(totalWordsCount);

    // Performs intersection operation
    const wordsMatch = GetWordsRelatedToTopic(
      totalWordsCount,
      catergoryItems
    ).length;

    const wordsUnRelated = totalWordsCount.length - wordsMatch;

    const accuracy = Math.round((wordsMatch / totalWordsCount.length) * 100);

    if (isTranscriptReceived) {
      dispatch(
        testActions.setWordsCount({
          wordsMatch: wordsMatch,
          wordsUnRelated: wordsUnRelated,
          accuracyRate: accuracy,
        })
      );
      dispatch(testActions.setIsWordsCountReceived(true));
      dispatch(testActions.setIsAnalyzing(false));
    }
  }, [catergoryItems, transcriptWords]);
}

export default useTopicsValidator;

//FIXME: change wordmatch to lenght, create, wordsunrelated, accuracy rate
//states to redux store
//push to wordsCount
//create more catergories - or else you will regret later
//show data in displayresults modal
