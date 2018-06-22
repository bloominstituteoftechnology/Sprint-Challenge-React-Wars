import React from 'react';
import './StarWars.css';

const Counter = props => {
    return (
        <div>
            <form className="counter">
            <h4> # of Characters in Database </h4>
            <button onClick={props.showCount}> Show </button>
            <input
            type="text"
            value={props.value}
            placeholder="????"
            />
            </form>
            </div>
    );
};

export default Counter;