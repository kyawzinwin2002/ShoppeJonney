import React from 'react'
import { useSelector } from 'react-redux';
import { useGetProductsByCatQuery } from '../redux/api/productsApi';
import Navbar from '../components/Navbar/Navbar';
import CatDetail from '../components/CatDetail';

const Category = () => {
   const category = useSelector((state) => state.productSlice.category);
  //  console.log(category);
    const {data} = useGetProductsByCatQuery(category);
    // console.log(data);
  return (
    <div>
      <Navbar />
      <div className=" flex flex-wrap w-screen h-screen dark:bg-gray-900 dark:text-white justify-center py-10 gap-10">
        {data?.map((item) => {
          return <CatDetail key={item?.id} {...item} />;
        })}
      </div>
    </div>
  );
}

export default Category