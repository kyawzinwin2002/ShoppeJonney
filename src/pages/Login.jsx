import React from 'react'
import { TextInput, PasswordInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import Navbar from "../components/Navbar/Navbar";
import { useLoginMutation } from "../redux/api/authApi";
import { Link, useNavigate } from "react-router-dom";
import { FaShopware } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { GET_USER } from '../redux/services/authSlice';


const Login = () => {
   const [login] = useLoginMutation();
   const nav = useNavigate();
   const dispatch = useDispatch()
   const form = useForm({
     initialValues: {
       
       email: "",
       password: "",
       
     },

     validate: {
       
       email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
       password: (value) =>
         value.length < 8 ? "Password must have at least 8 letters" : null,
      
     },
   });
  return (
    <div className=" flex flex-col gap-5">
      <Navbar />
      <div className=" flex flex-col py-9 gap-4  w-screen h-screen justify-center items-center">
        <div className=" w-96 flex justify-between items-center">
          <Link to={"/"}>
            <div className="flex items-center gap-2">
              <FaShopware className=" text-3xl font-bold text-violet-500" />
              <h1 className=" text-3xl font-bold text-violet-500">Shoppe</h1>
            </div>
          </Link>
          <h1 className=" text-3xl font-medium ">Login</h1>
        </div>
        <form
          className=" w-96 p-5 flex flex-col gap-3 shadow-md"
          onSubmit={form.onSubmit(async (values) => {
            const { data } = await login(values);
            console.log(data);
            dispatch(GET_USER({user:data?.user,token:data?.token}))
            if (data?.success) {
              nav("/shop");
            }
          })}
        >
          
          <TextInput
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            placeholder="Password"
            label="Password"
            {...form.getInputProps("password")}
          />
         
          <h1 className=" flex items-center gap-3">
            Don't have an account?
            <Link to={"/register"}>
              <span className=" text-blue-500 text-base">Sign Up</span>
            </Link>
          </h1>
          <button
            type="submit"
            className=" rounded-md mt-3 py-1 bg-violet-500 text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login