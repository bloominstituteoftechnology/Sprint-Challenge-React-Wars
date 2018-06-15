import React from 'react';

const Card = (props) => {
    let characterArr = Object.keys(props.character)

    return (
        <div key={props.index}>{characterArr.map(key => <p>{key.replace('_',' ').toUpperCase()}: {props.character[key]}</p>)}</div>
    );
}

export default Card;