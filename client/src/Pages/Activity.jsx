import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import UserProfile from '../Image/userpro.svg'
import ActivityIcon from '../Image/activity.svg'
import { Avatar } from '@mui/material';
import userIcon from '../Image/user.svg'
import Navig from '../Image/navigate.svg'
import Solved from '../Image/true.svg'

function Activity() {
  const result = [
    {
    username: 'Rir Nomenjanahary',
    status: "Resolue",
    desc: "UI/UX Design Thinking philosopy",
    nbrCommments: '3 commmentaires',
    userImage: ""

  },
    {
    username: 'Riry Nomenjanahary',
    status: "Resolue",
    desc: "UI/UX Design Thinking philosopy",
    nbrCommments: '3 commmentaires',
    userImage: ""

  },
    {
    username: 'Riry Nomenjanahary',
    status: "Resolue",
    desc: "UI/UX Design Thinking philosopy",
    nbrCommments: '3 commmentaires',
    userImage: ""

  },
    {
    username: 'Riry Nomenjanahary',
    status: "Resolue",
    desc: "UI/UX Design Thinking philosopy",
    nbrCommments: '3 commmentaires',
    userImage: ""

  }
]
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
                    <h2>Mes activites</h2>
                  </div>
            </div>
            <div className="cursor-pointer flex mx-auto mt-5 justify-center items-center bg-[#ffffff21] w-[50%] h-14 rounded-full ">
                  <div className="cursor-pointer mr-2 " >
                        <SettingsOutlinedIcon sx={{color:'#00B8FF'}}/>
                  </div>
                  <div className="text-white font-medium">
                    <h2>Parametres</h2>
                  </div>
            </div>
            <div className="cursor-pointer flex mx-auto mt-5 justify-center items-center  w-[50%] h-14 ">
                <LogoutIcon sx={{color:'#00B8FF'}} />
                <h2 className='ml-2 text-2xl font-semibold text-[#f2f2f2]'>Se deconnecter</h2>
            </div>
        </div>
        <div className="flex flex-col  space-y-10 w-[60%] mx-12">
            <div className="">
              <h2 className='text-[#f2f2f2] font-semibold' >Publication</h2>
            </div>
            <div className="flex justify-between w-[100%] ">
              <div className="flex flex-col justify-center items-center w-[20%] bg-[#0D0D0DDD] h-52 rounded-lg cursor-pointer">
                  <h2 className='text-[#00B8FFAB] text-xl font-semibold'>13</h2>
                  <h3 className='text-[#f2f2f2] '>Publications</h3>
              </div>
              <div className="flex flex-col justify-center w-[20%] items-center bg-[#00B8FFC6] rounded-lg cursor-pointer">
                  <h2>13</h2>
                  <h3 className='text-[#f2f2f2]'>Commentaires</h3>
              </div>
              <div className="flex flex-col justify-center items-center w-[20%] bg-[#FF4930AB] rounded-lg cursor-pointer">
                  <h2>67</h2>
                  <h3 className='text-[#f2f2f2]'>Recommandations</h3>
              </div>
              <div className="flex flex-col justify-center w-[20%] items-center bg-[#0288D1] rounded-lg cursor-pointer">
                  <h2>13</h2>
                  <h3 className='text-[#f2f2f2]'>Contributions</h3>
              </div>
            </div>
            <div className="">
              <h2 className='text-[#f2f2f2] font-semibold' >Questions</h2>
          </div>
          <div className="flex justify-end">
              <div className="bg-[#f2f2f2] p-2 border-r border-[#000] ">
                Recentes
              </div>
              <div className="bg-[#f2f2f2] p-2 border-r border-[#000]">
                Resolues
              </div>
              <div className="bg-[#f2f2f2] p-2 border-r border-[#000]">  
                Non resolues
              </div>
              <div className="bg-[#f2f2f2] p-2  text-[#00B8FF]" >
                Toutes
              </div>
          </div>
          <div className="">
              {
                result.map((elem,key)=>{
                  return(
                    <div  className="flex flex-col p-4 px-10 space-y-6 bg-[#0D0D0D] mb-1">
                      <div className="flex flex-row justify-between">
                        <div className="flex flex-col justify-start w-[50%]">
                          <div className="flex flex-row justify-start w-[50%]">
                            <div className="mr-3">
                              <Avatar  src={userIcon} sx={{width:'2.4em', height:'2.4em'}} />
                            </div>
                            <div className="w-[100%]">
                              <p className='ml-3 text-[#868686] w-[100%]'>{elem.username}</p>
                            </div>
                          </div>
                          <h2 className='text-[#f2f2f2] ml-14'>{elem.desc}</h2>
                        </div>
                        <div className="w-[40%] flex justify-end">
                          <img src={Navig} alt="" className='w-8 cursor-pointer'/>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between mx-10">
                        <div className="cursor-pointer">
                          <h2 className='text-[#00B8FF] text-xl font-medium'>{elem.nbrCommments}</h2>
                        </div>
                        <div className="flex flex-row space-x-2">
                            <img src={Solved} alt="" className=''/>
                            <span className='text-[#00CF35] font-semibold'>{elem.status}</span>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
          </div>
        </div>

    </div>
</div>
  )
}

export default Activity
