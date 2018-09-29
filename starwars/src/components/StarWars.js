import React from 'react';
import Tabs from './TabComponents/Tabs';
import Console from './ConsoleComponents/Console';

// Main display

const StarWars = (props) => {
    return (
        <div>
            StarWars.js
            - <Tabs />
            - <Console />
        </div>
    );
};

export default StarWars;