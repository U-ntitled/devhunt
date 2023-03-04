import React from 'react'
import Logo from '../Image/logo.svg'
import {Formik} from 'formik'
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


function Login() {
    const navigate = useNavigate()
    const handleFormSubmit = (values)=>{
        console.log(values)
        navigate('/')
      }
  return (
    <div className='bg-[#001935] h-[100vh] flex  justify-center items-center '>
              <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={initialValues}
                    validationSchema={checkoutSchema}
                    > 
                      {({
                        values,
                        errors,
                        touched,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                      })=>(                        
                    <motion.form 
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
                    onSubmit={handleSubmit} className=" flex-col space-y-8"> 
                              <div className="flex justify-center items-center">
                                  <img src={Logo} alt='logo'/>
                              </div>
                              <div className="flex-col space-y-4">
                                  <h3 className='text-[#868686] text-xl'>Email</h3>
                                  <input type='email' name='email' value={values.email}
                                   id='email' className='border border-none  w-[23vw] 
                                    text-center text-2xl text-[#7B7777] bg-[#F2F2F2]
                                     h-[7vh] rounded-full focus:outline-none bg-none' 
                                     placeholder='Entrer votre addresse email...'
                                     onBlur={handleBlur}
                                     onChange={handleChange}
                                     error={!!touched.email && !!errors.email}
                                     helperText={touched.email && errors.email} 
                                     />
                              </div>
                              <div className="flex-col space-y-4">
                                  <h3 className='text-[#868686] text-xl'>Mot de passe</h3>
                                  <input type='password' name='password' value={values.password} 
                                  id='password' className='border border-none  w-[23vw] 
                                   text-center text-2xl text-[#7B7777] bg-[#F2F2F2] h-[7vh] rounded-full focus:outline-none bg-none'
                                    placeholder='Entrer votre mot de passe...'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    error={!!touched.password && !!errors.password}
                                    helperText={touched.password && errors.password} />
                              </div>
                              <div className="flex justify-between items-center">
                                  <div className=" flex justify-between items-center">
                                          <input type="checkbox"  className='h-5 w-12 border border-none outline-none ' name="remember" id="remember" />
                                          <label htmlFor="remember" className='text-[#f2f2f2]'> Se souvenir de moi </label>
                                  </div>
                                  <div className="">
                                        <h6 className='text-[#00B8FF]'> Mot de passe oublier ?</h6>
                                  </div>
                              </div>
                              <div >
                                  <button type="submit" className="bg-[#00CF35] w-[23vw] h-[7vh] flex justify-center items-center rounded-full text-[#f2f2f2] text-2xl" >Se connecter</button>
                              </div>
                    </motion.form>
                      )}
                    </Formik>
    </div>
  )
}

export default Login

const checkoutSchema = yup.object().shape({
    email: yup.string().required("required"),
    password: yup.string().required("required"),
    remember: yup.boolean()
  });
  const initialValues = {
    email: "",
    password: "",
    remember: true,
  };

