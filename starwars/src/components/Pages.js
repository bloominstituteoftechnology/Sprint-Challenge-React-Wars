import React from 'react';

const Pages = props => {
    return (
        <div className="pages">
            <button>Previous</button>
            <button onClick={props.nextPage}>Next</button>
        </div>
    )
}

export default Pages;