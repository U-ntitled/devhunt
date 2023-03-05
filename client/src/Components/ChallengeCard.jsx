import { Avatar } from '@mui/material'
import React from 'react'
import userIcon from '../Image/user.svg'
import { useNavigate } from 'react-router-dom'


function ChallengeCard() {
  const navigate = useNavigate()
  return ( 
    <div className="w-[70%] p-5 ml-16 flex flex-col items-start space-y-2  bg-[#0D0D0D] mb-2">
        <div className="flex flex-row justify-between h-[20%] p-10 w-[100%]">
            <div className="flex flex-row">
                <Avatar  src={userIcon} sx={{width:'2.8em', height:'2.8em'}} />
                <span className='text-[#868686] text-lg ml-4'>Riry Nomenjanahary</span>
            </div>
            <div className="">
                <h2 className='text-[#00CF35] font-medium text-2xl'>Difficile</h2>
            </div>
        </div>
        <div className="text-[#f2f2f2] pb-5 text-center w-[100%]">
            <h1 className='text-3xl'>Chatbot avec tensorflow python</h1>
        </div>
        <div className="text-[#b2b2b2] px-5 mt-10 text-justify">
          <p>Ceci est un challenge qui consiste a creer un chatbot d'etude a l'aide des modules de python. Vous pouvez travailler en equipe... VOus povez egalement ajouter des fonctions supplementaires comme offrir une interface ou deployer le chatbot sur une application web, ce que vous voulez </p>

        </div>
        <div className="flex flex-row items-center py-5 px-5 mt-5 justify-between w-[100%] ">
          <div className="">
             <h2  className='text-[#f2f2f2] text-2xl'>24 <span className='text-[#868686]'> Participants</span></h2>
          </div>
          <div className="text-[#f2f2f2] cursor-pointer py-1 mt-5 text-base  flex justify-center items-center  bg-[#00B8FFCA] w-[35%]">
              <span>Participer  </span>
          </div>
        </div>

    </div>
  )
}

export default ChallengeCard