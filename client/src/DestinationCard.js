
// import history from './history';
import {useState,useEffect} from "react"
import ThingsToDoRender from "./ThingsToDoRender"
import {Card,CardContent,Typography} from "@mui/material"
import {useHistory,Route,Router} from "react-router-dom"
import ThingsToDoView from "./ThingsToDoView"

 function DestinationCard({destinations}){
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
        
        <Router history={history}>
        </Router>
        </div>
    )
}

export default DestinationCard