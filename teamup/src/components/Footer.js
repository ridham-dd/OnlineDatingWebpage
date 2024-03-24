import React from 'react';
import QuickLinkButton from './QuickLinkButton'; // Import the button component

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <div>
          <h2>Contact Support</h2>
          <p>Email: support@matchup.com</p>
          <p>Phone: +1 (123)-456-7890</p>
        </div>
        <div>
          <h2>Quick Links</h2>
          <ul style={listStyle}>
            <li>
              <QuickLinkButton to="/Help">Help</QuickLinkButton>
            </li>
            <li>
              <QuickLinkButton to="/AboutUs">About Us</QuickLinkButton>
            </li>
            <li>
              <QuickLinkButton to="/Teammembers">Team members</QuickLinkButton>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

const footerStyle = {
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: '#D1510A',
  color: 'white',
  padding: '20px',
};

const footerContentStyle = {
  display: 'flex',
  justifyContent: 'space-around',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
};

export default Footer;
