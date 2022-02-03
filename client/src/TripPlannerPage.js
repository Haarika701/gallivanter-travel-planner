import {Button,Card, CardContent, Typography} from "@mui/material"
import React from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import HotelIcon from '@mui/icons-material/Hotel';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import TripCalendar from "./TripCalendar";

export default function TripPlannerPage({plan}){
  
    
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
        <TripCalendar plan= {plan}/>
        </CardContent>
       
        <Button variant="contained" size="small" onClick = {handleDelete}><DeleteIcon></DeleteIcon></Button>
        </Card>
        
     </div>
      
    )
}