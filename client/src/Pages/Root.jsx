import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar'


function Root() {
  return (
  <div className='bg-[#001935] oveflow-y-hidden'> 
    <div className="">
      <NavBar/>
    </div>
    <Outlet/>
  </div>
  )
}

export default Root