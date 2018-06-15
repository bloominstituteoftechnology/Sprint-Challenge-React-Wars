import React from 'react';

const Button = (props) => {
    console.log('button data: ', props)
    return (
        <div className='buttonsArea'> 
            <button onClick={props.onclickPropPrev}>Previous Page</button>
            <button onClick={props.onclickProp}>Next Page</button>
        </div>
    )
}

export default Button;