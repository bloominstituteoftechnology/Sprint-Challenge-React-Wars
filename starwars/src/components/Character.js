import React from 'react';

const Character = props => {
    return (
    <div>
        { JSON.stringify(props.mychar, null, 2) }
    </div>
    );
}

export default Character;