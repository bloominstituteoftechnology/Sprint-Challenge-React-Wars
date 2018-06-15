import React from 'react';

const Endnotes = props => {
    return (
        <div className='endnotes'>
        {props.created}{props.edited}
        </div>
    )
}

export default Endnotes;