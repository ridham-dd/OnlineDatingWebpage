// games.js

let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = false;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const playTicTacToe = () => {
    gameActive = true;
    document.getElementById('games').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'block';
    displayBoard();
};

const displayBoard = () => {
    const boardElement = document.getElementById('gameContainer');
    boardElement.innerHTML = '';
    board.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.innerText = cell;
        cellElement.addEventListener('click', () => handleCellClick(index));
        boardElement.appendChild(cellElement);
    });
};

const handleCellClick = (index) => {
    if (board[index] === '' && gameActive) {
        board[index] = currentPlayer;
        displayBoard();
        handleResultValidation();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
};

const handleResultValidation = () => {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        document.getElementById('gameContainer').innerText = `Player ${currentPlayer} wins!`;
        gameActive = false;
        return;
    }
    if (!board.includes('')) {
        document.getElementById('gameContainer').innerText = "It's a draw!";
        gameActive = false;
        return;
    }
};
