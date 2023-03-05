import React,{createContext, useCallback, useEffect, useState} from 'react'
import axios from 'axios'

const MyContext = createContext({})
const GlobalContext = ({children}) => {
    const [topics,setTopics] = useState([])
    const [connection,setConnection] = useState('')
    const [mostView, setMostView] = useState([])
    const [quests, setquests] = useState([])
    const [comments, setComments] = useState([])
    // const allTopics = []
    const getTopics = async()=>{
      const allTopics = await axios.get('http://localhost:8000/api/Routes/home/')
      setTopics(allTopics.data)
    }
    // useEffect(()=>{
      const getQuests = async()=>{
        const allQuests = await axios.get(`http://localhost:8000/api/Routes/forum/recently`)
        setquests(allQuests.data)
      }
      const getQuestsMy = async()=>{
        const allQuests = await axios.get(`http://localhost:8000/api/Routes/forum/mesquestions`)
        setquests(allQuests.data)
      }
      const getComments = async()=>{
        const allComments = await axios.get('http://localhost:8000/api/Routes/forum/recently')
        setComments(allComments.data)
      }
    // },[])
    const getCookie = useCallback( async() =>{
      const cookie = await axios.get('http://localhost:8000/api/Routes/auth/')
      setConnection(cookie.data.connection)
  },[])
    const getMostView = useCallback(async() => {
      const mostViewed = await axios.get('http://localhost:8000/api/Routes/home/visiter/post/')
      setMostView(mostViewed.data)
    },[])
    const upTopics = (newTopics)=>{
      setTopics(newTopics)
    }

    useEffect(()=>{
        getCookie()
        getTopics()
        getMostView()
        getQuests()
        getComments()
    },[getCookie])
  return (
    <MyContext.Provider value={{connection,getCookie,upTopics,topics,quests,getQuestsMy ,comments, mostView}}>
            {children}
    </MyContext.Provider>
      
    
  )
}
export default MyContext
export  {GlobalContext}
