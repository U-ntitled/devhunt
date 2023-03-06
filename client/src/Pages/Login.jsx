import React,{useState} from 'react'
import Logo from '../Image/logo.svg'
import {Formik} from 'formik'
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios'

function Login() {
    const [email ,setEmail] = useState('')
    const HandleEmailChange = (e)=> {
            setEmail(e.target.value)
    }
    const [password ,setPassword] = useState('')
    const HandlePasswordChange = (e)=> {
            setPassword(e.target.value)
    }
    const navigate = useNavigate()
    const handleFormSubmit = async()=>{
        const values ={email,password}
        const login = await axios.post('http://localhost:8000/api/routes/auth/login',values)
        if(login.status === 200){
            navigate('/')
        }
      }
  return (
    <div className='bg-[#001935] h-[100vh] flex  justify-center items-center '>
             
                    <motion.div 
                     initial={
                      {
                       opacity: 0,
                       x:-200
                      }
                      }
                      animate={{
                          opacity:1,
                          x:0
                      }}
                      transition={
                          {
                            duration: 1.5
                          }
                      }  
                    className=" flex-col space-y-8"> 
                              <div className="flex justify-center items-center">
                                  <img src={Logo} alt='logo'/>
                              </div>
                              <div className="flex-col space-y-4">
                                  <h3 className='text-[#868686] text-xl'>Email</h3>
                                  <input type='email' name='email' value={email}
                                   id='email' className='border border-none  w-[100%] 
                                    text-center text-xl text-[#7B7777] bg-[#F2F2F2]
                                     h-[6vh] rounded-full focus:outline-none bg-none' 
                                     placeholder='Entrer votre addresse email...'
                                     onChange={HandleEmailChange}
                                     />
                              </div>
                              <div className="flex-col space-y-4">
                                  <h3 className='text-[#868686] text-xl'>Mot de passe</h3>
                                  <input type='password' name='password' value={password} 
                                  id='password' className='border border-none  w-[100%]
                                   text-center text-xl text-[#7B7777] bg-[#F2F2F2] h-[6vh] rounded-full focus:outline-none bg-none'
                                    placeholder='Entrer votre mot de passe...'
                                    onChange={HandlePasswordChange}
                                    
                                    />
                              </div>
                              <div className="flex justify-between items-center">
                                  <div className=" flex justify-between items-center">
                                          <input type="checkbox"  className='h-5 border border-none outline-none ' name="remember" id="remember" />
                                          <label htmlFor="remember" className='text-[#f2f2f2]'> Se souvenir de moi </label>
                                  </div>
                                  <div className="">
                                        <h6 className='text-[#00B8FF]'> Mot de passe oublier ?</h6>
                                  </div>
                              </div>
                              <div >
                                  <button onClick={handleFormSubmit} className="bg-[#00CF35] w-[100%] h-[6vh] flex justify-center items-center rounded-full text-[#f2f2f2] text-xl" >Se connecter</button>
                              </div>
                    </motion.div>
    </div>
  )
}

export default Login

