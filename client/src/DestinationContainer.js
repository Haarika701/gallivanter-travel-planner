import { useEffect, useState } from "react"
import DestinationView from "./Destinationview"
import { Switch,Route} from "react-router-dom"

export default function DestinationContainer({user}){

    const[allDestination,setAllDestination]= useState([])

    
    useEffect(()=> {
        fetch("/places")
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
            setAllDestination(data)
            //console.log(data)
            
        })
    },[])
    return (
        <div>
            
           
            <Switch> 
             <Route exact path= "/places">
             <DestinationView allDestination= {allDestination} />
             </Route>
             <Route exact path="/trips">
             </Route> 
             
             </Switch>
             
           
              
        </div>
    )
}