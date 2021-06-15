import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import range from "lodash/range";

//generate props to conditionally render in display result component based on scores
function useAnalyzeResult() {
  const WordsCount = useSelector((state) => state.performtest.WordsCount);

  const [currentWordCount, setCurrentWordCount] = useState(null);

  const [textOptions, setTextOptions] = useState({
    Header: null,
    body: null,
    ArticleLink: null,
  });

  //select current test object
  useEffect(() => {
    if (WordsCount.length === 0) return;
    setCurrentWordCount(WordsCount[WordsCount.length - 1]);
  }, [WordsCount]);

  useEffect(() => {
    if (currentWordCount === null) return;
    const { wordsMatch } = currentWordCount;
    if (wordsMatch <= 10) {
      setTextOptions({
        //TODO: Store in backend
        Header: "You might be suffering from a cognitive dysfunction 😐",
        body: "See your doctor if you have persistent lack of clarity that worsens or doesn’t improve.",
        ArticleLink: null,
      });
    }

    if (wordsMatch > 10 && wordsMatch <= 15) {
      setTextOptions({
        Header: "Your mental clarity should improve ",
        body: "Your verbal fluency is below average",
        ArticleLink: null,
      });
    }
    if (wordsMatch > 15 && wordsMatch <= 20) {
      setTextOptions({
        Header: "You're almost there!",
        body: "Your verbal fluency is average, there's room for imporvement!",
        ArticleLink: null,
      });
    }
    if (wordsMatch > 20 && wordsMatch <= 30) {
      setTextOptions({
        Header: "Congratulations! You did great!",
        body: "You are now an expert in verbal fluency!",
        ArticleLink: null,
      });
    }
    if (wordsMatch > 30) {
      setTextOptions({
        Header: "Damn, you're killing it!",
        body: "You have achieved Mastery in verbal fluency!",
        ArticleLink: null,
      });
    }
  }, [currentWordCount]);

  return [currentWordCount, textOptions];
}

export default useAnalyzeResult;
