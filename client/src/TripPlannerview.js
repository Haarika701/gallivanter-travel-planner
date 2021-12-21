
import { Switch,Route} from "react-router-dom"
import TripplannerCard  from "./TripplannerCard"
import TripPlannerForm from "./TripPlannerForm"
import {Button} from "@mui/material"
import { useState } from "react"
function TripPlannerview({user}){
    const [showForm,setShowForm] = useState(true)
    
    function handleForm(){
     setShowForm(showForm => !showForm)
    
     console.log("Button is clicked..")
    
    }

   
   
    return (
        <div class = "tripplanner-view">
           
           <Switch>
                    <Route exact path= "/tripplanner">
                      { showForm ?
                          <Button onClick = {handleForm}>Create New Plan Form</Button>:<Button onClick = {handleForm}>Hide Create New Plan Form</Button> }  

                      {showForm ?<TripPlannerForm user={user}/> : null}  
                        
                        <TripplannerCard user={user}/>    
                    </Route>
           </Switch> 
          
           
        </div>
    )
}

export default TripPlannerview