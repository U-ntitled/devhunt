import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import photo from '../Image/profile.png'
import checkIcon from '../Image/Checked.png'

function QuestionCard() {
    const navigate = useNavigate()
  return (

    <div 

     onClick={()=> navigate('question/:id')}
     className='w-full bg-[#0d0d0d] py-3 px-10 hover:opacity-80 cursor-pointer'>
         <div className=' flex items-center justify-start relative'>
                    <div className='w-[120px]'>
                        <img src={photo} alt='user profile'/>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-xl text-[#f2f2f2] font-bold flex justify-start'>John Doe</span>
                        <span className='text-gray-500'>Online 1 hour ago</span>
                    </div>
                    <div className='text-white text-2xl absolute right-0 top-0  hover:opacity-80'>...</div>
                    
                
          </div>
           <div className='flex px-28 justify-start items-center'>
                    <span className='text-[#FF4930] mr-1'>#</span>
                    <span className='text-[#f2f2f2] font-mono'>UX/UX DESIGN THINKING HEURISTICE</span>
           </div>
           <div className='flex px-1 justify-between items-center'>
                 <span className='text-gray-500'>326 views</span>
                 <Link 
                        className='text-[#00B8FF] py-3 '
                       to='/question/:id'>
                       2 commentaires
                 </Link>
                 <div className='flex justify-center items-center'>
                     <img src={checkIcon} alt="checked icon"/>
                     <span className='text-[#00CF35]'>Solved</span>

                 </div>
           </div>
    </div>
   
   
  )
}

export default QuestionCard