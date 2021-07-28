import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useEffect, useState } from "react";
import { useStyles } from "../AdminDashboard_styles";
import { Fragment } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { adminSlice_Actions } from "../../../store/adminSlice";
import { fetchArticleData } from "../../../store/articlesSlice";
import { adminDeleteArticle } from "../../../store/adminSlice";
import LoadSpinner from "../../Common_Layout/loadspinner/loadSpinner";
import DeleteSuccessModal from "./DeleteSuccessModal.component";

const columns = [
  { field: "article", headerName: "Articles", width: 500 },
  {
    field: "uuid",
    headerName: "UUID",
    width: 500,
    editable: false,
  },
];

export default function DataGridDemo() {
  const classes = useStyles();
  const [selectionModel, setSelectionModel] = useState([]);
  const dispatch = useDispatch();
  const [rows, setRows] = useState(null);
  const articlesData = useSelector((state) => state.article.articlesData);
  const isDeleteChecked = useSelector(
    (state) => state.adminDashboard.isDeleteChecked,
  );
  const userId = useSelector((state) => state.user.entities[0].localId);
  const loading = useSelector((state) => state.adminDashboard.loading);

  // fetch updated article list after deleting item
  useEffect(() => {
    dispatch(fetchArticleData());
  }, [loading]);


  useEffect(() => {
    if (!articlesData) return;
    setRows(
      articlesData.map((article) => {
        return {
          id: article.articleId,
          article: article.article.title,
          uuid: article.articleId,
        };
      }),
    );
  }, [articlesData]);

  //show delete btn only when item is selected
  useEffect(() => {
    selectionModel.length !== 0
      ? dispatch(adminSlice_Actions.setIsDeleteChecked(true))
      : dispatch(adminSlice_Actions.setIsDeleteChecked(false));
  }, [selectionModel]);

  const itemSelectionHandler = (newSelection) => {
    setSelectionModel(newSelection.selectionModel);
  };

  const deletItemseHandler = () => {
    const articleId = selectionModel.map((id) => {
      return { articleId: id };
    });
    const ArticleData = { articles: articleId, userId: userId };
    dispatch(adminDeleteArticle(ArticleData));
  };

  return (
    <Fragment>
      <LoadSpinner loading={loading} />
      <DeleteSuccessModal loading={loading} />
      <div className={classes.articleTable_cont}>
        {rows && (
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
            disableColumnSelector
            onSelectionModelChange={itemSelectionHandler}
            selectionModel={selectionModel}
          />
        )}
        {isDeleteChecked && (
          <div className={classes.btn_cont}>
            <Button
              onClick={deletItemseHandler}
              className={classes.article_btn}>
              <DeleteIcon /> Delete
            </Button>
          </div>
        )}
      </div>
    </Fragment>
  );
}
