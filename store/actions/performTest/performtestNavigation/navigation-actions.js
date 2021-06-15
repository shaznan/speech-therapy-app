import { testActions } from "../../../performTestSlice";

export const restartTest = () => {
  return (dispatch) => {
    dispatch(testActions.setShowStartBtn(true));
    dispatch(testActions.setShowRemainingTime(true));
    dispatch(testActions.setIsAnalyzing(false));
    dispatch(testActions.setRemainingTime(2));
    dispatch(testActions.setIsTimeIsUp(false));
    // dispatch(testActions.setIsRecording(false));
    dispatch(testActions.setIsWordsCountReceived(false));
    dispatch(testActions.setSelectedOptfromList(""));
    dispatch(testActions.resetCountdownPercent(100));
    dispatch(testActions.setTranscript(null));
    dispatch(testActions.setIsTranscriptError(false));
    dispatch(testActions.setIsTranscriptReceived(false));
    dispatch(testActions.setIsOptionSelected(false));
  };
};

// dispatch(testActions.setShowInstructions(false));
// dispatch(testActions.setShowCatergoryForm(false));
// dispatch(testActions.setShowCountdown(false));
