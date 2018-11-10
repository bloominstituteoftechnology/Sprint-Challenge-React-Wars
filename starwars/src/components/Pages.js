import React from 'react';

const Pages = props => {
    return (
        <div className="pages">
            <button onClick={props.previousPage}>Previous</button>
            <button onClick={props.nextPage}>Next</button>
        </div>
    )
}

export default Pages;