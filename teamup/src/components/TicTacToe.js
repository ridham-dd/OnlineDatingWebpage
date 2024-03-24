import React, { useState } from 'react';
import NavBar from './NavBar';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const renderResetButton = () => (
    <button onClick={() => setBoard(Array(9).fill(null))}>Reset Game</button>
  );

  const renderSquare = (index) => (
    <button
      className="square"
      onClick={() => handleClick(index)}
      style={{ width: '100px', height: '100px', fontSize: '24px', margin: '4px' }} // Adjust size and font here
    >
      {board[index]}
    </button>
  );

  const renderBoard = () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '5px' }}>
      {Array.from({ length: 9 }).map((_, index) => renderSquare(index))}
    </div>
  );

  return (
    <div>
      <h3>{winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`}</h3>
      {renderBoard()}
      {renderResetButton()}
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe;
