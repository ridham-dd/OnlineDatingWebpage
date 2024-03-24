import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

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

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()} style={buttonStyles}>
        Log In
      </button>
    )
  )
}

export default LoginButton;