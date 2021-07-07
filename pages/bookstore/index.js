import React, { useEffect, Fragment } from "react";
import Navbar from "../../components/Common_Layout/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { createCheckout } from "../../store/bookstoreSlice";
import { fetchCheckout } from "../../store/bookstoreSlice";
import { fetchAllProducts } from "../../store/bookstoreSlice";
import Client from "shopify-buy";
import Link from "next/link";
import { useStyles } from "../../components/BookStore/bookstore_styles";
import Collections from "../../components/BookStore/Collections/Collections";
import SearchPanel from "../../components/BookStore/SearchPanel/SearchPanel";

function BookStorePage() {
  const classes = useStyles();
  return (
    <Fragment>
      <div>
        <Navbar />
        <SearchPanel />
        <Collections />
      </div>
    </Fragment>
  );
}

export default BookStorePage;

// const dispatch = useDispatch();
// const products = useSelector(state => state.bookstore.products)

// useEffect(() => {
//   if (localStorage.checkout_id) {
//     dispatch(fetchCheckout(localStorage.checkout_id));
//   } else {
//     dispatch(createCheckout());
//   }
// }, []);

// useEffect(() => {
//   dispatch(fetchAllProducts())
// }, [fetchAllProducts])

// console.log(process.env.SHOPIFY_DOMAIN)

// if(!products) return <div>loading..</div> //FIXME add loading modal

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
