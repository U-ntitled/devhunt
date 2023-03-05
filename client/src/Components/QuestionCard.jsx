import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import photo from '../Image/profile.png'
import checkIcon from '../Image/Checked.png'
import axios from 'axios';
import moment from 'moment';
import MyContext from '../Context';

function QuestionCard() {
    const navigate = useNavigate()
    const {quests} = useContext(MyContext)
  return (
    <div className="">

      {
        quests.map((elem, key)=>{
          return(
  
            <div
        
             onClick={()=> navigate(`question/${key}`)}
             className='w-full bg-[#0d0d0d] py-3 px-10 hover:opacity-80 cursor-pointer mb-2 shadow-sm shadow-gray-600 rounded-md'>
                 <div className=' flex items-center justify-start relative' key={key}>
                            <div className='w-[120px]'>
                                <img src={photo} alt='user profile'/>
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-xl text-[#f2f2f2] font-bold flex justify-start'>John Doe</span>
                                <span className='text-gray-500'>{moment(elem.created_at).fromNow()}</span>
                            </div>
                            <div className='text-white text-2xl absolute rig.then((data) => {ht-0 top-0  hover:opacity-80'>...</div>
                            
                        
                  </div>
                   <div className='flex px-28 justify-start items-center'>
                            <span className='text-[#FF4930] mr-1'>#</span>
                            <span className='text-[#f2f2f2] font-mono'>{elem.topic}</span>
                   </div>
                   <div className='flex px-1 justify-between items-center'>
                         <span className='text-gray-500'>326 views</span>
                         <Link 
                                className='text-[#00B8FF] py-3 '
                               to='/question/:id'>
                               {elem.num_comment} commentaires
                         </Link>
                         <div className='flex justify-center items-center'>
                             <img src={checkIcon} alt="checked icon"/>
                             <span className='text-[#00CF35]'>{elem.state}</span>
        
                         </div>
                   </div>
            </div>
          )
  
        })    
      }
    </div>

  )
}

export default QuestionCard