import React from 'react';

// Dummy image paths, replace with actual paths or URLs
import chessImg from '../assets/chess.png';
import wordleImg from '../assets/wordle.png';
import typeracerImg from '../assets/TypeRacer_logosvg.png';
import scrabbleImg from '../assets/scrabble.png';
import tetrisImg from '../assets/tetris-logo.png';
import poker from '../assets/Poker.png';

function GamesPage(){
    const gameContainerStyle = {
        display: 'grid',
        gridTemplateRows: 'repeat(2, 1fr)',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
        width: '50%', // Sets the width of the grid container to 90% of its parent element
        height: '60vh', // Sets the height of the grid container to 60% of the viewport height
        margin: 'auto',
        backgroundColor: '#F3E8E2' // This centers the grid in the middle of the page horizontally
    };
    
      const baap = {
        backgroundColor: '#F3E8E2',
        height: '100vh',
        padding: '30px'
      }
    const gameStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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

    return (
        <div style={baap} >

        

        <div style={{ fontFamily: 'Arial, sans-serif' }}>
            <h1 style={headingStyle}>Hello, Vansh! Choose a Game to Begin.</h1>
            <div style={gameContainerStyle}>
                <div style={gameStyle}>
                    <h2>Chess</h2>
                    <img src={chessImg} alt="Chess" style={imgStyle} />
                </div>
                <div style={gameStyle}>
                    <h2>Wordle</h2>
                    <img src={wordleImg} alt="Wordle" style={imgStyle} />
                </div>
                <div style={gameStyle}>
                    <h2>Typeracer</h2>
                    <img src={typeracerImg} alt="Typeracer" style={imgStyle} />
                </div>
                <div style={gameStyle}>
                    <h2>Scrabble</h2>
                    <img src={scrabbleImg} alt="Scrabble" style={imgStyle} />
                </div>
                <div style={gameStyle}>
                    <h2>Tetris</h2>
                    <img src={tetrisImg} alt="Tetris" style={imgStyle} />
                </div>
                <div style={gameStyle}>
                    <h2>Poker</h2>
                    <img src={poker} alt="Poker" style={imgStyle} />
                </div>
            </div>
        </div>
        </div>
    )
}

export default GamesPage;
