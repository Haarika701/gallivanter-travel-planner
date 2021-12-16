import { useEffect, useState } from "react"
import DestinationCard from "./DestinationCard"
import DestinationView from "./Destinationview"

export default function DestinationContainer(){

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
            
            <DestinationView allDestination= {allDestination} />
            
        </div>
    )
}