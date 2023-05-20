import React from 'react'
import { useGetProductsQuery } from '../redux/api/productsApi'
import Navbar from '../components/Navbar/Navbar';
import Product from '../components/Product';
import { Loader } from "@mantine/core";

const Shop = () => {
    const {data : products} = useGetProductsQuery()
    console.log(products);
   
  if (products?.length) {
    return (
      <div>
        <Navbar />
        <div className=" flex w-screen h-screen flex-wrap justify-center py-10 gap-10 ">
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
      <div className=" flex w-screen h-screen justify-center items-center">
        <Loader color="grape" size="xl" variant="bars" />
      </div>
    </div>
  );
}

export default Shop