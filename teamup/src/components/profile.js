import React from 'react';
import profile from '../assets/blank.jpeg';
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';



const Profile = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("Default User");
    const [age, setAge] = useState("20");
    const [gender, setGender] = useState("male");
    const [email, setEmail] = useState("abc@gmail.com");
    const [bio, setBio] = useState("Default User is a good user");
    const [isLoggedIn, setIsLoggedIn] = useState(false);



    useEffect(() => {
        // Check if user is authenticated
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            setIsLoggedIn(true); // User is logged in
            // alert(jwt);
            getData(jwt);
        } else {
            // Redirect to login page or handle unauthorized access
            navigate('/login'); // Redirect to login page
            // Alternatively, you can display a message indicating unauthorized access
            // console.log("Unauthorized access");
        }
    }, [navigate]);
    
    
    async function getData(jwt){
        try{
            // console.log(jwt);
            const response  = await    fetch('https://matchupbackend.vercel.app/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authentication': jwt
                }
            })
            if (!response.ok) {
                const data = await response.json();       
                // alert(data.message);
                return;
            } else{
                const info = await response.json();  
                const data = info.data;
                console.log(data);
                setName(data.name);
                setAge(data.age);
                setBio(data.bio);
                setEmail(data.email);
                setGender(data.gender);
                setIsLoggedIn(true);
                
            }
        } catch(e){
            alert("Internal Server Error, Try again");
            navigate('/');
        }
        
    }
    // Replace the following variables with actual user information
    // const name = 'John Doe';
    // const age = 25;
    const place = 'New York';
    // const bio = 'I love playing poker';
    // const gender = 'Male'
    // const email = 'xyz@gmail.com';

    

    return (
        <div>
            <NavBar isLoggedIn = {true} />
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
        </div>
    );
};


export default Profile;