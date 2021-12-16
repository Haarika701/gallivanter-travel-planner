import Header from "./Header"
import LoginSignUp from "./LoginSignup"
import React, { useEffect, useState } from "react"
import DestinationContainer from "./DestinationContainer"
// import NavBar from "./NavBar"

export default function Home(){

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

    return(
        <div>
           <Header user = {user} setUser = {setUser}/>
           {/* <NavBar /> */}
           {
                user ? 
                <DestinationContainer user = {user} /> : <LoginSignUp setUser = {setUser} />
            }
          
        </div>
    )
}