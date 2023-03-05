import React from 'react'
import backIcon from '../Image/Back.png'
import AskButton from './AskButton'

function Question() {
  return (
    <div className='w-[60%] bg-black px-3 py-4'>
         <div className='flex justify-start items-center'>
             <div>
                 <img src={backIcon} alt="back icon"/>
                <span className='text-[#f2f2f2] ml-6 text-xl'>Question</span>
             </div>
             {/* <button 
                   type='button'
                   className='bg-[#00CF35] text-[#f2f2f2] py-2 px-3 mb-4 '
                   onClick={()=> navigate('ask')}
                >
                  Ask question
             </button> */}
             <AskButton/>
             
             
         </div>
        
          
    </div>
  )
}

export default Question