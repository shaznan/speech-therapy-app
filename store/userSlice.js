import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    nickName: "",
    WordsCount: [],
    averageScore: null,
    scoreAvgeCriteria: null,
    highScore: null,
    changeOverPrevScore: null,
  },
  reducers: {
    setNickName(state, action) {
      state.nickName = action.payload;
    },
    setNickName(state, action) {
      state.nickName = action.payload;
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
  },
});

export const userSlice_Actions = userSlice.actions;

export default userSlice;
