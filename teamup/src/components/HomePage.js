import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import background from '../assets/Home.png';
// Assuming you have an image you want to use for the vibrating effect
import vibratingImage from '../assets/Hearts.png';

function HomePage() {
  // State to handle the vibration effect
  const [isVibrating, setIsVibrating] = useState(false);

  // Function to enable the vibration
  const handleMouseMove = () => {
    setIsVibrating(true);
    setTimeout(() => setIsVibrating(false), 2000); // Stop the effect after 500ms
  };

  return (
    <div style={makeBig} onMouseMove={handleMouseMove}>
      <Link to="/signup"><button style={buttonStyle}>Create Account</button></Link>
      <div style={imageContainer}>
        <img src={vibratingImage} alt="Vibrating" style={isVibrating ? vibratingStyle : {}} />
      </div>
    </div>
  );
}

const buttonStyle = {
  align: 'center',
  backgroundColor: '#D1510A',
  marginTop: '45px',
  fontSize: '25px',
  color: 'white',
  padding: '15px 45px',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.3s, color 0.3s', 
  borderRadius: '40px'
}

const makeBig = {
  height: '58.6vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '33.5px',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const imageContainer = {
  position: 'absolute',
  top: '63%', // Adjust this value as needed
  left: '50%',
  transform: 'translate(-50%, -50%)', // Centers the image horizontally and adjusts vertically
};

// CSS for the vibrating effect
const vibratingStyle = {
  animation: 'vibrate-animation  0.5s infinite',
};

export default HomePage;
