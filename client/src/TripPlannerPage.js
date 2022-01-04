import {Button,Card, CardContent, Typography} from "@mui/material"
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from '@fullcalendar/list'
import React,{useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import HotelIcon from '@mui/icons-material/Hotel';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
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
            <div className="calendar-view">
            {showCalendar ?
               <Button onClick = {handleCalendarClick}>Hide Calendar</Button> :
                      <Button onClick = {handleCalendarClick}>Show Calendar</Button>
                    }
            
                    {showCalendar ? <FullCalendar
                    plugins={[ dayGridPlugin,interactionPlugin,listPlugin]}
                    dateClick={handleDateClick}
                    initialView="dayGridMonth"
                    events={
                        
                     [

                        {  
                        start: plan.trip_start ,
                        end: plan.trip_end ,
                        display: 'background' ,
                        title: plan.plan_name,
                      
                        },
                        
                      ]
                     
                      }
                   /> :null
            
                    }
            </div>
        <Card sx={{ maxWidth: 330 }}>
        <CardContent>
        <Typography gutterBottom variant = "h5">
         
   <LoyaltyIcon></LoyaltyIcon>{plan.plan_name}
        </Typography>
        <Typography gutterBottom variant = "body">
        <LocationOnIcon></LocationOnIcon>  Destination:{plan.destination}
        </Typography><br/>
        <Typography gutterBottom variant = "body">
        <EventIcon ></EventIcon>Trip Start Date:{plan.trip_start}<br/>
       <EventIcon></EventIcon> Trip End End:{plan.trip_end}<br/>
     <LocalActivityIcon></LocalActivityIcon>Activities:{plan.trip_activities}<br/>
     <HotelIcon></HotelIcon>Hotel Name:{plan.hotel_name}<br/>
        </Typography>
        </CardContent>
        <Button variant="contained" size="small" onClick = {handleDelete}><DeleteIcon></DeleteIcon></Button>
        </Card>
        
     </div>
        
    )
}