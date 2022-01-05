import {Card, CardContent, Typography} from "@mui/material"
import React from "react";
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

export default function FavoriteCard({favorite}){
    return (
        <div className="favorite-card">
         <Card sx={{ maxWidth: 300 }} >
         <img src = {favorite.things_to_do.image} width="300px" height="200px" alt="favorite"/>
         <CardContent>
             <Typography gutterBottom variant="h4">
            {favorite.things_to_do.name}
             </Typography>
             <Typography variant="body" color="text.secondary">
            {favorite.things_to_do.description}
             <br/>
           </Typography><br/>
        <Typography gutterBottom variant="body3">
        <ConfirmationNumberIcon fontSize="inherit"></ConfirmationNumberIcon>{favorite.things_to_do.category}
        </Typography>
        </CardContent>
        </Card>
    
        </div>
    )
}