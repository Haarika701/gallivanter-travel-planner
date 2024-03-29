import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import logo from './logo.png'

ReactDOM.render(
  
  <React.StrictMode>
    <BrowserRouter>
     <div className='header'> 
      <img src = {logo}/> 
      <h1>Gallivanter: A Travel Planner App</h1>
      </div> 
     
    <App /> 
    
    </BrowserRouter>
  </React.StrictMode>,
  
  document.getElementById('root')
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

