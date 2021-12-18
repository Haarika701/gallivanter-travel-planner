import React, { useState } from "react";
import Error from "./Errors";

 
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
     <div class="ui form">
      
        <form  class="signup-form" onSubmit={handleSubmit}>
        
        <legend>Sign up for an account:</legend>

        {errors.map((err) => (<Error key={err}>{err}</Error>))}
        
        <label>First Name</label>
        <div className="ui input">
            <input
                id="first_name-signup-input"
                type="text"
                placeholder="First Name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
            />
         </div>
            <br/>
            
            <label htmlFor="last_name">Last Name:</label>
            <div className="ui input">
            <input
                id="last_name-signup-input"
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
            />
            </div>
            <br/>
            
            <label htmlFor="city">City:</label>
            <div className="ui input">
            <input
                id="city-signup-input"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
            />
            </div>
            <br/>
           
            <label htmlFor="image">Profile Picture:</label>
            <div className="ui input">
            <input
                id="image-signup-input"
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
            />
            </div>
            <br/>
           
            
            <label htmlFor="username">Username:</label>
            <div className="ui input">
            <input
                id="username-signup-input"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
            />
            </div>
            
            <br/>
            
            <label htmlFor="email">Email:</label>
            <div className="ui input">
            <input
                id="email-signup-input"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            </div>
           <br/>
            <label htmlFor="password">Password:</label>
            <div className="ui input">
            <input
                className="password-signup-input"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            </div>
            <br/>
            <label htmlFor="password_confirmation">Confirm Password:</label>
            <div className="ui input">
            <input
                className="password-signup-input"
                type="password"
                name="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleChange}
            />
            </div>
            <br/>
            <button variant="outlined" type="submit">Sign Up</button>
      
        </form>
        <h3>Already have an account? <button onClick = {handleFormDisplay}>Log In Now!</button></h3>
    </div> 
  );
};