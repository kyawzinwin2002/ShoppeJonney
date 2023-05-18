import React from 'react'
import { NavLink } from 'react-router-dom'

const NavList = () => {
  return (
    <ul className=" flex items-center gap-3">
      <NavLink to={"/"}>
        <li className=' text-xl  hover:text-violet-500'>Home</li>
      </NavLink>
      <li className=' text-xl  hover:text-violet-500'>Services</li>
      <li className=' text-xl  hover:text-violet-500'>Contact</li>
      <NavLink to={"/favorite"}>
        <li className=' text-xl  hover:text-violet-500'>Favorite</li>
      </NavLink>
    </ul>
  );
}

export default NavList