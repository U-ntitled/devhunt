import React from 'react'
import Logo from '../Image/logo.svg'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function Confirmation() {
  return (
    <div className='bg-[#001935] h-[100vh] flex  justify-center items-center w-[100%]'>
        <div className="w-[100%]  md:w-[40%] flex justify-center items-center flex-col space-y-14">
            <div className=" flex flex-col space-y-4">
                    <div className="flex justify-center items-center">
                        <img src={Logo} alt='logo'/>
                    </div>
                    <div className="text-[#868686] text-center">
                        <h2>Nous avons envoyés une code de confirmation via  example@gmail.com,</h2>
                    </div>
                </div>
                <div className="w-[50%]">
                    <input type='number' name='password' 
                     id='password' className='border border-none  w-[100%] 
                       text-2xl text-center text-[#7B7777] bg-[#F2F2F2] h-[7vh] rounded-full focus:outline-none bg-none'
                       placeholder='000000'
                     />
                </div>
                <div className=" w-[80%] flex justify-between items-center">
                        <div className=" cursor-pointer">
                            <h2 className='text-[#00B8FF] text-2xl font-medium'>resend code ?</h2>
                        </div>
                        <div className="flex justify-between items-center cursor-pointer">
                            <KeyboardBackspaceIcon sx={{color:'#f2f2f2',fontSize:'2em'}}/>
                            <h2 className='text-[#f2f2f2] text-2xl font-medium'>Back</h2>
                        </div>
                </div>
        </div>
    </div>
  )
}

export default Confirmation