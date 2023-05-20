import React, { useState } from "react";
import { BsTrash3Fill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { REMOVE_FROM_CART } from "../redux/services/productSlice";
import { Link } from "react-router-dom";
import { BiDetail } from "react-icons/bi";

const CartChild = (props) => {
  const dispatch = useDispatch();
  const [seeMore,setSeeMore] = useState(false)


const removeFromCartHandler = () => {
  dispatch(REMOVE_FROM_CART(props));
};


  const {id, title, image, description, price } = props;
  return (
    <div>
      <div className=" flex gap-3 items-start">
        <img src={image} className=" w-[135px] rounded-md" alt="" />
        <div className=" flex flex-col gap-2">
          <div className=" flex items-center justify-between">
            <h1 className=" text-2xl text-gray-500 font-semibold">
              {title.substring(0, 25)}...
            </h1>
          </div>
          {seeMore ? (
            <p>
              {description} <br />
              <span
                onClick={(e) => setSeeMore(!seeMore)}
                className=" text-teal-600 cursor-pointer"
              >
                See Less
              </span>
            </p>
          ) : (
            <p>
              {description.substring(0, 150)}... <br />
              <span
                onClick={(e) => setSeeMore(!seeMore)}
                className=" text-teal-600 cursor-pointer"
              >
                See More
              </span>
            </p>
          )}
          <span>****</span>
          <div className=" flex items-center justify-between">
            <p className=" text-base text-gray-800 font-bold">${price}</p>
            <div className=" flex gap-3 items-center">
              <Link to={`/detail/${id}`}>
                <button
                  title="Detail"
                  className=" text-lg px-2 py-2 border-2 border-violet-500 rounded-md bg-gray-500 text-white"
                >
                  <BiDetail />
                </button>
              </Link>
              <button
                title="Remove"
                onClick={removeFromCartHandler}
                className=" text-lg px-2 py-2 border-2 border-gray-500 rounded-md  text-red-500 hover:bg-red-500 hover:text-white hover:border-white"
              >
                <BsTrash3Fill />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartChild;
