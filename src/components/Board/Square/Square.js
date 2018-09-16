import React from 'react';

import './Square.css';

const square = (props) => {
    const squareClasses = ["Square"];

    if(props.color === 'ligth')
        squareClasses.push("Ligth");
    else
        squareClasses.push("Dark");
        
    return (
        <div className={squareClasses.join(' ')} >
            {props.children ? props.children : null}
        </div>
    )    
}

export default square;