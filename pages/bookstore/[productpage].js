import React, { useEffect } from "react";
import {
  fetchAllProducts,
  fetchProductWithHandle,
} from "../../store/bookstoreSlice";
import { addItemToCheckout } from "../../store/bookstoreSlice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

function productpage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const product = useSelector((state) => state.bookstore.product);
  const handle = router.query.productpage;
  // const handle = router.pathname;
  console.log(handle);

  useEffect(() => {
    dispatch(fetchProductWithHandle(handle));
  }, [fetchProductWithHandle, handle]);

  // if (!product) return <div>loading...</div>; //FIXME: create loading modal

  return (
    <div>
      <h1> product page </h1>
    </div>
  );
}

export default productpage;
