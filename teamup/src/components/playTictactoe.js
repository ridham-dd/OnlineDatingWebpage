import React from 'react';
import TicTacToe from './TicTacToe';

const gameStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
    // margin: 'px',
};

function playTicTacToe() {
    return (
    <div style={gameStyle}>
  <TicTacToe />
</div>
    );

}
export default playTicTacToe;

