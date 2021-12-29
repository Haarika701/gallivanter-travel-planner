import React, { useState } from "react";
import Error from "./Errors";
import { Button } from "@mui/material"


export default function SignupForm( {setUser, handleFormDisplay} ) {
    const [errors, setErrors] = useState([]);
    const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    city: "",
    image: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
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

    const userCreds = { ...formData };

    fetch("/users",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          setFormData({
            first_name: "",
            last_name: "",
            city: "",
            image: "",
            username: "",
            email: "",
            password: "",
            password_confirmation: ""
          })
        });
      } else {
        res.json()
        .then((err) => setErrors(err.errors));
      }
    });

  }

  return (
    <div >
        <form  className="signup-form" onSubmit={handleSubmit}>
        <h4>Sign up for an account</h4><hr/>
        {errors.map((err) => (<Error key={err}>{err}</Error>))}
       
        <label variant="outlined" htmlFor="first">First Name</label>
        
            <input
                id="first_name-signup-input"
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
            />
        
            <br/>
           
            <label variant="outlined" htmlFor="last_name">Last Name:</label>
           
            <input
                id="last_name-signup-input"
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
            />
           
            <br/>
            
            <label  variant="outlined" htmlFor="city">City:</label>
            <input
                id="city-signup-input"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
            />
            
            <br/>
           
            <label variant="outlined" htmlFor="image">Profile Picture:</label>
           
            <input
                id="image-signup-input"
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
            />
            <br/>
            <label  variant="outlined" htmlFor="username">Username:</label>
            <input
                id="username-signup-input"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
            />
            <br/>
            
            <label  variant="outlined" htmlFor="email">Email:</label>
            <input
                id="email-signup-input"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
           <br/>
           
            <label variant="outlined" htmlFor="password">Password:</label>
            <input
                className="password-signup-input"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <br/>
            <label  variant="outlined" htmlFor="password_confirmation">Confirm Password:</label>
            
            <input
                className="password-signup-input"
                type="password"
                name="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleChange}
            />
           
            <br/>
         
            <Button variant = "contained"  type="submit">Sign Up</Button>
            
        </form>
       
        <h4>Already have an account? <Button variant="contained"  onClick = {handleFormDisplay}>Log In Now!</Button></h4>
       
        </div>
        
  );
};

