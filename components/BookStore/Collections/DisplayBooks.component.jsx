import React, { Fragment, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../bookstore_styles";
import {
  fetchCheckout,
  fetchAllProducts,
  createCheckout,
} from "../../../store/bookstoreSlice";
import { useSelector, useDispatch } from "react-redux";
import LoadMoreButton from "./LoadMoreButton.componrnt";
import { useState } from "react";
import DisplayBooksProductImg from "./DisplayBooksProductImg.component";
import axios from "axios";
import { userSlice_Actions } from "../../../store/userSlice";

function DisplayBooks() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const initialProducts = useSelector((state) => state.bookstore.products);
  const searchboxQuery = useSelector((state) => state.bookstore.searchboxQuery);
  const [products, setProducts] = useState(initialProducts);
  const localId = useSelector((state) => state.user.entities[0].localId);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const checkout_id = useSelector(
    (state) => state.user.entities[0].checkout_id,
  );

  const checkout = useSelector((state) => state.bookstore.checkout);

  console.log(`check out id: ${checkout_id}`);
  useEffect(() => {
    if (!isLoggedIn) return;
    //when sign in, fetch existing checkout
    if (checkout_id !== null) {
      console.log(checkout_id);
      dispatch(fetchCheckout(checkout_id));
    } else {
      //when signup create checkout
      dispatch(createCheckout(localId));
      if (Object.keys(checkout).length !== 0) {
        dispatch(userSlice_Actions.setCheckoutId(checkout.id));
      }
    }
  }, [isLoggedIn, checkout_id]);

  //Filter product items based on search query from search box
  useEffect(() => {
    if (!searchboxQuery.length) {
      setProducts(initialProducts);
    } else {
      const filteredProducts = initialProducts.filter((product) => {
        return product.title
          .toLowerCase()
          .includes(searchboxQuery.toLowerCase());
      });
      setProducts(filteredProducts);
    }
  }, [searchboxQuery, initialProducts]);

  //   if(!products) return <div>loading..</div> //FIXME add loading modal

  return (
    <Fragment>
      <Grid container spacing={0}>
        <Grid item md={12} className={classes.displaybook_cont}>
          <Grid container className={classes.displaybooks}>
            {products.map((product) => (
              <Grid
                key={product.id}
                item
                md={2}
                xs={6}
                className={classes.bookcard}>
                <DisplayBooksProductImg product={product} />
                <div className={classes.book_price}>
                  {`USD ${product.variants[0].price}`}
                </div>
                <div className={classes.book_title}>{product.title}</div>
              </Grid>
            ))}
            <LoadMoreButton />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default DisplayBooks;
