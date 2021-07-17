import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const adminDeleteArticle = createAsyncThunk(
  "admin/adminDeleteArticle",
  async (articleData) => {
    return axios
      .post("/api/admin/adminDeleteArticle", { articleData })
      .then((res) => {
        return res.data;
      });
  },
);

export const storeGistData = createAsyncThunk(
  "admin/fetchGistData",
  async (data, { rejectWithValue }) => {
    const { gistUrl, catergoryName, localId } = data;
    return axios.get(gistUrl).then((res) => {
      const gistData = res.data;
      axios
        .post("/api/StoreTopicsData", { gistData, catergoryName, localId })
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          return rejectWithValue([], err);
        });
    });
  },
);

const adminSlice = createSlice({
  name: "adminDashboard",
  initialState: {
    isDeleteChecked: false,
    loading: "idle",
    storeGistStatus: "idle",
  },
  reducers: {
    setIsDeleteChecked(state, action) {
      state.isDeleteChecked = action.payload;
    },
    setItemSelected(state, action) {
      state.itemSelected.push(action.payload);
    },
  },
  extraReducers: {
    [adminDeleteArticle.pending]: (state) => {
      state.loading = "loading";
    },
    [adminDeleteArticle.fulfilled]: (state, action) => {
      state.loading = "success";
      state.isDeleteChecked = false;
    },
    [adminDeleteArticle.rejected]: (state) => {
      state.loading = "failed";
    },
    [storeGistData.pending]: (state) => {
      state.loading = "loading";
      state.storeGistStatus = "loading";
    },
    [storeGistData.fulfilled]: (state, action) => {
      state.loading = "success";
      console.log(action.payload);
      state.storeGistStatus = "success";
    },
    [storeGistData.rejected]: (state) => {
      state.loading = "failed";
      state.storeGistStatus = "failed";
    },
  },
});

export const adminSlice_Actions = adminSlice.actions;

export default adminSlice;
