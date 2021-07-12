import React, { useEffect } from "react";
// import {
//   fetchProductWithHandle,
// } from "../../store/bookstoreSlice";
import { addItemToCheckout } from "../../store/bookstoreSlice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Grid from "@material-ui/core/Grid";
import { Fragment } from "react";
import { useStyles } from "../../components/BookStore/bookstore_styles";
import Navbar from "../../components/Common_Layout/Navbar/Navbar";
import Client from "shopify-buy";
import { bookstoreSlice_Actions } from "../../store/bookstoreSlice";
// import { useDispatch } from "react-redux";
import ProductPage from "../../components/BookStore/ProductPageComponents/ProductPage";
import Cart from "../../components/BookStore/Cart/Cart";

const client = Client.buildClient({
  domain: process.env.SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.SHOPIFY_API,
});

function productpage(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const router = useRouter();

  // console.log(props);
  const isCartOpen = useSelector((state) => state.bookstore.isCartOpen);
  useEffect(() => {
    dispatch(bookstoreSlice_Actions.setProduct(props));
  }, []);

  // if (!product) return <div>loading...</div>; //FIXME: create loading modal

  return (
    <div>
      <Navbar />
      {isCartOpen && <Cart />}
      <ProductPage props={props} />
    </div>
  );
}

export async function getStaticPaths() {
  const products = await client.product.fetchAll(100);
  const handle = products.map((product) => ({
    params: { productpage: product.handle },
  }));

  return {
    fallback: "blocking",
    paths: handle,
  };
}

export async function getStaticProps(context) {
  const productHandle = context.params.productpage;

  const selectedProduct = await client.product.fetchByHandle(productHandle);
  console.log(selectedProduct.variants[0].id);

  return {
    props: {
      id: selectedProduct.id,
      images: [{ src: selectedProduct.images[0].src }],
      variants: [{ price: selectedProduct.variants[0].price }],
      title: selectedProduct.title,
      handle: selectedProduct.handle,
      description: selectedProduct.description,
      productType: selectedProduct.productType,
      variantId: selectedProduct.variants[0].id,
    },
  };
}

export default productpage;
