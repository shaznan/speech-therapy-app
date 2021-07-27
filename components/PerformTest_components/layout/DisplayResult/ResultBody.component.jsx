import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { useStyles } from "./displayResult_styles";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./displayResult_styles";
import infoIcon from "../../../../assets/images/warning_icon.png";
import useAnalyzeResult from "./useAnalyzeResult";
import Link from "next/link";
import AnimationFeedback from "./AnimationFeedback.component";

//conditionaly render props based on result criteria
function ResultBody() {
  const classes = useStyles();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [currentWordCount, textOptions] = useAnalyzeResult();
  const [wordsMatch, setWordsMatch] = useState(null);
  const [accuracyRate, setAccuracyRate] = useState(null);
  const [header, setHeader] = useState(null);
  const [body, setBody] = useState(null);

  useEffect(() => {
    if (currentWordCount === null) return;
    let { wordsMatch, accuracyRate } = currentWordCount;
    let { Header, body } = textOptions;
    setWordsMatch(wordsMatch);
    setAccuracyRate(accuracyRate);
    setHeader(Header);
    setBody(body);
  }, [currentWordCount, textOptions]);

  return (
    <div className={classes.body}>
      <AnimationFeedback link={textOptions.AnimationLink} />
      <Typography variant="h5" style={{ marginBottom: "1.2rem" }}>
        <strong>{header}</strong>
      </Typography>
      <Typography
        className={`${classes.typography} ${classes.maintext} ${classes.score}`}>
        You managed to score
        <span className={classes.highlight}> {wordsMatch} WPM</span>, Your
        accuracy was
        <span className={classes.accuracyrate}> {accuracyRate}%</span>
      </Typography>
      <Typography
        className={`${classes.typography} ${classes.maintext} ${classes.score}`}></Typography>
      <Typography className={`${classes.typography} ${classes.maintext}`}>
        {body}
      </Typography>
      <Typography className={`${classes.typography} ${classes.maintext}`}>
        In order to perform even better, we would recommend to go through our
        Article section to find relative reading materials.
      </Typography>
      {!isLoggedIn && (
        <Typography className={`${classes.typography} ${classes.alerttext}`}>
          <img
            src={infoIcon}
            width="20px"
            height="20px"
            className={classes.icon}
          />{" "}
          <span className={classes.link}>
            <Link href="/login_signup">Login</Link>
          </span>{" "}
          to save progress and get access to your history dashboard
        </Typography>
      )}
      <Typography className={`${classes.typography} ${classes.maintext}`}>
        Keep practicing!
      </Typography>
    </div>
  );
}

export default ResultBody;
