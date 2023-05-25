import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";


const Hero = () => {
  const token = useSelector(state => state.authSlice.token)
  const nav = useNavigate()
  const shopGuard = () => {
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
           nav("/register");
         }
       });
    }
  }
  return (
    <div className=" hero flex items-center  justify-center ">      
      <div className=" h-[500px] bg-violet-400 dark:bg-gray-900 dark:text-white flex flex-col gap-3  justify-center items-center ">
        <h1 className=' text-4xl font-semibold dark:text-violet-500 text-gray-800'>Make Your Style Gorgeous </h1>
        <p className=' text-lg p-0 m-0 leading-8'>Explore our carefully curated collection of stylish clothing, accessories, and footwear to enhance your personal style. Whether you're looking for trendy outfits or timeless classics, we offer a diverse range of options to suit every taste.</p>
        <button onClick={shopGuard} className=' px-6 py-2 rounded-md bg-white text-black'>Shop Now</button>
      </div>
    </div>
  );
}

export default Hero