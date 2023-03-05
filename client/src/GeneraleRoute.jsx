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
import MyContext from './Context'

function GeneraleRoute() {
  const {connection} = useContext(MyContext)
  return (
    <Routes>
          <Route path='/login' element={<Login/>}/>       
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/confirmation' element={<Confirmation/>}/> 
          <Route path='/confirmPassword' element={<ConfirmPassword/>}/>


<<<<<<< HEAD
          <Route path='/profile' element={<Profile/>}/> 
          <Route path = '/challenge' element={<Challenge/>}>
            <Route path=''element={<ChallengeFeed/>} index={true}/>
            <Route path='challenge/:id' element={<ChallengePart/>}/>
          </Route>
          <Route path='/activity' element={<Activity/>}/>

          <Route path='/forum' element={<Forum/>}>
                <Route path=''element={<ForumFeed/>} index={true}/>
                <Route path='question/:id' element={<Question/>}/>
                <Route path='ask' element={<AskedQuestion/>}/>
          </Route>
        </Route>
=======
          {
            connection && (
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
            )
          }

>>>>>>> origin/master
         

    </Routes>
  )
}

export default GeneraleRoute