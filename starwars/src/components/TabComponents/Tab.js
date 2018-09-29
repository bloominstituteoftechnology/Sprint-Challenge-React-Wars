import React from 'react';
import './Tab.css';
// Displays a clickable tab to pull up more information

const Tab = (props) => {
    // Props:
    // - name: character name
    // - id: index
    return (
        <div className='tab' key={props.id}>{props.name}</div>
    );
};

export default Tab;