import React from "react";
import { useSelector } from "react-redux";
import SearchDetail from "../components/SearchDetail";
import Navbar from "../components/Navbar/Navbar";
import { Link, Navigate } from "react-router-dom";

const Search = () => {
  const search = useSelector((state) => state.productSlice.search);
  // console.log(search);
  const allItems = useSelector((state) => state.productSlice.allItems);
  // console.log(allItems);
  const searchedItem = allItems?.filter(item => item?.title?.toLowerCase().includes(search)) 
  console.log(searchedItem);
  
  if(search){
    if (searchedItem.length === 0) {
      return (
        <div className="">
          <Navbar />
          <div className=" flex w-screen h-screen justify-center items-center">
            <div className=" flex flex-col items-center gap-5">
              <h1 className=" text-4xl text-red-500 font-bold">
                Oops! We haven't that item.TT
              </h1>
              <Link to={"/shop"}>
                <button className="px-6 py-2 text-xl bg-gray-500 text-white rounded-2xl">
                  Back to Shop
                </button>
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="">
          <Navbar />
          <div className=" flex w-screen h-screen flex-wrap justify-center py-10 gap-10 ">
            {searchedItem?.map((item) => {
              return <SearchDetail key={item?.id} {...item} />;
            })}
          </div>
        </div>
      );
    }
     
  }

  return(
    <Navigate to={"/shop"}/>
  )
  
};

export default Search;
