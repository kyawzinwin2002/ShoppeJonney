import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const GuardThree = ({ children }) => {
  const token = useSelector((state) => state.authSlice.token);
  if (token) {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
};

export default GuardThree;
