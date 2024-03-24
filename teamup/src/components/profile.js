import React from 'react';
import profile from '../assets/blank.jpeg';
import { useLocation } from 'react-router-dom';


const Profile = () => {
    // Replace the following variables with actual user information
    // const name = 'John Doe';
    // const age = 25;
    const place = 'New York';
    // const bio = 'I love playing poker';
    // const gender = 'Male'
    // const email = 'xyz@gmail.com';
    const location = useLocation();
    console.log(location.state);
    const name = location.state.name;
    const age = location.state.age;
    const gender = location.state.gender;
    const email = location.state.email;
    const bio = location.state.additionalInfo;
    

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Your Profile</h1>

            <img src={profile} alt="Profile Image" style={{ border: '5px solid black', width: '200px', height: '200px' }} />
            <h3>
            <p>Your Name: {name}</p>
            <p>Your Age: {age}</p>
            <p>Your Location: {place}</p>
            <p>Your Gender: {gender}</p>
            <p>Your Email: {email}</p>
            <p>Your Bio: {bio}</p>
            </h3>
        </div>
    );
};


export default Profile;