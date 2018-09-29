import React from 'react';
import './Tab.css';
// Displays a clickable tab to pull up more information

const Tab = (props) => {
    // Props:
    // - name: character name
    // - id: index
    // - clickHandler: handler for click selection
    // - selected: which item is selected

    const toggle = () => {
        props.clickHandler(props.id);
    };
    
    const sel = (props.selected === props.id) ? "tab selected" : "tab";

    return (
        <div className={sel} key={props.id} onClick={toggle}>{props.name}</div>
    );
};

export default Tab;