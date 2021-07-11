import React, { useEffect } from "react";
import {
  fetchAllProducts,
  fetchProductWithHandle,
} from "../../store/bookstoreSlice";
import { addItemToCheckout } from "../../store/bookstoreSlice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Grid from "@material-ui/core/Grid";
import { Fragment } from "react";
import { useStyles } from "../../components/BookStore/bookstore_styles";
import Navbar from "../../components/Common_Layout/Navbar/Navbar";
import Client from "shopify-buy";

const client = Client.buildClient({
  domain: process.env.SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.SHOPIFY_API,
});

function productpage(props) {
  console.log(props);
  const dispatch = useDispatch();
  const classes = useStyles();
  const router = useRouter();
  const product = useSelector((state) => state.bookstore.product);
  const handle = router.query.productpage;

  useEffect(() => {
    dispatch(fetchProductWithHandle(handle));
  }, [fetchProductWithHandle, handle]);

  // if (!product) return <div>loading...</div>; //FIXME: create loading modal

  return (
    <Fragment>
      <Navbar />
      <Grid container className={classes.productpage_cont}>
        <Grid item md={6}>
          {/* {product.images[0].src} */}
        </Grid>
        <Grid item md={6}></Grid>
      </Grid>
    </Fragment>
  );
}

export async function getStaticPaths() {
  const products = await client.product.fetchAll(100);
  const handle = products.map((product) => ({
    params: { productpage: product.handle },
  }));

  // console.log(handle);

  return {
    fallback: "blocking",
    paths: handle,
  };
}

export async function getStaticProps(context) {
  const productHandle = context.params.productpage;
  console.log(productHandle);

  const selectedProduct = await client.product.fetchByHandle(productHandle);

  return {
    props: {
      id: selectedProduct.id,
      images: [{ src: selectedProduct.images[0].src }],
      variants: [{ price: selectedProduct.variants[0].price }],
      title: selectedProduct.title,
      handle: selectedProduct.handle,
    },
  };
}

export default productpage;
