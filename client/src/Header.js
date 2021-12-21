

import { Button,Box } from "@mui/material"
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
            <h2>Gallivanter : A Travel Planner</h2>
            {user ? <Button variant="contained"onClick = {handleLogout}>Logout!</Button> : null}
    </div>
)
}