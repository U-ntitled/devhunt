import React from 'react'
import { useNavigate } from 'react-router-dom'
import QuestionCard from './QuestionCard'

function ForumFeed() {
  const navigate = useNavigate()
  return (
    <div className='w-[60%] px-5 py-4'>
           <div className='flex justify-end items-center'>
               <button 
                   type='button'
                   className='bg-[#00CF35] text-[#f2f2f2] py-2 px-3 mb-4 '
                   onClick={()=> navigate('ask')}
                >
                  Ask question
                </button>
           </div>
           <div className='w-[1/2] h-[700px] overflow-y-auto flex flex-col '>
                 <QuestionCard/>
                 <QuestionCard/>
                 <QuestionCard/>
                 <QuestionCard/>
                 <QuestionCard/>
           </div>
    </div>
  )
}

export default ForumFeed