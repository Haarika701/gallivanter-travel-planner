import Header from "./Header"
import LoginSignUp from "./LoginSignup"
import React, { useEffect, useState } from "react"
export default function Home(){

  const [user, setUser] = useState(null)
    

    useEffect(()=> {
        fetch("/me")
        .then((res) => res.json())
        .then((user) => {
                setUser(user);
              })
    }, [])
    if (!user) return <LoginSignUp setUser = {setUser} />

    return(
        <div>
           <Header user = {user} setUser = {setUser}/>
          <h1> Hi!!! Welcome to Gallivanter!</h1> 
        </div>
    )
}