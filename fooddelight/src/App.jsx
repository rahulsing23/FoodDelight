import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/customer/landingPage'
import Login from './pages/login-register/login'
import Register from './pages/login-register/register'
import Menu from './pages/customer/menu'
import Orders from './pages/customer/orders'
import Payment from './pages/customer/payment'
import Navbar from './components/Navbar'
import Cart from './pages/customer/cart'
import ProtectedRoute from './route/ProtectedRoute'

const App = () => {
  return (
    <div>
  
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route element={<ProtectedRoute/>}>
            <Route path='/checkout' element={<Payment/>}/>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
