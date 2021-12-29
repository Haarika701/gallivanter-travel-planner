import {Button,Card, CardContent, Typography} from "@mui/material"
import Calendar from 'react-calendar'
import React,{useState} from "react";
export default function TripPlannerPage({plan}){
  
    const [date, setDate] = useState(new Date());
    function handleDelete(){
       fetch(`/trip_planners/${plan.id}`,{
           method:"DELETE",
           headers:{
               'Content-Type':'application/json'

           }
       }).then((res)=> (res.json()))
           .then(() => {
               console.log("deleted")
           })
        }

    return(
        <div className="tripplanner-card">
        <Card sx={{ maxWidth: 338 }}>
        <CardContent>
        <Typography gutterBottom variant = "h5">
           {plan.plan_name}
        </Typography>
        <Typography gutterBottom variant = "body">
        Destination:{plan.destination}
        </Typography><br/>
        <Typography gutterBottom variant = "body">
        Trip Started at:{plan.trip_start}<br/>
        Trip Ended at:{plan.trip_end}<br/>
        Activities:{plan.trip_activities}<br/>
        Hotel Name:{plan.hotel_name}<br/>
        </Typography>
        </CardContent>
        <hr/>
        <Button variant="contained" size="small" onClick = {handleDelete}>Delete </Button>
        </Card>
        {/* <Calendar onChange={setDate}
          value={date}
          selectRange={true}
        />
     
      {date.length > 0 ? (
        <p className='text-center'>
          <span className='bold'>Start:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className='text-center'>
          <span className='bold'>Default selected date:</span>{' '}
          {date.toDateString()}
        </p>
      )} */}
        </div>
    )
}