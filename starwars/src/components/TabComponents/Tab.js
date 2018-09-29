import React from 'react';
import './Tab.css';
// Displays a clickable tab to pull up more information

const Tab = (props) => {
    // Props:
    // - name: character name
    return (
        <div className='tab'>{props.name}</div>
    );
};

export default Tab;