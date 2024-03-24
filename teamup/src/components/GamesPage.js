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



const GamesPage = () => {
    // const { name, age, gender, email, password, additionalInfo } = props.location.state;
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

    return (
        <div style={baap}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <QuickLinkButton Link to="/profile">
                    <button style={buttonStyles}>Profile</button>
                </QuickLinkButton>
                <QuickLinkButton Link to="/chats">
                    <button style={buttonStyles}>Chats</button>
                </QuickLinkButton>
            </div>

            <div style={{ fontFamily: 'Arial, sans-serif' }}>
                <h1 style={headingStyle}>Hello, Vansh! Choose a Game to Begin.</h1>

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
                            <ul style={listStyle}>
                                <li><button style={buttonStyles}>Play TicTacToe</button></li>
                                <li><img src={tictactoe} alt="Poker" style={imgStyle} /></li>
                            </ul>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

const buttonStyles = {
    padding: '10px 20px',
    borderRadius: '10px',
    backgroundColor: '#D1510A',
    color: 'white',
    border: 'none',
    cursor: 'pointer'
  }

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
  };

export default GamesPage;