import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Client from "shopify-buy";

const client = Client.buildClient({
  domain: process.env.SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.SHOPIFY_API,
});

export const createCheckout = createAsyncThunk(
  "bookstore/createCheckout",
  async () => {
    return client.checkout.create().then((checkout) => {
      localStorage.setItem("checkout_id", checkout.id);
      return checkout;
    });
  },
);

export const fetchCheckout = createAsyncThunk(
  "bookstore/fetchCheckout",
  async (checkoutId) => {
    return client.checkout.fetch(checkoutId).then((checkout) => {
      return checkout;
    });
  },
);

export const fetchAllProducts = createAsyncThunk(
  "bookstore/fetchAllProducts",
  async (limit) => {
    return client.product.fetchAll(limit).then((products) => {
      return products;
    });
  },
);

export const fetchAllCollections = createAsyncThunk(
  "bookstore/fetchAllCollections",
  async () => {
    return client.collection.fetchAllWithProducts().then((products) => {
      return products;
    });
  },
);

export const fetchProductsByType = createAsyncThunk(
  "bookstore/fetchProductsByType",
  async (collectionId) => {
    return client.collection
      .fetchWithProducts(collectionId, { productsFirst: 10 })
      .then((products) => {
        return products;
      });
  },
);

// export const fetchProductWithHandle = createAsyncThunk(
//   "bookstore/fetchProductWithHandle",
//   async (handle) => {
//     return client.product.fetchByHandle(handle).then((product) => {
//       return product;
//     });
//   },
// );

// export const removeLineItem = createAsyncThunk(
//   "user/removeLineItem",
//   async (lineItemId) => {
//     return axios
//       .get("/api//", {
//         params: {
//           userId: userId,
//         },
//       })
//       .then((res) => {
//         return res.data;
//       });
//   }
// );

const bookstoreSlice = createSlice({
  name: "bookstore",
  initialState: {
    product: {},
    selectedCatergory: null,
    bookCollections: null,
    searchboxQuery: "",
    products: [],
    checkout: {},
    selectedProductQty: 1,
    isCounterExceed: false,
    isCartOpen: false,
    isMenuOpen: false,
    loading: "idle",
  },
  reducers: {
    setSelectedCatergory: (state, action) => {
      state.selectedCatergory = action.payload;
    },
    setSearchboxQuery: (state, action) => {
      state.searchboxQuery = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setCheckOut: (state, action) => {
      state.checkout = action.payload;
    },
    incrementSelectedProductQty: (state) => {
      if (state.selectedProductQty > 4) {
        state.isCounterExceed = true;
      } else {
        state.isCounterExceed = false;
        state.selectedProductQty = state.selectedProductQty + 1;
      }
    },
    decrementSelectedProductQty: (state) => {
      if (state.selectedProductQty < 1) return;
      state.selectedProductQty = state.selectedProductQty - 1;
      state.isCounterExceed = false;
    },
    setIsCounterExceed: (state, action) => {
      state.isCounterExceed = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    toggleOpenCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    closeMenu: (state, action) => {},
    openMenue: (state, action) => {},
  },
  extraReducers: {
    // fetchAllproducts
    [fetchAllProducts.pending]: (state) => {
      state.loading = "loading";
    },
    //TODO:
    [fetchAllProducts.fulfilled]: (state, action) => {
      state.loading = "success";
      state.products = action.payload.map((product) => {
        return {
          id: product.id,
          images: [{ src: product.images[0].src }],
          variants: [{ price: product.variants[0].price }],
          title: product.title,
          handle: product.handle,
          variantId: product.variants[0].id,
        };
      });
      // console.log(action.payload);
    },
    [fetchAllProducts.rejected]: (state) => {
      state.loading = "failed";
    },
    [fetchProductsByType.pending]: (state) => {
      state.loading = "loading";
    },
    [fetchProductsByType.fulfilled]: (state, action) => {
      state.loading = "success";
      console.log(action.payload.products);
      state.products = action.payload.products;
    },
    [fetchProductsByType.rejected]: (state) => {
      state.loading = "failed";
    },
    [fetchAllCollections.pending]: (state) => {
      state.loading = "loading";
    },
    [fetchAllCollections.fulfilled]: (state, action) => {
      state.loading = "success";
      // console.log(action.payload.products);
      state.bookCollections = action.payload.map((collection) => {
        return {
          id: collection.id,
          collectionName: collection.title,
        };
      });
    },

    [fetchAllCollections.rejected]: (state) => {
      state.loading = "failed";
    },

    //createCheckout
    [createCheckout.pending]: (state) => {
      state.loading = "loading";
    },
    [createCheckout.fulfilled]: (state, action) => {
      state.loading = "success";
      state.checkout = action.payload;
    },
    [createCheckout.rejected]: (state) => {
      state.loading = "failed";
    },
    //fetchcheckout
    [fetchCheckout.pending]: (state) => {
      state.loading = "loading";
    },
    [fetchCheckout.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.loading = "success";
      state.checkout = action.payload;
    },
    [fetchCheckout.rejected]: (state) => {
      state.loading = "failed";
    },
  },
});

export const bookstoreSlice_Actions = bookstoreSlice.actions;

export default bookstoreSlice;
