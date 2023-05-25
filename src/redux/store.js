import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/productsApi";
import productSlice from "./services/productSlice";
import { authApi } from "./api/authApi";
import authSlice from "./services/authSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    productSlice: productSlice,
    authSlice:authSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      authApi.middleware
    ),
});