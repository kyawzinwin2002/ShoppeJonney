import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BiDetail } from 'react-icons/bi';
import { BsCartPlus, BsFillCartPlusFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ADD_TO_CART, ADD_TO_FAVORITE, REMOVE_FROM_CART, REMOVE_FROM_FAVORITE } from '../redux/services/productSlice';

const SearchDetail = (props) => {
    const {id,title,image,price} = props
     const dispatch = useDispatch();

     // {Cart}
     const cart = useSelector((state) => state.productSlice.cart);
     const sameItemFromCart = cart.find((item) => item.id === id);
     const addToCartHandler = () => {
       dispatch(ADD_TO_CART(props));
     };
     const removeFromCartHandler = () => {
       dispatch(REMOVE_FROM_CART(props));
     };

     // {Favorite}
     const favorite = useSelector((state) => state.productSlice.favorite);
     const sameItemFromFav = favorite.find((item) => item.id === id);
     const addFavoriteHandler = () => {
       dispatch(ADD_TO_FAVORITE(props));
     };
     const removeFavoriteHandler = () => {
       dispatch(REMOVE_FROM_FAVORITE(props));
     };
  return (
    <div className="  flex flex-col gap-3 shadow-md  px-5 py-3">
      <img
        src={image}
        className=" pImg w-[175px] h-[200px] rounded-md"
        alt=""
      />
      <h1 className=' text-xl text-gray-900 '>{title.substring(0,15)}...</h1>
      <div className=" flex justify-between items-center">
        <span>*****</span>
        <p>${price}</p>
      </div>
      <div className=" flex justify-end gap-3">
        <Link to={`/detail/${id}`}>
          <button
            title="Detail"
            className=" text-lg px-2 py-2 border-2 border-violet-500 rounded-md bg-gray-500 text-white"
          >
            <BiDetail />
          </button>
        </Link>

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
  );
}

export default SearchDetail