import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { useNavigate } from "react-router-dom";




const LandingPage = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
      console.log("onclick clicked")
        navigate("/login"); // Navigate to /home route
      };
    
  return (
    <>
    <div className='newBlock'>
    <div className="tagname">
               Part-time jobs can teach youth about the value of Hard work  and financial independence.    

        </div>
    
    <div className="home">
       
      <h1>Empowring Youth </h1>
      <h3 style={{cursor: 'pointer'}} onClick={navigateToHome}>Get Started</h3>
    </div>
    </div>
  </>
  )
}

export default LandingPage
