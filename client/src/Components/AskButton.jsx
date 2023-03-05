import React from 'react'
import { useNavigate } from 'react-router-dom'

function AskButtonJ() {
 const navigate = useNavigate()
  return (
    <button 
    type='button'
    className='bg-[#00CF35] text-[#f2f2f2] py-2 px-3 mb-4 '
    onClick={()=> navigate('/forum/ask')}
    >
        Ask question
    </button>
  )
}

export default AskButtonJ