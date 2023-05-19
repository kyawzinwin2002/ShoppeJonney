import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart';
import Detail from '../pages/Detail';
import Favorite from '../pages/Favorite';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Shop from '../pages/Shop';

const Path = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Path