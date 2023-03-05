import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBarNav from '../Components/SideBarNav'

export default function Dashboards() {
  return (
        <div className="flex justify-between w-[100%] ">
            <div className='w-[25%]'>
                <SideBarNav/>
            </div>
            <div className="w-65%">
                <Outlet/>
            </div>
        </div>
  )
}
