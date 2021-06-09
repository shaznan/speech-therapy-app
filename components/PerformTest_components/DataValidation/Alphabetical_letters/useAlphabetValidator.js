import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { testActions } from "../../../../store/performTestSlice";

function useAlphabetValidator() {
  // const [wordsMatch, setWordsMatch] = useState(null);
  // const [wordsUnRelated, setWordsUnrelated] = useState(null);
  // const [accuracyRate, setAccuracyRate] = useState(null);

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

  //break down transcript into array of words

  useEffect(() => {
    if (transcript === null) {
      return;
    }
    const wordsArray = transcript.toUpperCase().split(" ");

    const totalWordsCount = wordsArray.length;

    //Get initial letter of words
    const initialLetter = wordsArray.map((word) => {
      return word[0];
    });

    //filter only letters matching selected option, get count
    const wordsMatch = initialLetter.filter((letter) => {
      return letter === selectedOptfromList;
    }).length;

    //filter letters not matching selected option, get count

    const wordsUnRelated = initialLetter.filter((letter) => {
      return letter !== selectedOptfromList;
    }).length;
    //calculate accuracy level with 0 decimal places
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
