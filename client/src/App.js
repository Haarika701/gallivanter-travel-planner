
import './App.css'
import FavoriteView from './FavoriteView'
import { Route, Switch } from 'react-router-dom'
import TripPlannerview from "./TripPlannerview"
import React, { useEffect, useState } from "react"
import DestinationContainer from "./DestinationContainer"
import UserAccount from './UserAccount'
import Header from "./Header"
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

    /* <div class="container">
  <p>CSS Grid Method</p>
  <div class="image-stack">
    <div class="image-stack__item image-stack__item--top">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/110238/portrait1.jpeg" alt="">
    </div>
    <div class="image-stack__item image-stack__item--bottom">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/110238/texture-waves-cropped.jpg" alt="">
    </div>
  </div>
  <p>Text can go down here yabba dabba do</p>
</div> */
   
  return (

  <>
    <div className="App-Container">
    
      <div className='user'>
         <img src = {user.image} alt = "user"/>
          <p>Hi,{user.username}!!</p>
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
    </>
  );
}

export default App;
