import React from "react";
import { useGetProductsQuery } from "../redux/api/productsApi";
import Navbar from "../components/Navbar/Navbar";
import Product from "../components/Product";
import { Loader } from "@mantine/core";
import Filter from "../components/Filter";

const Shop = () => {
  const { data: products } = useGetProductsQuery();
  // console.log(products);

  if (products?.length) {
    return (
      <div className="flex flex-col dark:bg-gray-900 dark:text-white gap-5">
        <Navbar />
        <Filter />
        <div className=" flex w-screen dark:bg-gray-900 h-[100%] flex-wrap justify-center  gap-10 ">
          {products?.map((p) => {
            return <Product key={p?.id} {...p} />;
          })}
        </div>
      </div>
    );
  }
  return (
    <div className="">
      <Navbar />
      <div className=" flex w-screen h-screen dark:bg-gray-800 justify-center items-center">
        <Loader color="grape" size="xl" variant="bars" />
      </div>
    </div>
  );
};

export default Shop;
