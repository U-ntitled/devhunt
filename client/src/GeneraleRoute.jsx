import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Confirmation from './Pages/Confirmation'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Roote from './Pages/Roote'
import Signup from './Pages/Signup'

function GeneraleRoute() {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}/>       
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/confirmation' element={<Confirmation/>}/> 
        <Route path='/' element={<Roote/>}>
          <Route path='/home' element={<Home/>} index={true} />
        </Route>
    </Routes>
  )
}

export default GeneraleRoute