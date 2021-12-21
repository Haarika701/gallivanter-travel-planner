import DestinationCard from "./DestinationCard";
import ThingsToDoView from "./ThingsToDoView";
import {Router,Route} from "react-router-dom"
import history from "./history"


export default function DestinationView({allDestination,user}){
    
     const displayDestination = allDestination.map((destinations => {
     return <DestinationCard key = {destinations.id} destinations={destinations} user={user}/>}))

    return(<div>
         
        {displayDestination}
        <Router history={history}>
      <Route path="/ThingsToDoView" component={ThingsToDoView} />
      </Router>
     
       </div>)
        
    
}

// 