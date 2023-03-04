import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar'


function Roote() {
  return (
  <div className='bg-[#001935]  '> 
    <div className="">
      <NavBar/>
    </div>
    <Outlet/>
  </div>
  )
}

export default Roote