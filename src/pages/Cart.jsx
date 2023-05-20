import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar/Navbar';
import CartChild from '../components/CartChild';
import { Link } from 'react-router-dom';
import { FaShopware } from 'react-icons/fa';

const Cart = () => {
  const cart = useSelector(state => state.productSlice.cart)
  return (
    <div>
      <Navbar />
      <div className=" flex py-9 px-9 w-screen h-screen  items-start">
        <div className=" w-[60%] h-screen overflow-scroll pb-10  px-3">
          <div className=" flex flex-col gap-10 items-center ">
            {/* {Cart} */}
            {cart?.map((item) => {
              return <CartChild key={item?.id} {...item} />;
            })}
          </div>
        </div>

        <div className=" w-[40%] flex justify-center items-start fixed right-0 top-20">
          {/* {CheckOut} */}
          <div className=" w-[90%] flex flex-col gap-3 h-[500px] border-2 border-gray-300 p-5">
            {/* {Headers} */}
            <div className=" flex items-center justify-between">
              <Link to={"/"}>
                <div className="flex items-center gap-2">
                  <FaShopware className=" text-3xl font-bold text-violet-500" />
                  <h1 className=" text-3xl font-bold text-violet-500">
                    Shoppe
                  </h1>
                </div>
              </Link>
              <h1 className=' text-2xl font-semibold '>CheckOut</h1>
            </div>

            <hr />

            {/* {Body} */}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart