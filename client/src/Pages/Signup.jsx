import React, { useState } from 'react'
import Logo from '../Image/logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios'

function Signup() {
    const navigate = useNavigate()
    const [lname,setLname] = useState('')
    const [fname,setFname] = useState('')
    const [email,setEmail] = useState('')
    const [matricule,setMatricule] = useState('')
    const HandleLnameChange = (e)=>{
        setLname(e.target.value)
    }
    const HandleFnameChange = (e)=>{
        setFname(e.target.value)
    }
    const HandleEnailChange = (e)=>{
        setEmail(e.target.value)
    }
    const HandleMatriculeChange = (e)=>{
        setMatricule(e.target.value)
    }
    const handleFormSubmit = async ()=>{
        const values = {
            lname,fname,email,matricule
        }
        const signup = await axios.post('http://localhost:8000/api/routes/auth/register',values)
        console.log(values,9000)
        if(signup.status === 200){
            console.log('aona tonga ato ve')
            navigate('/confirmation')
        }
      }
  return (
    <div className='bg-[#001935] h-[100vh] flex  justify-center items-center w-[100%] '>
       <div className=" flex flex-col space-y-8 w-[40%]">
            <div className=" flex flex-col space-y-2">
                <div className="flex justify-center items-center">
                    <img src={Logo} alt='logo'/>
                </div>
                <div className="text-[#868686] text-center">
                    <h2>Ceci est reservé uniquement pour les étudiants de l’ENI . Pour pouvoir s’inscrire sur cette plateforme , vous deviez nous founir votre n° matricule</h2>
                </div>
            </div>
            <div className="flex  items-center w-[100%]">
               <div className="flex mx-auto items-center w-[80%] justify-between">
               <div className="flex-col space-y-2 ">
                    <h3 className='text-[#868686] text-xl'>Nom</h3>
                    <input type='text' name='fname' value={fname} onChange={HandleFnameChange}
                        id='fname' className='border border-none  w-[14vw] 
                          text-base text-[#7B7777] bg-[#F2F2F2] pl-4
                          h-[6vh] rounded-full focus:outline-none bg-none' 
                          placeholder='Entrer votre nom...'
                          />
                    </div>
                    <div className="flex-col space-y-2">
                    <h3 className='text-[#868686] text-xl'>Prenoms</h3>
                    <input type='text' name='lname' value={lname} onChange={HandleLnameChange}

                        id='lname' className='border border-none  w-[14vw] 
                          text-base text-[#7B7777] bg-[#F2F2F2] pl-3
                          h-[6vh] rounded-full focus:outline-none bg-none' 
                          placeholder='Entrer votre prenoms...'
                          />
                    </div>
                </div>     
            </div>
            <div className=" flex justify-center items-center flex-col space-y-2 w-[100%]">
                <div className="flex justify-start w-[80%]">
                    <h3 className='text-[#868686] text-xl- text-start'>Email</h3>
                </div>
                 <input type='email' name='email' value={email} onChange={HandleEnailChange}
                 id='email' className='border border-none  w-[80%] 
                   text-base text-[#7B7777] bg-[#F2F2F2] h-[6vh] rounded-full focus:outline-none bg-none pl-5'
                   placeholder='Entrer votre addresse email...'
                 />
             </div>
             <div className=" flex flex-col space-y-2 items-center justify-center w-[100%]">
                <div className="flex justify-start w-[80%]">
                    <h3 className='text-[#868686] text-xl text-start'>No Matricule</h3>
                </div>
                 <input type='text' name='matricule' value={matricule} onChange={HandleMatriculeChange}
                 id='matricule' className='border border-none  w-[80%] 
                   text-base text-[#7B7777] bg-[#F2F2F2] h-[6vh] rounded-full focus:outline-none bg-none pl-5'
                   placeholder='Entrer votre No Matricule...'
                />
             </div>
            <div className="w-[100%] flex justify-center items-center">
                <button onClick={handleFormSubmit} className="bg-[#00CF35] w-[80%] h-[6vh] flex justify-center items-center rounded-full text-[#f2f2f2] text-xl" >Se connecter</button>
            </div>
       </div>
    </div>
  )
}

export default Signup


//1173H-F ninohantonio@gmail.com Antonino Iraky Ny Avo RAZAFIMAMY