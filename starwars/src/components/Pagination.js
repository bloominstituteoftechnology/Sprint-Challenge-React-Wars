import React from 'react';

const Pagination = (props) => {
 return (
    <div >
        <a onClick={props.handleClick} className="paginationButton">prev</a>
        <a onClick={props.handleClick} className="paginationButton">next</a>
    </div>
 )
}

export default Pagination;