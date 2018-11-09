import React from 'react';

const AttributeList = props => {
    const listItem = item => {
        {
            return item.map((item, index) => <li key={index}>{item}</li>);
        }
    };
    if (props.item.length > 1) {
        if (props.listStyle == 'ol') {
            return <ol>{listItem(props.item)}</ol>;
        } else {
            return <ul>{listItem(props.item)}</ul>;
        }
    } else if (props.item.length === 1) {
        return <p>{props.item}</p>;
    } else {
        return null;
    }
};

export default AttributeList;
