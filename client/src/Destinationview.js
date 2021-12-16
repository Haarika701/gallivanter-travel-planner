import DestinationCard from "./DestinationCard";

export default function DestinationView({allDestination,user}){
    
     const displayDestination = allDestination.map((destinations => {
     return <DestinationCard key = {destinations.id} destinations={destinations} user={user}/>}))
    return(<div>
         
        {displayDestination}
       </div>)
        
    
}

// 