
import { Link} from "react-router-dom"


function NavBar(){


    return(
      <>
      <Link to = "/tripplanner">Trip Planner</Link>  
       <ul>
        <Link to ="/places">Places</Link>
         <Link to ="/trips">Trips</Link> 
       </ul>
       </>
    )
    
}

export default NavBar