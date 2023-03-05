import React, { useState } from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import UserProfile from '../Image/userpro.svg'
import Activity from '../Image/activity.svg'
import { Avatar } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate()
  const [edit,setEdit]= useState(false)
  const HandleClickEdit = () =>{
    setEdit(ancien=>!ancien)
  }
  return (
    <div className='w-[100%]  mt-16'>
        <div className="flex justify-between w-[100%] ">
            <div className="w-[30%] flex flex-col space-y-8   ">
                <div className="cursor-pointer flex mx-auto mt-5 justify-start pl-14 items-center bg-[#ffffff21] w-[50%] h-14 rounded-full ">
                      <div className="cursor-pointer mr-2" >
                        <AccountCircleOutlinedIcon sx={{color: '#00B8FF', fontSize:'2em'}}/>
                      </div>
                      <div className="text-white font-medium" onClick={()=> navigate('/profile')}>
                        <h2> Profile</h2>
                      </div>
                </div>
                <div className="cursor-pointer flex mx-auto mt-5 justify-start pl-14 items-center bg-[#ffffff21] w-[50%] h-14 rounded-full ">
                      <div className="cursor-pointer mr-2 " >
                        <img src={Activity} alt=''/>
                      </div>
                      <div className="text-white font-medium" onClick={()=> navigate('/activity')}>
                        <h2>Mes activites</h2>
                      </div>
                </div>
                <div className="cursor-pointer flex mx-auto mt-5 justify-start pl-14 items-center bg-[#ffffff21] w-[50%] h-14 rounded-full ">
                      <div className="cursor-pointer mr-2 " >
                            <SettingsOutlinedIcon sx={{color:'#00B8FF', fontSize:'2em'}}/>
                      </div>
                      <div className="text-white font-medium">
                        <h2>Parametres</h2>
                      </div>
                </div>
                <div className="cursor-pointer flex mx-auto mt-5 justify-center items-center  w-[50%] h-14 ">
                    <LogoutIcon sx={{color:'#00B8FF'}} />
                    <h2 className='text-xl font-semibold ml-2 text-[#f2f2f2]'>Se Deconnecter</h2>
                </div>
            </div>
            <div className="flex flex-col  space-y-10 w-[60%] mx-12">
                <div className="flex justify-between items-center">
                        <div className="text-[#f2f2f2] font-semibold text-xl">
                            <h3>Profile</h3>
                        </div>
                        <div onClick={HandleClickEdit} className="text-[#00B8FF] font-semibold flex justify-between cursor-pointer">
                            <ModeEditOutlineOutlinedIcon/>
                            <h2 className='pl-2'>Edit</h2>
                        </div>
                </div>
                {
                  edit ? <div className="flex flex-col justify-center"
                  >
                       <div className="flex justify-center items-center">
                            <input type="file" name="pic" id="pic" className='w-[42%] my-10 bg-[#868686de]'/>
                          </div>
                          <div className="flex flex-col items-start space-y-8  mx-auto ">
                              <div className="w-[100%]">
                                  <span className='text-[#868686] text-2xl font-semibold'>Prenoms :</span> &nbsp; &nbsp; &nbsp;<input className='text-lg px-2 py-3 w-[100%] rounded-3xl' placeholder='Entrer votre Prenom...' type="text" name="" id=""/> 
                              </div>
                              <div className="w-[100%]">
                                  <span className='text-[#868686] text-2xl font-semibold'>Adresse Email :&nbsp; &nbsp; &nbsp; </span><input className='text-lg px-2 py-3 w-[100%] rounded-3xl' placeholder='Entrer votre Email...' type="email" name="" id=""/ >
                              </div>
                              <div className="w-[100%]">
                                  <span className='text-[#868686] text-2xl font-semibold'>Mots de passe :</span> &nbsp; &nbsp; &nbsp; <input className='text-lg px-2 py-3 w-[100%] rounded-3xl' placeholder='Entrer votre Mot de passe...' type="password" name="" id=""/ >
                              </div>
                              <div className="w-[100%]">
                                  <h2><span className='text-[#868686] text-2xl font-semibold'>Badge : </span> &nbsp; &nbsp; &nbsp; <span className='text-red-700 text-2xl font-semibold'>pas de Badge</span></h2>
                              </div>
                              <div className="w-[100%] justify-center">
                                  <button className='bg-[#00B8FF] w-[100%] rounded-3xl py-3'>Confirmer</button>
                              </div>
                          </div>
                  </div> :
                  <>
                                  <div className="flex justify-center items-center">
                                  <Avatar sx={{height: '20vh',width:'10vw'}}/>
                          </div>
                          <div className="flex flex-col items-start space-y-8  mx-auto     ">
                              <div className="">
                                  <h2><span className='text-[#868686] text-2xl font-semibold'>Prenoms :</span> &nbsp; &nbsp; &nbsp; <span className='text-[#f2f2f2] text-2xl font-semibold'>Riry Nomenjanahary </span></h2>
                              </div>
                              <div className="">
                                  <h2><span className='text-[#868686] text-2xl font-semibold'>Adresse Email :</span> &nbsp; &nbsp; &nbsp; <span className='text-[#f2f2f2] text-2xl font-semibold'>RiryNomenjanahary@gmail.com </span></h2>
                              </div>
                              <div className="">
                                  <h2><span className='text-[#868686] text-2xl font-semibold'>Mots de passe :</span> &nbsp; &nbsp; &nbsp; <span className='text-[#f2f2f2] text-2xl font-semibold'>*********</span></h2>
                              </div>
                              <div className="">
                                  <h2><span className='text-[#868686] text-2xl font-semibold'>Badge : </span> &nbsp; &nbsp; &nbsp; <span className='text-red-700 text-2xl font-semibold'>pas de Badge</span></h2>
                              </div>
                          </div>
                  </>
                }
            </div>
        </div>
    </div>
  )
}

export default Profile