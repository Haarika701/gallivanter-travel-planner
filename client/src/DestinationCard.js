
// import history from './history';
import {useState,useEffect} from "react"
import ThingsToDoView from './ThingsToDoView';
import {Card,CardContent,Typography} from "@mui/material"


 function DestinationCard({destinations}){
   const [showThings,setShowThings] = useState(false)
   const[allThings,setAllThings] = useState([])


   function handleClick(){
       setShowThings((showThings) => !showThings)
    fetch(`/places/${destinations.id}`)
    .then(res => res.json())
    .then((data) => {  
        setAllThings(data)
        console.log(data)
    })
   }
   
    return (

      
        <div>
          <Card sx={{ maxWidth: 300 }}>
        <img src = {destinations.image} alt = "place" width="300px" height="300px"onClick={handleClick}/>
        <CardContent>
        <Typography variant="h5" component="div">
           {destinations.city} 
        </Typography>
        <Typography variant="body2">
           {destinations.country}
        </Typography>
        {showThings ?
            
        <ThingsToDoView  allThings = {allThings}/> :null} 
         </CardContent>
        </Card> 
        </div>
    )
}

export default DestinationCard