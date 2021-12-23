
import { Link} from "react-router-dom"


function NavBar(){


    return(
      <>
      <div className="tripplanner-link">
        <ul>
        <Link to = "/tripplanner">Trip Planner</Link> 
        <Link to = "/favourites">Favorite</Link>
        </ul>
      </div>
      <div className="navbar">
        <ul>
          <Link to ="/places">Places</Link>
          <Link to ="/trips">Trips</Link> 
        </ul> 
      </div> 
       </>
    )
    
}

export default NavBar