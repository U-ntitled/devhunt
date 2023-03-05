
import React from 'react'
import filterIcon from '../Image/filter.png'
import qIcon from '../Image/Q.png';
import partIcon from '../Image/Vector.png'

// import Filter from './Filter'

const data =[
    {
        topic1:'IA',
        topic2:'Programmation',
        topic:'UI/UX Design'
    },
    {
        time:'plus recent',
        time2:'il y a une semaine',
        time3:'il y a un mois',
        time4:'il y a un an'
 
    },
    {
        etat1:"resolu",
        etat2:"non resolu"
    },
    {
        star:"stared",
        none:"none"
    }
]


function ForumSidebar() {
  return (
    <div className='w-[25%] flex justify-center px-10  ml-20'>
         <div className='w-full flex flex-col items-center m-2'>
              <div className='bg-[#ffffff16] w-full rounded-lg'>
                    <div className='flex justify-start items-center bg-[#ffffff16] rounded-xl py-2 px-6 w-full'>
                        <img src={filterIcon} alt="Question icon"/>
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
  )
}

export default ForumSidebar