import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { FaShopware } from 'react-icons/fa';
import CartChild from '../components/Cart/CartChild';
import Payment from '../components/Cart/Payment';
import { BsCart4 } from "react-icons/bs";

const Cart = () => {
  const cart = useSelector(state => state.productSlice.cart)
  console.log(cart);
  if(cart?.length === 0){
    return (
      <div>
        <Navbar />
        <div className=" flex py-9 px-9 w-screen h-screen  items-start">
          <div className=" w-[60%] h-screen overflow-scroll pb-10  px-3">
            <div className="flex w-[100%] h-screen justify-center ">
              <div className=" flex flex-col items-center gap-5 mt-56">
                <h1 className=" flex items-center gap-4 text-4xl font-semibold text-violet-500">
                  <BsCart4/> Your cart is empty!
                </h1>
                <Link to={"/shop"}>
                  <button className=" rounded-xl px-5 py-1 text-lg bg-gray-600 text-white">
                    Shopping Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className=" w-[40%] flex justify-center items-start fixed right-0 top-20">
            {/* {CheckOut} */}
            <Payment />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <div className=" flex py-9 px-9 w-screen h-screen  items-start">
        <div className=" w-[60%] h-screen overflow-scroll pb-10  px-3">
          <div className=" flex flex-col gap-16 items-center ">
            {/* {Cart} */}
            {cart?.map((item) => {
              return <CartChild key={item?.id} {...item} />;
            })}
          </div>
         
          
        </div>

        <div className=" w-[40%] flex justify-center items-start fixed right-0 top-20">
          {/* {CheckOut} */}
          <Payment />
        </div>
      </div>
    </div>
  );
}

export default Cart