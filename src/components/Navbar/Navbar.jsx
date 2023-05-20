import React, { useEffect, useState } from 'react'
import { FaShopware } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import NavList from './NavList';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import productSlice, { ADD_ALL_ITEMS, SET_SEARCH } from '../../redux/services/productSlice';
import { useGetProductsQuery } from '../../redux/api/productsApi';


const Navbar = () => {
  const search = useSelector(state => state.productSlice.search)
  const cart = useSelector(state => state.productSlice.cart)

  const {data} = useGetProductsQuery()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ADD_ALL_ITEMS(data))
  },[data])

  

  const nav = useNavigate()
  const searchHandler = (e) => {
    e.preventDefault()
    if(search){
      nav("/search");
    }
  }
  return (
    <div className=" flex px-5 py-5 justify-between items-center sticky top-0 z-50 bg-white">
      <div className=" flex items-center gap-6">
        {/* {Logo} */}
        <Link to={"/"}>
          <div className="flex items-center gap-2">
            <FaShopware className=" text-4xl font-bold text-violet-500" />
            <h1 className=" text-4xl font-bold text-violet-500">Shoppe</h1>
          </div>
        </Link>

        {/* {Navlist} */}
        <NavList />
      </div>

      <div className=" flex items-center gap-4">
        {/* {Cart} */}
        <Link to={"/cart"}>
          <div className=" relative cursor-pointer">
            <GrCart className=" text-2xl" />
            <span className=" flex justify-center items-center align-middle absolute top-[-15px] right-[-6px] bg-violet-500 text-white w-5 h-5 rounded-[100%]">
              {cart.length}
            </span>
          </div>
        </Link>

        {/* {SearchBar} */}
        <form onSubmit={searchHandler} className=" relative">
          <input
            value={search}
            onChange={(e) => dispatch(SET_SEARCH(e.target.value))}
            type="text"
            placeholder="Search"
            className="px-4 py-1 rounded-2xl border-2 border-gray-500 focus-visible:outline-violet-500"
          />
          <button
            type="submit"
            className=" absolute right-0 rounded-2xl top-[2px] px-5 py-1 bg-black text-white hover:bg-violet-500"
          >
            Search
          </button>
        </form>

        {/* {Login/Signup} */}
        <NavLink to={"/register"}>
          <button className=" bg-black text-white hover:bg-violet-500 px-3 py-2 rounded-2xl">
            Sign Up
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar