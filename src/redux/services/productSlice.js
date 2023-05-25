import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  allItems: [],
  cart: [],
  favorite: [],
  search: "",
  mainTotal: 0,
  category: "",
 theme : "light"
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

// {Category}
const KeyThree = "category";
const storedCategory = Cookies.get(KeyThree);
if (storedCategory) {
  initialState.category = storedCategory;
}

// {darkMode}
const KeyFour = "theme";
const storedTheme = Cookies.get(KeyFour)
if (storedTheme){
  initialState.theme = JSON.parse(storedTheme)
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
        state.favorite = state.favorite.filter(
          (item) => item.id !== payload.id
        );
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
      SET_CATEGORY: (state, { payload }) => {
        state.category = payload;
        Cookies.set(KeyThree, state.category);
      },
      REMOVE_ALL_CART: (state) => {
        state.cart = [];
        Cookies.remove(KeyOne);
        state.mainTotal = calcTotal(state.cart);
        Cookies.set(KeyOne, JSON.stringify(state.cart));
      },
      CHANGE_THEME:(state) => {
        if(state.theme === "light"){
          state.theme = "dark"
          Cookies.set(KeyFour,JSON.stringify(state.theme))
        }else{
          state.theme = "light"
          Cookies.set(KeyFour, JSON.stringify(state.theme));

        }
      }
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
  SET_CATEGORY,
  REMOVE_ALL_CART,
  CHANGE_THEME
} = productSlice.actions;
export default productSlice.reducer;
