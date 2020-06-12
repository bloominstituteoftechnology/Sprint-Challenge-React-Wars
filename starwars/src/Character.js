import React, {useState} from 'react'
import CC from './CC'




const Character = props => {
    const [data, setData] = useState(props)
    // console.log(props)
    // console.log(data)
    // console.log(props.name)
    // console.log(data.name)
    return(
        <CC>
            <h1>{props.props.name}</h1>
            <p>Gender: {props.props.gender}</p>
            <p>Birth Year: {props.props.birth_year}</p>
            <p>Height: {props.props.height}</p>
            <p>Mass: {props.props.mass}</p>
        </CC>
    )
}


export default Character