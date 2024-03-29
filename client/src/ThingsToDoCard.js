import { Button, Card,Typography,CardContent } from "@mui/material"
import { useState } from "react"
import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import MoneyIcon from '@mui/icons-material/Money';
import ReviewsIcon from '@mui/icons-material/Reviews';
export default function ThingsToDoCard({things,user}){

   const[showButton,setShowButton] = useState(true)
   const[addFavourite,setAddFavourite] = useState({
     
     things_to_do_id:things.id,
     user_id: user.id
    
   })

   const newFavortie = {...addFavourite}
  
  function handleClick(){
   setShowButton((showButton) => !showButton)
    fetch("/favorites",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newFavortie)
    }).then((res) => res.json())
       .then((data) => setAddFavourite,{
        things_to_do_id:"",
        user_id:""
       
       })
}
  return(
        <div className="things-card">
         <Card sx={{ maxWidth: 315 }} >
           <img src = {things.image} alt = "things" width="350px" height="250px" />  
           { showButton ?
             <FavoriteIcon onClick = {handleClick}>♡</FavoriteIcon> :<Button> ❤️</Button>
           }
           <CardContent>
           <Typography gutterBottom variant="h4">
             {things.name}
           </Typography>
          <Typography variant="body" color="text.secondary">
            {things.description}
           </Typography> <br/>
             <br/>
          <Typography gutterBottom variant="body3">
          <ConfirmationNumberIcon></ConfirmationNumberIcon>{things.category}
          </Typography><br/>
          <Typography gutterBottom variant="body3">
          <MoneyIcon></MoneyIcon>{things.expense}
          </Typography><br/>
          <Typography gutterBottom variant="body3">
          <ReviewsIcon></ReviewsIcon> {things.rating}
          </Typography>
          </CardContent>
        </Card>
        </div>
    )
}

