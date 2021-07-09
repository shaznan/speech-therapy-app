import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "../../Common_Layout/Button/Button";
import { useStyles } from "../bookstore_styles";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "../../../store/bookstoreSlice";
import { useEffect } from "react";

function LoadMoreButton() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [limitCounter, setLimitCounter] = useState(20);

  const loadMoreHandler = (e) => {
    e.preventDefault();
    setLimitCounter((prevState) => prevState + 20);
  };

  useEffect(() => {
    if (limitCounter < 40) {
      return;
    }
    dispatch(fetchAllProducts(limitCounter));
  }, [limitCounter]);

  return (
    <Fragment>
      <Grid item md={12} className={classes.more_btn}>
        <Button
          type="primary"
          text="Load More"
          onClickHandler={loadMoreHandler}
        />
      </Grid>
    </Fragment>
  );
}

export default LoadMoreButton;
