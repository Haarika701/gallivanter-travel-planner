import { useEffect, useState } from "react"
import DestinationView from "./Destinationview"
import SearchPlace from "./SearchPlace"
import { Switch,Route} from "react-router-dom"
import ThingsToDoRender from "./ThingsToDoRender"
import React from "react";

export default function DestinationContainer({user}){

    const[allDestination,setAllDestination]= useState([])
    const [search, setSearch] = useState("");
   
    
    useEffect(()=> {
        fetch("/places")
        .then((res) => res.json())
        .then((data) => {
          
            setAllDestination(data)
        })
    },[])

    

    const filterPlaces = allDestination.filter(
        (destinations) =>
        destinations.city.toLowerCase().includes(search.toLowerCase()) )


    return (
        <> 
            <Switch> 
             <Route exact path= "/places">
             <SearchPlace search={search} setSearch={setSearch}/>
             <DestinationView allDestination= {filterPlaces} user = {user} />
             </Route>
             <Route path="/places/:destinations" >
              <ThingsToDoRender user ={user} /> 
            </Route>
           
             </Switch> 
        </>
    )
}