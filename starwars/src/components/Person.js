import React from 'react';

const Person = (props) => {
    console.log(props);
    return(
        <div>
            <h2>{props.data.results + "0".name}</h2>
        </div>
    );
}

export default Person;