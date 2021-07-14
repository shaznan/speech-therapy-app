import { useState } from "react";
import { useSelector } from "react-redux";
import Client from "shopify-buy";

const client = Client.buildClient({
  domain: process.env.SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.SHOPIFY_API,
});

function useRemoveItem() {
  const checkout = useSelector((state) => state.bookstore.checkout);
  const [removeItemCheckout, setRemoveItemCheckout] = useState(null);
  const [isError, setIsError] = useState(false);

  const removeItemFromCart = (lineItemIdToRemove) => {
    // Remove an item from the checkout
    client.checkout
      .removeLineItems(checkout.id, lineItemIdToRemove)
      .then((checkout) => {
        setRemoveItemCheckout(checkout);
      })
      .catch((err) => {
        setIsError(true);
      });
  };

  return [isError, removeItemCheckout, removeItemFromCart];
}

export default useRemoveItem;
