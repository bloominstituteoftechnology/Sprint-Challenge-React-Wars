import React from 'react';

const StarwarsName = (props) => {
    return (
        <div>
            {props.starwarsChars.map((name, index) => {
                return (
                    <h1 key={index}>
                    {name.name}
                    </h1>
                    
                )
            })}
            {/* <ul>
                {props.starwarsChars.map((character, i) => {
                    return <li key = {i=1}>{character}</li>
                })}
            </ul> */}
        </div>
    )
}
export default StarwarsName;