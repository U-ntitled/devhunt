import React from 'react';
import backIcon from '../Image/Back.png'
import AceEditor  from 'react-ace';

function AskedQuestion() {
  return (
    <div className='w-[60%] py-2 px-5'>
          <div className='flex justify-start items-center'>
              <span className=''>
                  <img src={backIcon} alt="background"/>
              </span>
              <span className='text-3xl font-bold text-[#f2f2f2] ml-10'>CREATE POST</span>
          </div>
          <div className='bg-[#f2f2f2] px-8 py-8'>
              <div className='flex flex-col'>
              <input 
                  className='py-3 px-4 appearance-none  focus:outline-none border-b-2'
                  type="text"  
               />
               <textarea
                   
                   className=''
               />
                    
              </div>
              
          </div>
          <AceEditor 
              placeholder="Bonjour de react ace"
              theme='github'
            
          />
        
    </div>
  )
}

export default AskedQuestion
