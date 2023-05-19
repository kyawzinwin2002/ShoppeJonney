import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsCartPlus } from "react-icons/bs";
import { BiDetail } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const Product = (props) => {
  const { id, image, description, price } = props;
  return (
    <div className=" flex flex-col gap-3 shadow-md  px-5 py-3">
      <img src={image} className=" w-[150px] h-[200px] rounded-md" alt="" />
      <div className=" flex justify-between items-center">
        <span>*****</span>
        <p>{price}</p>
      </div>
      <div className=" flex justify-end gap-3">
        <Link to={`/detail/${id}`}>
          <button className=" px-2 py-2 border-2 border-violet-500 rounded-md bg-gray-500 text-black">
            <BiDetail/>
          </button>
        </Link>
        <button className=" px-2 py-2 border-2 border-violet-500 rounded-md  text-violet-500">
          <AiOutlineHeart />
        </button>
        <button className=" px-2 py-2 border-2 border-violet-500 rounded-md  text-violet-500">
          <BsCartPlus />
        </button>
      </div>
    </div>
  );
};

export default Product;
