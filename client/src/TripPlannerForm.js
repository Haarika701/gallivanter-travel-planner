import { Button, InputLabel,Grid,Item} from "@mui/material";
import React, {  useState } from "react";
import Error from "./Errors";



export default function TripPlannerForm(){

    
    const [errors, setErrors] = useState([]);
    const [formData, setFormData] = useState({
    user_id: "",
    plan_name: "",
    destination: "",
    hotel_name: "",
    hotel_address: "",
    hotel_checkin: "",
    hotel_checkout: "",
    flight_name: "",
    flight_number: "",
    trip_activities:"",
    trip_end:"",
    notes:""
  });


  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e){
    e.preventDefault();
    console.log("Submitting form ...")

    const newPlan = {...formData}

    fetch("/trip_planners/",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlan),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          console.log(data);
          
          setFormData({
            plan_name: "",
            destination: "",
            hotel_name: "",
            hotel_address: "",
            hotel_checkin: "",
            hotel_checkout: "",
            flight_name: "",
            flight_number: "",
            flight_to: "",
            flight_from: "",
            trip_activities:"",
            trip_start:"",
            trip_end:"",
            notes:""
          })
          setErrors([])
        });
      } else {
        res.json()
        .then((err) => setErrors(err.errors));
      }
    });

  }

    return (
       
        <form  className="travelplanner" onSubmit={handleSubmit}>
        
         
         
        {errors.map((err) => (<Error key={err}>{err}</Error>))}
        <legend>Trip Details</legend>
         <InputLabel htmlFor="user_id">Plan Number</InputLabel>
            <input
                className="user_id-plan-input"
                type="integer"  class="form-control"
                name="user_id"
                onChange={handleChange}
            />
          <br/>
            <InputLabel htmlFor="plan_name">Plan Name:</InputLabel>
            <input
                id="plan_name-input"
                type="text"  class="form-control"
                name="plan_name"
                value={formData.plan_name}
                onChange={handleChange}
            />
            <br/>
            <InputLabel htmlFor="destination">Destination:</InputLabel>
            <input
                id="last_name-signup-input"
                type="text"  class="form-control"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
            />
            <br/>
            <InputLabel htmlFor="trip_activities">Trip Activities:</InputLabel>
            <input
                className="activities-plan-input"
                type="text"  class="form-control"
                name="trip_activities"
                value={formData.trip_activities}
                onChange={handleChange}
            />
            <br/>
            <InputLabel htmlFor="trip_start">Trip Start:</InputLabel>
            <input
                className="tripstart-plan-input"
                type="date"  class="form-control"
                name="trip_start"
                value={formData.trip_start}
                onChange={handleChange}
            />
            <br/>
            <InputLabel htmlFor="trip_end">Trip End:</InputLabel>
            <input
                className="tripend-plan-input"
                type="date"  class="form-control"
                name="trip_end"
                value={formData.trip_end}
                onChange={handleChange}
            />
            <br/>
           <legend>Hotel Details</legend>
            <InputLabel htmlFor="hotel_name">Hotel Name:</InputLabel>
            <input
                id="hotel-plan-input"
                type="text"  class="form-control"
                name="hotel_name"
                value={formData.city}
                onChange={handleChange}
            />
           
            <br/>
        
            <InputLabel htmlFor="hotel_address"> Hotel Address:</InputLabel>
            <input
                id="hotel_address-plan-input"
                type="text"  class="form-control"
                name="hotel_address"
                value={formData.hotel_address}
                onChange={handleChange}
            />
          
            <br/>
           
            <InputLabel htmlFor="hotel_checkin">Hotel Checkin Date:</InputLabel>
            <input
                id="hotel_checkin-signup-input"
                type="date"  class="form-control"
                name="hotel_checkin"
                value={formData.hotel_checkin}
                onChange={handleChange}
            />
          
            <br/>
            
             <InputLabel htmlFor="hotel_checkout">Hotel Checkout Date: </InputLabel>
            <input
                id="email-signup-input"
                type="date"  class="form-control"
                name="hotel_checkout"
                value={formData.hotel_checkout}
                onChange={handleChange}
            />
          
           <br/>
           
           <br/>
          <legend>Flight Details</legend>

        

            <InputLabel htmlFor="flight_name">Flight Name:</InputLabel>
            <input
                className="flight-plan-input"
                type="text"  class="form-control"
                name="flight_name"
                value={formData.flight_name}
                onChange={handleChange}
            />
           
            <br/>
          
            <InputLabel htmlFor="flight_number">Flight Number:</InputLabel>
            <input
                className="flightnumber-plan-input"
                type="number"  class="form-control"
                name="flight_number"
                value={formData.flight_number}
                onChange={handleChange}
            />
          
            <br/>
             
            <InputLabel htmlFor="flight_to">Flight To:</InputLabel>
            <input
                className="flighto-plan-input"
                type="text"  class="form-control"
                name="flight_to"
                value={formData.flight_to}
                onChange={handleChange}
            />
             
              <br/>
             
            <InputLabel htmlFor="flight_from">Flight From:</InputLabel>
            <input
                className="flighfrom-plan-input"
                type="text"  class="form-control"
                name="flight_from"
                value={formData.flight_from}
                onChange={handleChange}
            />
         
            <br/>
         
           
           
            <InputLabel htmlFor="notes">Notes:</InputLabel>
           
            <input
                className="notes-plan-input"
                type="notes"  class="form-control"
                name="notes"
                defaultValue={formData.notes}
                onChange={handleChange}
            />
          
           <br/>
            <Button variant="contained" type="submit" >Save Plan</Button>
          
            </form>
        
        
    )
}