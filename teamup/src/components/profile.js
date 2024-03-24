import React from 'react';
import profile from '../assets/blank.jpeg';

const Profile = () => {
    // Replace the following variables with actual user information
    const name = 'John Doe';
    const age = 25;
    const location = 'New York';
    const bio = 'I love playing poker';
    const gender = 'Male'
    const email = 'xyz@gmail.com';

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Your Profile</h1>

            <img src={profile} alt="Profile Image" style={{ border: '5px solid black', width: '200px', height: '200px' }} />
            <h3>
            <p>Your Name: {name}</p>
            <p>Your Age: {age}</p>
            <p>Your Location: {location}</p>
            <p>Your Gender: {gender}</p>
            <p>Your Email: {email}</p>
            <p>Your Bio: {bio}</p>
            </h3>
        </div>
    );
};


export default Profile;