import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpForm"
import { useState } from 'react'
import Header from "./Header"
import React from "react";
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

export default function LoginSignUp( {setUser} ){


    const Grid = styled(MuiGrid)(({ theme }) => ({
        width: '100%',
        ...theme.typography.body2,
        '& [role="separator"]': {
          margin: theme.spacing(0, 2),
        },
      }));
    const [signUp, setSignUp] = useState(false)

    function handleFormDisplay(){
        setSignUp(current => !current)
    }

    return(
        <>
          <Header />
          <div className="container">
            { signUp? 
           
                <LoginForm setUser = {setUser} handleFormDisplay = {handleFormDisplay}/> : <SignUpForm setUser = {setUser} handleFormDisplay = {handleFormDisplay}/> 
               
            } 
           
        </div>
        </>   
       
    )
}