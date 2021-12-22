import {Button,Card, CardContent, Typography} from "@mui/material"
export default function TripPlannerPage({plan:{plan_name,destination,trip_start,trip_end,trip_activities,hotel_name}}){
    return(
        <div className="tripplanner-card">
        <Card sx={{ maxWidth: 338 }}>
        <CardContent>
        <Typography gutterBottom variant = "h5">
           {plan_name}
        </Typography>
        <Typography gutterBottom variant = "body">
        Destination:{destination}
        </Typography><br/>
        <Typography gutterBottom variant = "body">
        Trip Started at:{trip_start}<br/>
        Trip Ended at:{trip_end}<br/>
        
        Activities:{trip_activities}<br/>
        Hotel Name:{hotel_name}<br/>
        </Typography>
        </CardContent>
        
        <hr/>
        </Card>
        <Button variant="contained" size="small">Delete </Button>
        <Button variant="contained" size = "small">Edit </Button>
        </div>
    )
}