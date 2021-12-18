import { useEffect, useState } from "react"
import TripplannerContainer from "./TripplannerContainer";

export default function Tripplanner(){
const [showPlans,setShowPlans] = useState([])

useEffect(() => {
    fetch("/trip_planners")
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