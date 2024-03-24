import React from 'react';
import { Link } from 'react-router-dom';

function HomePage(){
    return (
        <div style={makeBig}>
  <h1 
  className="FadeIn" style={badasa}>
    Find a <span> Match </span>
    </h1>  
  <Link to="/login"><button style={buttonStyle}>Create Account </button></Link>
</div>

    )
}

const buttonStyle = {
    align: 'center',
    backgroundColor: '#D1510A',
    fontSize: '25px',
    color: 'white',
    padding: '15px 45px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s', 
    borderRadius: '40px'// Transition for smooth hover effect
  }
  
  const makeBig = {
    
    height: '58.6vh',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    flexDirection: 'column',
    padding: '33.5px', // Set the height to 90% of the viewport height
    backgroundColor: '#F3E8E2',
   
  }
  
  const badasa = {
    
    fontSize: '100px', // Changed to set font size to 48px
    textAlign: 'center', // Changed to center align text
    color: 'black', // Changed to black color
  }

export  default HomePage;