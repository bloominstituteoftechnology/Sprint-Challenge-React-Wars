import React from 'react';
import './Tab.css';
// Displays a clickable tab to pull up more information

const Tab = (props) => {
    // Props:
    // - name: character name
    // - id: index
    // - clickHandler: handler for click selection

    const toggle = () => {
        props.clickHandler(props.id);
    };
    
    return (
        <div className='tab' key={props.id} onClick={toggle}>{props.name}</div>
    );
};

export default Tab;