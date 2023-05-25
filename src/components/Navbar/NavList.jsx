import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import Swal from "sweetalert2";

const NavList = () => {
  const token = useSelector(state => state.authSlice.token)
  const nav = useNavigate()
  const shopHandler = () => {
    if(token){
      nav("/shop")
    }else{
     Swal.fire({
       title: "You don't have an account.",
       text: "Create an account to see our shop.",
       icon: "warning",
       showCancelButton: true,
       confirmButtonColor: "#3085d6",
       cancelButtonColor: "#d33",
       confirmButtonText: "Register Here",
     }).then((result) => {
       if (result.isConfirmed) {
         nav("/register")
       }
     });
    }
  }

  const favoriteHandler = () => {
     if (token) {
       nav("/favorite");
     } else {
       Swal.fire({
         title: "You don't have an account.",
         text: "Create an account to see your favorite.",
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
  }
  return (
    <ul className=" flex items-center gap-5">
      <NavLink to={"/"}>
        <li className=" text-xl  hover:text-violet-500">Home</li>
      </NavLink>
      <li className=" text-xl  hover:text-violet-500">Services</li>
      <li className=" text-xl  hover:text-violet-500">Contact</li>
     
        <li onClick={shopHandler} className=" text-xl cursor-pointer  hover:text-violet-500">Shop</li>
     
     
        <li onClick={favoriteHandler} className=" text-xl cursor-pointer hover:text-violet-500">Favorite</li>
      
    </ul>
  );
}

export default NavList