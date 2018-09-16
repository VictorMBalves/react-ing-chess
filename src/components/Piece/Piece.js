import React from 'react';

import './Piece.css';

const piece = (props) => {
    let piece;

    switch (props.piece) {
        //WHITE PIECES  
        case 'white-horse':
            piece = require('../../assets/white-horse.png');
            break;
        case 'white-queen':
            piece = require('../../assets/white-queen.png');
            break;
        case 'white-king':
            piece = require('../../assets/white-king.png');
            break;
        case 'white-bishop':
            piece = require('../../assets/white-bishop.png');
            break;
        case 'white-rook':
            piece = require('../../assets/white-rook.png');
            break;
        case 'white-pawn':
            piece = require('../../assets/white-pawn.png');
            break;

        //DARK PIECES 

        case 'dark-rook':
            piece = require('../../assets/dark-rook.png');
            break;
        case 'dark-queen':
            piece = require('../../assets/dark-queen.png');
            break;
        case 'dark-pawn':
            piece = require('../../assets/dark-pawn.png');
            break;
        case 'dark-king':
            piece = require('../../assets/dark-king.png');
            break;
        case 'dark-horse':
            piece = require('../../assets/dark-horse.png');
            break;
        case 'dark-bishop':
            piece = require('../../assets/dark-bishop.png');
            break;
        default:
            piece = null;
    }

    const classes = ['Piece', props.piece];


    return (
        <div className={classes.join(' ')} >
            <img src={piece} alt=""  />
        </div>
    )
}

export default piece;