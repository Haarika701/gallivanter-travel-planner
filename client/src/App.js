
import './App.css'
import FavoriteView from './FavoriteView'
import { Route, Switch } from 'react-router-dom'
import TripPlannerview from "./TripPlannerview"
import React, { useEffect, useState } from "react"
import DestinationContainer from "./DestinationContainer"
import UserAccount from './UserAccount'
 
 import Header from "./Header"
import LoginSignUp from "./LoginSignup"

import NavBar from './NavBar'
import { Link } from '@mui/material'

// import logo from "./logo.png"
function App() {
  const [user, setUser] = useState(null)
    useEffect(()=> {
        fetch("/me")
        .then((res) => res.json())
        .then((data) => {
          if(!data.errors){
            setUser(data)
          }
                
              })
    }, [])
    if (!user) return <LoginSignUp setUser = {setUser} />
     
   
  return (
    <div className="App">
    <h1>Gallivanter: A Travel Planner App</h1>
    <div className='user'>
       <img src = {user.image} alt = "user"/>
       Hi,{user.username}!!
    </div>
     {/* <img src = {logo}/> */}
    
       <Header user = {user} setUser = {setUser}/><br/>
       <NavBar/>
           {
                user ? 
                <DestinationContainer user = {user} setUser = {setUser}/>  : <LoginSignUp setUser = {setUser} />
            }
            <br/>
            <Switch>
            <Route exact path="/tripplanner">
            <TripPlannerview/>
            </Route>
            <Route exact path="/favourites">
             <FavoriteView/>
             </Route>
             <Route exact path = "/useraccount">
             <UserAccount user = {user}/>
            </Route>
             </Switch> 
    </div>
  );
}

export default App;
