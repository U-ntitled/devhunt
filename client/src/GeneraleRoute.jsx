import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Activity from './Pages/Activity'     
import Challenge from './Pages/Challenge'
import Confirmation from './Pages/Confirmation'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import Roote from './Pages/Roote'
import Signup from './Pages/Signup'

function GeneraleRoute() {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}/>       
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/confirmation' element={<Confirmation/>}/> 
        <Route path='/' element={<Roote/>}>
          <Route path='' element={<Home/>} index={true} />
          <Route path='/profile' element={<Profile/>}/> 
          <Route path = '/challenge' element={<Challenge/>}/>
          <Route path='/activity' element={<Activity/>}/>
        </Route>
    </Routes>
  )
}

export default GeneraleRoute