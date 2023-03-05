import React, { useState } from 'react'
import FiltreIcon from '../Image/filter.svg'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import qIcon from '../Image/Q.png';
import partIcon from '../Image/Vector.png'

function Challenge() {
  const [showTopics, setShowTopics] = useState(false);
  const HandleClickTopics = () =>{
    setShowTopics(ancien=>!ancien);
  }
  return (
    <div className='flex justify-between items-center w-[100%] mt-16'>
        <div className='w-[25%] flex justify-center px-10  ml-20'>
         <div className='w-full flex flex-col items-center m-2'>
              <div className='bg-[#ffffff16] w-full rounded-lg'>
                    <div className='flex justify-start items-center bg-[#ffffff16] rounded-xl py-2 px-6 w-full'>
                        <img src={FiltreIcon} alt="Question icon"/>
                        <span className='text-lg font-bold text-white ml-8 '>Filter</span>
                    </div>
                 {/* <Filter/> */}
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
    </div>
  )
}

export default Challenge