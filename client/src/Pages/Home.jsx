import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ExploreIcon from '../Image/explore.svg'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import { Avatar, avatarClasses } from '@mui/material';
import userIcon from '../Image/user.svg'
import Photo  from '../Image/photo.svg'
import Send from '../Image/send.svg'
import Lien from '../Image/link.svg'
import Movie from '../Image/video.svg'
import Aud  from '../Image/audio.svg'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import pc from '../Image/getcertified.jpg'
import Like from '../Image/like.svg'
import Comments from '../Image/comments.svg'
import Partage from '../Image/partage.svg'
import axios from 'axios';
import MyContext from '../Context';
import moment from 'moment';



function Home() {
  const Topic = ['All','IA','JOB','Stage',"Bourse d' etude","Mathematique","Electronic","Devops"]
  const {topics, upTopics, mostView} = useContext(MyContext)
  const activeClass = "   cursor-pointer flex justify-center mr-1 mt-4 items-center px-5 py-1  text-base text-[#f2f2f2] rounded-full bg-[#00CF35]"
  const nonAcitveClass = "cursor-pointer flex justify-center mr-1 mt-4 items-center px-5 py-1 border border-[#f2f2f2] text-base text-[#f2f2f2] rounded-full"
  const [view,setView] = useState(false)
  const [justify,setJustify] = useState(true)
  const [last,setLast] = useState(0)
  const  [more,setMore] = useState(false)
  const [topic, setTopic] = useState('All')
  const [myPub, setMyPub] = useState([])
  const HadleClickShowMore = () =>{
    setMore(ancien=>!ancien)
  }
  const HandleClickView = () =>{
      setJustify(true)
      setView(ancien=>!ancien)
  }
  const HandleClickTopics = (e)=>{
    const len = Topic.length
    setJustify(false)
    if(e.target.classList.contains('border')){
      for(let i=0 ;i<len;i++){
        e.target.parentNode.childNodes[i].classList.remove('bg-[#00cf35]')
        e.target.parentNode.childNodes[i].classList.add('border')
        e.target.parentNode.childNodes[i].classList.add('border-[#F2f2f2]')
        e.target.classList.add('bg-[#00cf35]')
        e.target.classList.remove('border')
        e.target.classList.remove('border-[#f2f2f2]')
       const id = e.target.getAttribute('id')
      setLast(Topic.indexOf(id))
      setTopic(id)
      
      }
    }
  }
  const HandleClickSetMyPub = async() =>{
    const allMyPub = await axios.get('http://localhost:8000/api/Routes/forum/mesquestions')
  }
  const HandleClickApply = async() => {
      if (topic === 'All') {
          const allTopics = await axios.get('http://localhost:8000/api/Routes/home/')
          if(allTopics.status === 200){
            upTopics(allTopics.data)
            console.log(mostView)
          }
        }
        else{
          const allTopics = await axios.get(`http://localhost:8000/api/Routes/home/post/:${topic}`)
          if(allTopics.status === 200){
            upTopics(allTopics.data)
            console.log(mostView)
          }
      }}
    
  const topView = [{
    tag: '#IA',
    username: "John Doe",
    title: "Reseau neuronal",
    imgUrl: "../Images/user.svg",
    numberView: '1.2K  vu'
  },{
    tag: '#IA',
    username: "John Doe",
    title: "Reseau neuronal",
    imgUrl: "../Images/user.svg",
    numberView: '1.2K  vu'
  },{
    tag: '#IA',
    username: "John Doe",
    title: "Reseau neuronal",
    imgUrl: "../Images/user.svg",
    numberView: '1.2K  vu'
  }
]
  return (
    <div className=' w-[100%] flex justify-between   mt-16'>
        <div className=" w-[20%]   justify-center items-center">
            <div onClick={HandleClickView} className="cursor-pointer flex mx-auto justify-center items-center bg-[#ffffff21] w-[75%] h-12 rounded-full ">
              <div className="cursor-pointer mr-2 " >
                <img src={ExploreIcon} alt=''/>
              </div>
              <div className="text-white font-medium mr-2">
                <h2>Explorer</h2>
              </div>
              <div className="">
                {
                  view  ? <ExpandMoreIcon sx={{color:'#f2f2f2',fontSize:'2em'}}/> : <ExpandLessIcon sx={{color:'#f2f2f2',fontSize:'2em'}}/>
                }
              </div>
            </div>
            {
                  view &&  (
                    <>
                    <div className="text-[#f2f2f2] w-[75%] mt-5 mx-auto uppercase  flex justify-between items-center">
                      <div className=""><span >Sujets</span></div>
                      <div className=""><span>-</span></div>
                    </div>
                    <motion.div 
                    initial={
                      {
                       opacity: 0,
                       y:-50
                      }
                      }
                      animate={{
                          opacity:1,
                          y:0
                      }}
                      transition={
                          {
                            duration: 1
                          }
                      } 
                    className="flex justify-around flex-wrap items-center mt-5  w-[75%] mx-auto ">
                          {
                            Topic.map((elem,key)=>{
                                return(
                                    key === last && justify ? <div key={key} id={elem} onClick={HandleClickTopics} className={activeClass}>
                                    {elem}
                                  </div> :  <div key={key} id={elem} onClick={HandleClickTopics} className={nonAcitveClass}>
                                    {elem}
                                  </div>
                                )
                            })
                          }
                    </motion.div>
                    <div onClick={HandleClickApply} className="text-[#f2f2f2] cursor-pointer py-1 mt-5 text-base  flex justify-center items-center mx-auto  bg-[#00B8FFCA] w-[75%]">
                      <span>Appliquer</span>
                    </div>
                    </>
                  )  
                }
              <div className="cursor-pointer flex mx-auto mt-5 justify-center items-center bg-[#ffffff21] w-[75%] h-12 rounded-full ">
                  <div className="cursor-pointer mr-2 " >
                    <img src={ExploreIcon} alt=''/>
                  </div>
                  <div className="text-white font-medium">
                    <h2 onClick={HandleClickSetMyPub}>Mes publication</h2>
                  </div>
            </div>
            <div className="cursor-pointer flex mx-auto mt-5 justify-center  items-center bg-[#ffffff21] w-[75%] h-12 rounded-full ">
                  <div className="cursor-pointer mr-2 " >
                    <img src={ExploreIcon} alt=''/>
                  </div>
                  <div className="text-white font-medium">
                    <h2>Parametres</h2>
                  </div>
            </div>
        </div>
        <div className="w-[50%]  flex flex-col  items-center ">
                <div className="w-[80%] ">
                  <div className="flex justify-between items-center h-16  w-[100%] bg-[#0d0d0d]">
                    <div className="w-[15%] flex justify-end">
                      <Avatar  src={userIcon} />
                    </div>
                    <div className="w-[60%]">
                      <input type='text' name='text' 
                        id='text' className='border border-none   
                          text-sm text-[#868686] bg-[#ffffff21] w-[100%] h-[4vh] rounded-full focus:outline-none pl-5'
                       placeholder='Partager aux collegues..'
                      />
                    </div>
                    <div className="w-[15%] flex justify-start">
                      <img src={Send} alt="Sendicon" />
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-[100%] bg-[#0d0d0d] h-24 text-[#f2f2f2]  border-t border-[#f2f2f2]">
                    <div className="flex justify-between items-center w-[100%] px-10">
                      <div >
                        <div className="flex flex-col space-y-4 items-center">
                          <img src={Photo} alt="ajout" />
                          <h5>Photo</h5>
                        </div>
                       </div>
                   <div>
                    <div  className="flex flex-col space-y-4 items-center">
                      <img src={Lien} alt="lien" />
                      <h5>Lien</h5>
                      </div>
                    </div>
                   <div>
                    <div  className="flex flex-col space-y-4 items-center">
                      <img src={Aud} alt="" />
                      <h5>Audio</h5>
                      </div>
                   </div>
                   <div >
                    <div className="flex flex-col space-y-4 items-center">
                      <img src={Movie} alt="movie" />
                      <h5>Video</h5>
                      </div>
                   </div>
                  </div>
              </div>
                </div>
               
        {
          topics['post'].map((elem, key)=>{
            return(
              <div key={key} className="w-[80%] mt-2  " id={elem.id} >
              <div className="w-[100%] bg-[#0d0d0d] ">
                <div className="flex justify-between items-center w-[100%] px-6 p-5">
                  <div className="flex justify-between items-center ">
                      <Avatar  src={userIcon} />
                      <div className="flex flex-col space-y-2 ml-7">
                          <h2 className='text-[#f2f2f2]'>{elem.owner.fname}</h2>
                          <span className='text-[#868686]'>{moment(elem.created_at).fromNow()}</span>
                      </div>
                  </div>
                  <div className="">
                        <MoreHorizIcon sx={{color:'#f2f2f2'}}/>
                  </div>
                </div>
                <div className="text-[#f2f2f2] p-5">
                  <p>{elem.description} {!more && <span onClick={HadleClickShowMore} className='cursor-pointer text-[#01CF35]'>voir plus</span>}</p>
                    {
                      more && (
                        <p> <span onClick={HadleClickShowMore} className='cursor-pointer text-[#01CF35]'>voir moins</span></p>
                      )
                    }
                </div>
                <div className="w-[100%]">
                      <img className='w-[100%]' src={pc} alt='madama'/>
                </div>
                <div className="flex justify-between items-center px-6 py-3">
                <img src={Like} alt='madama'/><span>{}</span>
                <img src={Comments} alt='madama'/><span>{elem.num_comment} commentaires</span>
                <img src={Partage} alt='madama'/>
                </div>
              </div>
          </div>
            )
          })
        }


        </div>
        <div className="w-[20%] flex  flex-col space-y-2 items-center mx-6  ">
           <div className="flex justify-start w-[100%]">
            <h1 className='text-[#f2f2f2] text-2xl font-bold text-start '>Le plus visit??</h1>
           </div>
              <div className="w-[100%] mx-6 ">
                <div className="">
                      {
                        mostView.map((elem,key)=>{
                          return(
                            <div className='bg-[#0D0D0DBB] p-6 mt-4 flex shadow-sm shadow-gray-600 rounded-md justify-between items-center'>
                              <div key={key + 3} className="w-[100%] flex flex-row space-x-1">
                                  <div className="flex flex-col space-y-2">
                                    <Avatar src={userIcon} alt="" />
                                    <span className='text-[#00CF35] ml-6'>{elem.topic}</span>
                                 </div>
                                 <div className="flex flex-col space-y-6">
                                    <h2 className='text-[#868686] '>John Doe</h2>
                                    <h2 className='text-[#F2F2F2] ml-16'>{elem.description}</h2>
                                 </div>
                              </div>
                              <div key={key + 10} className="cursor-pointer">
                                <span className='text-[#00B8FF]'>Voir</span>
                              </div>
                            </div>
                          )
                        })
                      }
                </div>
              <div className="flex justify-start w-[100%] mt-5">
                <h1 className='text-[#f2f2f2] text-2xl font-bold text-start '> Recommand?? par d'autre personne</h1>
              </div>
              <div className="">
                      {
                        topView.map((elem,key)=>{
                          return(
                            <div className='bg-[#0D0D0DBB] p-6 mt-4 shadow-sm shadow-gray-600 rounded-md flex  justify-between items-center'>
                              <div key={key + 3} className="w-[100%] flex flex-row space-x-1">
                                 <div className="flex flex-col space-y-2">
                                    <Avatar src={elem.imgUrl} alt="" />
                                    <span className='text-[#00CF35] ml-6'>{elem.tag}</span>
                                 </div>
                                 <div className="flex flex-col space-y-6">
                                    <h2 className='text-[#868686] '>{elem.username}</h2>
                                    <h2 className='text-[#F2F2F2] ml-16'>{elem.title}</h2>
                                 </div>
                              </div>
                              <div key={key + 10} className="cursor-pointer">
                                <span className='text-[#00B8FF]'>Voir</span>
                              </div>
                            </div>
                          )
                        })
                      }
                </div>
              </div>
        </div>
    </div>
  )
}

export default Home