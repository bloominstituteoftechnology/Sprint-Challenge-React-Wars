import React from 'react';

const Data = props => {
    console.log(props.char);
    return (
        <div className='data-list'>
            {props.char}
        </div>
    )
}

export default Data;