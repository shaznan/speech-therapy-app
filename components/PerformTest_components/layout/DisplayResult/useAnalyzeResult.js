import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import range from "lodash/range";

//generate props to conditionally render in display result component based on scores
function useAnalyzeResult() {
  const WordsCount = useSelector((state) => state.performtest.WordsCount);

  //   const isLoggedIn = useSelector((state) => state.performtest.isLoggedIn); //FIXME: add seperately in useAnalyzer component
  const [lastElement, setLastElement] = useState(null);

  const [textOptions, setTextOptions] = useState({
    Header: null,
    body: null,
    ArticleLink: null,
  });

  useEffect(() => {
    if (WordsCount.length === 0) return;
    setLastElement(WordsCount.length - 1);
  }, [WordsCount]);

  useEffect(() => {
    if (lastElement === null) return;
    const { wordsMatch } = lastElement;
    switch (wordsMatch) {
      case wordsMatch <= 10:
        setTextOptions({
          //TODO: Store in backend
          Header:
            "See your doctor if you have persistent lack of clarity that worsens or doesn’t improve.",
          body: "You might be suffering from a cognitive dysfunction ☹",
          ArticleLink: null,
        });
        break;
      case wordsMatch > 10 && wordsMatch <= 15:
        setTextOptions({
          Header: "Your mental clarity should improve ",
          body: "Your verbal fluency is below average",
          ArticleLink: null,
        });
        break;
      case wordsMatch > 15 && wordsMatch <= 20:
        setTextOptions({
          Header: "You're almost there!",
          body: "Your verbal fluency is average, there's room for imporvement!",
          ArticleLink: null,
        });
        break;
      case wordsMatch > 20 && wordsMatch <= 30:
        setTextOptions({
          Header: "Congratulations! You did great!",
          body: "You are now an expert in verbal fluency!",
          ArticleLink: null,
        });
        break;
      case wordsMatch > 30:
        setTextOptions({
          Header: "Damn, you're killing it!",
          body: "You have achieved Mastery in verbal fluency!",
          ArticleLink: null,
        });
    }
  }, [lastElement]);

  return [lastElement, textOptions];
}

export default useAnalyzeResult;
