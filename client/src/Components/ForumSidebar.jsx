
import { StepContext } from '@mui/material';
import React, { useContext, useState } from 'react'
import MyContext from '../Context';
import filterIcon from '../Image/filter.png'
import qIcon from '../Image/Q.png';
import partIcon from '../Image/Vector.png'
import Filter from './Filter';

function ForumSidebar() {
     const {getQuestsMy} = useContext(MyContext)
     const [visible, setVisible] = useState(false)
     const HandleClickMyQuest = () =>{
          getQuestsMy()
     }
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
                   <span className='text-lg font-bold text-white ml-8 cursor-pointer' onClick={HandleClickMyQuest}>Mes questions</span>
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