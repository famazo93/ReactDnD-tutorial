import React from 'react';

function Square(props) {
    const {black, children} = props;

    const fill = black ? "black" : "white";
    const stroke = black ? "white" : "black";
    
    return (
    <div 
        style={{ 
            backgroundColor: fill,
            border: `2px ${stroke} solid`,
            width: '12.5vw',
            height: '12.5vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
        {children}
    </div>)
}

export default Square;