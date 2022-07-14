import React from 'react'
import { Routes , Route , Navigate } from 'react-router-dom'
import AllFoods from '../pages/AllFoods'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Contact from '../pages/Contact'
import FoodDeteils from '../pages/FoodDeteils'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to='/home' />} />
    <Route path='/home' element={<Home />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/home' element={<Checkout />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/foods' element={<AllFoods />} />
    <Route path='/foods/:id' element={<FoodDeteils />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
  </Routes>
}

export default Routers