import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    entities: [
      {
        token: "",
        nickName: "",
        WordsCount: [],
        averageScore: null,
        scoreAvgeCriteria: null,
        highScore: null,
        changeOverPrevScore: null,
      },
    ],
    loading: "idle",
  },
  reducers: {
    setNickName(state, action) {
      state.entities[0].nickName = action.payload;
    },
    setNickName(state, action) {
      state.entities[0].nickName = action.payload;
    },
    setWordsCount(state, action) {
      state.entities[0].WordsCount = [
        ...state.entities[0].WordsCount,
        action.payload,
      ];
    },
    setAverageScore(state) {
      if (state.entities[0].WordsCount.length === 0) return;
      let total = 0;
      state.entities[0].WordsCount.map((score) => {
        total += score.wordsMatch;
      });
      state.entities[0].averageScore = (
        total / state.entities[0].WordsCount.length
      ).toFixed(2);
    },
    setScoreAvgeCriteria(state) {
      if (state.entities[0].averageScore <= 10) {
        state.entities[0].scoreAvgeCriteria = "Poor";
      }
      if (
        state.entities[0].averageScore > 10 &&
        state.entities[0].averageScore <= 15
      ) {
        state.entities[0].scoreAvgeCriteria = " Fair";
      }
      if (
        state.entities[0].averageScore > 15 &&
        state.entities[0].averageScore <= 20
      ) {
        state.entities[0].scoreAvgeCriteria = "Good";
      }
      if (
        state.entities[0].averageScore > 20 &&
        state.entities[0].averageScore <= 30
      ) {
        state.entities[0].scoreAvgeCriteria = "Very Good";
      }
      if (state.entities[0].averageScore > 30) {
        state.entities[0].scoreAvgeCriteria = "Excellent";
      }
    },
    setHighScore(state) {
      let highScore = 0;
      state.entities[0].WordsCount.map((score) => {
        if (score.wordsMatch > highScore) {
          return (highScore = score.wordsMatch);
        }
      });
      state.entities[0].highScore = highScore;
    },

    setChangeOverPrevScore(state) {
      if (state.entities[0].WordsCount.length < 2) return;
      const currentTestScore =
        state.entities[0].WordsCount[state.entities[0].WordsCount.length - 1]
          .wordsMatch;
      const prevTestScore =
        state.entities[0].WordsCount[state.entities[0].WordsCount.length - 2]
          .wordsMatch;
      if (prevTestScore !== 0) {
        state.entities[0].changeOverPrevScore =
          ((currentTestScore - prevTestScore) / prevTestScore) * 100;
      }
    },
  },
});

export const userSlice_Actions = userSlice.actions;

export default userSlice;
