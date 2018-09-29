import React from 'react';
import Tabs from './TabComponents/Tabs';
import Console from './ConsoleComponents/Console';
import './StarWars.css';

// Main display

const StarWars = (props) => {
    // Props:
    // - charArray: main array of character information.
    // - selected: index of element to display
    // - clickHandler: handler for changing display based on tab selected
    return (
        // Pass name to Tabs
        <div className="mainDisplay">
            <Tabs 
                names={props.charArray.map(swChar => swChar.name)} 
                clickHandler={props.clickHandler}
                selected={props.selected}
            />
            <Console {...props.charArray[props.selected]} />
        </div>
    );
};

export default StarWars;