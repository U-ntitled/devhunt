import React from 'react'
import backIcon from '../Image/Back.png'

function Question() {
  return (
    <div className='w-[60%] bg-black px-3 py-3'>
         <div className='flex justify-start items-center'>
              <img src={backIcon} alt="back icon"/>
              <span className='text-[#f2f2f2] ml-4'>Question</span>
         </div>
        
          
    </div>
  )
}

export default Question