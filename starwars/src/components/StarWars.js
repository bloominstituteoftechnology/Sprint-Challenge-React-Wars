import React from 'react';
import Tabs from './TabComponents/Tabs';
import Console from './ConsoleComponents/Console';

// Main display

const StarWars = (props) => {
    // Props:
    // - charArray: main array of character information.
    return (
        // Pass name to Tabs
        <div>
            StarWars.js
            <Tabs names={props.charArray.map(swChar => swChar.name)} />
            - <Console />
        </div>
    );
};

export default StarWars;