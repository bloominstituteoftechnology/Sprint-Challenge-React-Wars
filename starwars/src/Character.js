import React, {useState} from 'react'




const Character = props => {
    const [data, setData] = useState(props)
    console.log(props)
    console.log(data)
    console.log(props.name)
    return(
        <div>
            
        </div>
    )
}


export default Character