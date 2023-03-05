import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import UserProfile from '../Image/userpro.svg'
import Activity from '../Image/activity.svg'
import { Avatar } from '@mui/material';

function Profile() {
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
                        <img src={Activity} alt=''/>
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
                <div className="flex justify-between items-center">
                        <div className="text-[#f2f2f2] font-semibold text-xl">
                            <h3>Profile</h3>
                        </div>
                        <div className="text-[#00B8FF] font-semibold flex justify-between ">
                            <ModeEditOutlineOutlinedIcon/>
                            <h2 className='pl-2'>Edit</h2>
                        </div>
                </div>
                <div className="flex justify-center items-center">
                        <Avatar sx={{height: '20vh',width:'10vw'}}/>
                </div>
                <div className="flex flex-col items-start space-y-8  mx-auto     ">
                    <div className="">
                        <h2><span className='text-[#868686] text-2xl font-semibold'>Usernane :</span> &nbsp; &nbsp; &nbsp; <span className='text-[#f2f2f2] text-2xl font-semibold'>Riry Nomenjanahary </span></h2>
                    </div>
                    <div className="">
                        <h2><span className='text-[#868686] text-2xl font-semibold'>Email Address :</span> &nbsp; &nbsp; &nbsp; <span className='text-[#f2f2f2] text-2xl font-semibold'>RiryNomenjanahary@gmail.com </span></h2>
                    </div>
                    <div className="">
                        <h2><span className='text-[#868686] text-2xl font-semibold'>Mots de passes :</span> &nbsp; &nbsp; &nbsp; <span className='text-[#f2f2f2] text-2xl font-semibold'>*********</span></h2>
                    </div>
                    <div className="">
                        <h2><span className='text-[#868686] text-2xl font-semibold'>Badge : </span> &nbsp; &nbsp; &nbsp; <span className='text-red-700 text-2xl font-semibold'>pas de Badge</span></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile