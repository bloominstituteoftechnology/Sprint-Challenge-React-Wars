import React from 'react';
import SWCard from './SWCard';
import './SWPeopleList.css';

const SWPeopleList = props => {
    return (
        <div className="row">
            {props.people.map(person => {
                return <SWCard person={person} />
            })}
        </div>    
    );
};

export default SWPeopleList;