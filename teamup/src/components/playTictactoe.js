import React from 'react';
import TicTacToe from './TicTacToe';
import NavBar from './NavBar';

const gameStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
    // margin: 'px',
};

function playTicTacToe() {
    return (
        <div>
            <NavBar isLoggedIn={true} />
    <div style={gameStyle}>
  <TicTacToe />
</div>
</div>
    );

}
export default playTicTacToe;

