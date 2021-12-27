import { useEffect, useState } from "react"
import DestinationView from "./Destinationview"

import { Switch,Route} from "react-router-dom"
import ThingsToDoRender from "./ThingsToDoRender"


export default function DestinationContainer({user}){

    const[allDestination,setAllDestination]= useState([])

    useEffect(()=> {
        fetch("/places")
        .then((res) => res.json())
        .then((data) => {
          
            setAllDestination(data)
        })
    },[])




    return (
        <>
            <Switch> 
             <Route exact path= "/places">
             <DestinationView allDestination= {allDestination} user = {user}/>
             </Route>
             
             <Route path="/places/:destinations" >
              <ThingsToDoRender user ={user}/> 
            </Route>
             </Switch> 
        </>
    )
}