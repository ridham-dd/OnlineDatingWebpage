import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ isLoggedIn, handleLogout }) {
  return (
    <div className="navbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#D1510A', padding: '10px 30px' }}>
      <Link style={{ textDecoration: 'none', color: 'white', fontFamily: 'Press Start 2P', fontSize: '20px'}} to="/">MatchUp</Link>
      
      {isLoggedIn ? (
        <div>
          <Link to="/profile" style={{ textDecoration: 'none' }}><button style={buttonStyles}>Profile </button></Link>
          <Link to="/games" style={{ textDecoration: 'none' }}><button style={buttonStyles}>Games </button></Link>
          <Link to="/chats" style={{ textDecoration: 'none' }}><button style={buttonStyles}>Chats </button></Link>
          <button onClick={handleLogout} style={buttonStyles}>Log Out</button>
        </div>
      ) : (
        <Link to="/login" style={{ textDecoration: 'none' }}><button style={buttonStyles}>Log In</button></Link>
      )}
    </div>
  );
}

const buttonStyles = {
  padding: '7px 15px',
  marginRight: 'none',
  borderRadius: '10px',
  border: 'white',
  borderStyle: 'solid',
  backgroundColor: '#D1510A',
  color: 'white',
  border: 'none',
  cursor: 'pointer'
}

export default NavBar;
