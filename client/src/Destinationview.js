import DestinationCard from "./DestinationCard";
import React from "react";

export default function DestinationView({allDestination,user}){
     const displayDestination = allDestination.map((destinations => {
     return <DestinationCard key = {destinations.id} destinations={destinations} user={user}/>}))

    return(<div className="destination-view">
         
        {displayDestination}
       </div>)
}

