import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpForm"
import { useState } from 'react'

import React from "react";
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

export default function LoginSignUp( {setUser} ){

    const [signUp, setSignUp] = useState(false)

    function handleFormDisplay(){
        setSignUp(current => !current)
    }

    return(
        <>
          
          <div className="container">
            { signUp? 
           
                <LoginForm setUser = {setUser} handleFormDisplay = {handleFormDisplay}/> : <SignUpForm setUser = {setUser} handleFormDisplay = {handleFormDisplay}/> 
               
            } 
           
        </div>
        </>   
       
    )
}