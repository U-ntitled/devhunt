import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Activity from './Pages/Activity'     
import Challenge from './Pages/Challenge'
import AskedQuestion from './Components/AskedQuestion'
import ForumFeed from './Components/ForumFeed'
import Question from './Components/Question'
import Confirmation from './Pages/Confirmation'
import Forum from './Pages/Forum'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import Root from './Pages/Root'
import Signup from './Pages/Signup'
import ChallengeFeed from './Components/ChallengeFeed'
import ChallengePart from './Components/ChallengePart'
import ConfirmPassword from './Pages/ConfirmPassword'
import Dashboard from './Pages/Dashboard/Dashboard'
import Principale from './Pages/Dashboard/Home'
import Notifiaction from './Pages/Dashboard/Notifiaction'
import Post from './Pages/Dashboard/Post'
import Settings from './Pages/Dashboard/Settings'
import User from './Pages/Dashboard/User'
import MyContext from './Context'

function GeneraleRoute() {
   const {connection} = useContext(MyContext)
  console.log(connection)
  return (
    <Routes>
         


          {
            true? (
              <>
              <Route path='/' element={<Root/>}>
                    <Route path='' element={<Home/>} index={true} />

                    <Route path='/profile' element={<Profile/>}/> 
                    <Route path = '/challenge' element={<Challenge/>}>
                          <Route path=''element={<ChallengeFeed/>} index={true}/>
                          <Route path=':id' element={<ChallengePart/>}/>
                    </Route>
                    <Route path='/activity' element={<Activity/>}/>

                    <Route path='/forum' element={<Forum/>}>
                          <Route path=''element={<ForumFeed/>} index={true}/>
                          <Route path='question/:id' element={<Question/>}/>
                          <Route path='ask' element={<AskedQuestion/>}/>
                    </Route>
                </Route>

              <Route path='/profile' element={<Profile/>}/> 
              <Route path = '/challenge' element={<Challenge/>}>
                <Route path=''element={<ChallengeFeed/>} index={true}/>
                <Route path='challenge/:id' element={<ChallengePart/>}/>
              </Route>
              <Route path='/dashboard' element={<Dashboard/>}>
                          <Route path='' element={<Principale/>} index={true}/>
                          <Route path='Notification' element={<Notifiaction/>}/>
                          <Route path="Post" element={<Post/>}/>
                          <Route path="Settings" element={<Settings/>}/>
                          <Route path='user' element={<User/>}/>
              </Route>
              </>
            ):(<>
                <Route path='/login' element={<Login/>}/>       
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/confirmation' element={<Confirmation/>}/> 
                <Route path='/confirmPassword' element={<ConfirmPassword/>}/>
              </>  
            )
          }
         

    </Routes>
  )
}

export default GeneraleRoute
