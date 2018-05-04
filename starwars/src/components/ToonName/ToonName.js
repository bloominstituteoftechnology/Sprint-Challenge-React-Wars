import React from 'react';
import './ToonName.css';

const ToonName = props => {
    return (
        <div>
            {props.toonName.name}
        </div>
    )
}
export default ToonName;