import React,{createContext, useCallback, useEffect, useState} from 'react'
import axios from 'axios'

const MyContext = createContext({})
const GlobalContext = ({children}) => {
    const [connection,setConnection] = useState('')
    const getCookie = useCallback( async() =>{
      const cookie = await axios.get('http://localhost:8000/api/Routes/auth/')
      setConnection(cookie)
  },[])
    useEffect(()=>{
        getCookie()
    },[getCookie])
  return (
    <MyContext.Provider value={{connection,getCookie}}>
            {children}
    </MyContext.Provider>
      
    
  )
}
export default MyContext
export  {GlobalContext}
