
import { Switch,Route} from "react-router-dom"
import TripplannerCard  from "./TripplannerCard"
import TripPlannerForm from "./TripPlannerForm"
import { useState } from "react"
function TripPlannerview({user}){
//    const [showForm,setShowForm] = useState(true)

//    function handleForm(){
//        setShowForm(showForm => !showForm)
//        console.log("Button is clicked..")
   
    return (
        <div>
           
           <Switch>
                    <Route exact path= "/tripplanner">
                        <TripPlannerForm user={user} />

              {/* { showForm ?         
               <button onClick={handleForm}>Show Form</button> :
               <button onClick={handleForm}>Hide Form</button> } */}
                        <TripplannerCard user={user}/>    
                    </Route>
           </Switch> 
          
           
        </div>
    )
}

export default TripPlannerview