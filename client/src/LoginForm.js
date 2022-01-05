import React, {useState} from "react"
import Error from "./Errors";
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import PasswordIcon from '@mui/icons-material/Password';

export default function LoginForm ( {setUser, handleFormDisplay} ) {
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
      username: "",
      password: "",
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    function handleSubmit(e) {
      e.preventDefault();
      console.log("Submitting form ...")
  
      const userCreds = { ...formData };
  
      fetch("/login",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCreds),
      }).then((res) => {
        if (res.ok) {
          res.json().then((user) => {
            setUser(user);
          });
        } else {
          res.json().then((err) => {
            setErrors(err.errors);
          });
        }
      });
      setFormData({
          username: "",
          password: "",
        })
    }
  
  
    return (
     
          <form className = "signup-login-form" onSubmit={handleSubmit}>
          <h2>Log In</h2>
          {errors.map((err) => (<Error key={err}>{err}</Error>))}
          <PersonIcon>
          <label htmlFor="username">Username</label>
          </PersonIcon>
          <input
              id="username-login-input"
              type="text"
              name="username"
              placeholder="username"
              value={formData.username}
              onChange={handleChange}
          />
          <br/>
         
         <PasswordIcon>
          <label htmlFor="password">Password</label>
          </PasswordIcon>
          <input
              id="password-login-input"
              type="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
          />
         
           <br/>
          <Button variant="contained" size="medium" type="submit">Sign In</Button><br></br>

          <div className="col">
          <h4>Don't have an account yet? <Button variant="contained" color="primary"className="medium ui button" onClick = {handleFormDisplay}>Sign Up Now!</Button></h4>
          </div>
          </form>
    
    );

}





