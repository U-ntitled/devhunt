import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar'


function Root() {
  return (
<<<<<<< HEAD:client/src/Pages/Root.jsx
  <div className='bg-[#001935] h-[100vh] overflow-y-hidden' > 
=======
  <div className='bg-[#001935]  '> 
>>>>>>> 7c2982f060a4969af220d71660b6c27cf0b52434:client/src/Pages/Roote.jsx
    <div className="">
      <NavBar/>
    </div>
    <Outlet/>
  </div>
  )
}

export default Root