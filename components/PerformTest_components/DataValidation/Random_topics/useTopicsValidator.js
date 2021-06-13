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

  //dataValidation
  useEffect(() => {
    if (catergoryItems === null) return;

    const wordsBreakDown = transcript.split(" ");

    const wordsFirstLetterCaps = wordsBreakDown.map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    });

    //if user repeated same words, remove them
    const removeDuplicates = new Set(wordsFirstLetterCaps);

    const nonDuplicateWords = [...removeDuplicates];
    // setTranscriptWords(nonDuplicateWords);

    // Performs intersection operation
    const wordsMatch = GetWordsRelatedToTopic(
      nonDuplicateWords,
      catergoryItems
    );

    console.log(wordsMatch);

    // const wordsUnRelated = transcriptWords
    //const accuracyRate = data
  }, [catergoryItems, transcriptWords]);
}

export default useTopicsValidator;
