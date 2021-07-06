import React, { useEffect } from "react";
import Navbar from "../../components/Common_Layout/Navbar/Navbar";
// Initializing a client to return content in the store's primary language
import { useDispatch } from "react-redux";
import { createCheckout } from "../../store/bookstoreSlice";
import { fetchCheckout } from "../../store/bookstoreSlice";

function BookStorePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.checkout_id) {
      dispatch(fetchCheckout(localStorage.checkout_id));
    } else {
      dispatch(createCheckout());
    }
  }, [localStorage]);

  return (
    <div>
      <Navbar />
      <h1>Bookstore</h1>
    </div>
  );
}

export default BookStorePage;
