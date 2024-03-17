import React,{useState} from 'react'
import './style.css'
import { stepButtonClasses } from '@mui/material';
import newLogo from './newLogo.svg'
import logo from './finalLogo.jpeg'
import { ReactSVG } from 'react-svg';

const Navabr = () => {


    const [state, setState] = useState(false);
    const handleClick = () =>{
        setState(prevState => !prevState); // Toggle the state
    }

    const modifySVG = (svg) => {
        // Set the desired height and width
        svg.setAttribute('height', '100px');
        svg.setAttribute('width', '100px');
        return svg;
      };
    

    return (
        <>
            <nav>
                <a href='/' style={{ textDecoration: 'none' }}>
                <p style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
        <h2 style={{ marginLeft: '10px', marginBottom: '0', color:"white" }}>JOBnest</h2>
      </p>
                    
                        </a>

                <div>
                    <ul id='navbar' className={
                        !state ? "#navbar active" : "#navbar"
                    }>
                        {/* <li><a className='active' href='/'>Home</a></li> */}
                        <li><a href='/'>Explore</a></li>
                        <li><a href='/'>About Us</a></li>
                        <li><a href='/'>Contact</a></li>
                    </ul>
                </div>
                <div id='mobile' onClick={handleClick}>
                    <i id='bar'
                    className={!state ? "fas fa-times":"fas fa-bars"}
                    
                    >

                    </i>

                </div>

            </nav>

        </>
    )
}

export default Navabr
