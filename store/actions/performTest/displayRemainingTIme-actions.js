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

//FIXME: All these are completely wrong, you can wrtite deifferent create slice for these and just update the initial state as you do in the reducer functions by using extraReducers
