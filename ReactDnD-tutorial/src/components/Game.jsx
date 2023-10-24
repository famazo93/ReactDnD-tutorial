import Board from './Board';
import { useState } from 'react';

function Game() {
    const [knightPosition, setKnightPosition] = useState([0,0]);

    const canKnightMove = (toX, toY) => {
        const [x, y] = knightPosition;

        const dx = toX - x;
        const dy = toY - y;

        return (Math.abs(dx) === 2 && Math.abs(dy) === 1) || (Math.abs(dx) === 1 && Math.abs(dy) === 2);
    }

    const moveKnight = (toX, toY) => {
        if (canKnightMove(toX, toY)) {
            setKnightPosition([toX, toY]);
        } else {
            console.log("Cannot move there!");
        }
    }

    return (
        <Board knightPosition={knightPosition} moveKnight={moveKnight} />
    )
}

export default Game;