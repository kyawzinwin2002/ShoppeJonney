import React from 'react'
import { useGetProductsQuery } from '../redux/api/productsApi'
import Navbar from '../components/Navbar/Navbar';
import Product from '../components/Product';

const Shop = () => {
    const {data : products} = useGetProductsQuery()
    console.log(products);
  return (
    <div>
        <Navbar/>
        <div className=" py-10 flex flex-wrap w-screen h-screen justify-center gap-10">
            {products?.map(p => {
                return (
                    <Product key={p?.id} {...p} />
                )
            })}
        </div>
    </div>
  )
}

export default Shop