import React from 'react';
import { Link } from 'react-router-dom'

function NavBar() {
  return (
            <div className="navbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f0874d', padding: '10px 30px'}}>
             <Link  style = {{textDecoration: 'none'}} to="/"><div style={{ fontFamily: 'Pixelify', fontSize: '24px', fontWeight: 'bold', color: 'white'}}>MatchUp</div></Link>
            <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/login"><button style={buttonStyles}>Login</button></Link>
              <Link to="/login"><button style={buttonStyles}>Signup</button></Link>
            </div>
          </div>
        );
      }
      
      const buttonStyles = {
        padding: '10px 20px',
        borderRadius: '10px',
        backgroundColor: '#D1510A',
        color: 'white',
        border: 'none',
        cursor: 'pointer'
      }

export default NavBar;