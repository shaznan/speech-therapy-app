import { useDispatch } from "react-redux";
import { userSlice_Actions } from "../../../store/userSlice";

function usePopulateScores() {
  const dispatch = useDispatch();

  const updateUserWordCount = (wordsMatch, wordsUnRelated, accuracy) => {
    dispatch(
      userSlice_Actions.setWordsCount({
        wordsMatch: wordsMatch,
        wordsUnRelated: wordsUnRelated,
        accuracyRate: accuracy,
      }),
    );
  };
  const updateUserScores = () => {
    dispatch(userSlice_Actions.setAverageScore());
    dispatch(userSlice_Actions.setScoreAvgeCriteria());
    dispatch(userSlice_Actions.setHighScore());
    dispatch(userSlice_Actions.setChangeOverPrevScore());
  };
  return { updateUserScores, updateUserWordCount };
}

export default usePopulateScores;
