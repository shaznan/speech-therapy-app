import { BuildRounded } from "@material-ui/icons";
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
// import { useSelector } from "react-redux";

//update UserData
export const fetchUserById = createAsyncThunk(
  "user/fetchUserById",
  async (userId) => {
    return axios
      .get("/api/UserData/RetreiveUserData", {
        params: {
          userId: userId,
        },
      })
      .then((res) => {
        return res.data;
      });
  }
);

export const updateUserData = createAsyncThunk(
  "user/updateUserData",
  async (user) => {
    return axios
      .post("/api/UserData/updateUserData", {
        user,
      })
      .then((res) => res.json());
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    entities: [
      {
        email: "",
        localId: "",
        nickName: "",
        WordsCount: [],
        averageScore: null,
        scoreAvgeCriteria: null,
        highScore: null,
        changeOverPrevScore: null,
        isLoggedIn: false,
      },
    ],
    loading: "idle",
    token: "",
    isLoggedIn: false,
  },
  reducers: {
    setNickName(state, action) {
      state.entities[0].nickName = action.payload;
    },
    setEmail(state, action) {
      state.entities[0].email = action.payload;
    },
    setLocalId(state, action) {
      state.entities[0].localId = action.payload;
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
      let entities = state.entities[0];
      if (entities.averageScore <= 10) {
        entities.scoreAvgeCriteria = "Poor";
      }
      if (entities.averageScore > 10 && entities.averageScore <= 15) {
        entities.scoreAvgeCriteria = " Fair";
      }
      if (entities.averageScore > 15 && entities.averageScore <= 20) {
        entities.scoreAvgeCriteria = "Good";
      }
      if (entities.averageScore > 20 && entities.averageScore <= 30) {
        entities.scoreAvgeCriteria = "Very Good";
      }
      if (entities.averageScore > 30) {
        entities.scoreAvgeCriteria = "Excellent";
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
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    loginHandler(state, action) {
      state.token = action.payload;
    },
    logoutHandler(state) {
      state.token = "";
      state.entities[0].email = "";
      state.entities[0].localId = "";
      state.entities[0].nickName = "";
      state.entities[0].WordsCount = [];
      state.entities[0].averageScore = null;
      state.entities[0].scoreAvgeCriteria = null;
      state.entities[0].highScore = null;
      state.entities[0].changeOverPrevScore = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled),
      (state, action) => {
        state.entities[0] = action.payload;
      };
  },
  extraReducers: {
    [fetchUserById.fulfilled]: (state, action) => {
      state.entities[0] = action.payload;
      // console.log(action.payload);
    },
  },
  // {
  //   [updateUserData.fulfilled]: (state) => {
  //     state.loading = "success";
  //   },
  //   [updateUserData.rejected]: (state) => {
  //     state.loading = "failed";
  //   },
  //   // [fetchUserById.fulfilled]: (state)=>{

  //   // }
  // },
});

export const userSlice_Actions = userSlice.actions;

export default userSlice;
