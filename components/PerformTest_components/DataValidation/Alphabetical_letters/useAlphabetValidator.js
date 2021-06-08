import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { testActions } from "../../../../store/performTestSlice";

function useAlphabetValidator() {
  const [wordsMatch, setWordsMatch] = useState(null);
  const [wordsUnRelated, setWordsUnrelated] = useState(null);
  const [accuracyRate, setAccuracyRate] = useState(null);

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
    const lettersMatch = initialLetter.filter((letter) => {
      return letter === selectedOptfromList;
    }).length;

    //filter letters not matching selected option, get count

    const lettersUnmatch = initialLetter.filter((letter) => {
      return letter !== selectedOptfromList;
    }).length;
    //calculate accuracy level with 0 decimal places
    const accuracy = Math.round((wordsMatch / totalWordsCount) * 100);

    setAccuracyRate(accuracy);
    setWordsMatch(lettersMatch);
    setWordsUnrelated(lettersUnmatch);
  }, [isTranscriptReceived, transcript]);

  isTranscriptReceived &&
    accuracyRate > 0 &&
    dispatch(
      testActions.setWordsCount({
        wordsMatch: wordsMatch,
        wordsUnRelated: wordsUnRelated,
        accuracyRate: accuracyRate,
      })
    );
}

export default useAlphabetValidator;
