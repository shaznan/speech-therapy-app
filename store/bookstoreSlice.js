import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Client from "shopify-buy";

const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API,
});

export const createCheckout = createAsyncThunk(
  "user/createCheckout",
  async () => {
    client.checkout.create().then((checkout) => {
      localStorage.setItem("checkout_id", checkout.id);
      return checkout;
    });
  }
);

export const fetchCheckout = createAsyncThunk(
  "user/fetchCheckout",
  async (checkoutId) => {
    client.checkout.fetch(checkoutId).then((checkout) => {
      return checkout;
    });
  }
);

export const addItemToCheckout = createAsyncThunk(
  "user/addItemToCheckout",
  async (userId) => {
    return axios
      .get("/api//", {
        params: {
          userId: userId,
        },
      })
      .then((res) => {
        return res.data;
      });
  }
);

export const removeLineItem = createAsyncThunk(
  "user/removeLineItem",
  async (lineItemId) => {
    return axios
      .get("/api//", {
        params: {
          userId: userId,
        },
      })
      .then((res) => {
        return res.data;
      });
  }
);

export const fetchAllProducts = createAsyncThunk(
  "user/fetchAllProducts",
  async () => {
    client.product.fetchAll().then((products) => {
      return products;
    });
  }
);

export const fetchProductWithHandle = createAsyncThunk(
  "user/fetchProductWithHandle",
  async (handle) => {
    client.product.fetchByHandle(handle).then((product) => {
      return product;
    });
  }
);

const bookstoreSlice = createSlice({
  name: "bookstore",
  initialState: {
    product: {},
    products: [],
    checkout: {},
    isCartOpen: false,
    isMenuOpen: false,
    loading: "idle",
  },
  reducers: {
    closeCart: (state, action) => {},
    openCart: (state, action) => {},
    closeMenu: (state, action) => {},
    openMenue: (state, action) => {},
  },
  extraReducers: {
    //fetchAllproducts
    [fetchAllProducts.pending]: (state) => {
      state.loading = "loading";
    },
    [fetchAllProducts.fulfilled]: (state, action) => {
      state.loading = "success";
      state.products = action.payload;
    },
    [fetchAllProducts.rejected]: (state) => {
      state.loading = "failed";
    },
    //fetchProductsWithHandle
    [fetchProductWithHandle.pending]: (state) => {
      state.loading = "loading";
    },
    [fetchProductWithHandle.fulfilled]: (state, action) => {
      state.loading = "success";
      state.product = action.payload;
    },
    [fetchProductWithHandle.rejected]: (state) => {
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
