

import { Button,Box } from "@mui/material"

export default function Header({user, setUser,username}){

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