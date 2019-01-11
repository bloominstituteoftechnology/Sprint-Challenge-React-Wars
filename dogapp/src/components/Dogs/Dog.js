import React from 'react';

const Dog = props => {
    return(
        <div className="dog">
            <h1>{props.dogName}</h1>
            <div className="attributes">
                <h2>Attributes:</h2>
                {props.dog.map(attribute => {
                    console.log(props.dog.length)
                    if(props.dog.length >= 1){
                        return <p>{attribute}</p>
                    }
                    else{
                        return <p>none</p>
                    }
                })}
            </div>
        </div>
    )
}

export default Dog