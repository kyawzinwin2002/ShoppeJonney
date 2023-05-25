import React from "react";
import {
  TextInput,
  
  PasswordInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import Navbar from "../components/Navbar/Navbar";
import { useRegisterMutation } from "../redux/api/authApi";
import { Link, useNavigate } from "react-router-dom";
import { FaShopware } from "react-icons/fa";

const Register = () => {
  const [register] = useRegisterMutation()
  const nav = useNavigate()
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },

    validate: {
      name: (value) =>
        value.length < 2 ? "First name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 8 ? "Password must have at least 8 letters" : null,
      password_confirmation: (value) =>
        value.length < 8 ? "Password must have at least 8 letters" : null,
    },
  });

  const labelStyles = {
    color: "white",
    backgroundColor: "#111827",
  };
  return (
    <div className=" flex flex-col gap-5 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <div className=" flex flex-col py-9 gap-4  w-screen h-screen dark:bg-gray-900 dark:text-white justify-center items-center">
        <div className=" w-96 flex justify-between items-center">
          <Link to={"/"}>
            <div className="flex items-center gap-2">
              <FaShopware className=" text-3xl font-bold text-violet-500" />
              <h1 className=" text-3xl font-bold text-violet-500">Shoppe</h1>
            </div>
          </Link>
          <h1 className=" text-3xl font-medium ">Register</h1>
        </div>
        <form
          className=" w-96 p-5 flex flex-col gap-3 shadow-md"
          onSubmit={form.onSubmit(async (values) => {
            const { data } = await register(values);
            console.log(data);
            if (data?.success) {
              nav("/login");
            }
          })}
        >
          <TextInput
            label="Full Name"
            placeholder="Enter Your Name"
            {...form.getInputProps("name")}
            className=" "
            
          />
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
          <PasswordInput
            placeholder="Confirm Password"
            label="Confirm Password"
            {...form.getInputProps("password_confirmation")}
          />
          <h1 className=" flex items-center gap-3">
            Already have an account?
            <Link to={"/login"}>
              <span className=" text-blue-500 text-base">Login</span>
            </Link>
          </h1>
          <button
            type="submit"
            className=" rounded-md mt-3 py-1 bg-violet-500 text-white"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
