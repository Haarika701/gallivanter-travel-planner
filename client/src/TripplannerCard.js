import { useEffect, useState } from "react"
import TripplannerContainer from "./TripplannerContainer";

export default function TripplannerCard(){
const [showPlans,setShowPlans] = useState([])


 
useEffect(() => {
    fetch("/tripplanners")
    .then((res) => res.json())
    .then((data) => setShowPlans(data))
    
},[]);

    return(
        <div>
           <h3>View your exisitng trips here</h3> 
           
                 <TripplannerContainer showPlans={showPlans}/>
                
           
        </div>
    )
}