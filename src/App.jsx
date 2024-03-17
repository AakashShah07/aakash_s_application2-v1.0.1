import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './style.css';
import LandingPage from "ComponentsList/LandingPage";
import Home from "ComponentsList/HomePage";
import Login from "ComponentsList/LoginPages/Login";
import BasePage from "ComponentsList/BasePage/BasePage";


function App() {


  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  
  return (
    <>
     <Router>

      
<Routes>
<Route path="/" element={<Home/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/home' element={<BasePage/>}/>


</Routes>


</Router>
    </>
  );
}


export default App;
