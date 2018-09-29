import React from 'react';
import Tab from './Tab';
import './Tabs.css';
// Display a list of tabs that hold the character's names.

const Tabs = (props) => {
    // Props:
    // - names: Array of character names
    // - id: Index of character
    // - clickHandler: clickhandler to select info
    return (
        <div className='tabs'>
            {props.names.map( (charName, index) => {
                return (
                    <Tab name={charName} id={index} clickHandler={props.clickHandler}/>
                );
            })}
        </div>
    );
};

export default Tabs;