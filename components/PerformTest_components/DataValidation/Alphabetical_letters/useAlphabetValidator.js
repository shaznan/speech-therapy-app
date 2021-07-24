import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { testActions } from "../../../../store/performTestSlice";
import usePopulateScores from "../usePopulateScores";

// validate transcript data if user choose alphabets
function useAlphabetValidator() {
  const isAlphabetChecked = useSelector(
    (state) => state.performtest.isAlphabetChecked,
  );
  const selectedOptfromList = useSelector(
    (state) => state.performtest.selectedOptfromList,
  );
  const transcript = useSelector((state) => state.performtest.transcript);

  const isTranscriptReceived = useSelector(
    (state) => state.performtest.isTranscriptReceived,
  );
  const { updateUserScores, updateUserWordCount } = usePopulateScores();

  const dispatch = useDispatch();

  //filter transcript words into matched, unrelated, based on selected topicn, calculate accuracy lvl
  useEffect(() => {
    if (!isAlphabetChecked) return;
    if (transcript === null) return;
    const wordsBreakDown = transcript.toUpperCase().split(" ");

    //if user repeated same words, remove them
    const removeDuplicates = new Set(wordsBreakDown);
    const nonDuplicateWords = [...removeDuplicates];
    const totalWordsCount = nonDuplicateWords.length;
    const initialLetters = nonDuplicateWords.map((word) => {
      return word[0];
    });
    const wordsMatch = initialLetters.filter((letter) => {
      return letter === selectedOptfromList;
    }).length;
    const wordsUnRelated = initialLetters.filter((letter) => {
      return letter !== selectedOptfromList;
    }).length;
    const accuracy = Math.round((wordsMatch / totalWordsCount) * 100);

    if (isTranscriptReceived) {
      updateUserWordCount(wordsMatch, wordsUnRelated, accuracy);
      dispatch(testActions.setIsAnalyzing(false));
      dispatch(testActions.setIsWordsCountReceived(true));
      updateUserScores();
    }
  }, [isTranscriptReceived, transcript]);
}

export default useAlphabetValidator;
