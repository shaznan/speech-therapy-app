import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../bookstore_styles";

function DisplayBooks() {
  const classes = useStyles();
  const products = [
    {
      id: "A0098",
      title: "How to become better at brain fog?",
      price: "$24.99",
      imgsrc:
        "https://images-na.ssl-images-amazon.com/images/I/51AHIHam17L._SX329_BO1,204,203,200_.jpg",
    },
    {
      id: "A0096",
      title: "Nigga bout ya?",
      price: "$24.99",
      imgsrc:
        "https://images-na.ssl-images-amazon.com/images/I/51AHIHam17L._SX329_BO1,204,203,200_.jpg",
    },
    {
      id: "A0094",
      title: "Whats yp ma brither?",
      price: "$24.99",
      imgsrc:
        "https://images-na.ssl-images-amazon.com/images/I/51AHIHam17L._SX329_BO1,204,203,200_.jpg",
    },
    {
      id: "A00981",
      title: "Hey bou, you good, thats what am talking about kid, thats what!?",
      price: "$24.99",
      imgsrc:
        "https://images-na.ssl-images-amazon.com/images/I/51AHIHam17L._SX329_BO1,204,203,200_.jpg",
    },
    {
      id: "A00981",
      title: "Hey bou, you good, thats what am talking about kid, thats what!?",
      price: "$24.99",
      imgsrc:
        "https://images-na.ssl-images-amazon.com/images/I/51AHIHam17L._SX329_BO1,204,203,200_.jpg",
    },
    {
      id: "A00981",
      title: "Hey bou, you good, thats what am talking about kid, thats what!?",
      price: "$24.99",
      imgsrc:
        "https://images-na.ssl-images-amazon.com/images/I/51AHIHam17L._SX329_BO1,204,203,200_.jpg",
    },
    {
      id: "A00981",
      title: "Hey bou, you good, thats what am talking about kid, thats what!?",
      price: "$24.99",
      imgsrc:
        "https://images-na.ssl-images-amazon.com/images/I/51AHIHam17L._SX329_BO1,204,203,200_.jpg",
    },
    {
      id: "A00981",
      title: "Hey bou, you good, thats what am talking about kid, thats what!?",
      price: "$24.99",
      imgsrc:
        "https://images-na.ssl-images-amazon.com/images/I/51AHIHam17L._SX329_BO1,204,203,200_.jpg",
    },
    {
      id: "A00981",
      title: "Hey bou, you good, thats what am talking about kid, thats what!?",
      price: "$24.99",
      imgsrc:
        "https://images-na.ssl-images-amazon.com/images/I/51AHIHam17L._SX329_BO1,204,203,200_.jpg",
    },
    {
      id: "A00981",
      title: "Hey bou, you good, thats what am talking about kid, thats what!?",
      price: "$24.99",
      imgsrc:
        "https://images-na.ssl-images-amazon.com/images/I/51AHIHam17L._SX329_BO1,204,203,200_.jpg",
    },
    {
      id: "A00981",
      title: "Hey bou, you good, thats what am talking about kid, thats what!?",
      price: "$24.99",
      imgsrc:
        "https://images-na.ssl-images-amazon.com/images/I/51AHIHam17L._SX329_BO1,204,203,200_.jpg",
    },
    {
      id: "A00981",
      title: "Hey bou, you good, thats what am talking about kid, thats what!?",
      price: "$24.99",
      imgsrc:
        "https://images-na.ssl-images-amazon.com/images/I/51AHIHam17L._SX329_BO1,204,203,200_.jpg",
    },
    {
      id: "A00981",
      title: "Hey bou, you good, thats what am talking about kid, thats what!?",
      price: "$24.99",
      imgsrc:
        "https://images-na.ssl-images-amazon.com/images/I/51AHIHam17L._SX329_BO1,204,203,200_.jpg",
    },
  ];
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
                <div className={classes.book_imgcont}>
                  <img className={classes.book_img} src={product.imgsrc} />
                </div>
                <div className={classes.book_title}>{product.title}</div>
                <div className={classes.book_price}>{product.price}</div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default DisplayBooks;

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
