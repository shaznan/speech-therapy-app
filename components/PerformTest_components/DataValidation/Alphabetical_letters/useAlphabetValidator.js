import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { testActions } from "../../../../store/performTestSlice";
import { userSlice_Actions } from "../../../../store/userSlice";

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

  //filter transcript words into matched, unrelated, based on selected option from dropdwn, calculate accuracy lvl
  useEffect(() => {
    if (!isAlphabetChecked) return;
    if (transcript === null) {
      return;
    }

    const wordsBreakDown = transcript.toUpperCase().split(" ");

    //if user repeated same words, remove them
    const removeDuplicates = new Set(wordsBreakDown);

    const nonDuplicateWords = [...removeDuplicates];

    const totalWordsCount = nonDuplicateWords.length;

    const initialLetter = nonDuplicateWords.map((word) => {
      return word[0];
    });

    const wordsMatch = initialLetter.filter((letter) => {
      return letter === selectedOptfromList;
    }).length;

    const wordsUnRelated = initialLetter.filter((letter) => {
      return letter !== selectedOptfromList;
    }).length;
    const accuracy = Math.round((wordsMatch / totalWordsCount) * 100);

    if (isTranscriptReceived) {
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
      dispatch(userSlice_Actions.setHighScore());
      dispatch(userSlice_Actions.setChangeOverPrevScore());
    }
  }, [isTranscriptReceived, transcript]);
}

export default useAlphabetValidator;
