import React from 'react'

function ChallengeCard() {
  return (
    <div className="w-[65%] h-44">
        <div className="flex flex-row justify-between h-[100%] p-10 w-[70%] bg-[#0D0D0D]">
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
  )
}

export default ChallengeCard