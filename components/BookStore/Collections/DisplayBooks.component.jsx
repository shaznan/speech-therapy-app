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

function DisplayBooks() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const initialProducts = useSelector((state) => state.bookstore.products);
  const searchboxQuery = useSelector((state) => state.bookstore.searchboxQuery);
  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    if (localStorage.checkout_id) {
      dispatch(fetchCheckout(localStorage.checkout_id));
    } else {
      dispatch(createCheckout());
    }
  }, []);

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

// return (
//   <div>
//     <Navbar />
//     <h1>Bookstore</h1>
//     <box>
//       {products.map((product)=>(
//         <Link href={`/bookstore/${product.handle}`} key={product.id}>
//           <div>
//             <div>{product.title}</div>
//             <div>{product.variants[0].price}</div>
//         <img src= {product.images[0].src} /></div>
//         </Link>
//       ))}
//     </box>
//   </div>
// );
