import React from 'react'
import backIcon from '../Image/Back.png'
import AskButton from './AskButton'
import photo from '../Image/profile.png'
import checkIcon from "../Image/Checked.png"
import likeIcon from "../Image/like2.png"
import { useNavigate } from 'react-router-dom'


function Question() {
  const navigate = useNavigate()
   
  return (
    <div className='w-[60%] px-3 py-3 pb-10'>
         <div className='flex justify-between items-center'>
             <div className='flex justify-center items-center '>
                 <span 
                     onClick={()=> navigate('/forum')}
                     className='hover:opacity-90' >
                      <img src={backIcon} alt="back icon"/>
                  </span>
                <span className='text-[#f2f2f2] ml-6 text-xl'>Question</span>
             </div>
             <AskButton/>
         </div>
         <div className='bg-white px-10 py-3  overflow-y '>
            <div className=' flex items-center justify-start relative mb-3'>
                        <div className='w-[120px]'>
                            <img src={photo} alt='user profile'/>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-xl text-[#0D0D0D] font-bold flex justify-start'>John Doe</span>
                            <span className='text-gray-500'>Online 1 hour ago</span>
                        </div>
                        <div className='text-[#0D0D0D] text-2xl absolute right-0 top-0  hover:opacity-80'>...</div>     
              </div>
              <div className=''>
                     
                     <span className='font-bold'>
                        <span className='text-[#ff4830ac] mr-1'>#</span>
                           Mern stack developpement issues
                     </span>
                     <div className='px-3 py-2 mb-4'>
                          Prepare for a career in tech by joining GitHub Global Campus. 
                          Global Campus will help you get the practical industry knowledge you need 
                          by giving you access to industry tools, events, learning resources and a growing student community.

                     </div>
                     <div className='flex justify-between items-center mb-2'>
                          <span className='text-gray-700] py-2 hover:text-[#00B8FF]'>
                                12 commentaires
                          </span>
                          <div className='flex justify-center items-center'>
                                <img src={checkIcon} alt="checked icon"/>
                                <span className='text-[#00CF35]'>Solved</span>
                          </div>
                     </div>
                     

                     <div className=' relative'>
                              <div className='absolute top-0 mb-7'>
                                 <span className="text-gray-700">Reponses</span>
                              </div> 
                     </div>
                     <div className='overflow-y-scroll h-[800px] '>
                      <div>
                                    <div className='w-full flex justify-center mt-10 ml-5'>
                                          <img src={photo} className='w-10 h-10' alt='user profile'/>
                                          <div className='flex flex-col items-start w-[85%]'>
                                              <span className='ml-5 font-bold'>Alex Nohemiha</span>
                                                <div className='bg-[#f2f2f277] py-4 px-4'>
                                                  Prepare for a career in tech by joining GitHub Global Campus. 
                                                  Global Campus will help you get the practical industry knowledge you need 
                                                  by giving you access to industry tools, events..
                                                
                                                </div>
                                            </div>
                                          <span className='items-end w-[10%]'>1 min</span>
                                        
                                        
                                    </div>
                                          <div className='flex justify-around items-center'>
                                                <span className='w-6 h-6 text-[#f2f2f2]'>
                                                  <img src={likeIcon} alt="like icon"/>
                                                </span>
                                              
                                                <span>Reply</span>
                                                <span>Staring</span>
                                              
                                          </div>
                            </div>
                            <div>
                                    <div className='w-full flex justify-center mt-10 ml-5'>
                                          <img src={photo} className='w-10 h-10' alt='user profile'/>
                                          <div className='flex flex-col items-start w-[85%]'>
                                              <span className='ml-5 font-bold'>Alex Nohemiha</span>
                                                <div className='bg-[#f2f2f277] py-4 px-4'>
                                                  Prepare for a career in tech by joining GitHub Global Campus. 
                                                  Global Campus will help you get the practical industry knowledge you need 
                                                  by giving you access to industry tools, events..
                                                
                                                </div>
                                            </div>
                                          <span className='items-end w-[10%]'>1 min</span>
                                        
                                        
                                    </div>
                                    <div className='flex justify-around items-center'>
                                                <span className='w-6 h-6 text-[#f2f2f2]'>
                                                  <img src={likeIcon} alt="like icon"/>
                                                </span>
                                              
                                                <span>Reply</span>
                                                <span>Staring</span>
                                              
                                    </div>
                                    <div>

                                     <div className='w-full flex justify-center mt-10 ml-5'>
                                              <img src={photo} className='w-10 h-10' alt='user profile'/>
                                              <div className='flex flex-col items-start w-[85%]'>
                                                  <span className='ml-5 font-bold'>Alex Nohemiha</span>
                                                    <div className='bg-[#f2f2f277] py-4 px-4'>
                                                      Prepare for a career in tech by joining GitHub Global Campus. 
                                                      Global Campus will help you get the practical industry knowledge you need 
                                                      by giving you access to industry tools, events..
                                                    
                                                     </div>
                                              </div>
                                              <span className='items-end w-[10%]'>1 min</span> 
                                    </div>
                                    <div className='flex justify-around items-center'>
                                                <span className='w-6 h-6 text-[#f2f2f2]'>
                                                  <img src={likeIcon} alt="like icon"/>
                                                </span>
                                              
                                                <span>Reply</span>
                                                <span>Staring</span>
                                              
                                    </div>
                                    <div className='w-full flex justify-center mt-10 ml-5'>
                                              <img src={photo} className='w-10 h-10' alt='user profile'/>
                                              <div className='flex flex-col items-start w-[85%]'>
                                                  <span className='ml-5 font-bold'>Alex Nohemiha</span>
                                                    <div className='bg-[#f2f2f277] py-4 px-4'>
                                                      Prepare for a career in tech by joining GitHub Global Campus. 
                                                      Global Campus will help you get the practical industry knowledge you need 
                                                      by giving you access to industry tools, events..
                                                    
                                                     </div>
                                              </div>
                                              <span className='items-end w-[10%]'>1 min</span> 
                                    </div>
                                    <div className='flex justify-around items-center'>
                                                <span className='w-6 h-6 text-[#f2f2f2]'>
                                                  <img src={likeIcon} alt="like icon"/>
                                                </span>
                                              
                                                <span>Reply</span>
                                                <span>Staring</span>
                                              
                                    </div>
                                         <div className='w-full flex justify-center mt-10 ml-5'>
                                              <img src={photo} className='w-10 h-10' alt='user profile'/>
                                              <div className='flex flex-col items-start w-[85%]'>
                                                  <span className='ml-5 font-bold'>Alex Nohemiha</span>
                                                    <div className='bg-[#f2f2f277] py-4 px-4'>
                                                      Prepare for a career in tech by joining GitHub Global Campus. 
                                                      Global Campus will help you get the practical industry knowledge you need 
                                                      by giving you access to industry tools, events..
                                                    
                                                     </div>
                                              </div>
                                              <span className='items-end w-[10%]'>1 min</span> 
                                    </div>
                                    <div className='flex justify-around items-center'>
                                                <span className='w-6 h-6 text-[#f2f2f2]'>
                                                  <img src={likeIcon} alt="like icon"/>
                                                </span>
                                              
                                                <span>Reply</span>
                                                <span>Staring</span>
                                              
                                    </div>
                                    <div className='w-full flex justify-center mt-10 ml-5'>
                                              <img src={photo} className='w-10 h-10' alt='user profile'/>
                                              <div className='flex flex-col items-start w-[85%]'>
                                                  <span className='ml-5 font-bold'>Alex Nohemiha</span>
                                                    <div className='bg-[#f2f2f277] py-4 px-4'>
                                                      Prepare for a career in tech by joining GitHub Global Campus. 
                                                      Global Campus will help you get the practical industry knowledge you need 
                                                      by giving you access to industry tools, events..
                                                    
                                                     </div>
                                              </div>
                                              <span className='items-end w-[10%]'>1 min</span> 
                                    </div>
                                    <div className='flex justify-around items-center'>
                                                <span className='w-6 h-6 text-[#f2f2f2]'>
                                                  <img src={likeIcon} alt="like icon"/>
                                                </span>
                                              
                                                <span>Reply</span>
                                                <span>Staring</span>
                                              
                                    </div>
                                    <div className='w-full flex justify-center mt-10 ml-5'>
                                              <img src={photo} className='w-10 h-10' alt='user profile'/>
                                              <div className='flex flex-col items-start w-[85%]'>
                                                  <span className='ml-5 font-bold'>Alex Nohemiha</span>
                                                    <div className='bg-[#f2f2f277] py-4 px-4'>
                                                      Prepare for a career in tech by joining GitHub Global Campus. 
                                                      Global Campus will help you get the practical industry knowledge you need 
                                                      by giving you access to industry tools, events..
                                                    
                                                     </div>
                                              </div>
                                              <span className='items-end w-[10%]'>1 min</span> 
                                    </div>
                                    <div className='flex justify-around items-center'>
                                                <span className='w-6 h-6 text-[#f2f2f2]'>
                                                  <img src={likeIcon} alt="like icon"/>
                                                </span>
                                              
                                                <span>Reply</span>
                                                <span>Staring</span>
                                              
                                    </div>
                                    </div>
                            </div>
                    </div>
                  
                               
              </div>
         </div>
        
          
    </div>
  )
}

export default Question