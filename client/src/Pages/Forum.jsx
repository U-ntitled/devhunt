import React from 'react'
import { Outlet } from 'react-router-dom'
import ForumSidebar from '../Components/ForumSidebar'


function Forum() {
  return (
    <div className=' max-w-full  flex justify-center  mt-20'>
         <ForumSidebar/>
         <div className='w-full flex justify-start ml-10'>
             <Outlet/>
         </div>
         
    </div>
  )
}

export default Forum