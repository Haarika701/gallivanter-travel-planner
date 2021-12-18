import React, {  useState } from "react";
import Error from "./Errors";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

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
        
        <Form  onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col  xs={7} xs = "auto">
        {errors.map((err) => (<Error key={err}>{err}</Error>))}
        
         <Form.Label htmlFor="user_id">Id:</Form.Label>
            <input
                className="user_id-plan-input"
                type="integer"  class="form-control"
                name="user_id"
                onChange={handleChange}
            />
        
          <br/>
          </Col>
          <Col>
            <Form.Label htmlFor="plan_name">Plan Name:</Form.Label>
            <input
                id="plan_name-input"
                type="text"  class="form-control"
                name="plan_name"
                value={formData.plan_name}
                onChange={handleChange}
            />
           </Col>
            
            <br/>
            <Col>
            <Form.Label htmlFor="destination">Destination:</Form.Label>
            <input
                id="last_name-signup-input"
                type="text"  class="form-control"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
            />
           </Col>
            <br/>
            <Col>
            <Form.Label htmlFor="hotel_name">Hotel Name:</Form.Label>
            <input
                id="hotel-plan-input"
                type="text"  class="form-control"
                name="hotel_name"
                value={formData.city}
                onChange={handleChange}
            />
           </Col>
            <br/>
        
            <Form.Label htmlFor="hotel_address"> Hotel Address:</Form.Label>
            <input
                id="hotel_address-plan-input"
                type="text"  class="form-control"
                name="hotel_address"
                value={formData.hotel_address}
                onChange={handleChange}
            />
          
            <br/>
           <Col>
            <Form.Label htmlFor="hotel_checkin">Hotel Checkin Date:</Form.Label>
            <input
                id="hotel_checkin-signup-input"
                type="date"  class="form-control"
                name="hotel_checkin"
                value={formData.hotel_checkin}
                onChange={handleChange}
            />
          </Col>
            <br/>
            <Col xs = "auto">
             <Form.Label htmlFor="hotel_checkout">Hotel Checkout Date: </Form.Label>
            <input
                id="email-signup-input"
                type="date"  class="form-control"
                name="hotel_checkout"
                value={formData.hotel_checkout}
                onChange={handleChange}
            />
            </Col>
           <br/>
           <Col >
            <Form.Label htmlFor="flight_name">Flight Name:</Form.Label>
            <input
                className="flight-plan-input"
                type="text"  class="form-control"
                name="flight_name"
                value={formData.flight_name}
                onChange={handleChange}
            />
            </Col>
            <br/>
            <Col>
            <Form.Label htmlFor="flight_number">Flight Number:</Form.Label>
            <input
                className="flightnumber-plan-input"
                type="number"  class="form-control"
                name="flight_number"
                value={formData.flight_number}
                onChange={handleChange}
            />
          </Col>
            <br/>
             <Col>
            <Form.Label htmlFor="flight_to">Flight To:</Form.Label>
            <input
                className="flighto-plan-input"
                type="text"  class="form-control"
                name="flight_to"
                value={formData.flight_to}
                onChange={handleChange}
            />
              </Col> 
              <br/>
             <Col>
            <Form.Label htmlFor="flight_from">Flight From:</Form.Label>
            <input
                className="flighfrom-plan-input"
                type="text"  class="form-control"
                name="flight_from"
                value={formData.flight_from}
                onChange={handleChange}
            />
           </Col>
            <br/>
           
            <Form.Label htmlFor="trip_activities">Trip Activities:</Form.Label>
            <input
                className="activities-plan-input"
                type="text"  class="form-control"
                name="trip_activities"
                value={formData.trip_activities}
                onChange={handleChange}
            />
           
            <br/>
            <Col>
            <Form.Label htmlFor="trip_start">Trip Start:</Form.Label>
            <input
                className="tripstart-plan-input"
                type="date"  class="form-control"
                name="trip_start"
                value={formData.trip_start}
                onChange={handleChange}
            />
           </Col>
            <br/>
            <Col>
            <Form.Label htmlFor="trip_end">Trip End:</Form.Label>
            <input
                className="tripend-plan-input"
                type="date"  class="form-control"
                name="trip_end"
                value={formData.trip_end}
                onChange={handleChange}
            />
           </Col>
            <br/>
            
            <Form.Label htmlFor="notes">Notes:</Form.Label>
            <input
                className="notes-plan-input"
                type="notes"  class="form-control"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
            />
            <Col xs = "auto">
            <Button variant="primary" type="submit" >Save Plan</Button>
            </Col>
           </Row>
            </Form>
        
        
    )
}