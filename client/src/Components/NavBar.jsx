import React from 'react'
import ENI from '../Image/logo.svg'
import MessageIcon from '../Image/message.svg'
import userIcon from '../Image/user.svg'
import NotificationIcon from '../Image/noti.svg'
import { Avatar } from '@mui/material'

function NavBar() {
  return (
    <div className=' flex justify-between items-center w-[100%] px-12 pt-6'>

        <div className="flex justify-between items-center w-[25%]">
            <div className='w-[44%]' >
                <img className="" src={ENI} alt='logo' />
            </div>
            <div className="">
                 <input type='text' 
                        className='border border-none   
                        text-sm text-[#868686] bg-[#ffffff21] w-[12vw] h-[4vh] rounded-full focus:outline-none pl-5'
                     placeholder='Taper pour rechercher..'
                />
            </div>
        </div>

        <div className="w-[30%] flex justify-between items-center">
            <div className="text-[#01CF35]">
                <h2 className=''>Home</h2>
            </div>
            <div className="text-[#f2f2f2]">
                <h2>Forum</h2>
            </div>
            <div  className="text-[#f2f2f2]">
                <h2>Challenge</h2>
            </div>
        </div>

        <div className="w-[15%] flex justify-between items-center">
            <div className="">
                    <img src={MessageIcon} alt="ICon message"  />
            </div>
            <div className="">
                <img src={NotificationIcon} alt="ICon message"  />
            </div>
            <div className="">
               <Avatar  src={userIcon} />
            </div>
        </div>

    </div>
  )
}

export default NavBar