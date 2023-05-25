import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleProductQuery } from '../redux/api/productsApi'
import Navbar from '../components/Navbar/Navbar'
import { AiFillHeart, AiFillStar, AiOutlineHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_CART, ADD_TO_FAVORITE, REMOVE_FROM_CART, REMOVE_FROM_FAVORITE } from '../redux/services/productSlice'
import { BsCartPlus, BsFillCartPlusFill, BsStarFill } from 'react-icons/bs'

const Detail = () => {
  const {id} = useParams()
  const {data} = useGetSingleProductQuery(id)
  console.log(data);
  const dispatch = useDispatch();

  // {Cart}
  const cart = useSelector((state) => state.productSlice.cart);
  const sameItemFromCart = cart.find((item) => item.id === data?.id);
  const addToCartHandler = () => {
    dispatch(ADD_TO_CART(data));
  };
  const removeFromCartHandler = () => {
    dispatch(REMOVE_FROM_CART(data));
  };

  // {Favorite}
  const favorite = useSelector((state) => state.productSlice.favorite);
  const sameItemFromFav = favorite.find((item) => item.id === data?.id);
  const addFavoriteHandler = () => {
    dispatch(ADD_TO_FAVORITE(data));
  };
  const removeFavoriteHandler = () => {
    dispatch(REMOVE_FROM_FAVORITE(data));
  };

  return (
    <div className=" flex flex-col gap-6">
      <Navbar />
      <div className=" flex   gap-5 w-[600px]  item-starts mx-auto justify-center">
        <img
          src={data?.image}
          className=" w-[250px] rounded-md shadow-md"
          alt=""
        />

        <div className=" flex flex-col gap-3 relative">
          <h1 className=" text-3xl text-gray-600 font-semibold">
            {data?.title}
          </h1>
          {sameItemFromFav && (
            <div className=" fav">
              <BsStarFill className=" text-white text-xl bg-violet-500 absolute bottom-1 left-1" />
            </div>
          )}
          <div className=" flex justify-start">
            <h1 className=" px-3 py-2 border-2 text-xl bg-violet-500 text-white">
              {data?.category}
            </h1>
          </div>
          <div className=" flex justify-between items-center">
            <div className=" flex gap-1 items-center">
              <AiFillStar className=" text-yellow-500 text-2xl" />
              <h1 className=" text-xl flex font-normal items-center gap-2">
                {data?.rating.rate}
              </h1>
            </div>
            <p className=" text-xl font-medium">${data?.price}</p>
          </div>
          <p className=" leading-8 text-lg w-[600px]">{data?.description}</p>
          <div className=" flex justify-end items-center gap-3">
            {sameItemFromFav ? (
              <button
                title="Favorite"
                onClick={removeFavoriteHandler}
                className=" text-lg px-2 py-2 border-2 bg-violet-500 border-violet-500 rounded-md  text-white"
              >
                <AiFillHeart />
              </button>
            ) : (
              <button
                title="Favorite"
                onClick={addFavoriteHandler}
                className=" text-lg px-2 py-2 border-2 border-violet-500 rounded-md  text-violet-500"
              >
                <AiOutlineHeart />
              </button>
            )}

            {sameItemFromCart ? (
              <button
                title="Cart"
                onClick={removeFromCartHandler}
                className=" text-lg px-2 py-2 border-2 bg-violet-500 border-violet-500 rounded-md  text-white"
              >
                <BsFillCartPlusFill />
              </button>
            ) : (
              <button
                title="Cart"
                onClick={addToCartHandler}
                className=" text-lg px-2 py-2 border-2 border-violet-500 rounded-md  text-violet-500"
              >
                <BsCartPlus />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail