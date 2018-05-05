import React from 'react';
const Paginator = ({fetchChars, next, previous}) => {
    return <div> {previous === null ? null:
        <button onClick={() =>fetchChars(previous)}>Previous</button>
    } {next === null? null:
        <button onClick={() =>fetchChars(next)}>Next</button>
    }
    </div>
}

export default Paginator;