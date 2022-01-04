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
                 <TripplannerContainer showPlans={showPlans}/>
        </div>
    )
}