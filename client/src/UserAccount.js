
import React from "react";
import {Button} from "@mui/material"


export default function UserAccount({user,setUser}){
    

    function handleDelete(){
        fetch(`/users/${user.id}`,{
            method:"DELETE",
            headers:{
                'Content-Type':'application/json'
 
            },
            
        }).then((res)=> (res.json()))
            .then((data) => {
                console.log("deleted")
                
            })
         }

       
    return (
        <div className="useraccount">
         <img src={user.image} alt="user"/>
         <h3> Username</h3> 
         {user.username}
         <h3> City</h3> 
         {user.city}
         <h3>Email</h3>
         {user.email}<br></br>
         <Button variant="contained" onClick={handleDelete}>Delete Account</Button>
        </div>
    )
}