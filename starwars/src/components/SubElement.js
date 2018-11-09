import React from 'react';
import './Card.css';

function SubElement(props){
    console.log(props);
    return(
        <dl>
            <dt>{props.arrayName}</dt>
            {
                props.array.map(ele => {
                    return <dd>{ele}</dd>
                })
            }
        </dl>
    );
    
}
export default SubElement;
