import React from 'react'
import { FaShopware } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import NavList from './NavList';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className=" flex px-5 py-5 justify-between items-center">
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
        <div className=" relative">
          <GrCart className=" text-2xl" />
          <span className=" flex justify-center items-center align-middle absolute top-[-15px] right-[-6px] bg-violet-500 text-white w-5 h-5 rounded-[100%]">
            0
          </span>
        </div>

        {/* {SearchBar} */}
        <div className=" relative">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-1 rounded-2xl border-2 border-gray-500 focus-visible:outline-violet-500"
          />
          <button className=" absolute right-0 rounded-2xl top-[2px] px-5 py-1 bg-black text-white hover:bg-violet-500">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar