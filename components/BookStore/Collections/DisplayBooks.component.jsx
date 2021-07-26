import React, { Fragment, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../bookstore_styles";
import { fetchCheckout, createCheckout } from "../../../store/bookstoreSlice";
import { useSelector, useDispatch } from "react-redux";
import LoadMoreButton from "./LoadMoreButton.componrnt";
import DisplayBooksProductImg from "./DisplayBooksProductImg.component";
import { userSlice_Actions } from "../../../store/userSlice";
import Fade from "react-reveal/Fade";

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

  const isCheckoutAvailable = useSelector(
    (state) => state.bookstore.isCheckoutAvailable,
  );

  const checkout = useSelector((state) => state.bookstore.checkout);

  // when sign in, fetch existing checkout & when signup create checkout
  useEffect(() => {
    if (!isLoggedIn) return;
    if (checkout_id !== null) {
      dispatch(fetchCheckout(checkout_id));
    } else {
      dispatch(createCheckout(localId));
    }
  }, [isLoggedIn, checkout_id]);

  //if checkout is available, update local state with check out ID
  useEffect(() => {
    if (isCheckoutAvailable) {
      dispatch(userSlice_Actions.setCheckoutId(checkout.id));
    }
    const existingLocalState = JSON.parse(localStorage.getItem("state"));
    const LocalstateWithCheckoutId = Object.assign({}, existingLocalState, {
      checkout_id: checkout.id,
    });

    localStorage.setItem("state", JSON.stringify(LocalstateWithCheckoutId));
  }, [isCheckoutAvailable]);

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

  return (
    <Fragment>
      <Grid container spacing={0}>
        <Grid item md={12} className={classes.displaybook_cont}>
          <Grid container className={classes.displaybooks}>
            {products.map((product, i) => (
              <Grid
                key={product.id}
                item
                lg={2}
                md={3}
                sm={6}
                className={classes.bookcard}>
                <Fade duration={150 + i * 150} bottom>
                  <DisplayBooksProductImg product={product} />
                  <div className={classes.book_price}>
                    {`LKR ${product.variants[0].price}`}
                  </div>
                  <div className={classes.book_title}>{product.title}</div>
                </Fade>
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
