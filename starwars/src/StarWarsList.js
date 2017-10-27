import React from 'react';

const StarWarsList = (props) => {
    return (
        <div className="StarWarsList">
            {props.starwarsChars.map((starwarsDetail) => {
                return (
                    <div className="StarWarsList__Chars">
                        <h3>{starwarsDetail.name}</h3>
                    </div>
                );
            })}
        </div>
    );
}

export default StarWarsList;