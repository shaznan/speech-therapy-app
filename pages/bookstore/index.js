import React, { useEffect } from "react";
import Navbar from "../../components/Common_Layout/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { createCheckout } from "../../store/bookstoreSlice";
import { fetchCheckout } from "../../store/bookstoreSlice";
import {fetchAllProducts} from "../../store/bookstoreSlice"
import Client from "shopify-buy";
import Link from "next/link";


function BookStorePage() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.bookstore.products)

  useEffect(() => {
    if (localStorage.checkout_id) {
      dispatch(fetchCheckout(localStorage.checkout_id));
    } else {
      dispatch(createCheckout());
    }
  }, []);

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [fetchAllProducts])

  console.log(process.env.SHOPIFY_DOMAIN)

  // if(!products) return <div>loading..</div> //FIXME add loading modal

  return (
    <div>
      <Navbar />
      <h1>Bookstore</h1>
      <div>
        {products.map((product, i)=>(
          <Link href={`/bookstore/${product.handle}`} key={i}>{product.title}</Link>
          //  <div key={i}>{product.title }</div>
        ))}
      </div>
    </div>
  );
}



export default BookStorePage;
