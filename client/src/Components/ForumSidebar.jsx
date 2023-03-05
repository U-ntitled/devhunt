
import React, { useState } from 'react'
import filterIcon from '../Image/filter.png'
import qIcon from '../Image/Q.png';
import partIcon from '../Image/Vector.png'
import Filter from './Filter';






function ForumSidebar() {

  const [visible, setVisible] = useState(false)
  return (
    <div className='w-[550px] flex justify-center px-10  ml-20'>
         <div className='w-full flex flex-col items-center m-2'>
              <div className='bg-[#ffffff16] flex flex-col w-full rounded-lg'>
                    <div 
                        onClick={()=> setVisible(!visible)}
                        className='flex justify-start items-center bg-[#ffffff16] rounded-xl py-3 px-6 w-full hover:opacity-90'>
                        <img src={filterIcon} alt="Question icon"/>
                        <span className='text-lg font-bold text-white ml-8 '>Filter</span>
                    </div>
                    <Filter visible={visible}/>
                 
              </div>
              <div className='flex justify-start items-center bg-[#ffffff16] rounded-xl py-2 px-4 w-full mt-4'>
                   <img src={qIcon} alt="Question icon"/>
                   <span className='text-lg font-bold text-white ml-8'>Mes questions</span>
              </div> 
              <div className='flex justify-start items-center bg-[#ffffff16] rounded-xl py-2 px-4 w-full mt-4'>
                   <img src={partIcon} alt="Question icon"/>
                   <span className='text-lg font-bold text-white ml-9'>Mes participations</span>
              </div>
         </div>
      </div>
  )
}

export default ForumSidebar