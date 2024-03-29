import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LogoutButton from './LogoutButton';
import logoImage from '../assets/logo.png';


function NavBar({ isLoggedIn, handleLogout }) {
  const location = useLocation();
    //Check if name is blank or empty and set to "Default User" if it is
    const name = location.state?.name?.trim() ? location.state.name : "Default User";
    const age = location.state?.age;
    const gender = location.state?.gender;
    const email = location.state?.email;
    const password = location.state?.password;
    const additionalInfo = location.state?.additionalInfo;
    //const isLoggedIn = location.state.isLoggedIn;
    console.log(location.state);
    //const [isHoveredA, setIsHoveredA] = useState(false);
    //const [isHoveredB, setIsHoveredB] = useState(false);
    //const navigate = useNavigate();
    const buttonStyles = {
      padding: '7px 15px',
      marginLeft: '20px',
      marginRight: '20px',
      margin: '10px',
      borderRadius: '10px',
      border: 'white',
      borderStyle: 'solid',
      backgroundColor: '#D1510A',
      color: 'white',
      border: 'none',
      cursor: 'pointer'
    }

  return (
    <div className="navbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#D1510A', padding: '10px 30px' }}>
      <Link style={{ textDecoration: 'none', color: 'white', fontFamily: 'Press Start 2P', fontSize: '20px'}} to="/">
      <img src={logoImage} alt="MatchUp Logo" style={{ height: '35px' , align: 'center', marginTop: '6px'}} /> </Link>
      
      {isLoggedIn ? (
        <div>
          <Link to="/profile" state={{name: name, age: age, gender: gender, email: email, password: password, additionalInfo: additionalInfo, isLoggedIn: true}}><button style={buttonStyles}>Profile</button></Link> 
          <Link to="/games" state={{name: name, age: age, gender: gender, email: email, password: password, additionalInfo: additionalInfo, isLoggedIn: true}}><button style={buttonStyles}>Games</button></Link> 
          {/* <button onClick={handleLogout} style={buttonStyles}>Log Out</button> */}
          <Link to="/chats" state={{name: name, age: age, gender: gender, email: email, password: password, additionalInfo: additionalInfo, isLoggedIn: true}}><button style={buttonStyles}>Chats</button></Link> 
          {/* <LogoutButton/> */}
          <Link to="/"><button style={buttonStyles} onClick={function(){
            localStorage.removeItem('jwt');
            window.location.reload();
          }}>Log Out</button></Link> 
        </div>
      ) : (
        <Link to="/login" state={{name: "user", age: "10", gender: "f", email: "xyz@gmil.com", password: "123", additionalInfo: "zxxx"}} style={{ textDecoration: 'none' }}><button style={buttonStyles}>Log In </button></Link>
      )}
    </div>
  );
}



export default NavBar;
