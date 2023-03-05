import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import UserProfile from '../Image/userpro.svg'
import ActivityIcon from '../Image/activity.svg'
import { Avatar } from '@mui/material';

function Activity() {
  return (
    <div className='w-[100%]  mt-16'>
    <div className="flex justify-between w-[100%] ">
        <div className="w-[30%] flex flex-col space-y-8   ">
            <div className="cursor-pointer flex mx-auto mt-5 justify-center items-center bg-[#ffffff21] w-[50%] h-14 rounded-full ">
                  <div className="cursor-pointer mr-2 " >
                    <img src={UserProfile} alt=''/>
                  </div>
                  <div className="text-white font-medium">
                    <h2>Profile</h2>
                  </div>
            </div>
            <div className="cursor-pointer flex mx-auto mt-5 justify-center items-center bg-[#ffffff21] w-[50%] h-14 rounded-full ">
                  <div className="cursor-pointer mr-2 " >
                    <img src={ActivityIcon} alt=''/>
                  </div>
                  <div className="text-white font-medium">
                    <h2>Nes activites</h2>
                  </div>
            </div>
            <div className="cursor-pointer flex mx-auto mt-5 justify-center items-center bg-[#ffffff21] w-[50%] h-14 rounded-full ">
                  <div className="cursor-pointer mr-2 " >
                        <SettingsOutlinedIcon sx={{color:'#00B8FF'}}/>
                  </div>
                  <div className="text-white font-medium">
                    <h2>Settings</h2>
                  </div>
            </div>
            <div className="cursor-pointer flex mx-auto mt-5 justify-center items-center  w-[50%] h-14 ">
                <LogoutIcon sx={{color:'#00B8FF'}} />
                <h2 className='uppercase text-2xl font-semibold text-[#f2f2f2]'>Log out</h2>
            </div>
        </div>
        <div className="flex flex-col  space-y-10 w-[60%] mx-12">
            <div className="">
              <h2 className='text-[#f2f2f2] font-semibold' >Publication</h2>
            </div>
            <div className="flex justify-between w-[100%]">
              <div className="flex flex-col justify-center items-center w-[20%] bg-[#0D0D0DDD] h-52 rounded-lg">
                  <h2 className='text-[#00B8FFAB] text-xl font-semibold'>13</h2>
                  <h3 className='text-[#f2f2f2] '>Publication</h3>
              </div>
              <div className="flex flex-col justify-center w-[20%] items-center bg-[#00B8FFC6] rounded-lg">
                  <h2>13</h2>
                  <h3 className='text-[#f2f2f2]'>Commentaires</h3>
              </div>
              <div className="flex flex-col justify-center items-center w-[20%] bg-[#FF4930AB] rounded-lg">
                  <h2>67</h2>
                  <h3 className='text-[#f2f2f2]'>Recommandation</h3>
              </div>
            </div>
            <div className="">
              <h2 className='text-[#f2f2f2] font-semibold' >Question</h2>
          </div>
          <div className="flex justify-end">
              <div className="">
                
              </div>
              <div className="">
                
              </div>
              <div className="">
                
              </div>
              <div className="">
                
              </div>
          </div>
        </div>

    </div>
</div>
  )
}

export default Activity