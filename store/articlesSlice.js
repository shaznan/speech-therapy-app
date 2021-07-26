import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteArticleItem = createAsyncThunk(
  "article/deleteArticleItem",
  async (id) => {
    return axios
      .post("/api/Article/DeleteArticle", {
        id,
      })
      .then((res) => {
        return res.data;
      });
  },
);

export const fetchArticleData = createAsyncThunk(
  "article/fetchArticleData",
  async () => {
    return axios.get("/api/Article/FetchArticleData").then((res) => {
      return res.data;
    });
  },
);

const articleSlice = createSlice({
  name: "article",
  initialState: {
    articlesData: null,
    isArticleError: false,
    articleErrMsg: null,
    topicIdSelected: null,
    deleteItemId: null,
    isDeleteClicked: false,
    isArticleDeleted: false,
    isVerifiedChecked: true,
    isCommunityChecked: false,
    showArticleForm: false,
    isFormSubmit: false,
    loading: "idle",
    articleForm: {
      formTitle: null,
      formCoverImg: null,
      contentBody: {
        entityMap: {},
        blocks: [
          {
            key: "637gr",
            text: "",
            type: "unstyled",
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
          },
        ],
      },
    },
  },
  reducers: {
    setIsArticleError(state, action) {
      state.isArticleError = action.payload;
    },
    setArticleErrMsg(state, action) {
      state.articleErrMsg = action.payload;
    },
    clearError(state) {
      (state.isArticleError = false), (state.articleErrMsg = null);
    },
    setArticles(state, action) {
      state.articlesData = action.payload;
    },
    setTopicIdSelected(state, action) {
      state.topicIdSelected = action.payload;
    },
    setDeleteItem: (state, action) => {
      state.deleteItemId = action.payload;
    },
    toggleIsDeleteClicked: (state) => {
      state.isDeleteClicked = !state.isDeleteClicked;
    },
    toggleCheckbox: (state, action) => {
      action.payload === "verified"
        ? (state.isVerifiedChecked = !state.isVerifiedChecked)
        : action.payload === "community"
        ? (state.isCommunityChecked = !state.isCommunityChecked)
        : "";
    },
    toggleShowArticleForm: (state) => {
      state.showArticleForm = !state.showArticleForm;
    },
    setIsFormSubmit: (state, action) => {
      state.isFormSubmit = action.payload;
    },
    setArticleContentBody: (state, action) => {
      state.articleForm.contentBody = action.payload;
    },
    setArticleFormTitle: (state, action) => {
      state.articleForm.formTitle = action.payload;
    },
    setArticleFormCoverImg: (state, action) => {
      state.articleForm.formCoverImg = action.payload;
    },
  },
  extraReducers: {
    // fetchAllproducts
    [deleteArticleItem.pending]: (state) => {
      state.loading = "loading";
    },
    [deleteArticleItem.fulfilled]: (state, action) => {
      state.loading = "success";
      state.isArticleDeleted = true;
      state.isDeleteClicked = false;
    },
    [deleteArticleItem.rejected]: (state) => {
      state.loading = "failed";
      state.isArticleError = true;
      state.articleErrMsg = "Could not delete article";
    },
    [fetchArticleData.pending]: (state) => {
      state.loading = "loading";
    },
    [fetchArticleData.fulfilled]: (state, action) => {
      state.loading = "success";
      state.isArticleDeleted = false;
      state.articlesData = action.payload;
    },
    [fetchArticleData.rejected]: (state) => {
      state.loading = "failed";
      state.isArticleError = true;
      state.articleErrMsg = "Cannot fetch article data";
    },
  },
});

export const articleSlice_Actions = articleSlice.actions;

export default articleSlice;
