import React from 'react';

const Panel = props => {
    return (
        <div>
            {props.stuff.map(k => <div>{k.gender}</div>)}
        </div>
    )};


export default Panel;