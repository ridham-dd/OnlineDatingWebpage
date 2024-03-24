import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Button component with its own hover state
function QuickLinkButton({ to, children }) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyles = {
    padding: '7px 15px',
    margin: '5px 0',
    borderRadius: '40px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: isHovered ? '#F3E8E2' : '#D1510A', // Inverted background color on hover
    color: isHovered ? '#D1510A' : 'white', // Inverted text color on hover
    transition: 'all 0.5s ease', // Smooth transition for color change
  };

  return (
    <Link to={to}>
      <button 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={buttonStyles}
      >
        {children}
      </button>
    </Link>
  );
}

export default QuickLinkButton;
