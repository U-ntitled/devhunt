import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar'


function Root() {
  return (
  <div className='bg-[#001935] h-[100vh] overflow-y-hidden'> 
    <div className='bg-[#001935] '> 
      <div className="">
        <NavBar/>
      </div>
      <Outlet/>
    </div>
  </div>
  )
}

export default Root