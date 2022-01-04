
import { Link} from "react-router-dom"
import React from "react";
import MyLocationIcon from '@mui/icons-material/MyLocation';
import SummarizeIcon from '@mui/icons-material/Summarize';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
function NavBar({user,setUser}){

 

    return(
      <>
      
      <div className="navbar">
      
        <ul>
       
        <Link to = "/places">Places <MyLocationIcon fontSize="inherit"></MyLocationIcon> </Link>
        <Link to = "/tripplanner">Trip Planner<SummarizeIcon fontSize="inherit"></SummarizeIcon></Link> 
        <Link to = "/favourites">Bucket List<FlightTakeoffIcon fontSize="inherit"></FlightTakeoffIcon></Link>
        <Link to = "/useraccount">Account<SupervisorAccountIcon fontSize="inherit"></SupervisorAccountIcon></Link> 
       
        </ul> 
      </div> 
      
      </>
    )
    
}

export default NavBar