export default function TripPlannerPage({plan:{plan_name,destination,trip_start,trip_end,trip_activities,hotel_name}}){
    return(
        <div>
        <h3>Trip Name:{plan_name}</h3>
        <h3>Destination:{destination}</h3>
        <h3>Trip Started at:{trip_start}</h3>
        <h3>Trip Ended at:{trip_end}</h3>
        <h3>Activities:{trip_activities}</h3>
        <h3>Hotel Name:{hotel_name}</h3>
        <hr/>
        </div>
    )
}