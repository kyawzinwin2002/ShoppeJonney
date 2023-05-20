import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar/Navbar';
import FavoriteDetail from '../components/FavoriteDetail';

const Favorite = () => {
  const favorite = useSelector(state => state.productSlice.favorite)
  // console.log(favorite);
  return (
    <div>
      <Navbar />
      <div className=" flex w-screen h-screen flex-wrap justify-center py-10 gap-10 ">
        {favorite?.map((p) => {
          return <FavoriteDetail key={p?.id} {...p} />;
        })}
      </div>
    </div>
  );
}

export default Favorite