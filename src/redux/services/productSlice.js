import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  allItems: [],
  cart: [],
  favorite: [],
  search: "",
  mainTotal: 0,
};

// {Cart}
const KeyOne = "cart";
const storedCart = Cookies.get(KeyOne);
if (storedCart) {
  initialState.cart = JSON.parse(storedCart);
  initialState.mainTotal = calcTotal(initialState.cart);
}

function calcTotal(items) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

// {Favorite}
const KeyTwo = "favorite";
const storedFavorite = Cookies.get(KeyTwo);
if (storedFavorite) {
  initialState.favorite = JSON.parse(storedFavorite);
}

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    ADD_ALL_ITEMS: (state, { payload }) => {
      state.allItems = payload;
      Cookies.set("allItems", JSON.stringify(state.allItems));
    },
    ADD_TO_CART: (state, { payload }) => {
      const isExisted = state.cart.find((item) => item.id === payload.id);
      if (isExisted) {
        state;
      } else {
        state.cart = [...state.cart, { ...payload, quantity: 1 }];
        state.mainTotal = calcTotal(state.cart);
        Cookies.set(KeyOne, JSON.stringify(state.cart));
      }
    },
    REMOVE_FROM_CART: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.id !== payload.id);
      state.mainTotal = calcTotal(state.cart);

      Cookies.set(KeyOne, JSON.stringify(state.cart));
    },
    ADD_TO_FAVORITE: (state, { payload }) => {
      const isExisted = state.favorite.find((item) => item.id === payload.id);
      if (isExisted) {
        state;
      } else {
        state.favorite = [...state.favorite, payload];
        Cookies.set(KeyTwo, JSON.stringify(state.favorite));
      }
    },
    REMOVE_FROM_FAVORITE: (state, { payload }) => {
      state.favorite = state.favorite.filter((item) => item.id !== payload.id);
      Cookies.set(KeyTwo, JSON.stringify(state.favorite));
    },
    SET_SEARCH: (state, { payload }) => {
      state.search = payload;
    },
    INCREASE_QTY: (state, { payload }) => {
      state.cart.filter((item) => {
        if (item.id === payload.id) {
          item.quantity++;
        state.mainTotal = calcTotal(state.cart);              
      Cookies.set(KeyOne, JSON.stringify(state.cart));
          
        }
      });
    },
    DECREASE_QTY: (state, { payload }) => {
      state.cart.filter((item) => {
        if (item.id === payload.id) {
          if (item.quantity > 1) {
            item.quantity--;
        state.mainTotal = calcTotal(state.cart);              

      Cookies.set(KeyOne, JSON.stringify(state.cart));

          }
        }
      });
    },
  },
});

export const {
  ADD_ALL_ITEMS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
  SET_SEARCH,
  INCREASE_QTY,
  DECREASE_QTY,
} = productSlice.actions;
export default productSlice.reducer;
