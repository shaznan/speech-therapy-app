import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../../bookstore_styles";
import { bookstoreSlice_Actions } from "../../../../store/bookstoreSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllProducts } from "../../../../store/bookstoreSlice";
import { fetchProductsByType } from "../../../../store/bookstoreSlice";
import { fetchAllCollections } from "../../../../store/bookstoreSlice";
import ExpandedCatergory from "./ExpandedCatergory.component";
import DropdownCatergory from "./DropdownCatergory.component";
import useWindowDimensions from "../../../useWindowDimension";

function Catergories({ catergoryItems }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { screenWidth } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);
  const selectedCatergory = useSelector(
    (state) => state.bookstore.selectedCatergory,
  );
  const bookCollections = useSelector(
    (state) => state.bookstore.bookCollections,
  );

  const switchCatergoryHandler = (index, event) => {
    setActiveIndex(index);
    if (event.target.id === "All") {
      dispatch(bookstoreSlice_Actions.setSelectedCatergory(null));
    } else {
      dispatch(bookstoreSlice_Actions.setSelectedCatergory(event.target.id));
    }
  };

  //fetch all collection names with id's on initial load
  useEffect(() => {
    dispatch(fetchAllCollections());
  }, []);

  useEffect(() => {
    if (bookCollections !== null && selectedCatergory !== null) {
      //find the collection id of the selected catergory
      const collectionId = bookCollections.find((collection) => {
        return collection.collectionName === selectedCatergory;
      });
      //fetch all products in selected collection
      dispatch(fetchProductsByType(collectionId.id));
    }
    //if no catergory selected, fetch all products
    if (selectedCatergory === null) {
      dispatch(fetchAllProducts());
    }
    // }
  }, [selectedCatergory, bookCollections]);

  return (
    <Grid item md={12}>
      <Grid container className={classes.catergories_cont} spacing={0}>
        {screenWidth > 800 ? (
          //for desktop view
          <ExpandedCatergory
            catergoryItems={catergoryItems}
            activeIndex={activeIndex}
            switchCatergoryHandler={switchCatergoryHandler}
          />
        ) : (
          //for mobile view
          <DropdownCatergory
            catergoryItems={catergoryItems}
            activeIndex={activeIndex}
            switchCatergoryHandler={switchCatergoryHandler}
          />
        )}
      </Grid>
    </Grid>
  );
}

export default Catergories;
