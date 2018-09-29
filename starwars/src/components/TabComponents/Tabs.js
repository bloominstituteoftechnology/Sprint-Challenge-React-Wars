import React from 'react';
import Tab from './Tab';
// Display a list of tabs that hold the character's names.

const Tabs = (props) => {
    // Props:
    // - names: Array of character names
    return (
        <div>Tabs.js
            {props.names.map( charName => {
                return (
                    <Tab name={charName} />
                );
            })}
        </div>
    );
};

export default Tabs;