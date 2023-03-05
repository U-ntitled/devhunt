import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import QuestionCard from './QuestionCard'
import AskButton from './AskButton'
import axios from 'axios'

function ForumFeed() {
  
  return (
    <div className='w-[60%] px-5 py-4'>
           <div className='flex justify-end items-center'>
                <AskButton/>
           </div>
           <div className='w-[786px] h-[720px] overflow-y-auto flex flex-col '>
                      <QuestionCard  />
           </div>
    </div>
  )
}

export default ForumFeed