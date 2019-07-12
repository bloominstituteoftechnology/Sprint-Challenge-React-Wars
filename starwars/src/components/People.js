import React from 'react';
import Person from "./Person";

function People (props) {
    return (
        <div>
            {props.people.map(person => {
                return (
                    <div key = {Math.random()}>
                        <Person person = {person}/>
                    </div>
                )
            })}
        </div>
    )
}

export default People;