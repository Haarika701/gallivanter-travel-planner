import TripPlannerPage from "./TripPlannerPage"

export default function TripplannerContainer({showPlans}){

    const displayPlans = showPlans.map((plan) => {return <TripPlannerPage key = {plan.id} plan={plan}/>})
    return(
        <div>
           {displayPlans} 
        </div>
    )

}