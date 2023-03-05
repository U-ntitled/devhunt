import React, { useState } from 'react'
import FiltreIcon from '../Image/filter.svg'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import qIcon from '../Image/Q.png';
import partIcon from '../Image/Vector.png'
import ChallengeFilter from '../Components/ChallengeFilter'
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import { Avatar } from '@mui/material';
import userIcon from '../Image/user.svg'

function Challenge() {
  const [visible, setVisible] = useState(false)
  const [showTopics, setShowTopics] = useState(false);
  const HandleClickTopics = () =>{
    setShowTopics(ancien=>!ancien);
  }

  return (
    <div className='flex justify-between items-center w-[100%] h-[100%] mt-32'>
        <div className='w-[25%] flex justify-center px-10  ml-20'>
          <div className='w-full flex flex-col items-center m-2'>
              <div className='bg-[#ffffff16] w-full rounded-lg'>
                    <div
                        onClick={() => setVisible(!visible)}
                        className='flex justify-start items-center bg-[#ffffff16] rounded-xl py-2 px-6 w-full'>
                        <img src={FiltreIcon} alt="Question icon"/>
                        <span className='text-lg font-bold text-white ml-8 '>Filtrer</span>
                    </div>
                 <ChallengeFilter visible={visible}/>
              </div>
              <div className='flex justify-start items-center bg-[#ffffff16] rounded-xl py-2 px-4 w-full mt-4'>
                   <EmojiEventsOutlinedIcon sx={{color:'#00B8FF', fontSize:'2em'}}/>
                   <span className='text-lg font-bold text-white ml-8'>Mes challenges</span>
              </div> 
              <div className='flex justify-start items-center bg-[#ffffff16] rounded-xl py-2 px-4 w-full mt-4'>
                   <img src={partIcon} alt="Question icon"/>
                   <span className='text-lg font-bold text-white ml-9'>Mes participations</span>
              </div>
          </div>
         </div>
         <div className="flex justify-start w-[65%] h-44 p-5 bg-[#0D0D0D]">
          <div className="flex flex-row justify-between w-[70%]">
            <div className="flex flex-row">
              <Avatar  src={userIcon} sx={{width:'2.8em', height:'2.8em'}} />
              <span className='text-[#868686] text-lg ml-4'>Riry Nomenjanahary</span>
            </div>
            <div className="">
              <h2 className='text-[#00CF35] font-medium text-2xl'>Difficile</h2>
            </div>
          </div>
          <div className="">

          </div>
          <div className="">

          </div>
          <div className="">

          </div>
        </div>

    </div>
  )
}

export default Challenge