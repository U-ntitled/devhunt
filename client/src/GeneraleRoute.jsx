import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AskedQuestion from './Components/AskedQuestion'
import ForumFeed from './Components/ForumFeed'
import Question from './Components/Question'
import Confirmation from './Pages/Confirmation'
import Forum from './Pages/Forum'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Root from './Pages/Root'
import Signup from './Pages/Signup'

function GeneraleRoute() {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}/>       
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/confirmation' element={<Confirmation/>}/> 
        <Route path='/' element={<Root/>}>
          <Route path='/home' element={<Home/>} index={true} />
              <Route path='/forum' element={<Forum/>}>
                    <Route path=''element={<ForumFeed/>} index={true}/>
                    <Route path='question/:id' element={<Question/>}/>
                    <Route path='ask' element={<AskedQuestion/>}/>
              </Route>
        </Route>
    </Routes>
  )
}

export default GeneraleRoute