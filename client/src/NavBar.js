
import { Link} from "react-router-dom"
function NavBar(){
    return(
      
      <div className="navbar">
        <ul>
        <Link to = "/places">Places</Link>
        <Link to = "/tripplanner">Trip Planner</Link> 
        <Link to = "/favourites">Favorite</Link>
        </ul> 
      </div> 
      
    )
    
}

export default NavBar