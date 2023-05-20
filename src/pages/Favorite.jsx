import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar/Navbar';
import FavoriteDetail from '../components/FavoriteDetail';
import { Link } from 'react-router-dom';

const Favorite = () => {
  const favorite = useSelector(state => state.productSlice.favorite)
  // console.log(favorite);
if(favorite?.length){
    return (
      <div className=' flex flex-col '>
        <Navbar />
        <div className=" flex w-screen h-screen flex-wrap justify-center py-10 gap-10 ">
          {favorite?.map((p) => {
            return <FavoriteDetail key={p?.id} {...p} />;
          })}
        </div>
      </div>
    );
}
return (
  <div className="flex flex-col">
    <Navbar />
    <div className=" flex w-screen h-screen items-center justify-center ">
      <div className=" flex flex-col items-center gap-5">
        <h1 className=' text-4xl text-violet-500 font-semibold'>You didn't add any favorites yet.</h1>
        <Link to={"/shop"}>
          <button className="  rounded-xl px-5 py-1 text-xl bg-gray-600 text-white">
            Back
          </button>
        </Link>
      </div>
    </div>
  </div>
);
}

export default Favorite