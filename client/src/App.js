
import './App.css'
import TripPlannerview from "./TripPlannerview"
import React, { useEffect, useState } from "react"
import DestinationContainer from "./DestinationContainer"
 import NavBar from "./NavBar"
 import Header from "./Header"
import LoginSignUp from "./LoginSignup"
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
     {/* <img src = {logo}/> */}
       <h1>Gallivanter : A Travel Planner</h1>
       <Header user = {user} setUser = {setUser}/>
       <NavBar/> 
      
           {
                user ? 
                <DestinationContainer user = {user} /> : <LoginSignUp setUser = {setUser} />
            }
            <br/>
             <TripPlannerview/>
    </div>
  );
}

export default App;
