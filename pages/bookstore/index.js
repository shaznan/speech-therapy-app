import React, { useEffect, Fragment } from "react";
import Navbar from "../../components/Common_Layout/Navbar/Navbar";
import Collections from "../../components/BookStore/Collections/Collections";
import Header from "../../components/BookStore/Header/Header";
import { bookstoreSlice_Actions } from "../../store/bookstoreSlice";
import { useDispatch, useSelector } from "react-redux";
import CartBtn from "../../components/BookStore/CartBtn.component";
import LoginMessage from "../../components/BookStore/LoginMessage/LoginMessage.component";
import Cart from "../../components/BookStore/Cart/Cart";
import Client from "shopify-buy";
import useHydrateState from "../../components/useHydrateState";
import LoadSpinner from "../../components/Common_Layout/loadspinner/loadSpinner";
import AdminToolbar from "../../components/Common_Layout/AdminToolbar/AdminToolbar";
import Footer from "../../components/Common_Layout/Footer/Footer.component";
import useWindowDimensions from "../../components/useWindowDimension";
import CartBtn_footer from "../../components/BookStore/CartBtn_footer.component";

const client = Client.buildClient({
  domain: process.env.SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.SHOPIFY_API,
});

function BookStorePage(props) {
  const dispatch = useDispatch();
  const [hydrateWithLocalStorage] = useHydrateState();
  const isCartOpen = useSelector((state) => state.bookstore.isCartOpen);
  const loading = useSelector((state) => state.bookstore.loading);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const { screenWidth } = useWindowDimensions();
  //hydrate store with book collection on initial render
  useEffect(() => {
    dispatch(bookstoreSlice_Actions.setProducts(props.products));
    hydrateWithLocalStorage();
  }, []);

  return (
    <Fragment>
      <div>
        <AdminToolbar />
        <Navbar />
        <LoadSpinner loading={loading} />
        {/* if logged in show bookstore */}
        {isLoggedIn && (
          <div>
            {screenWidth > 800 ? <CartBtn /> : <CartBtn_footer />}
            {isCartOpen && <Cart />}
            <Header />
            <Collections />
          </div>
        )}
        {/* if !logged in show login msg */}
        {!isLoggedIn && <LoginMessage />}
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  const products = await client.product.fetchAll(20);
  return {
    props: {
      products: products.map((product) => {
        return {
          id: product.id,
          images: [{ src: product.images[0].src }],
          variants: [{ price: product.variants[0].price }],
          title: product.title,
          handle: product.handle,
          // variantId: [{ variantId: product.variants[0].id }],
        };
      }),
    },
    revalidate: 1,
  };
}

export default BookStorePage;
