import React from 'react';

const Card = props => {
    return(
        <div>
            {props.starwarsChars.map((item) => {
                return (
                    <h1>
                        {item.name}
                    </h1>
                )
            })}
        </div>
    );
}

 
export default Card;