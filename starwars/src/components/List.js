import React from 'react'
import Content from "./Content";


const List = (props) => {

    let values = Object.values(props.item);
    console.log(values)
    return (
        <div>
            {values.map(value => {
                if (Array.isArray(value) === false) {
                    return <Content content={value}/>
                } else {
                    value.map(subValue => {
                        console.log('testing')
                        return <Content content={subValue}/>
                    })
                }
            })}
        </div>
    )

};


export default List