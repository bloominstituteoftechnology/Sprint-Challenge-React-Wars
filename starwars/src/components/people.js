import React, {useState} from 'react';


function People(props) {
    const [name, setName] = useState([]);
    console.log(props)
    return(
        <div>
            {props && props.name && props.name.results.map((name) => {
                return (<><h1>{name.name}</h1>
                        <h2>{name.gender}</h2></>)
            })}
        </div>
    )
}

export default People;