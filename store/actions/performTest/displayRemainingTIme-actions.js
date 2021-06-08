import { testActions } from "../../performTestSlice";

export const stopRecording = (remainingTime) => {
  return (dispatch) => {
    setTimeout(() => {
      if (remainingTime === 0) {
        dispatch(testActions.setIsRecording());
        dispatch(testActions.setIsTimeIsUp(true));
        dispatch(testActions.setIsAnalyzing(true));
      }
    }, 1000);
  };
};

export const decrementCountDown = (reducingFactor) => {
  return (dispatch) => {
    dispatch(testActions.decrementRemainingTime());
    dispatch(testActions.setCountdownPercent(reducingFactor));
  };
};
