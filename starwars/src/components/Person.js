import React from 'react';

function Person (props) {
    console.log("PERSON:", props.person)
    return (
        <div>
            <p>{props.person.name}</p>
        </div>
    )
}

export default Person;