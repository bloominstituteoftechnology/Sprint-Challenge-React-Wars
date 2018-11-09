import React from 'react';
import './DataDisplay.css';
import Card from './Card';

function DataDisplay(props){
    const dataPresent = props.items.length>0;
    if (dataPresent) {
        return(
            <section className="data-section">
            {
                props.items.map(ele => {
                    return <Card item={ele}/>
                })
            }
            </section>
        );
    } else{
        return(
            <section>
                Waiting on data
            </section>
        );
    }
}

export default DataDisplay;