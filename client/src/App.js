
import './App.css'
import { Button} from "@mui/material"
import FavoriteView from './FavoriteView'
import { Route, Switch } from 'react-router-dom'
import TripPlannerview from "./TripPlannerview"
import React, { useEffect, useState } from "react"
import DestinationContainer from "./DestinationContainer"
import UserAccount from './UserAccount'
import LoginSignUp from "./LoginSignup"
import 'react-calendar/dist/Calendar.css';
import NavBar from './NavBar'

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

    function handleLogout(){
          console.log("Logging out")
          fetch("/logout",{
              method: "DELETE"
          })
          .then(resp => resp.json())
          .then(setUser(null))
      }

  return (

  <>
    <div className="App-Container">
    
      <div className='user'>
         <img src = {user.image} alt = "user"/>
          <p>Hi,{user.username}!!</p>
        </div>
    
    {/* <img src = {logo}/> */}
    
    {user ? <Button variant="contained"onClick = {handleLogout}>Logout!</Button> : null} 

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
    </>
  );
}

export default App;
