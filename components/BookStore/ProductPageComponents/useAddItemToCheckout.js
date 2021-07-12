import React, { useState } from "react";
import Client from "shopify-buy";
import { useSelector } from "react-redux";

const client = Client.buildClient({
  domain: process.env.SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.SHOPIFY_API,
});

function useAddItemToCheckout() {
  const product = useSelector((state) => state.bookstore.product);
  const checkout = useSelector((state) => state.bookstore.checkout);
  const selectedProductQty = useSelector(
    (state) => state.bookstore.selectedProductQty,
  );

  const [newCheckout, setNewCheckout] = useState(null);
  const [isError, setIsError] = useState(false);
  const lineItemsToAdd = [
    {
      variantId: product.variantId,
      quantity: parseInt(selectedProductQty, 10),
    },
  ];
  const addSelectedItem = () => {
    client.checkout
      .addLineItems(checkout.id, lineItemsToAdd)
      .then((checkout) => {
        console.log(checkout);
        setNewCheckout(checkout);
      })
      .catch((err) => {
        setIsError(true);
      });
  };

  return [isError, newCheckout, addSelectedItem];
}

export default useAddItemToCheckout;
