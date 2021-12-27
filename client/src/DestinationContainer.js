import { useEffect, useState } from "react"
import DestinationView from "./Destinationview"
import SearchPlace from "./SearchPlace"
import { Switch,Route} from "react-router-dom"
import ThingsToDoRender from "./ThingsToDoRender"


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
        destinations.city.toLowerCase().includes(search.toLowerCase()) 
      ); 


    return (
        <>
           <SearchPlace search={search} setSearch={setSearch} /> 
            <Switch> 
             <Route exact path= "/places">
             <DestinationView allDestination= {filterPlaces} user = {user} search={search} setSearch = {setSearch} />
             </Route>
             
             <Route path="/places/:destinations" >
              <ThingsToDoRender user ={user}/> 
            </Route>
             </Switch> 
        </>
    )
}