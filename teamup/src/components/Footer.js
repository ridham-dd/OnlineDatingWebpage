import React from 'react';


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
            <li><a href="#">Help</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Team Members</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: 'black',
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