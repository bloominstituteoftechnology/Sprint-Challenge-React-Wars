import React from 'react';

const Person = (props) => {
    const people = props.data;
    console.log(people);
    return(
        <div>
            {
                people.map((char) => {
                    return (
                        <>
                        <h1 key={char}>{char.name}</h1>
                        </>
                    )
                })
            }
        </div>
    );
}

export default Person;