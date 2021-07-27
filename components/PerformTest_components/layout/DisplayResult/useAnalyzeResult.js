import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import range from "lodash/range";

//generate props to conditionally render in display result component based on scores
function useAnalyzeResult() {
  const WordsCount = useSelector((state) => state.user.entities[0].WordsCount);

  const [currentWordCount, setCurrentWordCount] = useState(null);

  const [textOptions, setTextOptions] = useState({
    Header: null,
    body: null,
    AnimationLink: null,
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
        AnimationLink:
          "https://assets2.lottiefiles.com/packages/lf20_fyqtse3p.json",
        ArticleLink: null,
      });
    }

    if (wordsMatch > 10 && wordsMatch <= 15) {
      setTextOptions({
        Header: "Your mental clarity should improve ",
        body: "Your verbal fluency is below average",
        AnimationLink:
          "https://assets10.lottiefiles.com/packages/lf20_s1ogvghi.json",
        ArticleLink: null,
      });
    }
    if (wordsMatch > 15 && wordsMatch <= 20) {
      setTextOptions({
        Header: "You're almost there!",
        body: "Your verbal fluency is average, there's room for imporvement!",
        AnimationLink: "https://assets6.lottiefiles.com/temp/lf20_zPrwZA.json",
        ArticleLink: null,
      });
    }
    if (wordsMatch > 20 && wordsMatch <= 30) {
      setTextOptions({
        Header: "Congratulations! You did great!",
        body: "You are now an expert in verbal fluency!",
        AnimationLink:
          "https://assets2.lottiefiles.com/packages/lf20_kfl4ksd9.json",
        ArticleLink: null,
      });
    }
    if (wordsMatch > 30) {
      setTextOptions({
        Header: "Damn, you're killing it!",
        body: "You have achieved Mastery in verbal fluency!",
        AnimationLink:
          "https://assets2.lottiefiles.com/packages/lf20_cn1bp1vk.json",
        ArticleLink: null,
      });
    }
  }, [currentWordCount]);

  return [currentWordCount, textOptions];
}

export default useAnalyzeResult;
