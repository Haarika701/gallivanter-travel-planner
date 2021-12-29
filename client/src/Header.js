

import { Button} from "@mui/material"

import React from "react";
export default function Header({user, setUser}){

    function handleLogout(){
        console.log("Logging out")
        fetch("/logout",{
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(setUser(null))
    }

  
    
return(
    
    <div class = "title">
        
        {user ? <Button variant="contained"onClick = {handleLogout}>Logout!</Button> : null} 
    </div>
)
}