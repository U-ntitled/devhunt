import React, { useState } from 'react'
import FiltreIcon from '../Image/filter.svg'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Challenge() {
  const [showTopics, setShowTopics] = useState(false);
  const HandleClickTopics = () =>{
    setShowTopics(ancien=>!ancien);
  }
  return (
    <div className='flex justify-between items-center w-[100%] mt-16'>
        <div className="flex flex-col w-[15%] mx-12 space-y-6 bg-[#FFFFFF23] p-4 rounded-xl">
            <div className="flex justify-start items-center">
                <div className=" ">
                      <img src={FiltreIcon} alt='filter icon' />
                </div>
                <div className="text-[#f2f2f2] text-3xl">
                   <h2>Filtrer</h2>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div className="text-[#f2f2f2] text-2xl">
                    <h2>Topic</h2>
                </div>
                <div className="text-[#f2f2f2] "> 
                  {showTopics ? <ExpandMoreIcon/> : <ExpandLessIcon/>}
                </div>
            </div>
            <div className="w-[60%] bg-[#0D0D0D]">

            </div>
        </div>
    </div>
  )
}

export default Challenge