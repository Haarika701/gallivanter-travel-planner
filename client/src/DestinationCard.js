

import {Card,CardContent,Typography} from "@mui/material"
import React from "react";
import {useHistory} from "react-router-dom"


 function DestinationCard({destinations,user}){
    let history = useHistory();

    return (
      
        <div class = "destination-card"> 
           <Card sx={{ maxWidth: 250 }} >
        <img src = {destinations.image} alt = "place" width="250px" height="250px"onClick ={()=> history.push(`places/${destinations.id}`)}/>
         <CardContent> 
         <Typography variant="h5" component="div">
           {destinations.city} 
        </Typography> 
        <Typography variant="body2"> 
           {destinations.country}
         </Typography> 
         </CardContent> 
         </Card>   
        
        </div>
    )
}

export default DestinationCard