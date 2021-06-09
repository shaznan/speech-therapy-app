import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { testActions } from "../../../../store/performTestSlice";

function useAlphabetValidator() {
  const isAlphabetChecked = useSelector(
    (state) => state.performtest.isAlphabetChecked
  );
  const selectedOptfromList = useSelector(
    (state) => state.performtest.selectedOptfromList
  );
  const transcript = useSelector((state) => state.performtest.transcript);

  const isTranscriptReceived = useSelector(
    (state) => state.performtest.isTranscriptReceived
  );
  const dispatch = useDispatch();

  if (!isAlphabetChecked) return;

  //filter transcript words into matched, unrelated, based on selected option from dropdwn, calculate accuracy lvl
  useEffect(() => {
    if (transcript === null) {
      return;
    }

    const wordsBreakDown = transcript.toUpperCase().split(" ");

    //if user repeated same words, remove them
    const removeDuplicates = new Set(wordsBreakDown);

    const nonDuplicateWords = [...removeDuplicates];

    const totalWordsCount = nonDuplicateWords.length;

    console.log(totalWordsCount);

    const initialLetter = nonDuplicateWords.map((word) => {
      return word[0];
    });

    const wordsMatch = initialLetter.filter((letter) => {
      return letter === selectedOptfromList;
    }).length;

    const wordsUnRelated = initialLetter.filter((letter) => {
      return letter !== selectedOptfromList;
    }).length;
    const accuracy = Math.round((wordsUnRelated / totalWordsCount) * 100);

    isTranscriptReceived &&
      dispatch(
        testActions.setWordsCount({
          wordsMatch: wordsMatch,
          wordsUnRelated: wordsUnRelated,
          accuracyRate: accuracy,
        })
      );
  }, [isTranscriptReceived, transcript]);
}

export default useAlphabetValidator;
