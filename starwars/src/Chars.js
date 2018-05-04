import React from 'react';

const Chars = ({ chars }) => {
    return (
        <div >
            <p>{chars.name} {chars.created}</p>
        </div>
    )
}

export default Chars;
