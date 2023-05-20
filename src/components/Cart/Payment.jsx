import React from 'react'
import { FaShopware } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

const Payment = () => {
  const mainTotal = useSelector(state => state.productSlice.mainTotal)
  // console.log(mainTotal);
  const calcTax= (total,tax=5) => {
    return(
      total*(tax/100)
    )
  }
  const Tax = calcTax(mainTotal)
  const Total = mainTotal+Tax
  const checkOutHandler = (e) => {
    // e.preventDefault()
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Thanks for believing us.",
      showConfirmButton: false,
      timer: 2000,
    });
  }
  return (
    <div className=" w-[90%] rounded-2xl flex flex-col gap-3  border-2 border-gray-300 p-5">
      {/* {Headers} */}
      <div className=" flex items-center justify-between">
        <Link to={"/"}>
          <div className="flex items-center gap-2">
            <FaShopware className=" text-3xl font-bold text-violet-500" />
            <h1 className=" text-3xl font-bold text-violet-500">Shoppe</h1>
          </div>
        </Link>
        <h1 className=" text-2xl font-semibold ">CheckOut</h1>
      </div>

      <hr />

      {/* {Body} */}
      <div className=" flex justify-between">
        <span className=" text-xl font-semibold text-gray-500">SubTotal</span>
        <span className="text-base text-gray-800 font-bold">
          ${mainTotal.toFixed(2)}
        </span>
      </div>
      <div className=" flex justify-between">
        <span className=" text-xl font-semibold text-gray-500">Tax</span>
        <span className="text-base text-gray-800 font-bold">
          ${Tax.toFixed(2)}
        </span>
      </div>
      <hr />
      <div className=" flex justify-between">
        <span className=" text-xl font-semibold text-gray-500">Total</span>
        <span className="text-base text-gray-800 font-bold">
          ${Total.toFixed(2)}
        </span>
      </div>
      <hr />
      {/* {CheckOut Info} */}
      <h1 className=" text-2xl text-gray-700 font-semibold">CheckOut Info</h1>
      <form className=' flex flex-col gap-5' onSubmit={checkOutHandler}>
        <div className=" flex justify-between">
          <span className=" text-xl font-semibold text-gray-500">Phone</span>
          <input
          required
            type="text"
            className=" border-2 border-violet-500 px-2 focus-visible:outline-none w-52"
            placeholder="09xxxxxxxxx"
          />
        </div>

        <div className=" flex justify-between">
          <span className=" text-xl font-semibold text-gray-500">Address</span>
          <input
          required
            type="text"
            className=" border-2 border-violet-500 px-2 focus-visible:outline-none w-52"
            placeholder="Enter Your Address"
          />
        </div>
        <div className=" flex justify-between">
          <span className=" text-xl font-semibold text-gray-500">
            Payment Method
          </span>
          <select required className="w-52 focus-visible:outline-none" name="" id="">
            <option value="">Banking</option>
            <option value="">KBZ pay</option>
            <option value="">AYA Banking</option>
            <option value="">CB pay</option>
            <option value="">Wave pay</option>
          </select>
        </div>
        <div className=" flex justify-end mt-5">
          <button
            type='submit'
            className=" px-5 py-2 bg-violet-500 text-white rounded-2xl"
          >
            CheckOut
          </button>
        </div>
      </form>
    </div>
  );
}

export default Payment