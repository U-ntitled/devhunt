import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../Components/Dashboard/SideBar'

function Dashboard() {
  return (
    <div>
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default Dashboard