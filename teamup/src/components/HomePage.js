import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import background from '../assets/Homee.png';
// Assuming you have an image you want to use for the vibrating effect
import vibratingImage from '../assets/Hearts.png';
import NavBar from './NavBar';

function HomePage() {

  useEffect(() => {
    // This effect will run only once after the initial render
    renderFirstly();
  }, []); 
  // State to handle the vibration effect
  const [isVibrating, setIsVibrating] = useState(false);
  const [login, setLogin] = useState(false);
  const[welcome, setWelcome] = useState("Create Account");
  const[link, setLink] = useState("/signup");

  // if(localStorage.getItem('jwt')){
  //   setLogin(true);
  //   setWelcome("Welcome to MatchUp");
  // }

  function renderFirstly(){
    const jwt = localStorage.getItem('jwt');
    if(jwt!=null){
      setLogin(true);
      setWelcome("Welcome to MatchUp!!");
      setLink("/games")
    }
  }

  // renderFirstly();

  // Function to enable the vibration
  const handleMouseMove = () => {
    setIsVibrating(true);
    setTimeout(() => setIsVibrating(false), 2000); // Stop the effect after 500ms
  };

  return (
    <div>
        <NavBar isLoggedIn={login} />
        <div style={makeBig} onMouseMove={handleMouseMove}>
      <Link to={link}><button style={buttonStyle}>{welcome}</button></Link>
      <div style={imageContainer}>
        <img src={vibratingImage} alt="Vibrating" style={isVibrating ? vibratingStyle : {}} />
      </div>
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
