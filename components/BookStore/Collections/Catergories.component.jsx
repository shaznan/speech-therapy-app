import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../bookstore_styles";
import { bookstoreSlice_Actions } from "../../../store/bookstoreSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllProducts } from "../../../store/bookstoreSlice";
import { fetchProductsByType } from "../../../store/bookstoreSlice";
import { fetchAllCollections } from "../../../store/bookstoreSlice";

function Catergories({ catergoryItems }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);
  const selectedCatergory = useSelector(
    (state) => state.bookstore.selectedCatergory,
  );
  const bookCollections = useSelector(
    (state) => state.bookstore.bookCollections,
  );
  const onClickHandler = (index, event) => {
    setActiveIndex(index);
    if (event.target.id === "All") {
      dispatch(bookstoreSlice_Actions.setSelectedCatergory(null));
    } else {
      dispatch(bookstoreSlice_Actions.setSelectedCatergory(event.target.id));
    }
  };

  useEffect(() => {
    dispatch(fetchAllCollections());
  }, []);

  useEffect(() => {
    if (bookCollections !== null && selectedCatergory !== null) {
      const collectionId = bookCollections.find((collection) => {
        return collection.collectionName === selectedCatergory;
      });
      dispatch(fetchProductsByType(collectionId.id));
    }
    if (selectedCatergory === null) {
      dispatch(fetchAllProducts());
    }
    // }
  }, [selectedCatergory, bookCollections]);

  return (
    <Fragment>
      <Grid container className={classes.catergories_cont} spacing={0}>
        <Grid item md={5} className={classes.catergory}>
          {catergoryItems.map((catergory, i) => (
            <Grid
              item
              id={catergory.id}
              md={2}
              key={i}
              className={`${activeIndex === i && classes.catergory_active} ${
                classes.caterory_item
              }`}
              onClick={(e) => {
                onClickHandler(i, e);
              }}>
              {catergory.itemName}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Catergories;
