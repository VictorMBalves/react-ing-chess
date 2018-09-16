import React, { Component } from 'react';

import Square from './Square/Square';
import Piece from '../Piece/Piece';
import './Board.css';


class Board extends Component {

    state = {
        board: [
            'dark-rook', 'dark-horse', 'dark-bishop', 'dark-queen', 'dark-king', 'dark-bishop', 'dark-horse', 'dark-rook',
            'dark-pawn', 'dark-pawn', 'dark-pawn', 'dark-pawn', 'dark-pawn', 'dark-pawn', 'dark-pawn', 'dark-pawn',
            null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null,
            'white-pawn', 'white-pawn', 'white-pawn', 'white-pawn', 'white-pawn', 'white-pawn', 'white-pawn', 'white-pawn',
            'white-rook', 'white-horse', 'white-bishop', 'white-queen', 'white-king', 'white-bishop', 'white-horse', 'white-rook',
        ]
    }

    render() {
        let squareType = 'dark';
        const squares = [];

        for (var i = 1; i <= 64; ++i) {
            squares.push(
                <Square key={i} color={squareType}>
                    {this.state.board[i - 1] 
                        ? <Piece piece={this.state.board[i - 1]} /> 
                        : null}
                </Square>
            );

            if (squareType === 'dark' && i % 8 !== 0)
                squareType = 'ligth';
            else if (squareType === 'ligth' && i % 8 !== 0)
                squareType = 'dark';
        }

        return (
            <div className={"Board"}>
                {squares.map(square => square)}
            </div>
        )
    }
}

export default Board;