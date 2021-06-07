import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

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

  const responseReceived = useSelector(
    (state) => state.performtest.responseReceived
  );
  // const transcript = "big boss";
  console.log(transcript);
  // console.log(transcript);

  if (!isAlphabetChecked) return;

  //break down transcript into array of words

  useEffect(() => {
    if (transcript === null) {
      return;
    }
    const wordsArray = transcript.toUpperCase().split(" ");

    const totalWordsCount = wordsArray.length;
    //FIXME: using initial state for validation, make sure to use usecallback

    //Get initial letter of words
    const initialLetter = wordsArray.map((word) => {
      return word[0];
    });

    //filter only letters matching selected option, get count and set state
    setWordsMatch(
      initialLetter.filter((letter) => {
        return letter === selectedOptfromList;
      }).length
    );

    //filter letters not matching selected option, get count and set state
    setWordsUnrelated(
      initialLetter.filter((letter) => {
        return letter !== selectedOptfromList;
      }).length
    );

    console.log(wordsMatch);
    console.log(wordsUnRelated);
    console.log(accuracyRate);
    //calculate accuracy level with 0 decimal places and set state
    setAccuracyRate(Math.round((wordsMatch / totalWordsCount) * 100));
  }, [responseReceived, transcript]);

  return [wordsMatch, wordsUnRelated, accuracyRate];
}

export default useAlphabetValidator;
