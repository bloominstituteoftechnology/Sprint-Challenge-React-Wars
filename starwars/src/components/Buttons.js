import React from 'react';

const Buttons = props => {
    return (
        <div className='btn-container'>
            <button className='btn' onClick={() => props.showCharacter(5)}>Show 5</button>
            <button className='btn' onClick={() => props.showCharacter(20)}>Show 20</button>
            <button className='btn' onClick={() => props.showCharacter(50)}>Show 50</button>
            <button className='btn' onClick={() => props.showCharacter(props.characterList.length)}>Show All</button>
        </div>
    );
};

export default Buttons;