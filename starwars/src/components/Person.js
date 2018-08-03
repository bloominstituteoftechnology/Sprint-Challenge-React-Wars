import React from 'react';

const Person = props => {
    return (
        <div>
            <div>{props.attrib.name}</div>
            <div>{props.attrib.height}</div>
            <div>{props.attrib.gender}</div>
            <div>{props.attrib.eye_color}</div>
            <div>{props.attrib.hair_color}</div>
        </div>
    );
};

export default Person;