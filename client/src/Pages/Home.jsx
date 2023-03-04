import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ExploreIcon from '../Image/explore.svg'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Home() {
  const [view,setView] = useState(false)
  const HandleClickView = () =>{
      setView(ancien=>!ancien)
  }
  return (
    <div className=' w-[100%] flex justify-between items-center  mt-24'>
        <div className=" w-[20%] h-[40vh] border border-red-600 justify-center items-center">
            <div className="">
              <div className="cursor-pointer " onClick={HandleClickView}>
                <img src={ExploreIcon} alt=''/>
              </div>
              <div className="text-white font-medium">
                <h2>Explorer</h2>
              </div>
              <div className="">
                <ExpandMoreIcon/>
              </div>
              <div className="">

              </div>
            </div>
        </div>
        <div className="w-[50%] border border-red-600 h-[40vh]">

        </div>
        <div className="w-[20%] border border-red-600 h-[40vh]">

        </div>
    </div>
  )
}

export default Home