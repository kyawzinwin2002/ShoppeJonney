import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  tagTypes: ["productsApi"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "https://fakestoreapi.com/products",
      }),
      providesTags: ["productsApi"],
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `https://fakestoreapi.com/products/${id}`,
        
      }),
      providesTags: ["productsApi"],
    }),
  }),
});

export const { useGetProductsQuery,useGetSingleProductQuery } = productsApi;
