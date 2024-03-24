import React from 'react';

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
const LogoutButton = ({ setIsLoggedIn }) => {
  const handleLogout = () => {
    // Perform logout actions here
    setIsLoggedIn(false); // Update isLoggedIn state to false
  };

  return (
    <button onClick={handleLogout} style={buttonStyles}>
      Log Out
    </button>
  );
};

export default LogoutButton;
