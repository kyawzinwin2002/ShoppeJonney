import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/productsApi";
import productSlice from "./services/productSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    productSlice:productSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});