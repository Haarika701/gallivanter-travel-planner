import { useEffect, useState } from "react"
import TripplannerContainer from "./TripplannerContainer";
import React from "react";

export default function TripplannerCard(){
const [showPlans,setShowPlans] = useState([])


 
useEffect(() => {
    fetch("/tripplanners")
    .then((res) => res.json())
    .then((data) => setShowPlans(data))
    
},[]);

    return(
        <div class = "tripplanner-view">
           <h3>View Your Plans Here!!!</h3> 
                 <TripplannerContainer showPlans={showPlans}/>
                
                 
        </div>
    )
}