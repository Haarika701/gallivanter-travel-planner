import {Button,Card, CardContent, Typography} from "@mui/material"
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from '@fullcalendar/list'
import React,{useState} from "react";

export default function TripPlannerPage({plan}){
  
    const [showCalendar,setShowChalender] = useState(false)
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
      function  handleDateClick (arg) { // bind with an arrow function
            alert(arg.dateStr)
          }

          function handleCalendarClick(){
              setShowChalender((showCalendar) => !(showCalendar))
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
        </Card>{showCalendar ?
          <Button onClick = {handleCalendarClick}>Show Calendar</Button> :
          <Button onClick = {handleCalendarClick}>Hide Calendar</Button>
        }

        {showCalendar ? <FullCalendar
        plugins={[ dayGridPlugin,interactionPlugin,listPlugin]}
        dateClick={handleDateClick}
        initialView="dayGridMonth"
        events={[
            { title: plan.plan_name, start: plan.trip_start ,end: plan.trip_end ,display: 'background' }
          ]}
       /> :null

        }
       
       
     
        </div>
    )
}