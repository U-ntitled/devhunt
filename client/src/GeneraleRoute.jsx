import React from 'react'
import { Route, Routes } from 'react-router-dom'
<<<<<<< HEAD
import Activity from './Pages/Activity'     
import Challenge from './Pages/Challenge'
=======
import AskedQuestion from './Components/AskedQuestion'
import ForumFeed from './Components/ForumFeed'
import Question from './Components/Question'
>>>>>>> refs/remotes/origin/master
import Confirmation from './Pages/Confirmation'
import Forum from './Pages/Forum'
import Home from './Pages/Home'
import Login from './Pages/Login'
<<<<<<< HEAD
import Profile from './Pages/Profile'
import Roote from './Pages/Roote'
=======
import Root from './Pages/Root'
>>>>>>> refs/remotes/origin/master
import Signup from './Pages/Signup'

function GeneraleRoute() {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}/>       
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/confirmation' element={<Confirmation/>}/> 
<<<<<<< HEAD
        <Route path='/' element={<Root/>}>
          <Route path='/home' element={<Home/>} index={true} />
              <Route path='/forum' element={<Forum/>}>
                    <Route path=''element={<ForumFeed/>} index={true}/>
                    <Route path='question/:id' element={<Question/>}/>
                    <Route path='ask' element={<AskedQuestion/>}/>
              </Route>
=======
        <Route path='/' element={<Roote/>}>
          <Route path='' element={<Home/>} index={true} />
<<<<<<< HEAD
          <Route path='/profile' element={<Profile/>}/> 
          <Route path = '/challenge' element={<Challenge/>}/>
          <Route path='/activity' element={<Activity/>}/>
=======
>>>>>>> 7c2982f060a4969af220d71660b6c27cf0b52434
>>>>>>> refs/remotes/origin/master
        </Route>
    </Routes>
  )
}

export default GeneraleRoute