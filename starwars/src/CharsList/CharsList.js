import React from 'react';
import './CharsList.css';

const CharsList = props => {
    return (
        <div>
            {props.chars.map(char => {
                return (
                    <div>
                        {char.name}
                    </div>
                )
            })}
            {/* {console.log(props.chars)} */}
        </div>
    )
}

export default CharsList;