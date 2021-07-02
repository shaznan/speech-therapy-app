import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteArticleItem = createAsyncThunk(
  "article/deleteArticleItem",
  async (id) => {
    axios.post("/api/Article/DeleteArticle", {
      id,
    });
  }
);

const articleSlice = createSlice({
  name: "article",
  initialState: {
    topicIdSelected: null,
    deleteItemId: null,
    isDeleteClicked: false,
    isVerifiedChecked: true,
    isCommunityChecked: false,
    showArticleForm: false,
    isFormSubmit: false,
    articleForm: {
      isVerified: true,
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
});

export const articleSlice_Actions = articleSlice.actions;

export default articleSlice;
