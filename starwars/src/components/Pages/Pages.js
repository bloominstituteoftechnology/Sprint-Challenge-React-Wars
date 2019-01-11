import React from 'react';
import './Pages.css'

const Pages = (props) => {
    return(
        <div className="pages">
            <button onClick={(e) => props.previous(e)}>Previous</button>
            <button onClick={(e) => props.next(e)}>Next</button>
        </div>
    )
}

export default Pages;