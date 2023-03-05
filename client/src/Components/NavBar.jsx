import React from 'react'
import ENI from '../Image/logo.svg'
import MessageIcon from '../Image/message.svg'
import userIcon from '../Image/user.svg'
import NotificationIcon from '../Image/noti.svg'
import { Avatar } from '@mui/material'
import { Link, NavLink } from 'react-router-dom';

const activeLink = {
     color:"#00CF35"
}
const desactiveLink = {
    color:"#f2f2f2"
}
function NavBar() {
  
  return (
    <div className=' sticky flex justify-between items-center w-[100%] px-12 pt-6'>

        <div className="flex justify-between items-center w-[25%]">
            <Link to='/' className='w-[44%]' >
                <img className="" src={ENI} alt='logo' />
            </Link>
            <div className="">
                 <input type='search' 
                        className='border border-none   
                        text-sm text-[#868686] bg-[#ffffff21] w-[12vw] h-[4vh] rounded-full focus:outline-none pl-5'
                     placeholder='Taper pour rechercher..'
                />
            </div>
        </div>

        <div className="w-[30%] flex justify-between items-center">
            <NavLink 
                to='/'
                style={({isActive})=>
                    isActive ? activeLink: desactiveLink   
                }
            >
                    Accueil
            </NavLink>
            <NavLink 
                to='/forum'
                style={({isActive})=>
                    isActive ? activeLink: desactiveLink   
                }
            >
                    Forum
            </NavLink>
            <NavLink 
                to='/challenge'
                style={({isActive})=>
                    isActive ? activeLink: desactiveLink   
                }
            >
                    Challenge
            </NavLink>
        </div>

        <div className="w-[15%] flex justify-between items-center">
            <Link to="/Discussion">
                    <img src={MessageIcon} alt="ICon message"  />
            </Link>
            <Link to="/notification">
                <img src={NotificationIcon} alt="ICon message"  />
            </Link>
            <Link to="/profile">
               <Avatar  src={userIcon} />
            </Link>
        </div>

    </div>
  )
}

export default NavBar