import React from 'react'
import ChallengeCard from './ChallengeCard'

function ForumFeed() {
  return (    
  <div className='w-[90%] overflow-y-auto'>
        <ChallengeCard/>
        <ChallengeCard/>
        <ChallengeCard/>
        <ChallengeCard/>
        <ChallengeCard/>
    </div>
  )
}

export default ForumFeed