import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import LandingPage from './LandingPage';
import Navabr from './Navbar/Navabr';


const Home = () => {


  return (
    <>
    <div style={{ margin: '0', padding: '0' }}>
      <Navabr/>
        <LandingPage/>
    <div className='row'>
    
    </div>
    
    </div>


    </>
    
  )
}

export default Home
