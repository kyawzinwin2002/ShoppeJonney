import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart';
import Detail from '../pages/Detail';
import Favorite from '../pages/Favorite';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Shop from '../pages/Shop';
import Search from '../pages/Search';
import Category from '../pages/Category';
import GuardOne from '../components/RouteGuard/GuardOne';
import GuardTwo from '../components/RouteGuard/GuardTwo';
import GuardThree from '../components/RouteGuard/GuardThree';
import GuardFour from '../components/RouteGuard/GuardFour';
import GuardFive from '../components/RouteGuard/GuardFive';
import GuardSix from '../components/RouteGuard/GuardSix';

const Path = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={
            <GuardOne>
              <Cart />
            </GuardOne>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <GuardTwo>
              <Detail />
            </GuardTwo>
          }
        />
        <Route
          path="/shop"
          element={
            <GuardThree>
              <Shop />
            </GuardThree>
          }
        />
        <Route
          path="/favorite"
          element={
            <GuardFour>
              <Favorite />
            </GuardFour>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/search"
          element={
            <GuardFive>
              <Search />
            </GuardFive>
          }
        />
        <Route
          path="/category"
          element={
            <GuardSix>
              <Category />
            </GuardSix>
          }
        />
      </Routes>
    </div>
  );
}

export default Path