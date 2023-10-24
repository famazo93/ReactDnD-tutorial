import BoardSquare from './BoardSquare';
import Knight from './Knight';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useEffect } from 'react';

function Board(props) {
    const { knightPosition, moveKnight } = props;

    useEffect(() => {
        console.log('Board rerendering');
    })

    const renderSquare = (i, [knightX, knightY]) => {
        const x = i % 8;
        const y = Math.floor(i / 8);
        const black = ((x + y) % 2 === 1);
        const isKnightHere = knightX === x && knightY === y;
        const piece = isKnightHere ? <Knight /> : null;

        return (
            <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
                <BoardSquare moveKnight={moveKnight} x={x} y={y} black={black}>{piece}</BoardSquare>
            </div>
        );
    }

    const squares = [];
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, knightPosition));
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                {squares}
            </div>
        </DndProvider>
    )
}

export default Board;