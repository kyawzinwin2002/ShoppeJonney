import React, { useEffect, useState } from "react";
import { FaShopware } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillSunFill,BsFillMoonStarsFill } from "react-icons/bs";

import NavList from "./NavList";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ALL_ITEMS, CHANGE_THEME, SET_SEARCH } from "../../redux/services/productSlice";
import { useGetProductsQuery } from "../../redux/api/productsApi";
import Swal from "sweetalert2";
import { REMOVE_USER } from "../../redux/services/authSlice";
import { useLogoutMutation } from "../../redux/api/authApi";

const Navbar = () => {
  const search = useSelector((state) => state.productSlice.search);
  const cart = useSelector((state) => state.productSlice.cart);
  const token = useSelector((state) => state.authSlice.token);
  // console.log(token);
  const user = useSelector((state) => state.authSlice.user);
  const [logout] = useLogoutMutation()
  const [isOpen,setIsOpen] = useState(false)

  const { data } = useGetProductsQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ADD_ALL_ITEMS(data));
  }, [data]);

  const nav = useNavigate();
  const searchHandler = (e) => {
    
    e.preventDefault()
    if (token) {
      if (search) {
        
        nav("/search");
        
      }
    } else {
      Swal.fire({
        title: "You don't have an account.",
        text: "Create an account to search items.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Register Here",
      }).then((result) => {
        if (result.isConfirmed) {
          nav("/register");
        }
      });
    }
  };

  const cartGuard = () => {
    if (token) {
      nav("/cart");
    } else {
      Swal.fire({
        title: "You don't have an account.",
        text: "Create an account to shop.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Register Here",
      }).then((result) => {
        if (result.isConfirmed) {
          nav("/register");
        }
      });
    }
  };

  const logoutHandler = async() => {
    const {data} = await logout(token)
    if(data?.success){
      nav("/")
    }
    dispatch(REMOVE_USER())
  }

  const theme = useSelector(state => state.productSlice.theme)

  useEffect(() => {
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark");

    }
  },[theme])

  // console.log(document.documentElement);

  const themeHandler = () => {
    dispatch(CHANGE_THEME())
  }

  return (
    <div className=" flex px-5 dark:bg-gray-950 dark:text-white py-5 shadow-sm justify-between items-center sticky top-0 z-50 bg-white">
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
        {/* {darkMode} */}
        <button onClick={themeHandler} className=" dark:text-yellow-500 text-xl">
          {theme === "light" ? <BsFillMoonStarsFill/> : <BsFillSunFill/>}
        </button>
        {/* {Cart} */}

        <div onClick={cartGuard} className=" relative  cursor-pointer  ">
          <AiOutlineShoppingCart className=" text-2xl  dark:text-white" />

          <span className=" flex justify-center items-center align-middle absolute top-[-15px] right-[-6px] bg-violet-500 text-white w-5 h-5 rounded-[100%]">
            {cart?.length}
          </span>
        </div>

        {/* {SearchBar} */}
        <form onSubmit={searchHandler} className=" relative">
          <input
            value={search}
            onChange={(e) => dispatch(SET_SEARCH(e.target.value))}
            type="text"
            placeholder="Search"
            className="px-4 py-1 dark:bg-gray-800 rounded-2xl border-2  border-gray-500 focus-visible:outline-violet-500"
          />
          <button
            type="submit"
            className=" absolute right-0 rounded-2xl top-[2px] px-5 py-1 bg-black text-white hover:bg-violet-500 dark:bg-gray-900 dark:hover:bg-violet-500"
          >
            Search
          </button>
        </form>

        {/* {Login/Signup} */}
        {token ? (
          <div className=" relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=" px-5 py-2 bg-teal-500 text-white rounded-2xl"
            >
              Profile
            </button>
            {isOpen && (
              <div className=" flex flex-col dark:bg-gray-800 dark:text-white right-3 top-14 bg-white gap-2 p-3 rounded-md border-2 shadow-md absolute">
                <div className=" flex items-center gap-3">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMF7rNYRqdBhKmsTiW0pes2TrBJnzv7zqbjMp9W9J4cX4XK8jSeUmHBgHrgIt9AmANjxk&usqp=CAU"
                    className=" w-10"
                    alt=""
                  />
                  <h1>{user?.name}</h1>
                </div>
                <h1>{user?.email}</h1>
                <button
                  onClick={logoutHandler}
                  className=" px-5 py-2 bg-red-500 text-white
                  rounded-2xl"
                >
                  LogOut
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to={"/register"}>
            <button className=" dark:bg-gray-800 bg-black text-white hover:bg-violet-500 px-5 py-2 rounded-2xl">
              Sign Up
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
