import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useStyles } from "../../components/BookStore/bookstore_styles";
import Navbar from "../../components/Common_Layout/Navbar/Navbar";
import Client from "shopify-buy";
import { bookstoreSlice_Actions } from "../../store/bookstoreSlice";
import ProductPage from "../../components/BookStore/ProductPageComponents/ProductPage";
import Cart from "../../components/BookStore/Cart/Cart";
import useHydrateState from "../../components/useHydrateState";
import LoadSpinner from "../../components/Common_Layout/loadspinner/loadSpinner";
import Footer from "../../components/Common_Layout/Footer/Footer.component";

const client = Client.buildClient({
  domain: process.env.SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.SHOPIFY_API,
});

function productpage(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [hydrateWithLocalStorage] = useHydrateState();
  const isCartOpen = useSelector((state) => state.bookstore.isCartOpen);
  const loading = useSelector((state) => state.bookstore.loading);
  useEffect(() => {
    hydrateWithLocalStorage();
    dispatch(bookstoreSlice_Actions.setProduct(props));
  }, []);

  //if user logs out, redirect to bookstore main page
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/bookstore", null, { shallow: true });
    }
  }, [isLoggedIn]);

  return (
    <div>
      <Navbar />
      <LoadSpinner loading={loading} />
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
    revalidate: 1,
  };
}

export default productpage;
