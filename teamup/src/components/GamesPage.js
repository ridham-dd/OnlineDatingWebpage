import React from 'react';
import {Link} from 'react-router-dom'
import TicTacToe from './TicTacToe'; // Adjust the path as necessary
import QuickLinkButton from './QuickLinkButton';
// Dummy image paths, replace with actual paths or URLs
import chessImg from '../assets/chess.png';
import wordleImg from '../assets/wordle.png';
import typeracerImg from '../assets/TypeRacer_logosvg.png';
import scrabbleImg from '../assets/scrabble.png';
import tetrisImg from '../assets/tetris-logo.png';
import tictactoe from '../assets/TicTacToe.jpeg';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';




const GamesPage = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("Default User");
    const [age, setAge] = useState("20");
    const [gender, setGender] = useState("male");
    const [email, setEmail] = useState("abc@gmail.com");
    const [additionalInfo, setAdditionalInfo] = useState("Default User is a good user");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [isHoveredA, setIsHoveredA] = useState(false);
    const [isHoveredB, setIsHoveredB] = useState(false);


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
            console.log(jwt);
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
                setAdditionalInfo(data.bio);
                setEmail(data.email);
                setGender(data.gender);
                setIsLoggedIn(true);
                
            }
        } catch(e){
            alert("Internal Server Error, Try again");
            navigate('/');
        }
        
    }


    
    const gameContainerStyle = {
        display: 'grid',
        gridTemplateRows: 'repeat(2, 1fr)',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
        width: '50%', // Sets the width of the grid container to 90% of its parent element
        //height: '60%', // Sets the height of the grid container to 60% of the viewport height
        margin: 'auto',
        backgroundColor: '#F3E8E2', // This centers the grid in the middle of the page horizontally
    };
    
      const baap = {
        backgroundColor: '#F3E8E2',
        height: '100%',
        padding: '30px'
      }
    const gameStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
        // margin: 'px',
    };

    const headingStyle = {
        color: '#333', // Replace with actual color code from the image
        textAlign: 'center',

         color: '#D1510A',
         margin: '0',
         padding: '0',
         marginBottom:'40px'
    };

    const imgStyle = {
        width: '80px', // Adjust size as needed
        height: '80px', // Adjust size as needed
        marginBottom: '5px',
    };
    
    function handleClick() {
        navigate("/profile");
    }

    function handleClick2() {
        navigate("/chats");
    }

    return (
        <div>
            <NavBar isLoggedIn = {isLoggedIn} />
        <div style={baap}>
            
            <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '33%', marginLeft: '33%', marginBottom: '30px'}}>
            {/* <Link to="/profile" state={{name: name, age: age, gender: gender, email: email, password: password, additionalInfo: additionalInfo, isLoggedIn: isLoggedIn}} style={{ textDecoration: 'none' }}>
            
                    <button onMouseEnter={() => setIsHoveredA(true)}
        onMouseLeave={() => setIsHoveredA(false)} style={{
            padding: '7px 15px',
            margin: '5px 0',
            borderRadius: '40px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: isHoveredA ? '#F3E8E2' : '#D1510A', // Inverted background color on hover
            color: isHoveredA ? '#D1510A' : 'white', // Inverted text color on hover
            transition: 'all 0.5s ease', 
        }}>Profile</button>
                
                </Link>
                <Link to="/chats" state={{name: name, isLoggedIn:isLoggedIn}} style={{ textDecoration: 'none' }}>
            
                    <button onMouseEnter={() => setIsHoveredB(true)}
    onMouseLeave={() => setIsHoveredB(false)} style={{
        padding: '7px 15px',
        margin: '5px 0',
        borderRadius: '40px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: isHoveredB ? '#F3E8E2' : '#D1510A', // Inverted background color on hover
        color: isHoveredB ? '#D1510A' : 'white', // Inverted text color on hover
        transition: 'all 0.5s ease', 
    }}>Chats</button>
                
                </Link> */}
            </div>

            <div style={{ fontFamily: 'Arial, sans-serif' }}>
                {/* <div>
                    {jwt}
                </div> */}
                <h1 style={headingStyle}>Hello, {name}! Choose a Game to Begin.</h1>

                <div style={gameContainerStyle}>
                    <div style={gameStyle}>
                        <Link style={{ textDecoration: "none", cursor: "pointer" }} to="https://www.chess.com/play/computer">
                            <h2 style={{ color: "black" }}> Chess </h2>
                            <img src={chessImg} alt="Chess" style={imgStyle} />
                        </Link>
                    </div>

                    <div style={gameStyle}>
                        <Link style={{ textDecoration: "none", cursor: "pointer" }} to="https://www.nytimes.com/games/wordle/index.html">
                            <h2 style={{ color: "black" }}> Wordle</h2>
                            <img src={wordleImg} alt="Wordle" style={imgStyle} />
                        </Link>
                    </div>

                    <div style={gameStyle}>
                        <Link style={{ textDecoration: "none", cursor: "pointer" }} to="https://play.typeracer.com/">
                            <h2 style={{ color: "black" }}> Typeracer</h2>
                            <img src={typeracerImg} alt="Typeracer" style={imgStyle} />
                        </Link>
                    </div>

                    <div style={gameStyle}>
                        <Link style={{ textDecoration: "none", cursor: "pointer" }} to="https://playscrabble.com/">
                            <h2 style={{ color: "black" }}> Scrabble</h2>
                            <img src={scrabbleImg} alt="Scrabble" style={imgStyle} />
                        </Link>
                    </div>

                    <div style={gameStyle}>
                        <Link style={{ textDecoration: "none", cursor: "pointer" }} to="https://tetr.io/">
                            <h2 style={{ color: "black" }}> Tetris</h2>
                            <img src={tetrisImg} alt="Tetris" style={imgStyle} />
                        </Link>
                    </div>

                    <div style={gameStyle}>
                        <Link style={{ textDecoration: "none", cursor: "pointer" }} to="/TicTacToe">
                            <h2 style={{ color: "black" }}> Tictactoe</h2>
                            <img src={tictactoe} alt="Tictactoe" style={imgStyle} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}



  const listStyle = {
    listStyleType: 'none',
    padding: 0,
  };

export default GamesPage;