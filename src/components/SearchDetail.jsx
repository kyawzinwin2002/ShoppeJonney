import React from 'react'
import { AiFillHeart, AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { BiDetail } from 'react-icons/bi';
import { BsCartPlus, BsFillCartPlusFill, BsStarFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ADD_TO_CART, ADD_TO_FAVORITE, REMOVE_FROM_CART, REMOVE_FROM_FAVORITE } from '../redux/services/productSlice';
import "../css/Product.css"
const SearchDetail = (props) => {
    const {id,title,image,price,rating} = props
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
    <div className="  flex flex-col gap-3 shadow-md  px-5 py-3 relative">
      <img
        src={image}
        className=" pImg w-[175px] h-[200px] rounded-md"
        alt=""
      />
      {sameItemFromFav && (
        <div className=" fav">
          <BsStarFill className=" text-white text-xl bg-violet-500 absolute bottom-1 left-1" />
        </div>
      )}
      <h1 className=" text-xl text-gray-900 dark:text-violet-500">{title.substring(0, 15)}...</h1>
      <div className=" flex justify-between items-center">
        <div className=" flex gap-1 items-center">
          <AiFillStar className=" text-yellow-500 text-2xl" />
          <h1 className=" text-lg flex font-normal items-center gap-2">
            {rating.rate}
          </h1>
        </div>
        <p className=" font-medium">${price}</p>
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