
import { Link} from "react-router-dom"
import React from "react";

function NavBar({user,setUser}){

 

    return(
      <>
      
      <div className="navbar">
      
        <ul>
       
        <Link to = "/places">Places</Link>
        <Link to = "/tripplanner">Trip Planner</Link> 
        <Link to = "/favourites">Bucket List</Link>
        <Link to = "/useraccount">Account</Link> 
       
        </ul> 
      </div> 
      
      </>
    )
    
}

export default NavBar