import React, { useEffect, Fragment } from "react";
import Navbar from "../../components/Common_Layout/Navbar/Navbar";
import Collections from "../../components/BookStore/Collections/Collections";
import SearchPanel from "../../components/BookStore/SearchPanel/SearchPanel";
import Client from "shopify-buy";
import { bookstoreSlice_Actions } from "../../store/bookstoreSlice";
import { useDispatch } from "react-redux";

const client = Client.buildClient({
  domain: process.env.SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.SHOPIFY_API,
});

function BookStorePage(props) {
  const dispatch = useDispatch();

  //hydrate store with book collection on initial render
  useEffect(() => {
    dispatch(bookstoreSlice_Actions.setInitialProducts(props.products));
  }, []);

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
        };
      }),
    },
  };
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
