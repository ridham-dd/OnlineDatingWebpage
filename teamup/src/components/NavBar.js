import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';


function NavBar({ isLoggedIn }) {
  return (
    <div className="navbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#D1510A', padding: '10px 30px' }}>
      <Link style={{ textDecoration: 'none' }} to="/">
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>MatchUp</div>
      </Link>
      <div>
        <LoginButton /> {/* Use the LoginButton component here */}
        <LogoutButton />
      </div>
    </div>
  );
}


{/* <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/loginbutton"><button style={buttonStyles}>Log in</button></Link>
        {isLoggedIn && <Link to="/profile"><button style={buttonStyles}>Profile</button></Link>}
      </div> */}


const buttonStyles = {
  padding: '7px 15px',
  margin: '5px 0',
  borderRadius: '10px',
  border: 'white',
  borderStyle: 'solid',
  backgroundColor: '#D1510A',
  color: 'white',
  border: 'none',
  cursor: 'pointer'
}

export default NavBar
