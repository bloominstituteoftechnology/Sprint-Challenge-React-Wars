import React from 'react';
const DataItem = props => {
    if (props.item !== 'n/a') {
        return <p>{props.item}</p>;
    } else {
        return null;
    }
};

export default DataItem;
