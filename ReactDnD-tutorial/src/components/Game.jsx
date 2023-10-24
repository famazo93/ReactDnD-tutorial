import Board from './Board';
import { useState } from 'react';

function Game() {
    const [knightPosition, setKnightPosition] = useState([0,0]);

    const moveKnight = (toX, toY) => {
        setKnightPosition(() => [toX, toY]);
    }

    return (
        <Board knightPosition={knightPosition} moveKnight={moveKnight} />
    )
}

export default Game;