import { createSlice } from "@reduxjs/toolkit";

const performTestSlice = createSlice({
  name: "performtest",
  initialState: {
    showStartBtn: true,
    showInstructions: false,
    showCatergoryForm: false,
    showCountdown: false,
    showRemainingTime: true,
    //select catergory form
    isAlphabetChecked: true,
    isRandomChecked: false,
    listOfAlphabets: "abcdefghijklmnopqrstuvwxyz",
    topicsToChooseFrom: [
      "Animals",
      "Countries",
      "Fruits",
      "Sports",
      "occupation",
      "carmanufacturers",
      "colour",
    ],
    selectedOptfromList: "",
    isOptionSelected: false,
    isRecording: false,
    //displayremainingtime component
    isTimeIsUp: false,
    remainingTime: 2,
    countdownPercent: 100,
    //userecorder component
    mediaPermisson: null,
    transcript: null,
    isAnalyzing: false,
    isTranscriptError: false,
    //data validation: words start with letter
    WordsCount: [],
    averageScore: null,
    scoreAvgeCriteria: null,
    highScore: null,
    changeOverPrevScore: null,
    isWordsCountReceived: false,
    isTranscriptReceived: false,
    //login
    isLoggedIn: false,
  },
  reducers: {
    setShowStartBtn: (state, action) => {
      state.showStartBtn = action.payload;
    },
    setShowInstructions: (state, action) => {
      state.showInstructions = action.payload;
    },
    setShowCatergoryForm: (state, action) => {
      state.showCatergoryForm = action.payload;
    },
    toggleCheckbox: (state, action) => {
      action.payload === "alphabet"
        ? (state.isAlphabetChecked = !state.isAlphabetChecked) &&
          (state.selectedOptfromList = "")
        : action.payload === "random"
        ? (state.isRandomChecked = !state.isRandomChecked) &&
          (state.selectedOptfromList = "")
        : "";
    },

    setSelectedOptfromList: (state, action) => {
      state.selectedOptfromList = action.payload;
    },
    setIsOptionSelected: (state, action) => {
      state.isOptionSelected = action.payload;
    },
    setShowCountdown(state, action) {
      state.showCountdown = action.payload;
    },
    setShowRemainingTime(state, action) {
      state.showRemainingTime = action.payload;
    },
    setIsRecording(state) {
      state.isRecording = !state.isRecording;
    },
    //useRecorder component
    setMediaPermission(state, action) {
      state.mediaPermisson = action.payload;
    },
    setTranscript(state, action) {
      state.transcript = action.payload;
    },
    setIsTimeIsUp(state, action) {
      state.isTimeIsUp = action.payload;
    },
    setIsAnalyzing(state, action) {
      state.isAnalyzing = action.payload;
    },
    setWordsCount(state, action) {
      state.WordsCount = [...state.WordsCount, action.payload];
    },
    setAverageScore(state) {
      if (state.WordsCount.length === 0) return;
      let total = 0;
      state.WordsCount.map((score) => {
        total += score.wordsMatch;
      });
      state.averageScore = (total / state.WordsCount.length).toFixed(2);
    },
    setScoreAvgeCriteria(state) {
      if (state.averageScore <= 10) {
        state.scoreAvgeCriteria = "Poor";
      }
      if (state.averageScore > 10 && state.averageScore <= 15) {
        state.scoreAvgeCriteria = " Fair";
      }
      if (state.averageScore > 15 && state.averageScore <= 20) {
        state.scoreAvgeCriteria = "Good";
      }
      if (state.averageScore > 20 && state.averageScore <= 30) {
        state.scoreAvgeCriteria = "Very Good";
      }
      if (state.averageScore > 30) {
        state.scoreAvgeCriteria = "Excellent";
      }
    },
    setHighScore(state) {
      let highScore = 0;
      state.WordsCount.map((score) => {
        if (score.wordsMatch > highScore) {
          return (highScore = score.wordsMatch);
        }
      });
      state.highScore = highScore;
    },

    setChangeOverPrevScore(state) {
      if (state.WordsCount.length < 2) return;
      const currentTestScore =
        state.WordsCount[state.WordsCount.length - 1].wordsMatch;
      const prevTestScore =
        state.WordsCount[state.WordsCount.length - 2].wordsMatch;
      if (prevTestScore !== 0) {
        state.changeOverPrevScore =
          ((currentTestScore - prevTestScore) / prevTestScore) * 100;
      }
    },

    setIsWordsCountReceived(state, action) {
      state.isWordsCountReceived = action.payload;
    },
    setIsTranscriptReceived(state, action) {
      state.isTranscriptReceived = action.payload;
    },
    setIsTranscriptError(state, action) {
      state.isTranscriptError = action.payload;
    },
    decrementRemainingTime(state) {
      state.remainingTime = state.remainingTime - 1;
    },
    setRemainingTime(state, action) {
      state.remainingTime = action.payload;
    },
    setCountdownPercent(state, action) {
      state.countdownPercent = state.countdownPercent - action.payload;
    },
    resetCountdownPercent(state, action) {
      state.countdownPercent = action.payload;
    },
  },
});

export const testActions = performTestSlice.actions;

export default performTestSlice;
