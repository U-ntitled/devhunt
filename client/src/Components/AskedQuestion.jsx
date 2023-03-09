import React, {useState} from 'react';

import videoIcon from '../Image/video.svg'
import audioIcon from '../Image/audio.svg'
import photoIcon from '../Image/photo.svg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function AskedQuestion() {
    const navigate= useNavigate()
    const [title, seTitle] = useState("")
    const [description, seTDescription] = useState("")
    const [tag, setTag] = useState([])
    const [view, setView] = useState(false)
    const [file, setFile] = useState()
    const HandleInput = (e)=>{
          const tag = e.target.value.split(',')
          setTag(tag)
    }
 
    const handleChangeFile = (e) =>{
            setFile(e.target.files)
        }

    
    const handleSubmit = async (e)=>{
    console.log(title,description,tag,file)
    
    const formdata = new FormData()
    formdata.append('name',title)
    formdata.append('description',description)
     tag.forEach((tag) =>{
        formdata.append('tag',tag)
     })
     file.forEach((file) =>{
        formdata.append('postimage',file)
     })

     const response = await axios.post("http://localhost:8000/api/Routes/home/create-post",formdata)
           console.log(response)
           if(response.status === 200){
                console.log("succesfull!!")
                navigate(-1)
           }
    }
  return (
    <div className='w-[60%] bg-[#f2f2f2] py-2 px-5 relative '>
        
          <div className='flex justify-start items-center'>
              <span className='text-3xl font-bold text-[#0d0d0d] ml-10'>CREATE POST</span>
          </div>
          <div className=' px-8 py-8'>
              <div className='flex flex-col'>
                    <label htmlfor='title'></label>
                    <input 
                        id='title'
                        className='py-3 px-4 text-[#0d0d0d] text-xl font-medium appearance-none  focus:outline-none border-b-2'
                        type="text" 
                        placeholder='Title'
                        name="Title"
                        value={title}
                        onChange={(e)=>seTitle(e.target.value)}

                        
                    />
                    <textarea
                        className='h-[150px] text-xl py-3 px-4 text-[#0d0d0d]   focus:outline-none border-b-2'
                        value={description}
                        onChange={(e)=>seTDescription(e.target.value)}
                        name="description"
                        placeholder='Faite une description de ce que vous voulez faire....'

                    />
                            
               </div>
               <div className=' bg-gray-200 h-[70px] w-full'>
                    <div className='flex p-1 items-center w-[50%]'>
                            <div 
                                onClick={()=> setView(!view)}
                                className=' cursor-pointer hover:bg-gray-50 p-4 flex flex-col items-center justify-between hover:opacity-90'>
                                <span>Photo</span>
                                <img src={photoIcon} alt='pic icon'/>
                            </div>
                            
                            <div  
                                onClick={()=> setView(!view)}
                                className='flex flex-col items-center cursor-pointer hover:bg-gray-50 p-4'>
                                <span>Audio</span>
                                <img src={audioIcon} alt='audio icon'/>
                            </div>
                            <div  
                                onClick={()=> setView(!view)}
                                className='flex flex-col items-center cursor-pointer hover:bg-gray-50 p-4'>
                                <span>Video</span>
                                <img src={videoIcon} alt='video icon'/>
                            </div>        
                    </div> 
                    {
                        view &&
                         <div className=' flex justify-center items-center p-3 w-[87%] h-40 bg-[#f2f2f2] z-22 absolute top-o bottom-0'>
                                <input 
                                    type='file' multiple name='postimage'
                                    className='py-3 px-4 text-[#0d0d0d] w-full text-xl font-medium appearance-none  focus:outline-none border-b-2'
                                    onChange={handleChangeFile}
                                />
                                {/* <span onClick={(e)=>setFile(e.target.file)}className=' cursor-pointer bg-[#00B8FF] rounded py-2 px-5 text-2xl mr-20 font-bold'>
                                add</span> */}

                         </div>  
                         }
                    
               </div>
               <div className=' w-full bg-white p-4 flex justify-center items-center'>
                      <div className='text-[#0d0d0d] items-center text-2xl font-bold w-1/4'>
                            Tag
                      </div>
                     
                          <input 
                          value={tag}
                          onChange={HandleInput}  
                          placeholder='Separed per comma ( no more than 5'
                          className='w-full py-3 px-2 border-b-2 focus:outline-none  '/>
                     
               </div>
              
          </div>
           <div className='flex justify-start items-center '>
                <button 
                     onClick={handleSubmit}
                     className='text-xl text-center text-[#f2f2f2] w-[100px] ml-8 px-4 py-2 bg-[#00CF35]'>
                      Post
                </button>
                <button 
                 onClick={()=> navigate(-1)}
                className='text-xl text-center text-[#0d0d0d] w-[100px] ml-5 px-4 py-2 bg-gray-200'>
                      Cancel
                </button>

           </div>
        
        
    </div>

  )
}

export default AskedQuestion
