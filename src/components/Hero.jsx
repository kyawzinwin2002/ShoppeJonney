import React from 'react'
import man from "../img/man.jpg"

const Hero = () => {
  return (
    <div className=" hero flex items-center  justify-center ">
      <div className=" w-[60%] h-[600px] bg-gray-600"></div>
      <div className=" w-[40%] h-[600px] bg-violet-400 flex flex-col gap-3  justify-center items-center ">
        <h1 className=' text-4xl font-semibold text-gray-800'>Make Your Style Gorgeous </h1>
        <p className=' text-lg p-0 m-0 leading-8'>Explore our carefully curated collection of stylish clothing, accessories, and footwear to enhance your personal style. Whether you're looking for trendy outfits or timeless classics, we offer a diverse range of options to suit every taste.</p>
        <button className=' px-6 py-2 rounded-md bg-white text-black'>Shop Now</button>
      </div>
    </div>
  );
}

export default Hero