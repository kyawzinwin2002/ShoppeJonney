import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SET_CATEGORY } from '../redux/services/productSlice';

const Filter = () => {
   const dispatch = useDispatch()
    // console.log(select);
    const nav = useNavigate()
    const catHandler = (e) => {
        e.preventDefault()
        dispatch(SET_CATEGORY(e.target.value))
        nav("/category")
    }
  return (
    <div className=" flex gap-3 items-center  ml-10 ">
      <select
        onChange={catHandler}
        name=""
        id=""
        className="dark:bg-gray-700 dark:text-white rounded-md px-3 py-2 focus-visible:outline-none"
      >
        <option value="">Sort by Category</option>
        <option value="electronics">electronics</option>
        <option value="jewelery">jewelery</option>
        <option value="men's clothing">men's clothing</option>
        <option value="women's clothing">women's clothing</option>
      </select>
    </div>
  );
}

export default Filter