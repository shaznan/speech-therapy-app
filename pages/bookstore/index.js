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

const client = Client.buildClient({
  domain: process.env.SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.SHOPIFY_API,
});

function BookStorePage(props) {
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state) => state.bookstore.isCartOpen);

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  //hydrate store with book collection on initial render
  useEffect(() => {
    dispatch(bookstoreSlice_Actions.setProducts(props.products));
  }, []);

  return (
    <Fragment>
      <div>
        <Navbar />
        {isLoggedIn && (
          <div>
            <CartBtn />
            {isCartOpen && <Cart />}
            <Header />
            <Collections />
          </div>
        )}
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
  };
}

export default BookStorePage;
