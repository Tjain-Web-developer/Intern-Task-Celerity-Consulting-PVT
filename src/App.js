import React from 'react'
import './App.css'
import Navbar from './Pages/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Booking from './Pages/Booking';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/booking" element={<Booking/>}/>
      </Routes>
    </div>
  )
}

export default App