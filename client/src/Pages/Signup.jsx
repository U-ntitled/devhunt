import React from 'react'
import Logo from '../Image/logo.svg'
import {Formik} from 'formik'
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


function Signup() {
    const navigate = useNavigate()
    const handleFormSubmit = (values)=>{
        console.log(values)
        navigate('/')
      }
  return (
    <div className='bg-[#001935] h-[100vh] flex  justify-center items-center w-[100%] '>
       <div className=" flex flex-col space-y-14 w-[40%]">
            <div className=" flex flex-col space-y-4">
                <div className="flex justify-center items-center">
                    <img src={Logo} alt='logo'/>
                </div>
                <div className="text-[#868686] text-center">
                    <h2>Ceci est reservé uniquement pour les étudiants de l’ENI . Pour pouvoir s’inscrire sur cette plateforme , vous deviez nous founir votre n° matricule</h2>
                </div>
            </div>
            <div className="flex  items-center w-[100%]">
               <div className="flex mx-auto items-center w-[80%] justify-between">
               <div className="flex-col space-y-4 ">
                    <h3 className='text-[#868686] text-xl'>Email</h3>
                    <input type='email' name='email' 
                        id='email' className='border border-none  w-[14vw] 
                          text-base text-[#7B7777] bg-[#F2F2F2] pl-5
                          h-[6vh] rounded-full focus:outline-none bg-none' 
                          placeholder='Entrer votre addresse email...'
                          />
                    </div>
                    <div className="flex-col space-y-4">
                    <h3 className='text-[#868686] text-xl'>Email</h3>
                    <input type='email' name='email' 
                        id='email' className='border border-none  w-[14vw] 
                          text-base text-[#7B7777] bg-[#F2F2F2] pl-5
                          h-[6vh] rounded-full focus:outline-none bg-none' 
                          placeholder='Entrer votre addresse email...'
                          />
                    </div>
                </div>     
            </div>
            <div className=" flex justify-center items-center flex-col space-y-4 w-[100%]">
                <div className="flex justify-start w-[80%]">
                    <h3 className='text-[#868686] text-xl- text-start'>Mot de passe</h3>
                </div>
                 <input type='password' name='password' 
                 id='password' className='border border-none  w-[80%] 
                   text-base text-[#7B7777] bg-[#F2F2F2] h-[6vh] rounded-full focus:outline-none bg-none pl-5'
                   placeholder='Entrer votre mot de passe...'
                 />
             </div>
             <div className=" flex flex-col space-y-4 items-center justify-center w-[100%]">
                <div className="flex justify-start w-[80%]">
                    <h3 className='text-[#868686] text-xl text-start'>Mot de passe</h3>
                </div>
                 <input type='password' name='password' 
                 id='password' className='border border-none  w-[80%] 
                   text-base text-[#7B7777] bg-[#F2F2F2] h-[6vh] rounded-full focus:outline-none bg-none pl-5'
                   placeholder='Entrer votre mot de passe...'
                />
             </div>
            <div className="w-[100%] flex justify-center items-center">
                <button type="submit" className="bg-[#00CF35] w-[80%] h-[6vh] flex justify-center items-center rounded-full text-[#f2f2f2] text-xl" >Se connecter</button>
            </div>
       </div>
    </div>
  )
}

export default Signup


