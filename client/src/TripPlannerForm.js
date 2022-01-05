import { Button, InputLabel} from "@mui/material";
import React, {  useState } from "react";
import Error from "./Errors";
import NumbersIcon from '@mui/icons-material/Numbers';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import StartIcon from '@mui/icons-material/Start';
import EventNoteIcon from '@mui/icons-material/EventNote';
import HotelIcon from '@mui/icons-material/Hotel';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import FlightClassIcon from '@mui/icons-material/FlightClass';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import NotesIcon from '@mui/icons-material/Notes';
import BadgeIcon from '@mui/icons-material/Badge';
import BusinessIcon from '@mui/icons-material/Business';


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
    setFormData((currentPlans) =>{
     return {...currentPlans,
      [e.target.name]: e.target.value} 
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
            user_id:"",
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
<>
      
       
        <form  className="travelplanner" onSubmit={handleSubmit}>
        {errors.map((err) => (<Error key={err}>{err}</Error>))}
        <legend>Trip Details</legend>
        <NumbersIcon>
         <InputLabel htmlFor="user_id">Plan Number</InputLabel>
         </NumbersIcon>
            <input
                className="user_id-plan-input"
                type="integer"  class="form-control"
                name="user_id"
                placeholder="Plan Number"
                onChange={handleChange}
            />
          <br/>
          <BadgeIcon>
            <InputLabel htmlFor="plan_name">Plan Name:</InputLabel>
            </BadgeIcon>
            <input
                id="plan_name-input"
                type="text"  class="form-control"
                name="plan_name"
                value={formData.plan_name}
                placeholder="Plan Name"
                onChange={handleChange}
            />
            <br/>
            <AddLocationAltIcon>
            <InputLabel htmlFor="destination">Destination:</InputLabel>
            </AddLocationAltIcon>
            <input
                id="last_name-signup-input"
                type="text"  class="form-control"
                name="destination"
                placeholder="Destination"
                value={formData.destination}
                onChange={handleChange}
            />
            <br/>
            <LocalActivityIcon>
            <InputLabel htmlFor="trip_activities">Trip Activities:</InputLabel>
            </LocalActivityIcon>
            <input
                className="activities-plan-input"
                type="text"  class="form-control"
                name="trip_activities"
                placeholder="Trip Activities"
                value={formData.trip_activities}
                onChange={handleChange}
            />
            <br/>
            <StartIcon>
            <InputLabel htmlFor="trip_start">Trip Start:</InputLabel>
            </StartIcon>
            <input
                className="tripstart-plan-input"
                type="date"  class="form-control"
                name="trip_start"
                placeholder="Trip Start Date"
                value={formData.trip_start}
                onChange={handleChange}
            />
            <br/>
            <EventNoteIcon>
            <InputLabel htmlFor="trip_end">Trip End:</InputLabel>
            </EventNoteIcon>
            <input
                className="tripend-plan-input"
                type="date"  class="form-control"
                name="trip_end"
                placeholder="Trip End Date"
                value={formData.trip_end}
                onChange={handleChange}
            />
            <br/>
           <legend>Hotel Details</legend>

           <HotelIcon>
            <InputLabel htmlFor="hotel_name">Hotel Name:</InputLabel>
            </HotelIcon>
            <input
                id="hotel-plan-input"
                type="text"  class="form-control"
                name="hotel_name"
                placeholder="Hotel Name"
                value={formData.city}
                onChange={handleChange}
            />
            <br/>
            <BusinessIcon>
            <InputLabel htmlFor="hotel_address"> Hotel Address:</InputLabel>
            </BusinessIcon>
            <input
                id="hotel_address-plan-input"
                type="text"  class="form-control"
                name="hotel_address"
                value={formData.hotel_address}
                onChange={handleChange}
            />
            <br/>
            <CheckBoxIcon>
            <InputLabel htmlFor="hotel_checkin">Hotel Checkin Date:</InputLabel>
            </CheckBoxIcon>
            <input
                id="hotel_checkin-signup-input"
                type="date"  class="form-control"
                name="hotel_checkin"
                placeholder="Hotel Check-in Date"
                value={formData.hotel_checkin}
                onChange={handleChange}
            />
          
            <br/>
            <CheckBoxOutlineBlankIcon>
             <InputLabel htmlFor="hotel_checkout">Hotel Checkout Date: </InputLabel>
             </CheckBoxOutlineBlankIcon>
            <input
                id="email-signup-input"
                type="date"  class="form-control"
                name="hotel_checkout"
                placeholder="Hotel Checkout Date"
                value={formData.hotel_checkout}
                onChange={handleChange}
            />
           <br/>
           <br/>
          <legend>Flight Details</legend>
          <FlightClassIcon>
            <InputLabel htmlFor="flight_name">Flight Name:</InputLabel>
            </FlightClassIcon>
            <input
                className="flight-plan-input"
                type="text"  class="form-control"
                name="flight_name"
                placeholder="Flight Name"
                value={formData.flight_name}
                onChange={handleChange}
            />
           
            <br/>
           <AirplaneTicketIcon>
            <InputLabel htmlFor="flight_number">Flight Number:</InputLabel>
            </AirplaneTicketIcon>
            <input
                className="flightnumber-plan-input"
                type="number"  class="form-control"
                name="flight_number"
                placeholder="Flight Number"
                value={formData.flight_number}
                onChange={handleChange}
            />
            <br/>
           <FlightLandIcon>
            <InputLabel htmlFor="flight_to">Flight To:</InputLabel>
            </FlightLandIcon>
            <input
                className="flighto-plan-input"
                type="text"  class="form-control"
                name="flight_to"
                placeholder="Flight To"
                value={formData.flight_to}
                onChange={handleChange}
            />
              <br/>
             <FlightTakeoffIcon>
            <InputLabel htmlFor="flight_from">Flight From:</InputLabel>
            </FlightTakeoffIcon>
            <input
                className="flighfrom-plan-input"
                type="text"  class="form-control"
                name="flight_from"
                placeholder="Flight From"
                value={formData.flight_from}
                onChange={handleChange}
            />
            <br/>
            < NotesIcon>
            <InputLabel htmlFor="notes">Notes:</InputLabel>
            </NotesIcon>
            <input
                className="notes-plan-input"
                type="notes"  class="form-control"
                name="notes"
                placeholder="Notes"
                defaultValue={formData.notes}
                onChange={handleChange}
            />
           <br/>
            <Button variant="contained" type="submit" >Save Plan</Button>
            </form>
               
                       
            </>                
        
    )
}