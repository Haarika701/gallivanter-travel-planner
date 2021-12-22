import TripPlannerPage from "./TripPlannerPage"

export default function TripplannerContainer({showPlans,user}){

    const displayPlans = showPlans.map((plan) => {return <TripPlannerPage key = {plan.id} plan={plan} user = {user}/>})
    return(
        <div className="tripplanner-container">
           {displayPlans} 
        </div>
    )

}