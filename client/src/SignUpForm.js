import React, { useState } from "react";
import Error from "./Errors";
import { Button } from "@mui/material"
import BadgeIcon from '@mui/icons-material/Badge';
import PortraitIcon from '@mui/icons-material/Portrait';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import CheckIcon from '@mui/icons-material/Check';
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
    <>
       <form  className="signup-form" onSubmit={handleSubmit}>
        <h4>Sign up for an account</h4>       
        {errors.map((err) => (<Error key={err}>{err}</Error>))}
       <BadgeIcon>
        <label variant="outlined" htmlFor="first">First Name</label>
        </BadgeIcon>
            <input
                id="first_name-signup-input"
                type="text"
                name="first_name"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleChange}
            />
        
            <br/>
            <BadgeIcon> 
            <label variant="outlined" htmlFor="last_name">Last Name:</label>
            </BadgeIcon>
            <input
                id="last_name-signup-input"
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleChange}
            />
           
            <br/>
            <LocationCityIcon>
            <label  variant="outlined" htmlFor="city">City:</label>
            </LocationCityIcon>
            <input
                id="city-signup-input"
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
            />
            
            <br/>
           <PortraitIcon>
            <label variant="outlined" htmlFor="image">Profile Picture:</label>
            </PortraitIcon>
            <input
                id="image-signup-input"
                type="text"
                name="image"
                placeholder="Profile Picture"
                value={formData.image}
                onChange={handleChange}
            />
            <br/>
            <PersonIcon>
            <label  variant="outlined" htmlFor="username">Username:</label>
            </PersonIcon>
            <input
                id="username-signup-input"
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
            />
            <br/>
            <EmailIcon>
            <label  variant="outlined" htmlFor="email">Email:</label>
            </EmailIcon>
            <input
                id="email-signup-input"
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
           <br/>
           <PasswordIcon>
            <label variant="outlined" htmlFor="password">Password:</label>
            </PasswordIcon>
            <input
                className="password-signup-input"
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />
            <br/>
            <CheckIcon>
            <label  variant="outlined" htmlFor="password_confirmation">Confirm Password:</label>
            </CheckIcon>
            <input
                className="password-signup-input"
                type="password"
                name="password_confirmation"
                placeholder="Password Confirmation"
                value={formData.password_confirmation}
                onChange={handleChange}
            />
           
            <br/>
         
            <Button variant = "contained"  type="submit">Sign Up</Button>
            
           
       
        <h4>Already have an account? <Button variant="contained"  onClick = {handleFormDisplay}>Log In Now!</Button></h4>
        </form>
        </>
  );
};

